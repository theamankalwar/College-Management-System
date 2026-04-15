import { useState, useEffect } from "react";
import FormInput from "./FormInput";
import Button from "./Button";

const AttendanceForm = ({ attendance, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    studentName: "",
    rollNumber: "",
    course: "",
    percentage: "",
    status: "Present",
  });

  useEffect(() => {
    if (attendance) {
      setFormData(attendance);
    }
  }, [attendance]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        label="Student Name"
        name="studentName"
        value={formData.studentName}
        onChange={handleChange}
        placeholder="Enter student name"
        required
      />

      <FormInput
        label="Roll Number"
        name="rollNumber"
        value={formData.rollNumber}
        onChange={handleChange}
        placeholder="Enter roll number"
        required
      />

      <FormInput
        label="Course"
        name="course"
        value={formData.course}
        onChange={handleChange}
        placeholder="Enter course"
        required
      />

      <FormInput
        label="Attendance Percentage"
        type="number"
        name="percentage"
        value={formData.percentage}
        onChange={handleChange}
        placeholder="Enter percentage (0-100)"
        required
      />

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Status <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
      </div>

      <div className="flex justify-end gap-3 mt-6">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          {attendance ? "Update" : "Add"} Attendance
        </Button>
      </div>
    </form>
  );
};

export default AttendanceForm;
