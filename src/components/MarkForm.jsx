import { useState, useEffect } from "react";
import FormInput from "./FormInput";
import Button from "./Button";

const MarkForm = ({ mark, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    studentName: "",
    subject: "",
    marks: "",
    grade: "",
  });

  useEffect(() => {
    if (mark) {
      setFormData(mark);
    }
  }, [mark]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedData = { ...formData, [name]: value };

    // Auto-calculate grade based on marks
    if (name === "marks") {
      const marksValue = parseInt(value);
      if (marksValue >= 90) updatedData.grade = "A+";
      else if (marksValue >= 80) updatedData.grade = "A";
      else if (marksValue >= 70) updatedData.grade = "B+";
      else if (marksValue >= 60) updatedData.grade = "B";
      else if (marksValue >= 50) updatedData.grade = "C";
      else updatedData.grade = "F";
    }

    setFormData(updatedData);
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
        label="Subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Enter subject"
        required
      />

      <FormInput
        label="Marks"
        type="number"
        name="marks"
        value={formData.marks}
        onChange={handleChange}
        placeholder="Enter marks (0-100)"
        required
      />

      <FormInput
        label="Grade"
        name="grade"
        value={formData.grade}
        onChange={handleChange}
        placeholder="Grade (auto-calculated)"
        required
      />

      <div className="flex justify-end gap-3 mt-6">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          {mark ? "Update" : "Add"} Mark
        </Button>
      </div>
    </form>
  );
};

export default MarkForm;
