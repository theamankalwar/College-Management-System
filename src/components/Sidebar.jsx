import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Sidebar = () => {
  const location = useLocation();
  const { user } = useAuth();

  // Define menu items based on roles
  const getMenuItems = () => {
    const role = user?.role;

    // Admin has access to everything
    if (role === "admin") {
      return [
        { path: "/dashboard", label: "Dashboard", icon: "📊" },
        { path: "/students", label: "Students", icon: "👨‍🎓" },
        { path: "/teachers", label: "Teachers", icon: "👨‍🏫" },
        { path: "/attendance", label: "Attendance", icon: "📋" },
        { path: "/marks", label: "Marks", icon: "📝" },
        { path: "/timetable", label: "Timetable", icon: "📅" },
        { path: "/settings", label: "Settings", icon: "⚙️" },
      ];
    }

    // Teacher can manage attendance, marks, view students and timetable
    if (role === "teacher") {
      return [
        { path: "/dashboard", label: "Dashboard", icon: "📊" },
        { path: "/students", label: "Students", icon: "👨‍🎓" },
        { path: "/attendance", label: "Attendance", icon: "📋" },
        { path: "/marks", label: "Marks", icon: "📝" },
        { path: "/timetable", label: "Timetable", icon: "📅" },
        { path: "/settings", label: "Settings", icon: "⚙️" },
      ];
    }

    // Student can only view their own data
    if (role === "student") {
      return [
        { path: "/dashboard", label: "Dashboard", icon: "📊" },
        { path: "/attendance", label: "My Attendance", icon: "📋" },
        { path: "/marks", label: "My Marks", icon: "📝" },
        { path: "/timetable", label: "Timetable", icon: "📅" },
        { path: "/settings", label: "Settings", icon: "⚙️" },
      ];
    }

    return [];
  };

  const menuItems = getMenuItems();

  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-center py-4">College CMS</h2>
        <div className="text-center text-sm text-gray-400 capitalize">
          {user?.role} Portal
        </div>
      </div>

      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-800"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
