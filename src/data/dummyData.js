export const students = [
  {
    id: 1,
    name: "John Doe",
    rollNumber: "CS001",
    course: "Computer Science",
    email: "john@example.com",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    rollNumber: "CS002",
    course: "Computer Science",
    email: "jane@example.com",
    status: "Active",
  },
  {
    id: 3,
    name: "Mike Johnson",
    rollNumber: "EE001",
    course: "Electrical Engineering",
    email: "mike@example.com",
    status: "Active",
  },
  {
    id: 4,
    name: "Sarah Williams",
    rollNumber: "ME001",
    course: "Mechanical Engineering",
    email: "sarah@example.com",
    status: "Inactive",
  },
  {
    id: 5,
    name: "David Brown",
    rollNumber: "CS003",
    course: "Computer Science",
    email: "david@example.com",
    status: "Active",
  },
];

export const teachers = [
  {
    id: 1,
    name: "Dr. Robert Smith",
    department: "Computer Science",
    email: "robert@example.com",
    phone: "+1234567890",
  },
  {
    id: 2,
    name: "Prof. Emily Davis",
    department: "Mathematics",
    email: "emily@example.com",
    phone: "+1234567891",
  },
  {
    id: 3,
    name: "Dr. Michael Wilson",
    department: "Physics",
    email: "michael@example.com",
    phone: "+1234567892",
  },
  {
    id: 4,
    name: "Prof. Lisa Anderson",
    department: "Chemistry",
    email: "lisa@example.com",
    phone: "+1234567893",
  },
  {
    id: 5,
    name: "Dr. James Taylor",
    department: "Electrical Engineering",
    email: "james@example.com",
    phone: "+1234567894",
  },
];

export const attendance = [
  {
    id: 1,
    studentName: "John Doe",
    rollNumber: "CS001",
    course: "Computer Science",
    percentage: 92,
    status: "Present",
  },
  {
    id: 2,
    studentName: "Jane Smith",
    rollNumber: "CS002",
    course: "Computer Science",
    percentage: 88,
    status: "Present",
  },
  {
    id: 3,
    studentName: "Mike Johnson",
    rollNumber: "EE001",
    course: "Electrical Engineering",
    percentage: 75,
    status: "Absent",
  },
  {
    id: 4,
    studentName: "Sarah Williams",
    rollNumber: "ME001",
    course: "Mechanical Engineering",
    percentage: 95,
    status: "Present",
  },
  {
    id: 5,
    studentName: "David Brown",
    rollNumber: "CS003",
    course: "Computer Science",
    percentage: 82,
    status: "Present",
  },
];

export const marks = [
  {
    id: 1,
    studentName: "John Doe",
    subject: "Data Structures",
    marks: 85,
    grade: "A",
  },
  {
    id: 2,
    studentName: "Jane Smith",
    subject: "Algorithms",
    marks: 92,
    grade: "A+",
  },
  {
    id: 3,
    studentName: "Mike Johnson",
    subject: "Circuit Theory",
    marks: 78,
    grade: "B+",
  },
  {
    id: 4,
    studentName: "Sarah Williams",
    subject: "Thermodynamics",
    marks: 88,
    grade: "A",
  },
  {
    id: 5,
    studentName: "David Brown",
    subject: "Database Systems",
    marks: 90,
    grade: "A+",
  },
];

export const timetable = [
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

export const dashboardStats = {
  totalStudents: 1250,
  totalTeachers: 85,
  totalCourses: 42,
  attendancePercentage: 87.5,
};
