import { useState, useEffect } from "react";
import Table from "../components/Table";
import Button from "../components/Button";
import Modal from "../components/Modal";
import MarkForm from "../components/MarkForm";
import { marksAPI } from "../services/api";
import { useAuth } from "../context/AuthContext";

const Marks = () => {
  const { user } = useAuth();
  const [marks, setMarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMark, setEditingMark] = useState(null);

  const columns = ["Student Name", "Subject", "Marks", "Grade"];

  // Admin and teacher can edit, student can only view
  const canEdit = user?.role === "admin" || user?.role === "teacher";

  useEffect(() => {
    fetchMarks();
  }, []);

  const fetchMarks = async () => {
    try {
      setLoading(true);
      const data = await marksAPI.getAll();
      setMarks(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch marks. Make sure the backend is running.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setEditingMark(null);
    setIsModalOpen(true);
  };

  const handleEdit = (mark) => {
    setEditingMark(mark);
    setIsModalOpen(true);
  };

  const handleSubmit = async (formData) => {
    try {
      if (editingMark) {
        await marksAPI.update(editingMark._id, formData);
      } else {
        await marksAPI.create(formData);
      }
      setIsModalOpen(false);
      fetchMarks();
    } catch (err) {
      alert("Failed to save mark");
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this mark record?")) {
      try {
        await marksAPI.delete(id);
        fetchMarks();
      } catch (err) {
        alert("Failed to delete mark record");
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
        <h2 className="text-2xl font-bold text-gray-800">
          {user?.role === "student" ? "My Marks" : "Marks"}
        </h2>
        {canEdit && <Button onClick={handleAdd}>Add Marks</Button>}
      </div>

      <div className="mb-6 flex gap-4">
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>All Subjects</option>
          <option>Data Structures</option>
          <option>Algorithms</option>
          <option>Database Systems</option>
          <option>Circuit Theory</option>
          <option>Thermodynamics</option>
        </select>

        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>All Semesters</option>
          <option>Semester 1</option>
          <option>Semester 2</option>
          <option>Semester 3</option>
          <option>Semester 4</option>
          <option>Semester 5</option>
        </select>
      </div>

      <Table
        columns={columns}
        data={marks}
        onDelete={canEdit ? handleDelete : null}
        onEdit={canEdit ? handleEdit : null}
      />

      {canEdit && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={editingMark ? "Edit Mark" : "Add Mark"}
        >
          <MarkForm
            mark={editingMark}
            onSubmit={handleSubmit}
            onCancel={() => setIsModalOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
};

export default Marks;
