import React from 'react';
import { Link } from 'react-router-dom';
import ceoImage from '../assets/vip/IMG_7084_page-0001.jpg'; // Adjust the path as necessary
const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Us</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Innovative Ideas Medical is the leading provider in veterinary market solutions in Saudi Arabia. We partner with global leaders to bring cutting-edge technology and innovative solutions for animal health.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Innovative Ideas is a newly launched initiative driven by a passion for modernizing healthcare solutions. We may be just starting, but our commitment to bringing value to the medical field is real and growing stronger every day.
            </p>
            <p className="text-gray-600">
              With a small but determined team, we aim to build strong foundations by listening to the needs of professionals and delivering practical, effective tools that serve real people. This is just the beginning — and we're just getting started.
            </p>
          </div>
          <div className="hidden md:flex h-96 rounded-xl bg-gradient-to-br from-gray-100 to-gray-300 items-center justify-center text-gray-400 italic">
            {/* Placeholder area intentionally left blank for future visual or removed for simplicity */}
            <span>More to come...</span>
          </div>
        </div>
      </section>
      {/* Mission Quote */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">Mission</h2>
          <p className="text-xl text-gray-700 italic">
            "We offer products & solutions that are used across the care continuum from diagnosis & management all the way to treatment"
          </p>
        </div>
      </section>

      {/* Vision Quote */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">Vision</h2>
          <p className="text-xl text-gray-700 italic">
            "To serve the utmost Healthcare innovation more successful to humanity & be the 1st leading integrated & complementary Healthcare partner in Saudi Arabia in veterinary market"
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-primary text-center">Our Products</h2>
          <p className="text-xl text-gray-700 mb-8 text-center">
            Our main products, currently including chemistry analyzer and hematology analyzer, PCR analyzer and rapid test for veterinary are crucial for clinical decision-making and treatment pathways. We have a new innovative product for wound care for large and small animals.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Mission & Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Innovation</h3>
              <p className="text-gray-600">Pushing boundaries to develop groundbreaking medical solutions</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Quality</h3>
              <p className="text-gray-600">Maintaining the highest standards in all our products and services</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Patient Care</h3>
              <p className="text-gray-600">Dedicated to improving healthcare outcomes for all patients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - CEO Only */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Leadership</h2>
        <div className="flex justify-center">
          <div className="text-center relative">
            <div className="relative w-64 h-64 mx-auto mb-4 overflow-hidden rounded-full border-4 border-primary">
              <img 
                src={ceoImage} 
                alt="Dr. Abdelmohsen Alzaidi - CEO & Founder" 
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center top' }} 
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Dr. Abdelmohsen Alzaidi</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="bg-primary text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8">Be part of our journey to transform healthcare</p>
          <Link 
            to="/contact" 
            className="inline-block bg-[#2cc4a0] text-white hover:bg-[#239f84] px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;