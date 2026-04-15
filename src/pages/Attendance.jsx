import { useState, useEffect } from "react";
import Table from "../components/Table";
import Button from "../components/Button";
import Modal from "../components/Modal";
import AttendanceForm from "../components/AttendanceForm";
import { attendanceAPI } from "../services/api";
import { useAuth } from "../context/AuthContext";

const Attendance = () => {
  const { user } = useAuth();
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAttendance, setEditingAttendance] = useState(null);

  const columns = [
    "Student Name",
    "Roll Number",
    "Course",
    "Percentage",
    "Status",
  ];

  // Admin and teacher can edit, student can only view
  const canEdit = user?.role === "admin" || user?.role === "teacher";

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    try {
      setLoading(true);
      const data = await attendanceAPI.getAll();
      setAttendance(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch attendance. Make sure the backend is running.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setEditingAttendance(null);
    setIsModalOpen(true);
  };

  const handleEdit = (record) => {
    setEditingAttendance(record);
    setIsModalOpen(true);
  };

  const handleSubmit = async (formData) => {
    try {
      if (editingAttendance) {
        await attendanceAPI.update(editingAttendance._id, formData);
      } else {
        await attendanceAPI.create(formData);
      }
      setIsModalOpen(false);
      fetchAttendance();
    } catch (err) {
      alert("Failed to save attendance");
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      try {
        await attendanceAPI.delete(id);
        fetchAttendance();
      } catch (err) {
        alert("Failed to delete attendance record");
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
          {user?.role === "student" ? "My Attendance" : "Attendance"}
        </h2>
        {canEdit && <Button onClick={handleAdd}>Mark Attendance</Button>}
      </div>

      <div className="mb-6 flex gap-4">
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>All Courses</option>
          <option>Computer Science</option>
          <option>Electrical Engineering</option>
          <option>Mechanical Engineering</option>
        </select>

        <input
          type="date"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <Table
        columns={columns}
        data={attendance}
        onDelete={canEdit ? handleDelete : null}
        onEdit={canEdit ? handleEdit : null}
      />

      {canEdit && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={editingAttendance ? "Edit Attendance" : "Mark Attendance"}
        >
          <AttendanceForm
            attendance={editingAttendance}
            onSubmit={handleSubmit}
            onCancel={() => setIsModalOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
};

export default Attendance;
