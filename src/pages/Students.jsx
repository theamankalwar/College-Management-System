import { useState, useEffect } from "react";
import Table from "../components/Table";
import Button from "../components/Button";
import Modal from "../components/Modal";
import StudentForm from "../components/StudentForm";
import { studentsAPI } from "../services/api";
import { useAuth } from "../context/AuthContext";

const Students = () => {
  const { user } = useAuth();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  const columns = ["Name", "Roll Number", "Course", "Email", "Status"];

  // Check if user can edit (admin or teacher)
  const canEdit = user?.role === "admin" || user?.role === "teacher";

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const data = await studentsAPI.getAll();
      setStudents(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch students. Make sure the backend is running.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setEditingStudent(null);
    setIsModalOpen(true);
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
    setIsModalOpen(true);
  };

  const handleSubmit = async (formData) => {
    try {
      if (editingStudent) {
        await studentsAPI.update(editingStudent._id, formData);
      } else {
        await studentsAPI.create(formData);
      }
      setIsModalOpen(false);
      fetchStudents();
    } catch (err) {
      alert("Failed to save student");
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await studentsAPI.delete(id);
        fetchStudents();
      } catch (err) {
        alert("Failed to delete student");
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
        <h2 className="text-2xl font-bold text-gray-800">Students</h2>
        {canEdit && <Button onClick={handleAdd}>Add New Student</Button>}
      </div>

      <Table
        columns={columns}
        data={students}
        onDelete={canEdit ? handleDelete : null}
        onEdit={canEdit ? handleEdit : null}
      />

      {canEdit && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={editingStudent ? "Edit Student" : "Add New Student"}
        >
          <StudentForm
            student={editingStudent}
            onSubmit={handleSubmit}
            onCancel={() => setIsModalOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
};

export default Students;
