import { useState, useEffect } from "react";
import Table from "../components/Table";
import Button from "../components/Button";
import Modal from "../components/Modal";
import TeacherForm from "../components/TeacherForm";
import { teachersAPI } from "../services/api";
import { useAuth } from "../context/AuthContext";

const Teachers = () => {
  const { user } = useAuth();
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState(null);

  const columns = ["Name", "Department", "Email", "Phone"];

  // Only admin can edit teachers
  const canEdit = user?.role === "admin";

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      setLoading(true);
      const data = await teachersAPI.getAll();
      setTeachers(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch teachers. Make sure the backend is running.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setEditingTeacher(null);
    setIsModalOpen(true);
  };

  const handleEdit = (teacher) => {
    setEditingTeacher(teacher);
    setIsModalOpen(true);
  };

  const handleSubmit = async (formData) => {
    try {
      if (editingTeacher) {
        await teachersAPI.update(editingTeacher._id, formData);
      } else {
        await teachersAPI.create(formData);
      }
      setIsModalOpen(false);
      fetchTeachers();
    } catch (err) {
      alert("Failed to save teacher");
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this teacher?")) {
      try {
        await teachersAPI.delete(id);
        fetchTeachers();
      } catch (err) {
        alert("Failed to delete teacher");
        console.error(err);
      }
    }
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error)
    return <div className="text-center py-8 text-red-600">{error}</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Teachers</h2>
        {canEdit && <Button onClick={handleAdd}>Add New Teacher</Button>}
      </div>

      <Table
        columns={columns}
        data={teachers}
        onDelete={canEdit ? handleDelete : null}
        onEdit={canEdit ? handleEdit : null}
      />

      {canEdit && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={editingTeacher ? "Edit Teacher" : "Add New Teacher"}
        >
          <TeacherForm
            teacher={editingTeacher}
            onSubmit={handleSubmit}
            onCancel={() => setIsModalOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
};

export default Teachers;
