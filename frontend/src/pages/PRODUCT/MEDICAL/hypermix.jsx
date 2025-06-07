import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import images
import oilImage from '../../../assets/LAP/MEDICAL/MEDICAL1.jpg';
import gelImage from '../../../assets/LAP/MEDICAL/MEDICAL2.jpg';
import gauzeImage from '../../../assets/LAP/MEDICAL/MEDICAL3.jpg';

const Hypermix = () => {
  const [currentProduct, setCurrentProduct] = useState('oil');

  const productImages = {
    oil: oilImage,
    gel: gelImage,
    gauze: gauzeImage,
  };

  const handleToggle = () => {
    setCurrentProduct((prev) =>
      prev === 'oil' ? 'gel' : prev === 'gel' ? 'gauze' : 'oil'
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section with Image Toggle */}
      <div className="relative bg-primary/10 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative h-64 md:h-80 lg:h-96 mb-8 mx-auto w-full max-w-2xl overflow-hidden rounded-xl shadow-lg bg-gray-100 flex items-center justify-center">
            <img
              src={productImages[currentProduct]}
              alt={`${currentProduct} Hypermix`}
              className="w-full h-full object-contain transition-opacity duration-500"
            />

            {/* Arrow Navigation */}
            <button
              onClick={handleToggle}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-primary rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all hover:scale-110"
              aria-label="Toggle product view"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary text-center">
            Hypermix®
          </h1>
          <p className="text-xl mb-4 text-center font-semibold text-primary">
            Herbal-based veterinary skin care product
          </p>
          <p className="text-lg max-w-4xl mx-auto text-center">
            Promotes re-epithelialisation, moisturises, soothes, and protects from insects. Hypermix® supports wound healing in all animals by combining the power of **Hypericum** and **Neem** in a stable, safe formulation.
          </p>
        </div>
      </div>

      {/* Details Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">Product Benefits</h2>
          <ul className="list-disc list-inside space-y-4 text-lg text-gray-700 max-w-3xl mx-auto">
            <li>Speeds up skin repair and re-epithelialisation of wounds.</li>
            <li>Antiseptic action reduces bacterial colonisation.</li>
            <li>Promotes lymphatic drainage and controls exudate.</li>
            <li>Provides a protective barrier against insects.</li>
            <li>Made from certified organic Hypericum and cold-pressed Neem oil.</li>
            <li>Available in <strong>oil</strong>, <strong>gel</strong>, and <strong>medicated gauze</strong> forms.</li>
          </ul>
        </section>

        {/* Call-to-Action */}
        <div className="text-center py-8">
          <Link
            to="/contact"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-bold transition duration-300 transform hover:scale-105"
          >
            CONTACT US FOR MORE INFO
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hypermix;
