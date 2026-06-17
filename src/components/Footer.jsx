import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTelegram,
  FaWhatsapp,
  FaChartLine,
  FaArrowRight,
  FaShieldAlt,
  FaHeadset,
  FaRegEnvelope,
  FaMobileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Market Insights", href: "/insights" },
    { name: "Get In Touch", href: "/contact" },
    // { name: "FAQ", href: "/faq" },
  ];

  const services = [
    { name: "Equity Advisory", href: "/services/equity" },
    { name: "Derivative Services", href: "/services/derivatives" },
    { name: "Commodities Services", href: "/services/commodities" },
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, href: "https://facebook.com", label: "Facebook" },
    { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com", label: "LinkedIn" },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com",
      label: "Instagram",
    },
    { icon: <FaYoutube />, href: "https://youtube.com", label: "YouTube" },
    { icon: <FaTelegram />, href: "https://telegram.org", label: "Telegram" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="relative bg-slate-900 pt-16 pb-8 overflow-hidden text-slate-200">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-success/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Column 1 - Brand Info */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-success to-blue-600 rounded-lg flex items-center justify-center">
                <FaChartLine className="text-white text-xl" />
              </div>
              <div>
                <h2 className="text-white font-bold text-xl">
                  Tradevora<span className="text-success"> Market</span>
                </h2>
                <p className="text-slate-400 text-xs">Financial Advisory</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              India's most trusted financial advisory platform. We help
              investors achieve their financial goals through expert guidance
              and research-backed strategies.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialIcons.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-slate-800 hover:bg-success/20 rounded-lg flex items-center justify-center text-slate-300 hover:text-success transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold text-lg mb-4 relative inline-block">
              Quick Links
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-success rounded-full"></div>
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-success transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <FaArrowRight className="text-success opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Our Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold text-lg mb-4 relative inline-block">
              Our Services
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-success rounded-full"></div>
            </h3>
            <ul className="space-y-2">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link
                    to={service.href}
                    className="text-slate-300 hover:text-success transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <FaArrowRight className="text-success opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold text-lg mb-4 relative inline-block">
              Get In Touch
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-success rounded-full"></div>
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 group">
                <FaMapMarkerAlt className="text-success mt-0.5 group-hover:scale-110 transition-transform" />
                <a href="https://maps.app.goo.gl/dE47R1rrJB76phPs5" target="_blank" rel="noopener noreferrer" className="block text-slate-300 hover:text-success transition-colors">
                  <p className="text-sm">Sector 15A Near shree jaganath temple</p>
                  <p className="text-sm">
                    Faridabad Pin code 121001
                  </p>
                </a>
              </div>

              <div className="flex items-center gap-3 group">
                <FaPhoneAlt className="text-success group-hover:scale-110 transition-transform" />
                <a
                  href="tel:+919876543210"
                  className="text-slate-300 hover:text-success transition-colors text-sm"
                >
                  +91 98765 43210
                </a>
              </div>

              <div className="flex items-center gap-3 group">
                <FaEnvelope className="text-success group-hover:scale-110 transition-transform" />
                <a
                  href="mailto:info@tradevoramarket.com"
                  className="text-slate-300 hover:text-success transition-colors text-sm"
                >
                  info@tradevoramarket.com
                </a>
              </div>

              <div className="flex items-center gap-3 group">
                <FaRegEnvelope className="text-success group-hover:scale-110 transition-transform" />
                <a
                  href="mailto:support@tradevoramarket.com"
                  className="text-slate-300 hover:text-success transition-colors text-sm"
                >
                  support@tradevoramarket.com
                </a>
              </div>

              <div className="flex items-center gap-3 group">
                <FaClock className="text-success group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-slate-300 text-sm">
                    Mon - Sat: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-slate-400 text-xs">Sunday Closed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-slate-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm text-center md:text-left flex flex-wrap items-center justify-center md:justify-start gap-1.5">
              <span>
                © {currentYear} Tradevora Market Private Limited. Crafted by
              </span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.codecrafter.co.in/"
                className="inline-flex items-center hover:opacity-80 transition-opacity"
              >
                <img loading="lazy"
                  src="https://mango.codecrafter.co.in/assets/ccws-l-lAMUu5.png"
                  alt="CodeCrafter Logo"
                  className="h-6 object-contain"
                />
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                to="/privacy-policy"
                className="text-slate-400 hover:text-success transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-slate-600">|</span>
              <Link
                to="/terms-conditions"
                className="text-slate-400 hover:text-success transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-slate-500 text-xs">
              Disclaimer: Stock market investments are subject to market risks.
              Please read all scheme related documents carefully before
              investing.
            </p>
          </div>
        </motion.div>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-success hover:bg-hover text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
        >
          <FaWhatsapp
            size={28}
            className="group-hover:scale-110 transition-transform"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
