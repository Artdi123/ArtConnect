"use client";

import { useState } from "react";

export default function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [sortBy, setSortBy] = useState("Newest");

  const filterOptions = [
    "Anime",
    "Semi-Realistic",
    "Concept Art",
    "Portrait",
    "Landscape",
    "Digital Painting",
  ];

  const toggleFilter = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg">
          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search for artists or art styles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Filter Tags */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Filter by Style
            </h3>
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  onClick={() => toggleFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedFilters.includes(filter)
                      ? "bg-purple-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className="flex justify-end">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
            >
              <option value="Newest">Newest</option>
              <option value="Popular">Popular</option>
              <option value="Price: Low → High">Price: Low → High</option>
              <option value="Price: High → Low">Price: High → Low</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
