import DashboardCard from "../components/DashboardCard";

const StudentDashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Student Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard
          title="Attendance"
          value="92%"
          icon={<span className="text-2xl">📊</span>}
          bgColor="bg-blue-500"
        />
        <DashboardCard
          title="Average Marks"
          value="85.5"
          icon={<span className="text-2xl">📝</span>}
          bgColor="bg-green-500"
        />
        <DashboardCard
          title="Courses"
          value="6"
          icon={<span className="text-2xl">📚</span>}
          bgColor="bg-purple-500"
        />
        <DashboardCard
          title="Assignments"
          value="3"
          icon={<span className="text-2xl">📋</span>}
          bgColor="bg-orange-500"
        />
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">My Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Data Structures",
            "Algorithms",
            "Database Systems",
            "Web Development",
            "Operating Systems",
            "Computer Networks",
          ].map((course, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <h4 className="font-semibold text-gray-800">{course}</h4>
              <p className="text-sm text-gray-600 mt-1">Semester 5</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
