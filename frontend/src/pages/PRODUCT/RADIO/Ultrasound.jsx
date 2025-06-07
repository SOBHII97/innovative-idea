import React from 'react';
import { Link } from 'react-router-dom';

// Import images
import mainImage from '../../../assets/LAP/ULTRASONIC/Ultrasound1.png';
import techImage1 from '../../../assets/LAP/ULTRASONIC/Ultrasound6.jpg';
import techImage2 from '../../../assets/LAP/ULTRASONIC/Ultrasound7.jpg';
import convexTransducer from '../../../assets/LAP/ULTRASONIC/Ultrasound2.png';
import linearTransducer from '../../../assets/LAP/ULTRASONIC/Ultrasound3.png';
import microConvexTransducer from '../../../assets/LAP/ULTRASONIC/Ultrasound4.png';
import endocavityTransducer from '../../../assets/LAP/ULTRASONIC/Ultrasound5.png';

const Ultrasound = () => {
  return (
    <div className="min-h-screen bg-white pt-24 px-4 md:px-8 lg:px-16 pb-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Portable Color Doppler Ultrasound F6
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto">
          Remodeling Portable Ultrasonic Value with advanced imaging technologies for precise diagnostics
        </p>
        <img
          src={mainImage}
          alt="Ultrasound F6"
          className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Technology Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center border-b pb-2">
          Advanced Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img src={techImage1} alt="Ultrasound Technology" className="rounded-lg shadow-md" />
          </div>
          <div>
            <img src={techImage2} alt="Ultrasound Features" className="rounded-lg shadow-md" />
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Extended field of view imaging",
            "Space composite imaging technology",
            "High-resolution blood flow technology",
            "Ultrasound imaging for puncture",
            "Anatomical M-Mode",
            "Transducer parameters optimization"
          ].map((tech, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="font-semibold text-primary">✓ {tech}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Transducers Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center border-b pb-2">
          Transducer Options
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              img: convexTransducer,
              type: "Convex transducer",
              model: "C60",
              applications: [
                "Internal medicine",
                "Surgery",
                "Gynaecologist and obstetrician",
                "Emergency",
                "Critical care medicine"
              ]
            },
            {
              img: linearTransducer,
              type: "Linear transducer",
              model: "L40",
              applications: [
                "Internal medicine",
                "Surgery",
                "Gynaecologist",
                "Department of pediatrics",
                "Rehabilitation Department"
              ]
            },
            {
              img: microConvexTransducer,
              type: "Micro-convex transducer",
              model: "C15",
              applications: [
                "Internal medicine",
                "Surgery",
                "Department of pediatrics",
                "Rehabilitation Department",
                "Emergency"
              ]
            },
            {
              img: endocavityTransducer,
              type: "Endocavity transducer",
              model: "C10",
              applications: [
                "Gynaecologist and obstetrician",
                "Urology"
              ]
            }
          ].map((transducer, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <img src={transducer.img} alt={transducer.type} className="w-full h-48 object-contain p-4" />
              <div className="p-4 bg-gray-50">
                <h3 className="text-xl font-semibold text-primary mb-1">{transducer.type}</h3>
                <p className="font-medium mb-2">Model: {transducer.model}</p>
                <div>
                  <p className="font-semibold mb-1">Applications:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {transducer.applications.map((app, i) => (
                      <li key={i} className="text-sm">{app}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specifications Section */}
      <section className="mb-16 bg-gray-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-primary mb-8">Technical Specifications</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">General Parameters</h3>
            <ul className="space-y-2">
              <li><strong>Display:</strong> 15" LED touch screen</li>
              <li><strong>Probe Connectors:</strong> 2</li>
              <li><strong>Battery Life:</strong> ≥3 hours</li>
              <li><strong>Weight:</strong> ≤8kg</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Imaging Features</h3>
            <ul className="space-y-2">
              <li><strong>Depth:</strong> Up to 30cm</li>
              <li><strong>Frequency:</strong> 1-15MHz</li>
              <li><strong>Image Storage:</strong> ≥1000 images</li>
              <li><strong>DICOM Compatible:</strong> Yes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="text-center">
        <Link
          to="/contact"
          className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:scale-105">
          Request Technical Specifications
        </Link>
      </div>
    </div>
  );
};

export default Ultrasound;