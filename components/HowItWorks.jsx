'use client';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Find Your Artist',
      description: 'Browse through our curated collection of talented artists and their portfolios. Filter by style, price range, and availability.',
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      color: 'from-purple-100 to-purple-200'
    },
    {
      number: '02',
      title: 'Chat & Commission',
      description: 'Connect directly with your chosen artist. Discuss your vision, negotiate terms, and finalize the commission details.',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      color: 'from-blue-100 to-blue-200'
    },
    {
      number: '03',
      title: 'Receive Your Artwork',
      description: 'Get your custom artwork delivered on time. Review, request revisions if needed, and enjoy your unique piece of art.',
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-green-100 to-green-200'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            How It <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started is simple. Follow these three easy steps to commission your perfect artwork.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${step.color} mb-4 transform hover:scale-110 transition-all duration-300`}>
                  {step.icon}
                </div>
                <div className="text-6xl font-bold text-gray-200 absolute -top-4 -right-4 -z-10">
                  {step.number}
                </div>
              </div>

              {/* Step Content */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-200 to-blue-200 transform translate-x-6 -translate-y-1/2 z-0"></div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of satisfied clients who have found their perfect artist match on ArtConnect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Browse Artists
              </button>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold border-2 border-purple-600 hover:bg-purple-600 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
