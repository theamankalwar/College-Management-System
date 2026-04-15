import { useState, useEffect } from "react";
import FormInput from "./FormInput";
import Button from "./Button";

const StudentForm = ({ student, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    course: "",
    email: "",
    status: "Active",
  });

  useEffect(() => {
    if (student) {
      setFormData(student);
    }
  }, [student]);

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
        label="Name"
        name="name"
        value={formData.name}
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
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter email"
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
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <div className="flex justify-end gap-3 mt-6">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          {student ? "Update" : "Add"} Student
        </Button>
      </div>
    </form>
  );
};

export default StudentForm;
