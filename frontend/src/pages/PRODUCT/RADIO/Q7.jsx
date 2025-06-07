import React from 'react';
import { Link } from 'react-router-dom';
import video1 from '../../../assets/LAP/Q7/video(1).mp4';
import img1 from '../../../assets/LAP/Q7/qdevice(1.1).png';
import img2 from '../../../assets/LAP/Q7/qdevice(2.2).gif';
import img3 from '../../../assets/LAP/Q7/d1(3.3).png';
import img4 from '../../../assets/LAP/Q7/d1(4.4).gif';
import img5 from '../../../assets/LAP/Q7/d1(5.5).png';
import img6 from '../../../assets/LAP/Q7/d1(6.6).png';
import img7 from '../../../assets/LAP/Q7/d1(7.7).png';

const Q7 = () => {
  return (
    <div className="px-4 sm:px-8 py-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-4">Q7 Wireless Handheld Ultrasound</h1>
      <p className="text-lg text-gray-700 mb-8">Pocket Size, Professional Performance.</p>

      <div className="space-y-10">

        {/* Intro */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img src={img1} alt="Q7 handheld device" className="w-full sm:w-1/2 rounded shadow" />
          <p className="text-gray-600">
            Q7 wireless handheld ultrasound can connect to computers, tablets, and phones. It's perfect for use in anesthesia,
            emergency, ICU, outpatient clinics, consultations, and field rescue.
          </p>
        </div>

        {/* HD Imaging */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img src={img2} alt="High definition output" className="w-full sm:w-1/2 rounded shadow" />
          <p className="text-gray-600">
            <strong>High definition ultrasound:</strong> Over 10 years of innovation resulted in Soloscan image quality similar
            to mid-range traditional ultrasound systems.
          </p>
        </div>

        {/* Video + Transducer */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <video src={video1} controls className="w-full sm:w-1/2 rounded shadow" />
          <p className="text-gray-600">
            <strong>Six types of transducers:</strong> Hot swap design allows replacing the transducer by freezing the device
            with a single click.
          </p>
        </div>

        {/* Wireless */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img src={img3} alt="Wireless usage in operation rooms" className="w-full sm:w-1/2 rounded shadow" />
          <p className="text-gray-600">
            <strong>Wireless connection:</strong> Improves convenience and safety, especially in sterile environments like ORs.
          </p>
        </div>

        {/* Abdomen + Cardiac */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img src={img4} alt="Abdomen and cardiac transducer" className="w-full sm:w-1/2 rounded shadow" />
          <p className="text-gray-600">
            <strong>Abdomen and cardiac:</strong> A single transducer can scan the abdomen and heart and perform a complete eFast exam.
          </p>
        </div>

        {/* Lightweight */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img src={img5} alt="Lightweight ergonomic design" className="w-full sm:w-1/2 rounded shadow" />
          <p className="text-gray-600">
            <strong>140g net weight:</strong> Designed to reduce hand strain and allow long periods of use.
          </p>
        </div>

        {/* Battery */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img src={img6} alt="Long battery performance" className="w-full sm:w-1/2 rounded shadow" />
          <p className="text-gray-600">
            <strong>Over 4 hours of use:</strong> Powered by patented sonic energy control technology for long continuous sessions.
          </p>
        </div>

        {/* Compatibility */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img src={img7} alt="System compatibility with Windows Android iOS" className="w-full sm:w-1/2 rounded shadow" />
          <p className="text-gray-600">
            <strong>Compatibility:</strong> Works seamlessly with Windows, Android, and iOS systems.
          </p>
        </div>

        {/* External Link */}
        <div className="text-center pt-6">
          <Link
            to="/contact"
            className="inline-block bg-primary text-white hover:bg-primary/90 px-6 py-2 rounded-md transition">
            CONTACT US FOR MORE INFO 
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Q7;