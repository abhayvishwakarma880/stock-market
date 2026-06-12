import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaChartLine, 
  FaChartBar, 
  FaChartPie,
  FaArrowRight,
  FaCheckCircle,
  FaShieldAlt,
  FaClock,
  FaMobileAlt,
  FaHeadset,
  FaUsers,
  FaTrophy,
  FaRocket,
  FaGem,
  FaRegLightbulb
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Equity Services",
      icon: <FaChartLine size={40} />,
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
      badge: "Most Popular",
      description: "Comprehensive equity trading and investment solutions for long-term wealth creation and short-term gains.",
      features: [
        "Cash Market Trading (Delivery & Intraday)",
        "IPO Investments & Allotment Support",
        "Portfolio Management Services (PMS)",
        "Smallcase & Stock Basket Investments",
        "Fundamental & Technical Research Reports",
        "SIP in Stocks (Systematic Investment Plan)"
      ],
      benefits: [
        { icon: <FaRocket />, text: "High Growth Potential" },
        { icon: <FaShieldAlt />, text: "SEBI Regulated" },
        { icon: <FaClock />, text: "Real-time Execution" }
      ],
      ctaText: "Start Equity Trading",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      iconColor: "text-blue-500"
    },
    {
      id: 2,
      title: "Derivative Services",
      icon: <FaChartBar size={40} />,
      image: "https://mtr-cdn.com/images/mceu_64415409811618248473803.width-648.png",
      badge: "High Returns",
      description: "Expert F&O trading strategies with proper risk management to maximize returns in volatile markets.",
      features: [
        "Futures & Options (F&O) Trading",
        "Hedging Strategies for Portfolio Protection",
        "Options Selling Strategies (Theta Decay)",
        "Index & Stock Futures Trading",
        "Advanced Option Greeks Analysis",
        "Spread Trading & Arbitrage Opportunities"
      ],
      benefits: [
        { icon: <FaGem />, text: "Leverage Benefits" },
        { icon: <FaShieldAlt />, text: "Risk Hedging" },
        { icon: <FaRegLightbulb />, text: "Strategic Trading" }
      ],
      ctaText: "Explore Derivatives",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      iconColor: "text-purple-500"
    },
    {
      id: 3,
      title: "Index Services",
      icon: <FaChartPie size={40} />,
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800",
      badge: "Low Risk",
      description: "Diversified index-based investments for stable returns with lower volatility and market risk.",
      features: [
        "Nifty 50 & Sensex Investment Strategies",
        "Bank Nifty & Sectoral Index Trading",
        "Index ETFs & Index Funds Advisory",
        "Passive Investment Portfolio Design",
        "Index Options Hedging",
        "Benchmark Index Tracking & Rebalancing"
      ],
      benefits: [
        { icon: <FaUsers />, text: "Diversified Risk" },
        { icon: <FaTrophy />, text: "Stable Returns" },
        { icon: <FaMobileAlt />, text: "Easy Tracking" }
      ],
      ctaText: "Invest in Index",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      iconColor: "text-green-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <div className="relative overflow-hidden bg-primary py-20 md:py-28">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-success rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      {/* Grid Pattern Overlay */}
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
            <FaChartLine className="text-success" size={16} />
            <span className="text-sm font-medium text-success">Our Services</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Comprehensive{' '}
            <span className="text-success relative inline-block">
              Trading Solutions
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
            Professional trading and investment services tailored to your financial goals
          </p>
        </motion.div>

        {/* Services Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {/* Image Section */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-2xl overflow-hidden shadow-2xl group ${
                  index === 1 ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="relative h-80 lg:h-96 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-30 group-hover:opacity-20 transition-opacity`}></div>
                  
                  {/* Badge */}
                  <div className={`absolute top-4 right-4 bg-primary/90 backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/10`}>
                    <span className={`text-sm font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Icon Overlay */}
                  <div className={`absolute bottom-4 left-4 ${service.bgColor} rounded-xl p-3 backdrop-blur-sm border ${service.borderColor}`}>
                    <div className={service.iconColor}>
                      {service.icon}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content Section */}
              <div className={`${index === 1 ? 'lg:pr-8 lg:order-1' : 'lg:pl-8 lg:order-2'}`}>
                {/* Title */}
                <motion.h3 
                  initial={{ opacity: 0, x: index === 1 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                >
                  {service.title}
                </motion.h3>

                {/* Description */}
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center gap-2 group"
                    >
                      <FaCheckCircle className={`${service.iconColor} text-sm flex-shrink-0 group-hover:scale-110 transition-transform`} />
                      <span className="text-gray-200 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Benefits Chips */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {service.benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${service.bgColor} border ${service.borderColor} backdrop-blur-sm`}
                    >
                      <span className={service.iconColor}>
                        {benefit.icon}
                      </span>
                      <span className="text-gray-200 text-sm font-medium">{benefit.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${service.color} shadow-lg hover:shadow-2xl transition-all duration-300`}
                >
                  {service.ctaText}
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-success/20 rounded-full animate-ping hidden lg:block"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 border border-secondary/20 rounded-full animate-ping delay-1000 hidden lg:block"></div>
      </div>
    </div>
  );
};

export default Services;