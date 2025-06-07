import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../utils/axiosConfig';
import mapImage from '../assets/vip/2005.jpg'; // Import your local image

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/contact', formData);
      alert('✅ Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Error submitting contact form:', err);
      alert('❌ Failed to send message. Please try again.');
    }
  };

  // Function to open map location
  const openMap = () => {
    window.open('https://www.google.com/maps/place/Tahlia+St,+Al+Aziziyah,+Jeddah,+Saudi+Arabia/@21.5843887,39.1516065,17z/data=!3m1!4b1!4m6!3m5!1s0x15c3d1f9c0d9e1d5:0x8e6b7b2b5b5b5b5b!8m2!3d21.5843887!4d39.1541814!16s%2Fg%2F1td_0z5z?entry=ttu', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Get in touch with our team
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {['name', 'email', 'subject'].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-1">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-greenMain focus:border-greenMain"
                    placeholder={`Your ${field}`}
                    required
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-greenMain focus:border-greenMain"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                  <p 
                    className="text-gray-600 whitespace-pre-line cursor-pointer hover:text-primary"
                    onClick={openMap}
                  >
                    Jeddah, Saudi Arabia, Al Aziziyah Dist. Tahlia St.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">0500450436</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">Info@innova-ids.com</p>
                </div>
              </div>
            </div>
            {/* Clickable Map Image - Using your local image */}
            <div 
              className="relative rounded-xl overflow-hidden cursor-pointer hover:opacity-90 h-64 bg-gray-200 flex items-center justify-center"
              onClick={openMap}
            >
              <img 
                src={mapImage} 
                alt="Our location" 
                className="max-h-full max-w-full object-contain"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <span className="text-white font-medium text-lg bg-black bg-opacity-50 px-4 py-2 rounded">
                  Click to view on Google Maps
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Looking for Support?</h2>
          <p className="text-xl mb-8">Our technical support team is available 24/7</p>
          <Link
            to="/support"
            className="inline-block bg-[#2cc4a0] text-white hover:bg-[#239f84] px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Visit Support Center
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;