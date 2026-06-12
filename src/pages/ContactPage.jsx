import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaWhatsapp,
  FaArrowRight,
  FaChartLine,
  FaChartBar,
  FaChartPie,
  FaUserCheck,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaBuilding,
  FaRegBuilding
} from 'react-icons/fa';
import Hero from '../components/Hero';

const ContactPage = () => {
  const contactCards = [
    {
      icon: <FaPhoneAlt />,
      title: "Call Us",
      details: [
        "+91 98765 43210",
        "+91 98765 43211"
      ],
      description: "Speak directly with our advisory team during business hours.",
      action: "Call Now",
      link: "tel:+919876543210",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      details: [
        "info@stockwise.com",
        "support@stockwise.com"
      ],
      description: "Send your queries and receive professional assistance from our team.",
      action: "Send Email",
      link: "mailto:info@stockwise.com",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Office Address",
      details: [
        "StockWise Financial Advisory",
        "Business Tower, Financial District",
        "Lucknow, Uttar Pradesh – 226010",
        "India"
      ],
      description: "Meet our team and discuss your financial requirements in person.",
      action: "Get Directions",
      link: "https://maps.google.com",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      details: [
        "Monday – Friday: 09:00 AM – 06:00 PM",
        "Saturday: 09:00 AM – 02:00 PM",
        "Sunday: Closed"
      ],
      description: "Visit us during business hours for assistance.",
      action: "Schedule Meeting",
      link: "#",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10"
    }
  ];

  const services = [
    {
      icon: <FaChartLine />,
      title: "Equity Advisory",
      description: "Research-driven insights for equity market participants seeking informed investment decisions.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaChartBar />,
      title: "Derivative Analysis",
      description: "Market analysis and strategic guidance across futures and options segments.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaChartPie />,
      title: "Index Insights",
      description: "Understanding market direction through benchmark index research and trend evaluation.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaUserCheck />,
      title: "Investment Guidance",
      description: "Helping investors build confidence through professional market understanding.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedinIn />, name: "LinkedIn", link: "https://linkedin.com", color: "bg-blue-700" },
    { icon: <FaFacebookF />, name: "Facebook", link: "https://facebook.com", color: "bg-blue-600" },
    { icon: <FaInstagram />, name: "Instagram", link: "https://instagram.com", color: "bg-pink-600" },
    { icon: <FaTwitter />, name: "Twitter (X)", link: "https://twitter.com", color: "bg-black" },
    { icon: <FaYoutube />, name: "YouTube", link: "https://youtube.com", color: "bg-red-600" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative overflow-hidden bg-primary">
      
      {/* Hero Section */}
      <Hero 
        backgroundImage="https://t4.ftcdn.net/jpg/05/86/20/87/360_F_586208793_3KgswmfW0XqXCgbpGFSCDWQ7m1YT2lHr.jpg"
        badgeText="CONTACT US"
        badgeIcon={<FaPhoneAlt />}
        title="Let's Start a Conversation"
        highlightedTitle="About Your Financial Goals"
        subtitle="Whether you have questions about our services, need guidance regarding market opportunities, or wish to connect with our advisory team, we're here to help. Reach out to us through the contact details below and our team will be happy to assist you."
        primaryButton={{
          text: "Call Now",
          link: "tel:+919876543210",
          icon: <FaPhoneAlt />
        }}
        secondaryButton={{
          text: "Email Us",
          link: "mailto:info@stockwise.com",
          icon: <FaEnvelope />
        }}
        showStats={false}
      />

      {/* Contact Information Cards - 4 Premium Cards */}
      <div className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-success/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-success/20 rounded-full px-4 py-2 mb-4">
              <FaBuilding className="text-success" size={14} />
              <span className="text-sm font-medium text-success">Get In Touch</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Connect With <span className="text-success">Our Team</span>
            </h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactCards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-success/30 transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white text-2xl">{card.icon}</div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>

                {/* Details */}
                <div className="space-y-1 mb-4">
                  {card.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-300 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-400 text-xs mb-4 leading-relaxed">
                  {card.description}
                </p>

                {/* Action Button */}
                <a 
                  href={card.link}
                  className={`inline-flex items-center gap-2 text-sm font-medium bg-gradient-to-r ${card.color} bg-clip-text text-transparent hover:gap-3 transition-all`}
                >
                  {card.action}
                  <FaArrowRight size={12} />
                </a>

                {/* Hover Border Effect */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* How We Can Help Section */}
      <div className="relative py-20 bg-gradient-to-b from-primary to-primary/95">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-success/20 rounded-full px-4 py-2 mb-4">
              <FaUserCheck className="text-success" size={14} />
              <span className="text-sm font-medium text-success">How We Can Help</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Professional Guidance For{' '}
              <span className="text-success">Your Financial Journey</span>
            </h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Our team provides expert insights across multiple domains to support your investment decisions
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:border-success/30 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white text-xl">{service.icon}</div>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Location & Map Section */}
      <div className="relative py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-success/20 rounded-full px-4 py-2 mb-4">
              <FaMapMarkerAlt className="text-success" size={14} />
              <span className="text-sm font-medium text-success">Find Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Visit Our{' '}
              <span className="text-success">Office</span>
            </h2>
            <p className="text-gray-300 mt-4">
              Conveniently located to serve clients and investors. Visit our office during business hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Office Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaRegBuilding className="text-success text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">StockWise Financial Advisory</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Business Tower, Financial District<br />
                    Lucknow, Uttar Pradesh – 226010<br />
                    India
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-gray-400 text-sm">
                      <span className="text-success">Landmark:</span> Near Phoenix Mall
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 h-80"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1x3558.563454469641!2x80.9467375!3x26.8461818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd6b463c9cf9%3A0x5a2d5b9c3e3d9e3a!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="StockWise Office Location"
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="relative py-20 bg-gradient-to-b from-primary to-primary/95">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-success/20 rounded-full px-4 py-2 mb-4">
              <FaWhatsapp className="text-success" size={14} />
              <span className="text-sm font-medium text-success">Connect With Us Online</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Follow Us On{' '}
              <span className="text-success">Social Media</span>
            </h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Stay updated with market trends, company updates, and educational content through our social channels.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} w-16 h-16 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all duration-300 shadow-lg hover:shadow-xl`}
              >
                <div className="text-white text-xl">{social.icon}</div>
                <span className="text-white text-xs font-medium">{social.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Consultation CTA Section */}
      <div className="relative py-20 bg-gradient-to-r from-success to-secondary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready To Discuss Your Financial Journey?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Our team is available to answer your questions, provide information about our services, and help you understand how professional market research can support your financial objectives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+919876543210"
                className="bg-white text-success hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg"
              >
                <FaPhoneAlt />
                Call Now
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:info@stockwise.com"
                className="bg-white/10 border border-white/20 text-white hover:bg-white/20 px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300"
              >
                <FaEnvelope />
                Email Us
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 border border-white/20 text-white hover:bg-white/20 px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300"
              >
                <FaWhatsapp />
                WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="relative py-8 bg-primary/95">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-xs leading-relaxed">
            Disclaimer: The information provided on this website is for educational and informational purposes only. 
            Investments in securities markets are subject to market risks. Please read all related documents 
            carefully before making investment decisions. Past performance does not guarantee future returns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;