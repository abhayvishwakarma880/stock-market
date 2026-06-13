import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaChartLine, 
  FaUserCheck, 
  FaUsers, 
  FaRegLightbulb,
  FaShieldAlt,
  FaRegCommentDots,
  FaEye,
  FaBullseye,
  FaHandshake,
  FaRocket,
  FaBookOpen,
  FaClipboardList,
  FaChartBar,
  FaTrophy,
  FaRegStar,
  FaQuoteLeft,
  FaArrowRight,
  FaWhatsapp,
  FaPhoneAlt
} from 'react-icons/fa';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const stats = [
    { value: "5000+", label: "Satisfied Investors", icon: <FaUsers /> },
    { value: "15+", label: "Years Market Experience", icon: <FaTrophy /> },
    { value: "100+", label: "Research Reports Published", icon: <FaBookOpen /> },
    { value: "95%", label: "Client Satisfaction Rate", icon: <FaRegStar /> }
  ];

  const whyChooseUs = [
    {
      icon: <FaChartLine />,
      title: "Research-Based Approach",
      description: "Every recommendation is backed by thorough market analysis and professional research methodologies.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaUserCheck />,
      title: "Personalized Guidance",
      description: "Strategies are tailored according to individual financial goals and risk preferences.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaShieldAlt />,
      title: "Market Expertise",
      description: "Years of experience in market research, trend analysis, and investment planning.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaRegCommentDots />,
      title: "Transparent Communication",
      description: "Clear, honest, and timely communication without unnecessary complexity.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <FaShieldAlt />,
      title: "Risk Management Focus",
      description: "Protecting capital remains as important as generating returns.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <FaRegLightbulb />,
      title: "Long-Term Perspective",
      description: "Focused on sustainable growth rather than short-term speculation.",
      color: "from-teal-500 to-green-500"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Research",
      description: "Comprehensive market analysis and data evaluation",
      icon: <FaChartBar />
    },
    {
      number: "02",
      title: "Strategy",
      description: "Building personalized investment and trading plans",
      icon: <FaClipboardList />
    },
    {
      number: "03",
      title: "Execution Guidance",
      description: "Providing actionable recommendations and insights",
      icon: <FaRocket />
    },
    {
      number: "04",
      title: "Review & Improvement",
      description: "Continuous monitoring and strategy refinement",
      icon: <FaHandshake />
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
        backgroundImage="https://t4.ftcdn.net/jpg/05/86/35/21/360_F_586352183_IC5sCdejPHQmmFMQomOJdOipIltpO00Z.jpg"
        badgeText="ABOUT TRADEVORA MARKET PRIVATE LIMITED"
        badgeIcon={<FaChartLine />}
        title="Empowering Investors With"
        // highlightedTitle="Research-Driven Financial Guidance"
        subtitle="At Tradevora Market Private Limited, we believe that successful investing begins with informed decision-making. Our mission is to provide investors with reliable market research, actionable insights, and personalized advisory solutions that help build long-term financial growth."
        // primaryButton={{
        //   text: "Get Started Free",
        //   link: "/get-started",
        //   icon: <FaArrowRight />
        // }}
        // secondaryButton={{
        //   text: "Contact Us",
        //   link: "/contact",
        //   icon: <FaPhoneAlt />
        // }}
        showButtons={false}
        showStats={false}
      />

      {/* Our Story Section */}
      <div className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-success/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800"
                  alt="Our Journey"
                  className="w-full h-96 object-cover"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 bg-success/90 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-text font-bold text-lg">Founded in 2019</div>
                  <div className="text-text/80 text-sm">5+ Years of Excellence</div>
                </div> */}
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-success/20 rounded-full px-4 py-2 mb-4">
                <FaRegLightbulb className="text-success" size={14} />
                <span className="text-sm font-medium text-success">Our Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                Our <span className="text-success">Journey</span>
              </h2>
              <div className="space-y-4 text-text leading-relaxed">
                <p>
                  Tradevora Market Private Limited was founded with a simple goal: to help investors navigate financial markets with confidence.
                </p>
                <p>
                  Over the years, we have worked with individuals, traders, and long-term investors by providing research-backed market insights and practical investment strategies.
                </p>
                <p>
                  Our approach combines market expertise, technical analysis, and disciplined risk management to help clients make well-informed investment decisions in an ever-changing market environment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="relative py-20 bg-gradient-to-b from-primary to-primary/95">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <FaEye className="text-blue-500 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-text mb-3">Our Mission</h3>
              <p className="text-text leading-relaxed">
                To simplify investing by delivering transparent, research-driven financial guidance that enables investors to make confident and informed decisions.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <FaBullseye className="text-green-500 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-text mb-3">Our Vision</h3>
              <p className="text-text leading-relaxed">
                To become a trusted financial advisory partner, helping investors achieve sustainable wealth creation through knowledge, discipline, and strategic planning.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="relative py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-success/20 rounded-full px-4 py-2 mb-4">
              <FaUsers className="text-success" size={14} />
              <span className="text-sm font-medium text-success">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text">
              Why Investors Trust <span className="text-success">Tradevora Market Private Limited</span>
            </h2>
          </motion.div>

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
                className="bg-card backdrop-blur-sm rounded-xl p-6 border border-border hover:border-success/30 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mb-4`}>
                  <div className="text-text text-xl">{item.icon}</div>
                </div>
                <h3 className="text-text font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Investment Philosophy Section */}
      <div className="relative py-20 bg-gradient-to-b from-primary to-primary/95">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-success/20 rounded-full px-4 py-2 mb-4">
                <FaChartLine className="text-success" size={14} />
                <span className="text-sm font-medium text-success">Our Philosophy</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                Our Investment <span className="text-success">Philosophy</span>
              </h2>
              <div className="space-y-4 text-text leading-relaxed">
                <p>
                  Financial markets are driven by opportunity, but successful investing requires discipline.
                </p>
                <p>
                  At Tradevora Market Private Limited, we focus on identifying quality opportunities through market research, technical analysis, and risk assessment.
                </p>
                <p>
                  We believe that consistent decision-making, portfolio diversification, and a long-term perspective are essential components of wealth creation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800"
                alt="Investment Philosophy"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="relative py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-success/20 rounded-full px-4 py-2 mb-4">
              <FaClipboardList className="text-success" size={14} />
              <span className="text-sm font-medium text-success">How We Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text">
              Our <span className="text-success">Process</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-card backdrop-blur-sm rounded-xl p-6 text-center border border-border hover:border-success/30 transition-all duration-300">
                  <div className="text-4xl font-bold text-success/30 mb-2">{step.number}</div>
                  <div className="w-14 h-14 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-success text-xl">{step.icon}</div>
                  </div>
                  <h3 className="text-text font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/3 -right-3 text-success/30">
                    <FaArrowRight />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="relative py-20 bg-gradient-to-b from-primary to-primary/95">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card backdrop-blur-sm rounded-xl p-6 text-center border border-border hover:border-success/30 transition-all duration-300"
              >
                <div className="text-success text-3xl mb-3 flex justify-center">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-text mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Message Section */}
      <div className="relative py-20">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-success/10 to-secondary/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border text-center"
          >
            <FaQuoteLeft className="text-success/30 text-5xl mx-auto mb-4" />
            <div className="inline-flex items-center gap-2 bg-success/20 rounded-full px-4 py-2 mb-4">
              <FaUserCheck className="text-success" size={14} />
              <span className="text-sm font-medium text-success">Message From Our Leadership</span>
            </div>
            <p className="text-text text-lg md:text-xl leading-relaxed mb-6">
              "Our objective is not simply to provide market recommendations but to help investors develop confidence and clarity in their financial journey. By combining research, experience, and disciplined decision-making, we strive to create long-term value for every client we serve."
            </p>
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-success to-secondary rounded-full flex items-center justify-center mx-auto mb-2">
                <FaUserCheck className="text-text text-2xl" />
              </div>
              <h4 className="text-text font-bold">Rahul Sharma</h4>
              <p className="text-gray-400 text-sm">Founder & CEO, Tradevora Market Private Limited</p>
            </div>
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
              Ready To Take The Next Step In Your Financial Journey?
            </h2>
            <p className="text-text/90 text-lg mb-8 max-w-2xl mx-auto">
              Partner with Tradevora Market Private Limited and gain access to professional market research, personalized guidance, and strategic investment insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+919876543210" className="bg-white text-success hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg">
                Get Free Consultation
                <FaArrowRight />
              </a>
              <Link to="/contact" className="bg-card-hover border border-border-hover text-text hover:bg-white/20 px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300">
                Contact Our Team
                <FaWhatsapp />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;