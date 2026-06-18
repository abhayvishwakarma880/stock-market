import React, { useState } from 'react';
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const payload = {
      access_key: "6321f359-02b0-4e8d-be16-c120b165a4bc",
      ...formData
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
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
        "info@tradevoramarket.com",
        "support@tradevoramarket.com"
      ],
      description: "Send your queries and receive professional assistance from our team.",
      action: "Send Email",
      link: "mailto:info@tradevoramarket.com",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Office Address",
      details: [
        "Sector 15A Near shree jaganath temple",
        "Faridabad Pin code 121001"
      ],
      description: "Meet our team and discuss your financial requirements in person.",
      action: "Get Directions",
      link: "https://maps.app.goo.gl/dE47R1rrJB76phPs5",
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
        images={[
          "https://www.svgrepo.com/show/324990/bubble-outcome.svg",
          "https://www.svgrepo.com/show/421828/communication-letter-memo.svg",
          "https://www.svgrepo.com/show/339204/financial-news.svg",
        ]}
        badgeText="CONTACT US"
        badgeIcon={<FaPhoneAlt />}
        title="Let's Start a Conversation"
        // highlightedTitle="About Your Financial Goals"
        subtitle="Whether you have questions about our services, need guidance regarding market opportunities, or wish to connect with our advisory team, we're here to help. Reach out to us through the contact details below and our team will be happy to assist you."
        primaryButton={{
          text: "Call Now",
          link: "tel:+919876543210",
          icon: <FaPhoneAlt />
        }}
        secondaryButton={{
          text: "Email Us",
          link: "mailto:info@tradevoramarket.com",
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

        <div className="relative max-w-5xl md:max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
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
            <h2 className="text-3xl md:text-4xl font-bold text-text">
              Connect With <span className="text-success">Our Team</span>
            </h2>
            <p className="text-text mt-4 max-w-2xl mx-auto">
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
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-success/30 transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-text text-2xl">{card.icon}</div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-text mb-3">{card.title}</h3>

                {/* Details */}
                <div className="space-y-1 mb-4">
                  {card.details.map((detail, idx) => (
                    <p key={idx} className="text-text text-sm">
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

      {/* Contact Form & Map Section */}
      <div className="relative py-20 bg-primary/30">
        <div className="relative max-w-5xl md:max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-success/20 rounded-full px-4 py-2 mb-4">
              <FaMapMarkerAlt className="text-success" size={14} />
              <span className="text-sm font-medium text-success">Get In Touch</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text">
              Send a Message or <span className="text-success">Visit Us</span>
            </h2>
            <p className="text-text/80 mt-4 max-w-2xl mx-auto">
              Conveniently located to serve clients and investors. Fill out the form or visit our office.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card backdrop-blur-sm rounded-3xl p-5 md:p-6 border border-border shadow-2xl flex flex-col h-full"
            >
              <form onSubmit={handleSubmit} className="space-y-5 flex-grow flex flex-col">
                <div>
                  <label className="block text-sm font-semibold text-text mb-1">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="w-full bg-primary/50 text-text px-4 py-2.5 rounded-xl border border-border focus:ring-2 focus:ring-success focus:border-success outline-none transition-all placeholder:text-text/30" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text mb-1">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className="w-full bg-primary/50 text-text px-4 py-2.5 rounded-xl border border-border focus:ring-2 focus:ring-success focus:border-success outline-none transition-all placeholder:text-text/30" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text mb-1">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 98765 43210" className="w-full bg-primary/50 text-text px-4 py-2.5 rounded-xl border border-border focus:ring-2 focus:ring-success focus:border-success outline-none transition-all placeholder:text-text/30" />
                </div>
                <div className="flex-grow">
                  <label className="block text-sm font-semibold text-text mb-1">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows="3" placeholder="Write your message here..." className="w-full h-[80px] bg-primary/50 text-text px-4 py-2.5 rounded-xl border border-border focus:ring-2 focus:ring-success focus:border-success outline-none transition-all resize-none placeholder:text-text/30"></textarea>
                </div>
                {submitStatus === 'success' && (
                  <div className="text-green-500 text-sm font-semibold">Message sent successfully!</div>
                )}
                {submitStatus === 'error' && (
                  <div className="text-red-500 text-sm font-semibold">Failed to send message. Please try again.</div>
                )}
                <div className="pt-1 mt-auto">
                  <button type="submit" disabled={isSubmitting} className="bg-success hover:bg-success/90 disabled:opacity-70 disabled:cursor-not-allowed text-white px-8 py-2.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-success/40 active:scale-95 text-base w-full inline-flex justify-center items-center gap-3">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <FaArrowRight size={14} />}
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card backdrop-blur-sm rounded-3xl overflow-hidden border border-border shadow-2xl h-full min-h-[350px] flex flex-col relative"
            >
              {/* <div className="absolute top-4 left-4 right-4 z-10 bg-card/90 backdrop-blur-md rounded-2xl p-4 border border-border/50 shadow-lg flex items-start gap-4">
                <div className="w-10 h-10 bg-success/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaRegBuilding className="text-success text-lg" />
                </div>
                <div>
                  <h3 className="text-text font-bold text-sm mb-1">Tradevora Market Private Limited</h3>
                  <p className="text-text/80 text-xs leading-relaxed">
                    Business Tower, Financial District<br />
                    Lucknow, UP 226010
                  </p>
                </div>
              </div> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1x3558.563454469641!2x80.9467375!3x26.8461818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd6b463c9cf9%3A0x5a2d5b9c3e3d9e3a!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
                className="flex-grow w-full h-full"
              ></iframe>
            </motion.div>
          </div>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
              Ready To Discuss Your Financial Journey?
            </h2>
            <p className="text-text/90 text-lg mb-8 max-w-2xl mx-auto">
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
                href="mailto:info@tradevoramarket.com"
                className="bg-card-hover border border-border-hover text-text hover:bg-white/20 px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300"
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
                className="bg-card-hover border border-border-hover text-text hover:bg-white/20 px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300"
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