import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Simple password check (in production, use bcrypt)
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Return user data (without password)
    const userData = {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    };

    res.json({ user: userData, message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Register
router.post("/register", async (req, res) => {
  try {
    const { username, password, email, role } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user (in production, hash password with bcrypt)
    const user = new User({
      username,
      password, // In production: await bcrypt.hash(password, 10)
      email,
      role: role || "student",
    });

    await user.save();

    const userData = {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    };

    res
      .status(201)
      .json({ user: userData, message: "Registration successful" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get current user (for session validation)
router.get("/me", async (req, res) => {
  try {
    // In production, verify JWT token here
    const userId = req.headers["user-id"];

    if (!userId) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
