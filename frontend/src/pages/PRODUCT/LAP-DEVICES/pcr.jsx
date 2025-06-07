import React from 'react';
import { Link } from 'react-router-dom';

// Import images
import mainImage from '../../../assets/LAP/PCR/PCR01.png';
import expressDetection from '../../../assets/LAP/PCR/PCR02.png';
import easierToUse from '../../../assets/LAP/PCR/PCR03.png';
import costEffective from '../../../assets/LAP/PCR/PCR04.png';
import felineKits from '../../../assets/LAP/PCR/PCR05.jpg';
import canineKits from '../../../assets/LAP/PCR/PCR06.jpg';
import otherKits from '../../../assets/LAP/PCR/PCR07.jpg';
import step1 from '../../../assets/LAP/PCR/PCR08.png';
import step2 from '../../../assets/LAP/PCR/PCR09.png';
import step3 from '../../../assets/LAP/PCR/PCR10.png';
import step4 from '../../../assets/LAP/PCR/PCR11.png';
import technology from '../../../assets/LAP/PCR/PCR12.png';

const Pcr = () => {
  return (
    <div className="min-h-screen bg-white pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Real-time PCR Analyzer Pointcare® PCR V1
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            To satisfy the increasing demands of molecular detection, PCR instruments need to deliver fast-cycling protocols and accurate, sensitive results.
          </p>
          <img src={mainImage} alt="PCR Analyzer" className="w-full max-w-2xl mx-auto rounded-lg shadow-lg" />
        </div>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Features & Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: expressDetection,
                title: "Express Detection",
                desc: "Comprehensive results in about 60 minutes."
              },
              {
                img: easierToUse,
                title: "Easier to Use",
                desc: "Built-in ultrasonic mixing device to replace manual mixing, reducing the need for manual manipulation."
              },
              {
                img: costEffective,
                title: "Cost-Effective",
                desc: "Comparatively affordable analyzer and test kits. Lower shipping cost with 2-30°C shipping environment."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <img src={feature.img} alt={feature.title} className="h-40 mx-auto mb-4 object-contain" />
                <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Test Kits Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Test Kits</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <img src={felineKits} alt="Feline Kits" className="w-full h-48 object-cover" />
              <div className="p-4 bg-gray-50">
                <h3 className="text-xl font-semibold text-primary mb-2">Feline</h3>
                <ul className="space-y-1">
                  {[
                    "Feline Calicivirus (FCV)",
                    "Feline Herpesvirus type 1 (FHV-1)",
                    "Feline Panleukopenia Virus",
                    "Feline Coronavirus (FCoV)",
                    "Feline Chlamydia (CF)",
                    "Feline Infectious Peritonitis (FIP)",
                    "Feline Respiratory Pathogen Panel"
                  ].map((kit, i) => (
                    <li key={i} className="text-gray-700">• {kit}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <img src={canineKits} alt="Canine Kits" className="w-full h-48 object-cover" />
              <div className="p-4 bg-gray-50">
                <h3 className="text-xl font-semibold text-primary mb-2">Canine</h3>
                <ul className="space-y-1">
                  {[
                    "Canine Distemper Virus (CDV)",
                    "Canine Parainfluenza Virus (CPIV)",
                    "Canine Coronavirus (CCV)",
                    "Canine Parvovirus (CPV)",
                    "Canine Adenovirus type II (CAV-2)",
                    "Canine Respiratory Pathogen Panel"
                  ].map((kit, i) => (
                    <li key={i} className="text-gray-700">• {kit}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <img src={otherKits} alt="Other Kits" className="w-full h-48 object-cover" />
              <div className="p-4 bg-gray-50">
                <h3 className="text-xl font-semibold text-primary mb-2">Canine/Feline & Other</h3>
                <ul className="space-y-1">
                  {[
                    "Mycoplasma (M)",
                    "Toxoplasma (TOX)",
                    "Babesia canis (B.canis)",
                    "Babesia gibsoni (B.gibsoni)",
                    "Bordetella Bronchiseptica (Bb)",
                    "Lyme disease (Borrelia)"
                  ].map((kit, i) => (
                    <li key={i} className="text-gray-700">• {kit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Operation Workflow */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Operation Workflow</h2>
          <div className="grid sm:grid-cols-4 gap-6">
            {[
              { img: step1, label: "Obtain sample" },
              { img: step2, label: "Transfer sample to tube" },
              { img: step3, label: "Insert tube and start test" },
              { img: step4, label: "Read results" }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <img src={step.img} alt={step.label} className="h-40 mx-auto mb-3 object-contain" />
                <h3 className="font-semibold text-lg">Step {i+1}</h3>
                <p className="text-gray-600">{step.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Section */}
        <section className="mb-16 bg-gray-50 p-8 rounded-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img src={technology} alt="PCR Technology" className="rounded-lg shadow" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-primary mb-6">Technology</h2>
              <p className="text-lg mb-4">
                MNC-HIP fluorescence-based Real-time PCR utilizes a bottom-illumination optical detection system and repeated thermal cycling for DNA detection.
              </p>
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">PCR Components:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Double Stranded DNA</li>
                  <li>Free nucleotides</li>
                  <li>Enzyme (Taq polymerase)</li>
                  <li>Primers</li>
                  <li>MgCl<sub>2</sub> and buffer</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Thermal Cycling Steps:</h3>
                <ul className="space-y-2">
                  <li><strong>Denaturation:</strong> 93°C</li>
                  <li><strong>Annealing:</strong> 55°C</li>
                  <li><strong>Extension:</strong> 72°C</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center py-8">
          <Link
            to="/contact"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-md hover:scale-105">
            FOR MORE INFO CONTACT US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pcr;