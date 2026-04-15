import DashboardCard from "../components/DashboardCard";

const TeacherDashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Teacher Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard
          title="My Students"
          value="120"
          icon={<span className="text-2xl">👨‍🎓</span>}
          bgColor="bg-blue-500"
        />
        <DashboardCard
          title="My Courses"
          value="4"
          icon={<span className="text-2xl">📚</span>}
          bgColor="bg-green-500"
        />
        <DashboardCard
          title="Pending Grades"
          value="15"
          icon={<span className="text-2xl">📝</span>}
          bgColor="bg-purple-500"
        />
        <DashboardCard
          title="Classes Today"
          value="3"
          icon={<span className="text-2xl">📅</span>}
          bgColor="bg-orange-500"
        />
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Today's Schedule
        </h3>
        <div className="space-y-3">
          {[
            {
              time: "9:00 AM - 10:00 AM",
              subject: "Data Structures",
              room: "Room 101",
            },
            {
              time: "11:00 AM - 12:00 PM",
              subject: "Algorithms",
              room: "Room 205",
            },
            {
              time: "2:00 PM - 3:00 PM",
              subject: "Database Systems",
              room: "Lab 3",
            },
          ].map((schedule, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div>
                <h4 className="font-semibold text-gray-800">
                  {schedule.subject}
                </h4>
                <p className="text-sm text-gray-600">{schedule.time}</p>
              </div>
              <span className="text-sm text-gray-600">{schedule.room}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
