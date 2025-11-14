'use client';

export default function WelcomeBanner() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-white overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome back, Alex!
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Find your next favorite artist or manage your ongoing commissions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-purple-600 px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg">
            Start New Commission
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-2xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
            Explore Artists
          </button>
        </div>
      </div>
    </section>
  );
}
