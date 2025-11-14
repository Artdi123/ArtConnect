'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ArtConnect
            </h1>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Explore</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">My Commissions</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Messages</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Notifications</a>
          </div>

          {/* User Avatar & Dropdown */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-purple-600">
                <img src="https://via.placeholder.com/32" alt="Avatar" className="w-8 h-8 rounded-full" />
                <span>Profile</span>
              </button>
              {/* Dropdown menu would go here */}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-lg rounded-lg mt-2 p-4 shadow-lg">
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-gray-700 hover:text-purple-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-purple-600">Explore</a>
              <a href="#" className="text-gray-700 hover:text-purple-600">My Commissions</a>
              <a href="#" className="text-gray-700 hover:text-purple-600">Messages</a>
              <a href="#" className="text-gray-700 hover:text-purple-600">Notifications</a>
              <div className="flex items-center space-x-2 pt-2 border-t">
                <img src="https://via.placeholder.com/32" alt="Avatar" className="w-8 h-8 rounded-full" />
                <span>Profile</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
