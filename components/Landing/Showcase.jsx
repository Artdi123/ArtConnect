'use client';

export default function Showcase() {
  const artworks = [
    {
      id: 1,
      image: 'https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Anime+Portrait',
      artist: 'Sarah Chen',
      style: 'Anime',
      title: 'Mystical Forest'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/300x200/06b6d4/ffffff?text=Semi-Realistic',
      artist: 'Marcus Rivera',
      style: 'Semi-Realistic',
      title: 'Cyberpunk City'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/300x200/f59e0b/ffffff?text=Digital+Art',
      artist: 'Emma Thompson',
      style: 'Digital Art',
      title: 'Sunset Dreams'
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/300x200/ec4899/ffffff?text=Character+Design',
      artist: 'Alex Kim',
      style: 'Character Design',
      title: 'Fantasy Warrior'
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/300x200/10b981/ffffff?text=Concept+Art',
      artist: 'Luna Park',
      style: 'Concept Art',
      title: 'Space Station'
    },
    {
      id: 6,
      image: 'https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Illustration',
      artist: 'David Lee',
      style: 'Illustration',
      title: 'Ocean Depths'
    },
    {
      id: 7,
      image: 'https://via.placeholder.com/300x200/f97316/ffffff?text=Portrait',
      artist: 'Zoe Martinez',
      style: 'Portrait',
      title: 'Vintage Vibes'
    },
    {
      id: 8,
      image: 'https://via.placeholder.com/300x200/6366f1/ffffff?text=Fantasy',
      artist: 'Ryan Chen',
      style: 'Fantasy',
      title: 'Dragon Realm'
    },
    {
      id: 9,
      image: 'https://via.placeholder.com/300x200/ef4444/ffffff?text=Abstract',
      artist: 'Maya Patel',
      style: 'Abstract',
      title: 'Color Symphony'
    }
  ];

  return (
    <section id="explore" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Featured <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Artworks</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing creations from our talented community of digital artists
          </p>
        </div>

        {/* Artwork Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden group"
            >
              {/* Artwork Image */}
              <div className="relative overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Artwork Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-200">
                  {artwork.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 font-medium">{artwork.artist}</p>
                    <span className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full mt-2">
                      {artwork.style}
                    </span>
                  </div>
                  <button className="text-purple-600 hover:text-purple-700 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    View →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            View More Artworks
          </button>
        </div>
      </div>
    </section>
  );
}
