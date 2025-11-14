"use client";

import ArtistCard from "./ArtistCard";

const recommendedArtists = [
  {
    id: 1,
    name: "Alice Wonderland",
    avatar: "https://via.placeholder.com/48x48/8b5cf6/ffffff?text=AW",
    styles: ["Anime", "Portrait"],
    rating: 4.8,
    reviews: 120,
    priceRange: "50-200",
  },
  {
    id: 2,
    name: "Bob Artist",
    avatar: "https://via.placeholder.com/48x48/ec4899/ffffff?text=BA",
    styles: ["Semi-Realistic", "Concept Art"],
    rating: 4.5,
    reviews: 89,
    priceRange: "30-150",
  },
  {
    id: 3,
    name: "Charlie Painter",
    avatar: "https://via.placeholder.com/48x48/8b5cf6/ffffff?text=CP",
    styles: ["Landscape", "Digital Painting"],
    rating: 4.9,
    reviews: 156,
    priceRange: "80-300",
  },
  {
    id: 4,
    name: "Diana Illustrator",
    avatar: "https://via.placeholder.com/48x48/ec4899/ffffff?text=DI",
    styles: ["Portrait", "Anime"],
    rating: 4.7,
    reviews: 95,
    priceRange: "40-180",
  },
  {
    id: 5,
    name: "Eve Designer",
    avatar: "https://via.placeholder.com/48x48/8b5cf6/ffffff?text=ED",
    styles: ["Concept Art", "Semi-Realistic"],
    rating: 4.6,
    reviews: 112,
    priceRange: "60-250",
  },
  {
    id: 6,
    name: "Frank Creator",
    avatar: "https://via.placeholder.com/48x48/ec4899/ffffff?text=FC",
    styles: ["Digital Painting", "Landscape"],
    rating: 4.8,
    reviews: 134,
    priceRange: "70-220",
  },
];

export default function RecommendedArtists() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Recommended Artists
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
    </section>
  );
}
