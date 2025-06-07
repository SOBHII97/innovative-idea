import React from 'react';
import { Link } from 'react-router-dom';
import Rapid1 from '../../../assets/LAP/RAPID-TEST/Rapidtests1.webp';
import Rapid2 from '../../../assets/LAP/RAPID-TEST/Rapidtests2.jpg';
import Rapid3 from '../../../assets/LAP/RAPID-TEST/Rapidtests3.jpg';

const Rapid = () => {
  return (
    <div className="bg-white min-h-screen pt-28 px-6 lg:px-20 pb-20 text-gray-800">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mb-16">
        <img src={Rapid1} alt="Colloidal Gold Test Kit" className="w-full max-w-5xl rounded-lg shadow-xl mb-8" />
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Colloidal Gold</h1>
        <p className="text-lg max-w-3xl text-gray-600">
          Accurate, easy-to-use, and fast testing kits for both professional and in-home use to monitor your pet's health.
        </p>
      </div>

      {/* Professional Kit Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">
            Rapid Testing Kit for Professional Use (Colloidal Gold)
          </h2>
          <p className="mb-4">
            Getein Rapid Testing Kit for Professional Use (Colloidal Gold) has advantages of time saving, cost-effective and easy to use, making it suitable for pet rapid screening.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>High accuracy & sensitivity – Domestic frontier detection technology</li>
            <li>Rapid – 5-10 minutes for full detection</li>
            <li>Convenient – No special equipment needed</li>
            <li>Reliable – Stable reagents, long-term storage</li>
            <li>Clear, intuitive results</li>
          </ul>
          <p className="font-semibold mb-2">Application Scenarios:</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Small pet hospital chains</li>
            <li>Individual pet hospitals</li>
            <li>Medium & large hospital chains</li>
          </ul>
          <p className="font-semibold">Test Items:</p>
          <p className="mb-4">CPV, CDV, CCV, Rabies, CPIV, FPV, FCV, FCOV, FHV, FIPV, TOXO, CPV/CCV</p>
        </div>
        <div>
          <img src={Rapid2} alt="Professional Use Kit" className="w-full rounded-xl shadow-lg" />
        </div>
      </div>

      {/* In-home Kit Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="order-2 md:order-1">
          <img src={Rapid3} alt="In-home Use Kit" className="w-full rounded-xl shadow-lg" />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-bold text-primary mb-4">In-home Rapid Test Kit</h2>
          <p className="mb-4">
            Designed to be user-friendly and simple for pets, whether they’re healthy or living with a chronic illness. Allows pet owners to check pet health easily at home.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>High accuracy & sensitivity</li>
            <li>5-10 min test time</li>
            <li>No special equipment required</li>
            <li>Reliable for long-term storage</li>
            <li>Easy-to-read results</li>
          </ul>
          <p className="font-semibold">Test Items:</p>
          <p>CPV, CDV, CCV, Rabies, CPIV, FPV, FCV, FCoV, FHV, FIPV, TOXO</p>
        </div>
      </div>

      {/* Call To Action */}
      <div className="text-center">
        <Link
          to="/contact"
          className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300"
        >
        FOR MORE INFO CONTACT US 
        </Link>
      </div>
    </div>
  );
};

export default Rapid;
