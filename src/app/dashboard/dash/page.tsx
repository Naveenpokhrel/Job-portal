import JobData from "../../../../data";
export default function Dash() {
  const stats = [
    {
      id: 1,
      count: "14",
      label: "Total Job Category",
      icon: "📖",
      color: "from-purple-500 to-blue-400",
    },
    {
      id: 2,
      count: 3,
      label: "Total Registered Employer",
      icon: "🏢",
      color: "from-blue-400 to-indigo-500",
    },
    {
      id: 3,
      count: 2,
      label: "Total Registered Candidates",
      icon: "👥",
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: 4,
      count: 7,
      label: "Total Listed Jobs",
      icon: "🗂️",
      color: "from-blue-500 to-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-4xl bg-green-500 text-white p-4 text-lg font-bold">
        Dashboard
      </div>
      <div className="grid grid-cols-2 gap-4 w-full max-w-4xl mt-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className={`bg-gradient-to-r ${stat.color} text-white p-6 rounded-lg flex items-center justify-between shadow-lg`}
          >
            <span className="text-3xl">{stat.icon}</span>
            <div className="text-right">
              <p className="text-2xl font-bold">{stat.count}</p>
              <p className="text-sm">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
