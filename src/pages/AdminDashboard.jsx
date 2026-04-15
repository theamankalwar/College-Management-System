import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardCard from "../components/DashboardCard";
import { studentsAPI, teachersAPI, attendanceAPI } from "../services/api";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalTeachers: 0,
    totalCourses: 0,
    attendancePercentage: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const [students, teachers, attendance] = await Promise.all([
        studentsAPI.getAll(),
        teachersAPI.getAll(),
        attendanceAPI.getAll(),
      ]);

      // Calculate unique courses
      const uniqueCourses = [...new Set(students.map((s) => s.course))].length;

      // Calculate average attendance percentage
      const avgAttendance =
        attendance.length > 0
          ? attendance.reduce((sum, a) => sum + a.percentage, 0) /
            attendance.length
          : 0;

      setStats({
        totalStudents: students.length,
        totalTeachers: teachers.length,
        totalCourses: uniqueCourses,
        attendancePercentage: avgAttendance.toFixed(1),
      });
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading dashboard...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Admin Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard
          title="Total Students"
          value={stats.totalStudents}
          icon={
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          }
          bgColor="bg-blue-500"
        />

        <DashboardCard
          title="Total Teachers"
          value={stats.totalTeachers}
          icon={
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          }
          bgColor="bg-green-500"
        />

        <DashboardCard
          title="Total Courses"
          value={stats.totalCourses}
          icon={
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          }
          bgColor="bg-purple-500"
        />

        <DashboardCard
          title="Attendance Rate"
          value={`${stats.attendancePercentage}%`}
          icon={
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          }
          bgColor="bg-orange-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Recent Activities
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 pb-3 border-b">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <p className="text-sm text-gray-600">
                {stats.totalStudents} students enrolled in the system
              </p>
            </div>
            <div className="flex items-center space-x-3 pb-3 border-b">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <p className="text-sm text-gray-600">
                {stats.totalTeachers} teachers managing courses
              </p>
            </div>
            <div className="flex items-center space-x-3 pb-3 border-b">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <p className="text-sm text-gray-600">
                {stats.totalCourses} active courses available
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <p className="text-sm text-gray-600">
                Average attendance: {stats.attendancePercentage}%
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => navigate("/students")}
              className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-center transition-colors"
            >
              <div className="text-2xl mb-2">➕</div>
              <p className="text-sm font-medium text-gray-700">Add Student</p>
            </button>
            <button
              onClick={() => navigate("/teachers")}
              className="p-4 bg-green-50 hover:bg-green-100 rounded-lg text-center transition-colors"
            >
              <div className="text-2xl mb-2">👨‍🏫</div>
              <p className="text-sm font-medium text-gray-700">Add Teacher</p>
            </button>
            <button
              onClick={() => navigate("/attendance")}
              className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg text-center transition-colors"
            >
              <div className="text-2xl mb-2">📋</div>
              <p className="text-sm font-medium text-gray-700">
                Mark Attendance
              </p>
            </button>
            <button
              onClick={() => navigate("/marks")}
              className="p-4 bg-orange-50 hover:bg-orange-100 rounded-lg text-center transition-colors"
            >
              <div className="text-2xl mb-2">📝</div>
              <p className="text-sm font-medium text-gray-700">Add Marks</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
