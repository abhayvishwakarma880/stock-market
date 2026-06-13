import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaBullseye, 
  FaLightbulb, 
  FaHandshake, 
  FaChartLine, 
  FaShieldAlt, 
  FaClock,
  FaCheckCircle,
  FaUsers,
  FaTrophy,
  FaRocket,
  FaHeart,
  FaEye,
  FaStar,
  FaAward,
  FaGlobe,
  FaRegSmile
} from 'react-icons/fa';

const AboutCompany = () => {
  const achievements = [
    { value: "10,000+", label: "Happy Clients", icon: <FaUsers />, color: "text-blue-500" },
    { value: "₹1000Cr+", label: "Assets Managed", icon: <FaChartLine />, color: "text-green-500" },
    { value: "98%", label: "Client Retention", icon: <FaHeart />, color: "text-purple-500" },
    { value: "15+", label: "Industry Awards", icon: <FaTrophy />, color: "text-yellow-500" }
  ];

  const values = [
    {
      icon: <FaEye />,
      title: "Our Vision",
      description: "To become India's most trusted financial advisory platform, empowering every investor to achieve financial freedom through expert guidance and innovative solutions.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaBullseye />,
      title: "Our Mission",
      description: "To democratize wealth creation by providing transparent, research-driven investment advice and making stock market investing accessible to everyone.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaHandshake />,
      title: "Our Values",
      description: "Integrity, transparency, client-first approach, continuous innovation, and excellence in everything we do define our core values.",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaShieldAlt />,
      title: "SEBI Registered",
      description: "Fully compliant with SEBI regulations, ensuring your investments are safe and secure.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: <FaRocket />,
      title: "5+ Years Experience",
      description: "Over half a decade of expertise in Indian stock markets with proven track record.",
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: <FaClock />,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your trading and investment queries.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: <FaRegSmile />,
      title: "100% Transparency",
      description: "Complete transparency in transactions, charges, and advisory recommendations.",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    }
  ];

  const teamStats = [
    { number: "25+", label: "Expert Advisors", delay: 0.2 },
    { number: "50k+", label: "Research Hours", delay: 0.3 },
    { number: "100+", label: "Webinars Hosted", delay: 0.4 },
    { number: "5000+", label: "5-Star Reviews", delay: 0.5 }
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
    <div className="relative overflow-hidden bg-primary py-1 md:py-8">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-success/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat'
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 bg-success/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4"
          >
            <FaStar className="text-success" size={16} />
            <span className="text-sm font-medium text-success">About Company</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
            India's Most Trusted{' '}
            <span className="text-success relative inline-block">
              Financial Partner
              <motion.svg 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-2 left-0 h-3 text-success/30" 
                viewBox="0 0 100 10"
              >
                <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" fill="none" strokeWidth="2"/>
              </motion.svg>
            </span>
          </h2>
          
          <p className="text-text text-lg">
            Empowering investors since 2019 with expert advisory and innovative financial solutions
          </p>
        </motion.div>

        {/* Company Intro Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          {/* Left Side - Company Story */}
          <motion.div variants={itemVariants}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-success/20 rounded-full filter blur-2xl"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-text mb-4 relative">
                Our Journey
              </h3>
              <div className="space-y-4 text-text">
                <p className="leading-relaxed">
                  Founded in 2019 with a vision to simplify stock market investing, <span className="text-success font-semibold">Tradevora Market Private Limited</span> has grown into one of India's most trusted financial advisory platforms. We've helped over 10,000+ investors achieve their financial goals through our research-driven approach.
                </p>
                <p className="leading-relaxed">
                  Our team of SEBI-registered experts combines decades of market experience with cutting-edge technology to provide actionable insights and personalized investment strategies.
                </p>
                <p className="leading-relaxed">
                  We believe that everyone deserves access to quality financial advice. That's why we've made it our mission to democratize wealth creation and make stock market investing transparent, simple, and profitable for all.
                </p>
              </div>

              {/* Achievements Grid */}
              {/* <div className="grid grid-cols-2 gap-4 mt-8">
                {achievements.map((achievement, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="bg-card backdrop-blur-sm rounded-xl p-4 text-center border border-border"
                  >
                    <div className={`${achievement.color} text-2xl mb-2 flex justify-center`}>
                      {achievement.icon}
                    </div>
                    <div className="text-xl font-bold text-text">{achievement.value}</div>
                    <div className="text-xs text-gray-400">{achievement.label}</div>
                  </motion.div>
                ))}
              </div> */}
            </div>
          </motion.div>

          {/* Right Side - Image with Experience Badge */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
                alt="Trading Floor"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.4)] to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Vision Mission Values Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-card backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-success/30 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${value.gradient} p-0.5 mb-6`}>
                <div className="w-full h-full bg-primary rounded-xl flex items-center justify-center">
                  <div className="text-text text-2xl">{value.icon}</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-text mb-3">{value.title}</h3>
              <p className="text-text leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-text mb-3">
              Why Choose <span className="text-success">Tradevora Market Private Limited</span>
            </h3>
            <p className="text-text">What makes us different from the rest</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-card backdrop-blur-sm rounded-xl p-6 text-center border border-border hover:border-success/30 transition-all duration-300"
              >
                <div className={`${item.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <div className={`${item.color} text-2xl`}>{item.icon}</div>
                </div>
                <h4 className="text-text font-bold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Stats Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-r from-success/10 to-secondary/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-success mb-2">
                  {stat.number}
                </div>
                <div className="text-text-text text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            variants={itemVariants}
            className="text-center mt-8 pt-8 border-t border-border"
          >
            <div className="flex flex-wrap justify-center gap-6 text-sm text-text-text">
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-success" size={14} />
                SEBI Registered
              </span>
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-success" size={14} />
                ISO Certified
              </span>
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-success" size={14} />
                MSME Registered
              </span>
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-success" size={14} />
                DPIIT Recognized
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute top-40 right-20 w-16 h-16 border border-success/20 rounded-full animate-ping hidden lg:block"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border border-secondary/20 rounded-full animate-ping delay-1000 hidden lg:block"></div>
      </div>
    </div>
  );
};

export default AboutCompany;