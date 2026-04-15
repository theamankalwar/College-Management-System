import { useState, useEffect } from "react";
import FormInput from "./FormInput";
import Button from "./Button";

const TeacherForm = ({ teacher, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (teacher) {
      setFormData(teacher);
    }
  }, [teacher]);

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
        placeholder="Enter teacher name"
        required
      />

      <FormInput
        label="Department"
        name="department"
        value={formData.department}
        onChange={handleChange}
        placeholder="Enter department"
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

      <FormInput
        label="Phone"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter phone number"
        required
      />

      <div className="flex justify-end gap-3 mt-6">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          {teacher ? "Update" : "Add"} Teacher
        </Button>
      </div>
    </form>
  );
};

export default TeacherForm;
