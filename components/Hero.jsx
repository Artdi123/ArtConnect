'use client';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-300 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-pink-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-blue-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-yellow-300 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Discover and Connect with{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Amazing Artists
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            A platform where artists and clients come together to create meaningful art.
            Showcase your creativity, get commissioned, and build your community.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl w-full sm:w-auto">
              Join as Artist
            </button>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-purple-600 hover:bg-purple-600 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto">
              Start Commission
            </button>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Artwork Placeholders */}
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
                  <div className="w-full h-32 bg-gradient-to-br from-purple-300 to-pink-300 rounded-xl mb-4"></div>
                  <div className="text-sm text-gray-600">Digital Portrait</div>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
                  <div className="w-full h-32 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-xl mb-4"></div>
                  <div className="text-sm text-gray-600">Character Design</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
                  <div className="w-full h-32 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-xl mb-4"></div>
                  <div className="text-sm text-gray-600">Concept Art</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">500+</div>
              <div className="text-gray-600">Active Artists</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">2,000+</div>
              <div className="text-gray-600">Artworks Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
