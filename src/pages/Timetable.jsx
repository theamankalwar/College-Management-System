import { useState, useEffect } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import TimetableForm from "../components/TimetableForm";
import { timetableAPI } from "../services/api";

const Timetable = () => {
  const [timetable, setTimetable] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEntry, setEditingEntry] = useState(null);

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const timeSlots = ["9:00 AM", "11:00 AM"];

  useEffect(() => {
    fetchTimetable();
  }, []);

  const fetchTimetable = async () => {
    try {
      setLoading(true);
      const data = await timetableAPI.getAll();
      setTimetable(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch timetable. Make sure the backend is running.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setEditingEntry(null);
    setIsModalOpen(true);
  };

  const handleEdit = (entry) => {
    setEditingEntry(entry);
    setIsModalOpen(true);
  };

  const handleSubmit = async (formData) => {
    try {
      if (editingEntry) {
        await timetableAPI.update(editingEntry._id, formData);
      } else {
        await timetableAPI.create(formData);
      }
      setIsModalOpen(false);
      fetchTimetable();
    } catch (err) {
      alert("Failed to save timetable entry");
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this class?")) {
      try {
        await timetableAPI.delete(id);
        fetchTimetable();
      } catch (err) {
        alert("Failed to delete timetable entry");
        console.error(err);
      }
    }
  };

  const getClassForSlot = (day, time) => {
    return timetable.find((item) => item.day === day && item.time === time);
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error)
    return <div className="text-center py-8 text-red-600">{error}</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Timetable</h2>
        <Button onClick={handleAdd}>Add Class</Button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                {days.map((day) => (
                  <th
                    key={day}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {timeSlots.map((time) => (
                <tr key={time}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {time}
                  </td>
                  {days.map((day) => {
                    const classInfo = getClassForSlot(day, time);
                    return (
                      <td key={`${day}-${time}`} className="px-6 py-4">
                        {classInfo ? (
                          <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500 relative group">
                            <p className="text-sm font-semibold text-gray-800">
                              {classInfo.subject}
                            </p>
                            <p className="text-xs text-gray-600 mt-1">
                              {classInfo.teacher}
                            </p>
                            <div className="absolute top-2 right-2 hidden group-hover:flex gap-2">
                              <button
                                onClick={() => handleEdit(classInfo)}
                                className="text-blue-600 hover:text-blue-800 text-xs"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDelete(classInfo._id)}
                                className="text-red-600 hover:text-red-800 text-xs"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="bg-gray-50 p-3 rounded-lg text-center">
                            <p className="text-xs text-gray-400">No Class</p>
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingEntry ? "Edit Class" : "Add New Class"}
      >
        <TimetableForm
          timetable={editingEntry}
          onSubmit={handleSubmit}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default Timetable;
