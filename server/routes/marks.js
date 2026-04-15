import express from "express";
import Mark from "../models/Mark.js";

const router = express.Router();

// Get all marks
router.get("/", async (req, res) => {
  try {
    const marks = await Mark.find();
    res.json(marks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single mark record
router.get("/:id", async (req, res) => {
  try {
    const mark = await Mark.findById(req.params.id);
    if (!mark)
      return res.status(404).json({ message: "Mark record not found" });
    res.json(mark);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create mark record
router.post("/", async (req, res) => {
  const mark = new Mark(req.body);
  try {
    const newMark = await mark.save();
    res.status(201).json(newMark);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update mark record
router.put("/:id", async (req, res) => {
  try {
    const mark = await Mark.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!mark)
      return res.status(404).json({ message: "Mark record not found" });
    res.json(mark);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete mark record
router.delete("/:id", async (req, res) => {
  try {
    const mark = await Mark.findByIdAndDelete(req.params.id);
    if (!mark)
      return res.status(404).json({ message: "Mark record not found" });
    res.json({ message: "Mark record deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
