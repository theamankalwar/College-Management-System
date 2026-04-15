import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            College Management System
          </h1>
          <p className="text-xl text-white opacity-90">
            Choose your login portal
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* User Login Card */}
          <div
            onClick={() => navigate("/login")}
            className="bg-white rounded-2xl shadow-2xl p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-3xl"
          >
            <div className="text-center">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
                <svg
                  className="w-16 h-16 text-blue-600"
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
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                User Login
              </h2>
              <p className="text-gray-600 mb-6">For Students and Teachers</p>
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-700 font-medium mb-2">
                  Demo Accounts:
                </p>
                <p className="text-xs text-gray-600">
                  Teacher: teacher / teacher123
                </p>
                <p className="text-xs text-gray-600">
                  Student: student / student123
                </p>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Login as User
              </button>
            </div>
          </div>

          {/* Admin Login Card */}
          <div
            onClick={() => navigate("/admin/login")}
            className="bg-white rounded-2xl shadow-2xl p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-3xl"
          >
            <div className="text-center">
              <div className="inline-block p-4 bg-red-100 rounded-full mb-6">
                <svg
                  className="w-16 h-16 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Admin Login
              </h2>
              <p className="text-gray-600 mb-6">For System Administrators</p>
              <div className="bg-red-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-700 font-medium mb-2">
                  Demo Account:
                </p>
                <p className="text-xs text-gray-600">Username: admin</p>
                <p className="text-xs text-gray-600">Password: admin123</p>
              </div>
              <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Login as Admin
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-white text-sm opacity-75">
            © 2024 College Management System. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
