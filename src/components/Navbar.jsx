import React, { useState, useEffect } from 'react';
import { 
  FiPhone, 
  FiMail, 
  FiClock, 
  FiMenu, 
  FiX,
  FiTrendingUp,
  FiArrowUpRight
} from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { LineChart, Line } from 'recharts';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Market Insights', href: '/market-insights' },
    { name: 'Contact', href: '/contact' },
  ];

  // Sample chart data for the animated line
  const chartData = [
    { value: 20 },
    { value: 35 },
    { value: 28 },
    { value: 42 },
    { value: 38 },
    { value: 55 },
    { value: 48 },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className={`hidden md:block transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`} style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6 overflow-x-auto scrollbar-hide">
          <div className="flex items-center justify-between min-w-max gap-8 lg:gap-0">
            {/* Left - Contact Info */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-muted hover:text-success transition-colors cursor-pointer group">
                <div className="p-1 rounded-full bg-card-hover group-hover:bg-success/20 transition-colors">
                  <FiPhone size={12} className="text-success" />
                </div>
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-muted hover:text-success transition-colors cursor-pointer group">
                <div className="p-1 rounded-full bg-card-hover group-hover:bg-success/20 transition-colors">
                  <FiMail size={12} className="text-success" />
                </div>
                <span className="text-sm">info@tradevoramarket.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <div className="p-1 rounded-full bg-card-hover">
                  <FiClock size={12} className="text-success" />
                </div>
                <span className="text-sm">Mon - Sat : 9:00 AM - 6:00 PM</span>
              </div>
            </div>

            {/* Right - Live Market Ticker */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 px-3 py-1 rounded-full bg-card">
                <div className="flex items-center gap-1">
                  <span className="text-xs text-muted">NIFTY 50</span>
                  <span className="text-xs text-success font-semibold">+245.30</span>
                  <FiArrowUpRight size={10} className="text-success" />
                </div>
                <div className="w-px h-3 bg-nav-bg/20"></div>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-muted">SENSEX</span>
                  <span className="text-xs text-success font-semibold">+812.45</span>
                  <FiArrowUpRight size={10} className="text-success" />
                </div>
              </div>
              
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a href="#" className="text-muted hover:text-success transition-colors">
                  <FaFacebookF size={13} />
                </a>
                <a href="#" className="text-muted hover:text-success transition-colors">
                  <FaInstagram size={13} />
                </a>
                <a href="#" className="text-muted hover:text-success transition-colors">
                  <FaLinkedinIn size={13} />
                </a>
                <a href="#" className="text-muted hover:text-success transition-colors">
                  <FaTwitter size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-xl bg-nav-bg/95 backdrop-blur-sm' : 'bg-nav-bg shadow-sm'
        }`}
        style={{ borderBottom: '1px solid #E2E8F0' }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo Section with Live Chart */}
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-3">
                {/* <img src="/logo.png" alt="Tradevora Market Private Limited" className="h-10 md:h-12 object-contain" /> */}
                <div>
                  <h1 className="font-bold text-lg md:text-xl tracking-tight text-nav-text">
                    Tradevora<span className="text-success"> Market</span>
                  </h1>
                  <p className="text-[10px] md:text-xs text-muted leading-tight">Financial Advisory</p>
                </div>
              </Link>
              
              {/* Mini Live Chart */}
              <div className="hidden lg:block ml-4 pl-4 border-l border-gray-200">
                <div className="flex items-center gap-2">
                  <LineChart width={80} height={30} data={chartData}>
                    <Line type="monotone" dataKey="value" stroke="#10B981" strokeWidth={2} dot={false} />
                  </LineChart>
                  <span className="text-xs font-semibold text-success">+12.4%</span>
                </div>
              </div>
            </div>

            {/* Navigation Links - Centered */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) => `relative px-5 py-2 font-medium rounded-lg transition-all duration-200 group ${isActive ? 'text-success bg-background' : 'text-nav-text hover:text-success hover:bg-background'}`}
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      <span className={`absolute bottom-0 left-1/2 h-0.5 bg-success transition-all duration-300 -translate-x-1/2 ${isActive ? 'w-6' : 'w-0 group-hover:w-6'}`}></span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Right Side - CTA & Mobile Menu */}
            <div className="flex items-center gap-4">
              <a href="tel:+919876543210" className="hidden md:flex items-center gap-2 bg-success hover:bg-hover text-nav-text px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                Get Free Consultation
                <FiArrowUpRight size={16} />
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-background transition-colors text-nav-text"
              >
                {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Container */}
        <div 
          className={`fixed inset-0 z-[70] lg:hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'visible' : 'invisible'
          }`}
        >
          {/* Overlay */}
          <div 
            className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
              isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div 
            className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-nav-bg shadow-2xl transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-bold text-xl text-nav-text">Menu</h2>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-background text-nav-text transition-colors"
                >
                  <FiX size={24} />
                </button>
              </div>
              
              <div className="flex flex-col gap-2 flex-grow overflow-y-auto scrollbar-hide">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.href}
                    className={({ isActive }) => `px-4 py-3 font-medium rounded-xl transition-all duration-200 ${isActive ? 'bg-success/10 text-success' : 'text-nav-text hover:bg-background hover:text-success'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                ))}
                <div className="h-px bg-gray-100 my-4"></div>
                <a href="tel:+919876543210" className="flex items-center justify-center gap-2 bg-success hover:bg-hover text-nav-text px-6 py-3 rounded-xl font-semibold transition-all duration-300 mt-2 shadow-md">
                  Get Free Consultation
                  <FiArrowUpRight size={16} />
                </a>
                
                {/* Mobile Contact Info */}
                <div className="mt-8 pt-6 border-t border-gray-100 space-y-4">
                  <div className="flex items-center gap-3 text-muted">
                    <FiPhone size={14} className="text-success" />
                    <span className="text-sm">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted">
                    <FiMail size={14} className="text-success" />
                    <span className="text-sm">info@tradevoramarket.com</span>
                  </div>
                  <div className="flex items-center gap-6 pt-4 pb-4">
                    <FaFacebookF size={16} className="text-muted hover:text-success cursor-pointer transition-colors" />
                    <FaInstagram size={16} className="text-muted hover:text-success cursor-pointer transition-colors" />
                    <FaLinkedinIn size={16} className="text-muted hover:text-success cursor-pointer transition-colors" />
                    <FaTwitter size={16} className="text-muted hover:text-success cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Add this CSS to your global file */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default Navbar;