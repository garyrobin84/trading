import React, { useState, useEffect } from 'react';
import { Menu, X, TrendingUp, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const servicesDropdownItems = [
    { name: 'All Services', path: '/services' },
    { name: 'Daily Trading Signals', path: '/daily-trading-signals' },
    { name: 'Market Analysis Tools', path: '/market-analysis' },
    { name: 'Trading Calculators', path: '/trading-calculators' },
    { name: 'Trading Strategies', path: '/trading-strategies' },
    { name: 'Risk Management', path: '/risk-management' },
    { name: 'Educational Blog', path: '/educational-blog' },
    { name: 'Certifications', path: '/certifications' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-2 rounded-lg mr-3">
            <TrendingUp className="text-yellow-500" size={24} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-blue-900">Gary Robinson</span>
            <span className="text-sm text-gray-600 -mt-1">Trading</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={`font-medium transition-colors ${
              location.pathname === '/' ? 'text-blue-900' : 'text-gray-800 hover:text-blue-900'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`font-medium transition-colors ${
              location.pathname === '/about' ? 'text-blue-900' : 'text-gray-800 hover:text-blue-900'
            }`}
          >
            About
          </Link>
          
          {/* Services Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="font-medium text-gray-800 hover:text-blue-900 transition-colors flex items-center py-4">
              Services
              <ChevronDown className="ml-1" size={16} />
            </button>
            
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 group-hover:block">
                {servicesDropdownItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link 
            to="/courses" 
            className={`font-medium transition-colors ${
              location.pathname === '/courses' ? 'text-blue-900' : 'text-gray-800 hover:text-blue-900'
            }`}
          >
            Courses
          </Link>
          <Link 
            to="/mentorship" 
            className={`font-medium transition-colors ${
              location.pathname === '/mentorship' ? 'text-blue-900' : 'text-gray-800 hover:text-blue-900'
            }`}
          >
            Mentorship
          </Link>
          <Link 
            to="/blog" 
            className={`font-medium transition-colors ${
              location.pathname === '/blog' ? 'text-blue-900' : 'text-gray-800 hover:text-blue-900'
            }`}
          >
            Blog
          </Link>
          <Link 
            to="/contact" 
            className={`font-medium transition-colors ${
              location.pathname === '/contact' ? 'text-blue-900' : 'text-gray-800 hover:text-blue-900'
            }`}
          >
            Contact
          </Link>
          <Link to="/booking">
            <Button variant="secondary">
              Book Session
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="text-gray-800" size={24} />
          ) : (
            <Menu className="text-gray-800" size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium text-gray-800 hover:text-blue-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="font-medium text-gray-800 hover:text-blue-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            {/* Mobile Services Menu */}
            <div>
              <button 
                className="font-medium text-gray-800 hover:text-blue-900 transition-colors flex items-center w-full text-left"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <ChevronDown className={`ml-1 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} size={16} />
              </button>
              {isServicesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {servicesDropdownItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block text-gray-600 hover:text-blue-900 transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link 
              to="/courses" 
              className="font-medium text-gray-800 hover:text-blue-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link 
              to="/mentorship" 
              className="font-medium text-gray-800 hover:text-blue-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Mentorship
            </Link>
            <Link 
              to="/blog" 
              className="font-medium text-gray-800 hover:text-blue-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="font-medium text-gray-800 hover:text-blue-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link to="/booking" onClick={() => setIsMenuOpen(false)}>
              <Button 
                variant="secondary"
                fullWidth
              >
                Book Session
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;