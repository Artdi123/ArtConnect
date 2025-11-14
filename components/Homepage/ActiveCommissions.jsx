"use client";

import CommissionCard from "./CommissionCard";

const activeCommissions = [
  {
    id: 1,
    title: "Portrait Commission",
    thumbnail: "https://via.placeholder.com/64x64/8b5cf6/ffffff?text=PC",
    artist: "Alice Wonderland",
    status: "Pending",
    deadline: "Dec 15, 2023",
  },
  {
    id: 2,
    title: "Anime Character Design",
    thumbnail: "https://via.placeholder.com/64x64/ec4899/ffffff?text=ACD",
    artist: "Bob Artist",
    status: "In Progress",
    deadline: "Dec 20, 2023",
  },
  {
    id: 3,
    title: "Landscape Illustration",
    thumbnail: "https://via.placeholder.com/64x64/8b5cf6/ffffff?text=LI",
    artist: "Charlie Painter",
    status: "Completed",
    deadline: "Dec 10, 2023",
  },
];

export default function ActiveCommissions() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Active Commissions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeCommissions.map((commission) => (
            <CommissionCard key={commission.id} commission={commission} />
          ))}
        </div>
      </div>
    </section>
  );
}
