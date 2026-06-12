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
    { name: 'Market Insights', href: '/insights' },
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
      <div className={`hidden lg:block transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`} style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Left - Contact Info */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-muted hover:text-white transition-colors cursor-pointer group">
                <div className="p-1 rounded-full bg-white/10 group-hover:bg-success/20 transition-colors">
                  <FiPhone size={12} className="text-success" />
                </div>
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-muted hover:text-white transition-colors cursor-pointer group">
                <div className="p-1 rounded-full bg-white/10 group-hover:bg-success/20 transition-colors">
                  <FiMail size={12} className="text-success" />
                </div>
                <span className="text-sm">info@stockwise.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <div className="p-1 rounded-full bg-white/10">
                  <FiClock size={12} className="text-success" />
                </div>
                <span className="text-sm">Mon - Sat : 9:00 AM - 6:00 PM</span>
              </div>
            </div>

            {/* Right - Live Market Ticker */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 px-3 py-1 rounded-full bg-white/5">
                <div className="flex items-center gap-1">
                  <span className="text-xs text-muted">NIFTY 50</span>
                  <span className="text-xs text-success font-semibold">+245.30</span>
                  <FiArrowUpRight size={10} className="text-success" />
                </div>
                <div className="w-px h-3 bg-white/20"></div>
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
          isScrolled ? 'shadow-xl bg-white/95 backdrop-blur-sm' : 'bg-white shadow-sm'
        }`}
        style={{ borderBottom: '1px solid #E2E8F0' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section with Live Chart */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary-gradient flex items-center justify-center shadow-lg">
                  <FiTrendingUp size={24} className="text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-white"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-bold text-xl tracking-tight text-text">
                  Stock<span className="text-success">Wise</span>
                </h1>
                <p className="text-xs text-muted">Financial Advisory</p>
              </div>
              
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
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-5 py-2 text-text font-medium rounded-lg hover:bg-background transition-all duration-200 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-success transition-all duration-300 group-hover:w-6 group-hover:left-1/2 group-hover:-translate-x-1/2"></span>
                </a>
              ))}
            </div>

            {/* Right Side - CTA & Mobile Menu */}
            <div className="flex items-center gap-4">
              <button className="hidden md:flex items-center gap-2 bg-success hover:bg-hover text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                Get Free Consultation
                <FiArrowUpRight size={16} />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-background transition-colors text-text"
              >
                {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Modern Design */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4 px-6 shadow-xl">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 text-text font-medium rounded-xl hover:bg-background hover:text-success transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-gray-100 my-2"></div>
              <button className="flex items-center justify-center gap-2 bg-success hover:bg-hover text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 mt-2">
                Get Free Consultation
                <FiArrowUpRight size={16} />
              </button>
              
              {/* Mobile Contact Info */}
              <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
                <div className="flex items-center gap-3 text-muted">
                  <FiPhone size={14} className="text-success" />
                  <span className="text-sm">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3 text-muted">
                  <FiMail size={14} className="text-success" />
                  <span className="text-sm">info@stockwise.com</span>
                </div>
                <div className="flex items-center gap-6 pt-2">
                  <FaFacebookF size={14} className="text-muted hover:text-success cursor-pointer transition-colors" />
                  <FaInstagram size={14} className="text-muted hover:text-success cursor-pointer transition-colors" />
                  <FaLinkedinIn size={14} className="text-muted hover:text-success cursor-pointer transition-colors" />
                  <FaTwitter size={14} className="text-muted hover:text-success cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Add this CSS to your global file */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .mobile-menu-open {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;