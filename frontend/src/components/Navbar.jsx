import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/Logo-1-removebg-preview.png';

const Navbar = () => {
  const { isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const formatPath = (text) => text.toLowerCase().replace(/\s+/g, '-');

  const fixedCategories = {
    'Lab Devices': ['Chemistry', 'CBC', 'PCR', 'Rapid Test'],
    'Radiology': ['Ultrasound', 'Q7'],
    'Medical': ['Hypermix']
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const toggleProductsMenu = () => {
    setProductsMenuOpen(!productsMenuOpen);
  };

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setProductsMenuOpen(false);
    setExpandedCategories({});
  };

  return (
    <nav className={`bg-white sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo and company name */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <img src={logo} alt="Logo" className="h-12 w-auto md:h-14" />
            <span className="text-xl md:text-2xl font-bold text-primary">Innovative Ideas</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            <Link 
              to="/" 
              className="px-3 py-2 rounded-md text-sm lg:text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="px-3 py-2 rounded-md text-sm lg:text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
            >
              About
            </Link>

            {/* Products Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 rounded-md text-sm lg:text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors flex items-center">
                Products
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-0 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  {Object.entries(fixedCategories).map(([category, subs]) => (
                    <div key={category} className="relative group/sub">
                      <div className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        <span>{category}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <div className="absolute left-full top-0 ml-1 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                        {subs.map((sub) => (
                          <Link
                            key={sub}
                            to={`/products/${formatPath(category)}/${formatPath(sub)}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link 
              to="/contact" 
              className="px-3 py-2 rounded-md text-sm lg:text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center ml-4 space-x-2">
            {isAdmin ? (
              <>
                <Link
                  to="/admin"
                  className="px-4 py-2 rounded-md bg-primary text-white text-sm font-medium shadow hover:bg-primary-dark transition-colors"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-md bg-red-600 text-white text-sm font-medium shadow hover:bg-red-700 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 rounded-md bg-primary text-white text-sm font-medium shadow hover:bg-primary-dark transition-colors"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-xl rounded-b-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={closeAllMenus}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={closeAllMenus}
            >
              About
            </Link>

            {/* Mobile Products Dropdown - النسخة المعدلة */}
            <div className="space-y-1">
              <button
                onClick={toggleProductsMenu}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              >
                <span>Products</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${productsMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {productsMenuOpen && (
                <div className="pl-4 space-y-1">
                  {Object.entries(fixedCategories).map(([category, subs]) => (
                    <div key={category} className="space-y-1">
                      <button
                        onClick={() => toggleCategory(category)}
                        className="w-full flex justify-between items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                      >
                        <span>{category}</span>
                        <svg
                          className={`w-4 h-4 transform transition-transform ${expandedCategories[category] ? 'rotate-90' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {expandedCategories[category] && (
                        <div className="pl-4 space-y-1">
                          {subs.map((sub) => (
                            <Link
                              key={sub}
                              to={`/products/${formatPath(category)}/${formatPath(sub)}`}
                              className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-primary hover:bg-gray-50"
                              onClick={closeAllMenus}
                            >
                              {sub}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={closeAllMenus}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Auth Buttons */}
          <div className="pt-4 pb-3 border-t border-gray-200 px-3">
            {isAdmin ? (
              <div className="space-y-3">
                <Link
                  to="/admin"
                  className="block w-full px-4 py-2 text-center rounded-md bg-primary text-white text-base font-medium shadow hover:bg-primary-dark"
                  onClick={closeAllMenus}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    closeAllMenus();
                  }}
                  className="block w-full px-4 py-2 text-center rounded-md bg-red-600 text-white text-base font-medium shadow hover:bg-red-700"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="block w-full px-4 py-2 text-center rounded-md bg-primary text-white text-base font-medium shadow hover:bg-primary-dark"
                onClick={closeAllMenus}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;