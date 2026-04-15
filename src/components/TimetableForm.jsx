import { useState, useEffect } from "react";
import FormInput from "./FormInput";
import Button from "./Button";

const TimetableForm = ({ timetable, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    day: "Monday",
    time: "",
    subject: "",
    teacher: "",
  });

  useEffect(() => {
    if (timetable) {
      setFormData(timetable);
    }
  }, [timetable]);

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
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Day <span className="text-red-500 ml-1">*</span>
        </label>
        <select
          name="day"
          value={formData.day}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
      </div>

      <FormInput
        label="Time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        placeholder="e.g., 9:00 AM"
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
        label="Teacher"
        name="teacher"
        value={formData.teacher}
        onChange={handleChange}
        placeholder="Enter teacher name"
        required
      />

      <div className="flex justify-end gap-3 mt-6">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          {timetable ? "Update" : "Add"} Class
        </Button>
      </div>
    </form>
  );
};

export default TimetableForm;
