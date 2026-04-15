import express from "express";
import Timetable from "../models/Timetable.js";

const router = express.Router();

// Get all timetable entries
router.get("/", async (req, res) => {
  try {
    const timetable = await Timetable.find();
    res.json(timetable);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single timetable entry
router.get("/:id", async (req, res) => {
  try {
    const entry = await Timetable.findById(req.params.id);
    if (!entry)
      return res.status(404).json({ message: "Timetable entry not found" });
    res.json(entry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create timetable entry
router.post("/", async (req, res) => {
  const entry = new Timetable(req.body);
  try {
    const newEntry = await entry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update timetable entry
router.put("/:id", async (req, res) => {
  try {
    const entry = await Timetable.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!entry)
      return res.status(404).json({ message: "Timetable entry not found" });
    res.json(entry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete timetable entry
router.delete("/:id", async (req, res) => {
  try {
    const entry = await Timetable.findByIdAndDelete(req.params.id);
    if (!entry)
      return res.status(404).json({ message: "Timetable entry not found" });
    res.json({ message: "Timetable entry deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
