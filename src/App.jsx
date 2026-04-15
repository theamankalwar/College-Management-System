import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";
import DashboardLayout from "./layouts/DashboardLayout";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Attendance from "./pages/Attendance";
import Marks from "./pages/Marks";
import Timetable from "./pages/Timetable";
import Settings from "./pages/Settings";
import ProtectedRoute from "./components/ProtectedRoute";
import RoleBasedRoute from "./components/RoleBasedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/login" element={<AdminLogin />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            {/* Dashboard Routes */}
            <Route path="dashboard" element={<AdminDashboard />} />

            {/* Admin Only Routes */}
            <Route
              path="students"
              element={
                <RoleBasedRoute allowedRoles={["admin", "teacher"]}>
                  <Students />
                </RoleBasedRoute>
              }
            />
            <Route
              path="teachers"
              element={
                <RoleBasedRoute allowedRoles={["admin"]}>
                  <Teachers />
                </RoleBasedRoute>
              }
            />

            {/* Teacher and Admin Routes */}
            <Route
              path="attendance"
              element={
                <RoleBasedRoute allowedRoles={["admin", "teacher", "student"]}>
                  <Attendance />
                </RoleBasedRoute>
              }
            />
            <Route
              path="marks"
              element={
                <RoleBasedRoute allowedRoles={["admin", "teacher", "student"]}>
                  <Marks />
                </RoleBasedRoute>
              }
            />

            {/* All Roles */}
            <Route path="timetable" element={<Timetable />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
