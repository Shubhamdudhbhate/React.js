import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center px-4 sm:px-16 py-12">
      
      {/* Hero Section */}
      <div className="max-w-4xl text-center sm:text-left sm:flex sm:items-center sm:space-x-8 mb-12">
        <img 
          src="G.png" 
          alt="About image" 
          className="w-48 sm:w-64 rounded-lg shadow-lg hover:scale-105 transition transform duration-500"
        />
        <div className="mt-6 sm:mt-0">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-orange-500">About Us</h1>
          <p className="text-gray-300 text-lg sm:text-xl">
            We are a team of passionate developers building modern and interactive web applications. 
            Our goal is to create clean, responsive, and user-friendly interfaces with smooth animations.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300">
          <h2 className="text-2xl font-semibold mb-2 text-orange-500">Our Mission</h2>
          <p className="text-gray-300">
            To deliver high-quality, accessible, and interactive web solutions that delight users and help businesses grow.
          </p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300">
          <h2 className="text-2xl font-semibold mb-2 text-orange-500">Our Vision</h2>
          <p className="text-gray-300">
            To be recognized as a leading team of developers who innovate and inspire through technology and design.
          </p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300">
          <h2 className="text-2xl font-semibold mb-2 text-orange-500">Our Values</h2>
          <p className="text-gray-300">
            Integrity, creativity, teamwork, and a relentless focus on delivering the best user experience.
          </p>
        </div>

      </div>

      {/* Call-to-Action Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Want to work with us?</h2>
        <p className="text-gray-400 mb-6">Feel free to contact us for collaborations or projects.</p>
        <a href="/contact" 
           className="inline-block bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transform hover:scale-105 transition duration-300">
          Contact Us
        </a>
      </div>
      
    </div>
  )
}
