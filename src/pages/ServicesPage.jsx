import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaChartLine, 
  FaChartBar, 
  FaChartPie,
  FaCheckCircle,
  FaArrowRight,
  FaShieldAlt,
  FaUserCheck,
  FaRegLightbulb,
  FaRegCommentDots,
  FaUsers,
  FaWhatsapp,
  FaPhoneAlt,
  FaEye,
  FaBrain,
  FaTrophy
} from 'react-icons/fa';
import Hero from '../components/Hero';

const ServicesPage = () => {
  const whyChooseUs = [
    {
      icon: <FaBrain />,
      title: "Research Driven",
      description: "Every recommendation backed by thorough market analysis",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaTrophy />,
      title: "Market Expertise",
      description: "Years of experience in market research and analysis",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaEye />,
      title: "Transparent Approach",
      description: "Clear, honest, and timely communication",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaShieldAlt />,
      title: "Risk Focused",
      description: "Capital protection alongside return generation",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <FaUserCheck />,
      title: "Personalized Guidance",
      description: "Strategies tailored to individual goals",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: <FaRegLightbulb />,
      title: "Long-Term Perspective",
      description: "Focus on sustainable wealth creation",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const services = [
    {
      id: 1,
      title: "Equity Services",
      badge: "Long Term & Short Term",
      description: "Our Equity Services are designed for investors seeking opportunities in individual stocks across various sectors. Through detailed market research, technical analysis, and fundamental evaluation, we help clients identify potential investment opportunities aligned with their financial goals and risk appetite. Whether you are a long-term investor or an active market participant, our equity research aims to provide clarity, confidence, and actionable insights.",
      features: [
        "Stock Research & Analysis",
        "Investment Recommendations",
        "Sector & Industry Insights",
        "Long-Term Wealth Creation Strategies",
        "Risk Assessment & Capital Protection",
        "Portfolio Monitoring Support"
      ],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
      imageSide: "left",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/5",
      iconColor: "text-blue-500"
    },
    {
      id: 2,
      title: "Derivative Services",
      badge: "Futures & Options",
      description: "Our Derivative Services focus on opportunities within Futures and Options markets through research-backed analysis and market trend evaluation. We provide insights that help traders understand market movements, identify potential trading setups, and manage risk effectively in dynamic market conditions. Our approach emphasizes disciplined trading practices, strategy planning, and informed decision-making.",
      features: [
        "Futures Market Analysis",
        "Options Trading Insights",
        "Trend & Momentum Identification",
        "Volatility Assessment",
        "Risk Management Guidance",
        "Strategy-Based Market Approach"
      ],
      image: "https://bl-i.thgim.com/public/incoming/1fi8vo/article65914840.ece/alternates/FREE_1200/IMG_Po05_markets_2_1_188UO57P.jpg",
      imageSide: "right",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/5",
      iconColor: "text-purple-500"
    },
    {
      id: 3,
      title: "Index Services",
      badge: "Nifty & Bank Nifty",
      description: "Our Index Services focus on analyzing broader market movements through major benchmark indices. By tracking market trends, sector performance, and economic indicators, we provide valuable insights into overall market sentiment and potential opportunities. These services help investors and traders better understand market direction and make more informed strategic decisions.",
      features: [
        "Market Trend Analysis",
        "Index Movement Insights",
        "Sector Performance Tracking",
        "Economic & Market Outlook",
        "Sentiment-Based Research",
        "Strategic Market Guidance"
      ],
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800",
      imageSide: "left",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/5",
      iconColor: "text-green-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
        backgroundImage="https://t4.ftcdn.net/jpg/06/41/47/45/360_F_641474594_YyvlVQ0AJamXL2ghFTNN6PbPBnRUAG4F.jpg"
        badgeText="OUR SERVICES"
        badgeIcon={<FaChartLine />}
        title="Professional Market Research &"
        highlightedTitle="Advisory Services"
        subtitle="At Tradevora Market Private Limited, we provide research-driven market insights and strategic guidance across equity, derivative, and index segments. Our objective is to help investors and traders make informed decisions with confidence and discipline."
        primaryButton={{
          text: "Get Free Consultation",
          link: "tel:+919876543210",
          icon: <FaArrowRight />
        }}
        secondaryButton={{
          text: "Contact Experts",
          link: "/contact",
          icon: <FaPhoneAlt />
        }}
        showStats={false}
      />

      {/* Services Sections */}
      {services.map((service, index) => (
        <div key={service.id} className="relative py-12 md:py-16 overflow-hidden">
          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-50`}></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className={`absolute top-20 ${service.imageSide === 'left' ? 'right-10' : 'left-10'} w-64 h-64 bg-gradient-to-r ${service.gradient} rounded-full filter blur-3xl opacity-10 animate-pulse`}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center ${
              service.imageSide === 'right' ? 'lg:flex-row-reverse' : ''
            }`}>
              
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: service.imageSide === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative group"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-20 group-hover:opacity-10 transition-opacity`}></div>
                  
                  {/* Badge Overlay */}
                  <div className={`absolute top-6 left-6 bg-primary/90 backdrop-blur-sm rounded-full px-4 py-2 border border-${service.iconColor.split('-')[1]}/30`}>
                    <span className={`text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Icon Overlay */}
                  <div className={`absolute bottom-6 right-6 w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-lg`}>
                    {service.id === 1 && <FaChartLine className="text-text text-2xl" />}
                    {service.id === 2 && <FaChartBar className="text-text text-2xl" />}
                    {service.id === 3 && <FaChartPie className="text-text text-2xl" />}
                  </div>
                </div>

                {/* Floating Elements */}
                <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r ${service.gradient} rounded-full filter blur-2xl opacity-30 -z-10`}></div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0, x: service.imageSide === 'left' ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`${service.imageSide === 'right' ? 'lg:pr-8' : 'lg:pl-8'}`}
              >
                {/* Title */}
                <div className="inline-flex items-center gap-2 bg-success/20 rounded-full px-4 py-2 mb-4">
                  {service.id === 1 && <FaChartLine className="text-success" size={14} />}
                  {service.id === 2 && <FaChartBar className="text-success" size={14} />}
                  {service.id === 3 && <FaChartPie className="text-success" size={14} />}
                  <span className="text-sm font-medium text-success">{service.title}</span>
                </div>

                <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                  {service.title}
                </h2>

                <p className="text-text text-lg leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
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
                      <span className="text-text text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      ))}

      {/* Why Choose Our Advisory Services Section */}
      <div className="relative py-6 md:py-8 bg-gradient-to-b from-primary to-primary/95">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-success/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-success/20 rounded-full px-4 py-2 mb-4">
              <FaUsers className="text-success" size={14} />
              <span className="text-sm font-medium text-success">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
              Why Choose Our <span className="text-success">Advisory Services?</span>
            </h2>
            <p className="text-text text-lg">
              Our services are built on a foundation of research, transparency, and disciplined market analysis. 
              We focus on delivering actionable insights, helping clients understand market opportunities, manage risk, 
              and pursue their financial objectives through informed decision-making.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-card backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-success/30 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-text text-2xl">{item.icon}</div>
                </div>
                <h3 className="text-text font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Final CTA Section */}
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
              Ready To Take Your Market Decisions To The Next Level?
            </h2>
            <p className="text-text/90 text-lg mb-8 max-w-2xl mx-auto">
              Get access to professional market research, strategic guidance, and personalized advisory support designed to help you navigate financial markets with confidence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-success hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg"
              >
                Get Free Consultation
                <FaArrowRight />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-card-hover border border-border-hover text-text hover:bg-white/20 px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300"
              >
                Contact Our Experts
                <FaWhatsapp />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;