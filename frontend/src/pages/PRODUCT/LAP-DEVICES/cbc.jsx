// src/pages/Products/LapDevices/Cbc.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Products from '../../Products';
import CBC2 from '../../../assets/LAP/CBC/CBC2.jpg';
import CBC3 from '../../../assets/LAP/CBC/CBC3.jpg';

const Cbc = () => {
  return (
    <Products title="Hematology Analyzers">
      <section className="max-w-6xl mx-auto p-6">
        <p className="text-gray-700 text-lg mb-8">
          Using the hematology analyzer of Getein Animal, you can get a simplest way to receive a trusted complete blood count. Packed with revolutionary technology to provide consistent reference laboratory-quality results with unprecedented simplicity and efficiency. Innovative technology of Getein Animal delivers accurate complete blood count results in 1 minute. Whatever you need, the hematology analyzer of Getein Animal can satisfy you.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <img src={CBC2} alt="BHA-3000 Vet" className="mb-4 rounded" />
            <h3 className="text-2xl font-bold mb-2 text-primary">BHA-3000 Vet</h3>
            <p className="text-gray-600 mb-4">
              A dedicated veterinary 3-part hematology analyzer designed for space and budget constraints. Ideal for small to medium clinics and labs, featuring advanced tech and minimal reagents.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary text-white hover:bg-primary/90 px-6 py-2 rounded-md transition">
               CONTACT US FOR MORE INFO 
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <img src={CBC3} alt="BHA-5000 Vet" className="mb-4 rounded" />
            <h3 className="text-2xl font-bold mb-2 text-primary">BHA-5000 Vet</h3>
            <p className="text-gray-600 mb-4">
              A veterinary 5-part hematology analyzer offering precision and simplicity for efficient lab operations. Tailored for growing veterinary practices and hospitals.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary text-white hover:bg-primary/90 px-6 py-2 rounded-md transition">
               CONTACT US FOR MORE INFO 
            </Link>
          </div>
        </div>
      </section>
    </Products>
  );
};

export default Cbc;
