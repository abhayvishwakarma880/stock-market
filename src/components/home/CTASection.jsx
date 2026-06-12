import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaArrowRight, 
  FaWhatsapp, 
  FaPhoneAlt,
  FaChartLine,
  FaShieldAlt,
  FaUsers,
  FaRegClock
} from 'react-icons/fa';

const CTASection = () => {
  const benefits = [
    { icon: <FaChartLine />, text: "Expert Guidance" },
    { icon: <FaShieldAlt />, text: "SEBI Registered" },
    { icon: <FaRegClock />, text: "24/7 Support" },
    { icon: <FaUsers />, text: "10,000+ Investors" }
  ];

  return (
    <div className="relative overflow-hidden py-20 md:py-28">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-success to-secondary"></div>
      
      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
        >
          <span className="text-white text-sm font-medium">🚀 Limited Time Offer</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
        >
          Ready to Start Your{' '}
          <span className="relative inline-block">
            Investment Journey?
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-white/30" viewBox="0 0 100 10">
              <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" fill="none" strokeWidth="2"/>
            </svg>
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          Join 10,000+ successful investors and start your wealth creation journey with expert guidance
        </motion.p>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mb-10"
        >
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="text-white text-lg">{benefit.icon}</div>
              <span className="text-white/90 text-sm">{benefit.text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button className="group bg-white text-success hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Started for Free
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a 
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300"
          >
            <FaWhatsapp />
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex justify-center items-center gap-6 text-white/80 text-sm"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            ))}
          </div>
          <span>4.9 Rating (5,000+ Reviews)</span>
          <span>•</span>
          <span>Trusted by 10,000+ Investors</span>
        </motion.div>
      </div>
    </div>
  );
};

export default CTASection;