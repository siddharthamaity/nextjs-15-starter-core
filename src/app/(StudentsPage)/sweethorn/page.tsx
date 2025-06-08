import React from 'react';
import { Card, CardHeader, CardBody, Image } from "@heroui/react";

function App() {
  return (
    // Main container for the whole app, ensuring min-height and consistent font
    <div className="min-h-screen bg-gray-100 font-inter antialiased">
      {/* Navbar Section - sticky at the top, responsive padding */}
      <nav className="bg-green-600 p-4 shadow-md sticky top-0 z-50 rounded-b-lg">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
          {/* Left side: EcoStudy branding */}
          <div className="text-white text-2xl font-bold">
            EcoStudy
          </div>
          {/* Right side: Navigation links, responsive spacing */}
          <div className="flex space-x-4 md:space-x-8">
            <a href="#" className="text-white hover:text-green-200 transition-colors duration-200 text-lg">Home</a>
            <a href="#" className="text-white hover:text-green-200 transition-colors duration-200 text-lg">Thesis</a>
            <a href="#" className="text-white hover:text-green-200 transition-colors duration-200 text-lg">Quiz</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - full screen height, centered content */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden text-white">
        {/* Background image: grass.jpg */}
        <img
          src="/image/grass.jpg" // Updated to use grass.jpg
          alt="EcoStudy Background"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
        />

        {/* Overlay content - always centered */}
        <div className="relative z-10 text-center p-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg rounded-lg">
            Measuring Soil Compaction Using <br className="hidden md:block"/> Five-Point Pocket
          </h1>
          {/* Optional button */}
          {/*
          <button
            className="mt-8 px-6 py-3 bg-black text-green-400 border-none rounded-lg cursor-pointer text-lg font-semibold
                       hover:bg-gray-800 transition-colors duration-300 shadow-lg"
          >
            Learn More
          </button>
          */}
        </div>
      </section>

      {/* Optional: Placeholder for a content section (e.g., Recent Theses) */}
      {/* This section demonstrates responsive grid layout and card styling */}
      <section className="min-h-screen bg-white p-8 flex flex-col items-center justify-center">
        <div className="container mx-auto px-4 md:px-8 py-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Recent Theses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <img
                src="/image/grass.jpg" // Updated to use grass.jpg
                alt="Measuring Soil Compaction"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Measuring Soil Compaction Using Five-Point Pocket</h3>
              <p className="text-gray-700 text-sm mb-4 flex-grow">
                This study explores innovative techniques for accurately assessing soil compaction levels using a novel five-point pocket method, critical for agricultural and environmental health.
              </p>
              <button className="self-start px-5 py-2 bg-black text-green-400 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                Read More
              </button>
            </div>

            {/* Example Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <img
                src="/image/grass.jpg" // Updated to use grass.jpg
                alt="Tourism Management Impact"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">The Impact Of Tourism Management On Customer Satisfaction: A Case Study Of Petronas Twin Towers</h3>
              <p className="text-gray-700 text-sm mb-4 flex-grow">
                An in-depth analysis of how tourism management strategies influence visitor satisfaction, using the iconic Petronas Twin Towers in Kuala Lumpur as a primary case study.
              </p>
              <button className="self-start px-5 py-2 bg-black text-green-400 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                Read More
              </button>
            </div>

            {/* Example Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <img
                src="/image/grass.jpg" // Updated to use grass.jpg
                alt="Land Use Change"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Land Use and Land Cover Change at Kampung Bagan Pasir, Tanjung Karang using Satellite Imagery</h3>
              <p className="text-gray-700 text-sm mb-4 flex-grow">
                Investigating shifts in land use and land cover in Kampung Bagan Pasir, Tanjung Karang, through advanced satellite imagery, highlighting environmental implications.
              </p>
              <button className="self-start px-5 py-2 bg-black text-green-400 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

       {/* About Ecostudy Section - similar to your heroMain.tsx structure */}
      <section className="min-h-screen bg-gray-100 p-8 flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12">
        <div className="container mx-auto px-4 md:px-8 py-12 flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Description Block */}
          <div className="flex-1 lg:flex-none w-full lg:w-2/5 bg-lime-100 p-8 rounded-2xl shadow-lg h-auto lg:h-[600px] flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About EcoStudy 🌳</h2>
            <h3 className="text-2xl font-semibold text-gray-700 mb-6">Exploring Sustainable Development in Malaysia</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              EcoStudy is a collaborative platform dedicated to investigating sustainable development and environmental
              monitoring in Malaysia through technological and managerial approaches. Our team of researchers focuses on
              pressing ecological and socio-economic challenges, leveraging tools like remote sensing, field surveys,
              and data analytics to drive actionable insights for conservation and policy-making.
            </p>
          </div>

          {/* Image Block */}
          <div className="flex-1 lg:flex-none w-full lg:w-3/5">
            <img
              src="/image/grass.jpg" // Updated to use grass.jpg
              alt="Sustainable Development"
              className="w-full h-auto lg:h-[600px] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;