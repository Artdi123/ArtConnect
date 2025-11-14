"use client";

const communityEvents = [
  {
    id: 1,
    title: "Winter Art Contest",
    description: "Showcase your winter-themed artworks and win prizes!",
    banner:
      "https://via.placeholder.com/400x200/8b5cf6/ffffff?text=Winter+Contest",
    cta: "Join Event",
  },
  {
    id: 2,
    title: "Artist Spotlight: Alice Wonderland",
    description: "Join us for a live Q&A with our featured artist.",
    banner: "https://via.placeholder.com/400x200/ec4899/ffffff?text=Spotlight",
    cta: "View Details",
  },
  {
    id: 3,
    title: "Community Art Workshop",
    description: "Learn new techniques in our free online workshop.",
    banner: "https://via.placeholder.com/400x200/8b5cf6/ffffff?text=Workshop",
    cta: "Register Now",
  },
];

export default function CommunityEvents() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Community Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white/70 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <img
                src={event.banner}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  {event.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
