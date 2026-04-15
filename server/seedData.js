import mongoose from "mongoose";
import dotenv from "dotenv";
import Student from "./models/Student.js";
import Teacher from "./models/Teacher.js";
import Attendance from "./models/Attendance.js";
import Mark from "./models/Mark.js";
import Timetable from "./models/Timetable.js";
import User from "./models/User.js";

dotenv.config();

const students = [
  {
    name: "John Doe",
    rollNumber: "CS001",
    course: "Computer Science",
    email: "john@example.com",
    status: "Active",
  },
  {
    name: "Jane Smith",
    rollNumber: "CS002",
    course: "Computer Science",
    email: "jane@example.com",
    status: "Active",
  },
  {
    name: "Mike Johnson",
    rollNumber: "EE001",
    course: "Electrical Engineering",
    email: "mike@example.com",
    status: "Active",
  },
  {
    name: "Sarah Williams",
    rollNumber: "ME001",
    course: "Mechanical Engineering",
    email: "sarah@example.com",
    status: "Inactive",
  },
  {
    name: "David Brown",
    rollNumber: "CS003",
    course: "Computer Science",
    email: "david@example.com",
    status: "Active",
  },
];

const teachers = [
  {
    name: "Dr. Robert Smith",
    department: "Computer Science",
    email: "robert@example.com",
    phone: "+1234567890",
  },
  {
    name: "Prof. Emily Davis",
    department: "Mathematics",
    email: "emily@example.com",
    phone: "+1234567891",
  },
  {
    name: "Dr. Michael Wilson",
    department: "Physics",
    email: "michael@example.com",
    phone: "+1234567892",
  },
  {
    name: "Prof. Lisa Anderson",
    department: "Chemistry",
    email: "lisa@example.com",
    phone: "+1234567893",
  },
  {
    name: "Dr. James Taylor",
    department: "Electrical Engineering",
    email: "james@example.com",
    phone: "+1234567894",
  },
];

const attendance = [
  {
    studentName: "John Doe",
    rollNumber: "CS001",
    course: "Computer Science",
    percentage: 92,
    status: "Present",
  },
  {
    studentName: "Jane Smith",
    rollNumber: "CS002",
    course: "Computer Science",
    percentage: 88,
    status: "Present",
  },
  {
    studentName: "Mike Johnson",
    rollNumber: "EE001",
    course: "Electrical Engineering",
    percentage: 75,
    status: "Absent",
  },
  {
    studentName: "Sarah Williams",
    rollNumber: "ME001",
    course: "Mechanical Engineering",
    percentage: 95,
    status: "Present",
  },
  {
    studentName: "David Brown",
    rollNumber: "CS003",
    course: "Computer Science",
    percentage: 82,
    status: "Present",
  },
];

const marks = [
  {
    studentName: "John Doe",
    subject: "Data Structures",
    marks: 85,
    grade: "A",
  },
  {
    studentName: "Jane Smith",
    subject: "Algorithms",
    marks: 92,
    grade: "A+",
  },
  {
    studentName: "Mike Johnson",
    subject: "Circuit Theory",
    marks: 78,
    grade: "B+",
  },
  {
    studentName: "Sarah Williams",
    subject: "Thermodynamics",
    marks: 88,
    grade: "A",
  },
  {
    studentName: "David Brown",
    subject: "Database Systems",
    marks: 90,
    grade: "A+",
  },
];

const timetable = [
  {
    day: "Monday",
    time: "9:00 AM",
    subject: "Data Structures",
    teacher: "Dr. Robert Smith",
  },
  {
    day: "Monday",
    time: "11:00 AM",
    subject: "Mathematics",
    teacher: "Prof. Emily Davis",
  },
  {
    day: "Tuesday",
    time: "9:00 AM",
    subject: "Physics",
    teacher: "Dr. Michael Wilson",
  },
  {
    day: "Tuesday",
    time: "11:00 AM",
    subject: "Chemistry",
    teacher: "Prof. Lisa Anderson",
  },
  {
    day: "Wednesday",
    time: "9:00 AM",
    subject: "Algorithms",
    teacher: "Dr. Robert Smith",
  },
  {
    day: "Wednesday",
    time: "11:00 AM",
    subject: "Circuit Theory",
    teacher: "Dr. James Taylor",
  },
  {
    day: "Thursday",
    time: "9:00 AM",
    subject: "Database Systems",
    teacher: "Dr. Robert Smith",
  },
  {
    day: "Thursday",
    time: "11:00 AM",
    subject: "Mathematics",
    teacher: "Prof. Emily Davis",
  },
  {
    day: "Friday",
    time: "9:00 AM",
    subject: "Thermodynamics",
    teacher: "Prof. Lisa Anderson",
  },
  {
    day: "Friday",
    time: "11:00 AM",
    subject: "Physics Lab",
    teacher: "Dr. Michael Wilson",
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    // Clear existing data
    await Student.deleteMany({});
    await Teacher.deleteMany({});
    await Attendance.deleteMany({});
    await Mark.deleteMany({});
    await Timetable.deleteMany({});
    await User.deleteMany({});
    console.log("Cleared existing data");

    // Insert new data
    await Student.insertMany(students);
    await Teacher.insertMany(teachers);
    await Attendance.insertMany(attendance);
    await Mark.insertMany(marks);
    await Timetable.insertMany(timetable);

    // Create default users
    await User.create([
      {
        username: "admin",
        password: "admin123",
        email: "admin@college.com",
        role: "admin",
      },
      {
        username: "teacher",
        password: "teacher123",
        email: "teacher@college.com",
        role: "teacher",
      },
      {
        username: "student",
        password: "student123",
        email: "student@college.com",
        role: "student",
      },
    ]);

    console.log("Sample data inserted successfully!");
    console.log("\nDefault Users Created:");
    console.log("Admin - username: admin, password: admin123");
    console.log("Teacher - username: teacher, password: teacher123");
    console.log("Student - username: student, password: student123");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
