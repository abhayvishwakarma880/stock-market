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
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-conditions" },
  ];

  const services = [
    { name: "Equity Services", href: "/services/equity" },
    { name: "Derivatives (F&O)", href: "/services/derivatives" },
    { name: "Commodities", href: "/services/commodities" },
    { name: "Portfolio Review", href: "/services/portfolio-review" },
    { name: "Market Research", href: "/services/market-research" },
    { name: "Investment Consultation", href: "/services/investment-consultation" },
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
              <img loading="lazy" src="/assets/images/logo.png" alt="Tradevora Market" className="h-10 object-contain" />
              <div>
                <h2 className="text-white font-bold text-xl">
                  Tradevora<span className="text-success"> Market</span>
                </h2>
                <p className="text-slate-400 text-xs">Financial Advisory</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              Tradevora Market Private Limited provides professional stock market solutions, including Equity, Derivatives, and Commodities services. Our focus is on research-driven strategies, transparency, and long-term client relationships.
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
                  <p className="text-sm">Sector 15A, Near Shree Jagannath Temple</p>
                  <p className="text-sm">
                    Faridabad – 121001, Haryana, India
                  </p>
                </a>
              </div>

              <div className="flex items-center gap-3 group">
                <FaPhoneAlt className="text-success group-hover:scale-110 transition-transform" />
                <a
                  href="tel:+917839564218"
                  className="text-slate-300 hover:text-success transition-colors text-sm"
                >
                  +91 78395 64218
                </a>
              </div>

              <div className="flex items-center gap-3 group">
                <FaEnvelope className="text-success group-hover:scale-110 transition-transform" />
                <a
                  href="mailto:info@tradevoramarket.com"
                  className="text-slate-300 hover:text-success transition-colors text-sm"
                >
                   info@tradevorafinancials.com
                </a>
              </div>

              {/* <div className="flex items-center gap-3 group">
                <FaRegEnvelope className="text-success group-hover:scale-110 transition-transform" />
                <a
                  href="mailto:support@tradevoramarket.com"
                  className="text-slate-300 hover:text-success transition-colors text-sm"
                >
                  support@tradevoramarket.com
                </a>
              </div> */}

              <div className="flex items-center gap-3 group">
                <FaClock className="text-success group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-slate-300 text-sm">
                    Mon – Sat | 9:00 AM – 6:00 PM
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
          <div className="flex flex-col items-center gap-4">
            <div className="text-center max-w-[85%]">
              <p className="text-slate-500 text-xs">
                Disclaimer: Investments in the securities market are subject to market risks. Past performance is not indicative of future results. Please read all related documents carefully before making any investment decisions.
              </p>
            </div>

            <div className="text-slate-400 text-sm flex flex-wrap items-center justify-center gap-1.5">
              <span>
                © {currentYear} Tradevora Market Private Limited. All Rights Reserved. Crafted by
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
