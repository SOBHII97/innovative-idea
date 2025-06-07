import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import images
import frontImage from '../../../assets/LAP/CHEMISTRY/CHEMSITERE1.png';
import backImage from '../../../assets/LAP/CHEMISTRY/CHEMSITERE2.png';
import img3 from '../../../assets/LAP/CHEMISTRY/CHEMSITERE3.png';
import img4 from '../../../assets/LAP/CHEMISTRY/CHEMSITERE4.png';
import img5 from '../../../assets/LAP/CHEMISTRY/CHEMSITERE5.png';
import img6 from '../../../assets/LAP/CHEMISTRY/CHEMSITERE6.gif';

const Chemistry = () => {
  const [currentView, setCurrentView] = useState('front');

  const toggleView = () => {
    setCurrentView(prev => prev === 'front' ? 'back' : 'front');
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section with Image Toggle */}
      <div className="relative bg-primary/10 py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Image Container with Arrow */}
          <div className="relative h-64 md:h-80 lg:h-96 mb-8 mx-auto w-full max-w-2xl overflow-hidden rounded-xl shadow-lg bg-gray-100 flex items-center justify-center">
            <img 
              src={currentView === 'front' ? frontImage : backImage} 
              alt={currentView === 'front' ? "Front view of analyzer" : "Back view of analyzer"} 
              className="w-full h-full object-contain transition-opacity duration-500"
            />
            
            {/* Arrow Navigation */}
            <button 
              onClick={toggleView}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-primary rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all hover:scale-110"aria-label="Toggle view">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary text-center">
            Chemistry Analyzer Celercare® V5
          </h1>
          <p className="text-xl mb-4 text-center">
            <strong className="text-primary">LARGER SCREEN — BETTER CARE</strong>
          </p>
          <p className="text-lg max-w-4xl mx-auto text-center">
            Designed with large captive screen and built-in printer, the MNCHIP CV5 veterinarian chemistry analyzer can bring better interactive experience and deliver real-time blood chemistry diagnostic information for animal healthcare with only 100µL blood sample.
          </p>
        </div>
      </div>

      {/* other words*/}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">Operation</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <img src={img3} alt="Add sample" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-primary">Add Sample</h3>
              <p className="text-gray-600">
                <strong>100μL whole blood, serum or plasma.</strong>
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <img src={img4} alt="Insert disc" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-primary">Insert Disc</h3>
              <p className="text-gray-600">
                <strong>Walk-away operation.</strong>
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <img src={img5} alt="Read results" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-primary">Read Results</h3>
              <p className="text-gray-600">
                <strong>External printer available.</strong>
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">Advanced Technology</h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img 
                src={img6} 
                alt="Microfluidics technology" 
                className="w-full rounded-xl shadow-lg" 
              />
            </div>
            
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                Our microfluidics-based blood chemistry device was derived from aerospace technology.
              </p>
              
              <p className="text-lg mb-4">
                The analyzer is a portable spectrophotometer with an optical system consisting of a 
                xenon arc stroboscopic lamp.
              </p>
              
              <p className="text-lg">
                The reagent disc, developed using microfluidic technology, is an 8 cm diameter 
                consumable containing all required diluents.
              </p>
            </div>
          </div>
        </section>

        <div className="text-center py-8">
          <Link
            to="/contact"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-bold transition duration-300 transform hover:scale-105">
            FOR MORE INFO CONTACT US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chemistry;