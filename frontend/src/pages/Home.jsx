import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Welcome to Innovative ideas
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto mb-12 leading-relaxed">
            Pioneering innovation in medical technology and healthcare solutions
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/about" 
              className="bg-white text-primary hover:bg-primary/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Discover More
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Products & Solutions Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Solutions</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { icon: "🩺", title: "Medical Imaging", desc: "Coming soon: State-of-the-art imaging solutions for diagnostics", link: null },
            { icon: "🔬", title: "In-Vitro Diagnostics", desc: "Coming soon: Advanced laboratory testing technologies", link: null },
            { icon: "📊", title: "Patient Monitoring", desc: "Coming soon: Tools to enhance patient safety and monitoring", link: null },          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 bg-primary/10 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-6xl">{item.icon}</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">{item.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{item.desc}</p>
              <span className="inline-flex items-center text-gray-400 cursor-not-allowed font-medium">
                Coming Soon
                <svg className="w-5 h-5 ml-2 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </section>


          {/* What's New Section */}
            <section className="bg-gradient-to-b from-gray-50 to-white py-24 px-4">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Latest Updates</h2>
                <div className="grid md:grid-cols-2 gap-12">
                  {[
                    {
                      icon: "📰",
                      title: "Industry News",
                      desc: "Stay informed about the latest developments and innovations in medical technology",
                      link: null, // Changed to null to make it "Coming Soon"
                      label: "Coming Soon"
                    },
                    {
                      icon: "📅",
                      title: "Upcoming Events",
                      desc: "Join us at industry events and conferences to learn about our latest innovations",
                      link: "/events",
                      label: "View Events"
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="h-48 bg-primary/10 rounded-xl mb-6 flex items-center justify-center text-5xl">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-semibold mb-4 text-primary">{item.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{item.desc}</p>
                      {item.link ? (
                        <Link
                          to={item.link}
                          className="inline-flex items-center text-primary hover:text-primary/80 font-medium group"
                        >
                          {item.label}
                          <svg
                            className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </Link>
                      ) : (
                        <span className="inline-flex items-center text-gray-400 cursor-not-allowed font-medium">
                          Coming Soon
                          <svg
                            className="w-5 h-5 ml-2 opacity-30"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>


      {/* Call to Action */}
      <section className="bg-primary text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Healthcare?</h2>
          <p className="text-xl mb-12 leading-relaxed">Join us in revolutionizing medical technology and improving patient care worldwide</p>
              <Link 
            to="/contact" 
            className="inline-block bg-[#2cc4a0] text-white hover:bg-[#239f84] px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            CONTACT US
          </Link>

        </div>
      </section>
    </div>
  );
};

export default Home;
