import React from 'react';

const Hero = () => {
  return (
    <section className="bg-primary/5 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
          Welcome to Innovative Ideas
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Leading Veterinary Solutions & Cutting-edge Medical Innovations
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium">
            Learn More
          </button>
          <button className="bg-white hover:bg-primary/10 text-primary border border-primary px-6 py-3 rounded-lg font-medium">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
