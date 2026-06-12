import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaShieldAlt, 
  FaChartLine, 
  FaClock, 
  FaUserCheck, 
  FaExclamationTriangle, 
  FaComments,
  FaCheckCircle,
  FaUsers,
  FaRupeeSign,
  FaHeadset,
  FaTrophy
} from 'react-icons/fa';

const WhyChooseUs = () => {
  // Features Data - Right Side Cards
  const features = [
    {
      id: 1,
      icon: <FaShieldAlt size={32} />,
      title: "SEBI Registered Experts",
      description: "All our advisors are certified SEBI registered professionals with years of market experience",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      iconColor: "text-blue-500"
    },
    {
      id: 2,
      icon: <FaChartLine size={32} />,
      title: "Research Driven Strategy",
      description: "Data-backed investment strategies powered by advanced analytics and market research",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
      iconColor: "text-green-500"
    },
    {
      id: 3,
      icon: <FaClock size={32} />,
      title: "Real Time Market Insights",
      description: "Live market updates and instant alerts for better decision making",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      iconColor: "text-purple-500"
    },
    {
      id: 4,
      icon: <FaUserCheck size={32} />,
      title: "Personalized Advisory",
      description: "Customized investment plans tailored to your financial goals and risk appetite",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/10",
      iconColor: "text-orange-500"
    },
    {
      id: 5,
      icon: <FaExclamationTriangle size={32} />,
      title: "Risk Management Focus",
      description: "Systematic approach to minimize risks and maximize returns on investment",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500/10",
      iconColor: "text-red-500"
    },
    {
      id: 6,
      icon: <FaComments size={32} />,
      title: "Transparent Communication",
      description: "Regular portfolio updates and clear communication at every step of your journey",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-500/10",
      iconColor: "text-teal-500"
    }
  ];

  const stats = [
    { value: "10,000+", label: "Happy Investors", icon: <FaUsers />, delay: 0.2 },
    { value: "₹500 Cr+", label: "Assets Managed", icon: <FaRupeeSign />, delay: 0.3 },
    { value: "98%", label: "Satisfaction Rate", icon: <FaTrophy />, delay: 0.4 },
    { value: "24/7", label: "Expert Support", icon: <FaHeadset />, delay: 0.5 }
  ];

  // Animation Variants
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1600')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/90 to-primary/95"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 bg-success/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4"
          >
            <FaCheckCircle className="text-success" size={16} />
            <span className="text-sm font-medium text-success">Trusted By 10,000+ Investors</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Investors{' '}
            <span className="text-success relative inline-block">
              Choose Us
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
          
          <p className="text-gray-300 text-lg">
            Experience the difference with our comprehensive approach to wealth management
          </p>
        </motion.div>

        {/* Two Column Layout - Left Stats + Right Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Side - Stats Section Only */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col justify-center h-full"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-white mb-6 text-center lg:text-left"
            >
              Our <span className="text-success">Achievements</span>
            </motion.h3>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/10 hover:bg-white/10 transition-all duration-300 h-[140px] flex flex-col justify-center"
                >
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: stat.delay, type: "spring", duration: 0.6 }}
                    className="text-success mb-2 flex justify-center text-2xl"
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: stat.delay }}
                    className="text-2xl md:text-3xl font-bold text-white mb-1"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-300 text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Trust Badge */}
            <motion.div 
              variants={itemVariants}
              className="mt-6 p-4 bg-success/10 rounded-xl border border-success/20 text-center"
            >
              <p className="text-success font-semibold">⭐ 4.9 Rating | 5000+ Google Reviews</p>
            </motion.div>
          </motion.div>

          {/* Right Side - 6 Cards Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer h-[140px] flex flex-col"
                >
                  {/* Icon */}
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className={`w-10 h-10 rounded-xl ${feature.bgColor} flex items-center justify-center mb-3`}
                  >
                    <div className={`${feature.iconColor} scale-75`}>
                      {feature.icon}
                    </div>
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-white font-bold text-base mb-1">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-xs leading-relaxed flex-grow">
                    {feature.description}
                  </p>

                  {/* Hover Effect Line */}
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-success rounded-b-2xl origin-left"
                  ></motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path 
            fill="#FFFFFF" 
            fillOpacity="0.05" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>

      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path 
            fill="#FFFFFF" 
            fillOpacity="0.05" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default WhyChooseUs;