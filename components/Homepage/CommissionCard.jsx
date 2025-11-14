"use client";

export default function CommissionCard({ commission }) {
  return (
    <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
      <div className="flex items-start mb-4">
        <img
          src={commission.thumbnail}
          alt={commission.title}
          className="w-16 h-16 rounded-xl mr-4 object-cover"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800 mb-1">
            {commission.title}
          </h3>
          <p className="text-sm text-gray-600 mb-2">
            Artist: {commission.artist}
          </p>
          <div className="flex items-center justify-between">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                commission.status === "Completed"
                  ? "bg-green-100 text-green-700"
                  : commission.status === "In Progress"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {commission.status}
            </span>
            <span className="text-sm text-gray-500">
              Due: {commission.deadline}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="flex-1 bg-purple-600 text-white py-2 rounded-xl hover:bg-purple-700 transition-colors">
          View Details
        </button>
        <button className="flex-1 bg-pink-600 text-white py-2 rounded-xl hover:bg-pink-700 transition-colors">
          Chat
        </button>
      </div>
    </div>
  );
}
