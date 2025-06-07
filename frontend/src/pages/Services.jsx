import React from 'react';

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-greenMain mb-2">
              Chemistry Analysis
            </h3>
            <p className="text-gray-600">
              Advanced chemical testing and research services.
            </p>
          </div>
          {/* Add more service cards here */}
        </div>
      </div>
    </section>
  );
};

export default Services;
