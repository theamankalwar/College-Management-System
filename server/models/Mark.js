import mongoose from "mongoose";

const markSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    marks: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    grade: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Mark", markSchema);
