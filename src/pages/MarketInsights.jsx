import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaChartLine, 
  FaBookOpen, 
  FaShieldAlt, 
  FaBrain,
  FaArrowRight,
  FaPlus,
  FaMinus,
  FaRegLightbulb,
  FaWallet,
  FaBalanceScale,
  FaChartBar,
  FaRegClock,
  FaUsers,
  FaWhatsapp,
  FaPhoneAlt,
  FaEye,
  FaDownload,
  FaShareAlt,
  FaCheckCircle
} from 'react-icons/fa';
import Hero from '../components/Hero';

const MarketInsights = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const featuredInsight = {
    title: "Understanding Market Trends: A Guide for Modern Investors",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200",
    description: "Financial markets are influenced by economic indicators, corporate performance, global events, and investor sentiment. Understanding these factors can help investors identify opportunities, manage risks, and build a disciplined approach toward long-term wealth creation.",
    category: "Featured Analysis",
    readTime: "8 min read"
  };

  const insights = [
    {
      id: 1,
      title: "How to Build a Strong Investment Portfolio",
      description: "A diversified portfolio can help balance risk and reward. Learn the key principles of asset allocation, diversification, and long-term investment planning.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      category: "Investment Guide",
      readTime: "6 min read",
      date: "March 2024"
    },
    {
      id: 2,
      title: "The Importance of Risk Management in Investing",
      description: "Successful investing is not only about identifying opportunities but also about protecting capital through effective risk management practices.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
      category: "Risk Management",
      readTime: "5 min read",
      date: "March 2024"
    },
    {
      id: 3,
      title: "Understanding Market Cycles and Investor Behavior",
      description: "Market cycles play a significant role in investment performance. Understanding investor psychology can help improve decision-making during market fluctuations.",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800",
      category: "Market Psychology",
      readTime: "7 min read",
      date: "February 2024"
    },
    {
      id: 4,
      title: "Technical Analysis: Reading Market Trends",
      description: "Technical analysis helps traders identify trends, support and resistance levels, and potential market opportunities through price action and chart patterns.",
      image: "https://images.unsplash.com/photo-1642543348745-0d4db81d3b52?w=800",
      category: "Technical Analysis",
      readTime: "6 min read",
      date: "February 2024"
    },
    {
      id: 5,
      title: "Long-Term Investing vs Short-Term Trading",
      description: "Explore the differences between investing and trading, their advantages, associated risks, and which approach may align with different financial goals.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
      category: "Investment Strategy",
      readTime: "5 min read",
      date: "January 2024"
    },
    {
      id: 6,
      title: "Market Sentiment and Its Impact on Investment Decisions",
      description: "Investor sentiment often influences market movements. Understanding market psychology can help investors avoid emotional decision-making.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      category: "Market Psychology",
      readTime: "4 min read",
      date: "January 2024"
    }
  ];

  const educationTopics = [
    "Basics of Stock Market Investing",
    "Understanding Equity Markets",
    "Introduction to Derivatives",
    "Index Investing Fundamentals",
    "Portfolio Diversification",
    "Managing Investment Risks"
  ];

  const faqs = [
    {
      q: "What are Market Insights?",
      a: "Market insights are educational and analytical resources designed to help investors understand market conditions, trends, and investment concepts."
    },
    {
      q: "Are Market Insights investment recommendations?",
      a: "Market insights are intended for educational and informational purposes and should not be considered personalized investment advice."
    },
    {
      q: "How often should investors review market trends?",
      a: "Investors should regularly monitor market developments while maintaining focus on their long-term financial objectives and investment strategy."
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

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="relative overflow-hidden bg-primary">
      
      {/* Hero Section */}
      <Hero 
        backgroundImage="https://t4.ftcdn.net/jpg/13/66/21/03/360_F_1366210358_k0tZvltJSG3trmtm1hhys8o5kd4froXC.jpg"
        badgeText="MARKET INSIGHTS"
        badgeIcon={<FaChartLine />}
        title="Stay Informed With"
        highlightedTitle="Market Trends & Investment Insights"
        subtitle="Explore expert perspectives, market analysis, and educational resources designed to help investors and traders better understand financial markets and make informed decisions."
        // primaryButton={{
        //   text: "Explore Insights",
        //   link: "#insights",
        //   icon: <FaArrowRight />
        // }}
        // secondaryButton={{
        //   text: "Learn More",
        //   link: "#education",
        //   icon: <FaBookOpen />
        // }}
        showButtons={false}
        showStats={false}
      />

      {/* Featured Insight Section */}
      <div className="relative py-20 md:py-28">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-success/20 rounded-full px-4 py-2 mb-4">
              <FaEye className="text-success" size={14} />
              <span className="text-sm font-medium text-success">Featured Insight</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Editor's <span className="text-success">Pick</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-success/30 transition-all duration-500"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-80 lg:h-full overflow-hidden">
                <img 
                  src={featuredInsight.image} 
                  alt={featuredInsight.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent lg:hidden"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-success/90 text-white text-xs px-3 py-1 rounded-full">
                    {featuredInsight.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <FaRegClock size={12} />
                    {featuredInsight.readTime}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-success transition-colors">
                  {featuredInsight.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {featuredInsight.description}
                </p>
                <button className="inline-flex items-center gap-2 text-success font-semibold group/btn hover:gap-3 transition-all">
                  Read Full Analysis
                  <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Latest Market Insights - 6 Cards */}
      <div id="insights" className="relative py-20 bg-gradient-to-b from-primary to-primary/95">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-success/20 rounded-full px-4 py-2 mb-4">
              <FaChartLine className="text-success" size={14} />
              <span className="text-sm font-medium text-success">Latest Resources</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Latest Market <span className="text-success">Insights</span>
            </h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Expert analysis, educational guides, and research insights to help you make informed investment decisions
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {insights.map((insight) => (
              <motion.div
                key={insight.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-success/30 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={insight.image} 
                    alt={insight.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-success/90 text-white text-xs px-2 py-1 rounded-full">
                      {insight.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <FaRegClock size={10} />
                      {insight.readTime}
                    </span>
                    <span>•</span>
                    <span>{insight.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-success transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {insight.description}
                  </p>
                  <button className="text-success text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More
                    <FaArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-semibold hover:bg-white/10 transition-all duration-300">
              View All Insights
              <FaArrowRight size={14} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Investor Education Corner */}
      <div id="education" className="relative py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-success/20 rounded-full px-4 py-2 mb-4">
                <FaBookOpen className="text-success" size={14} />
                <span className="text-sm font-medium text-success">Investor Education Corner</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Financial Literacy is the Foundation of{' '}
                <span className="text-success">Successful Investing</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Explore beginner-friendly resources and guides designed to simplify complex market concepts.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {educationTopics.map((topic, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <FaCheckCircle className="text-success text-sm" />
                    <span className="text-gray-300 text-sm">{topic}</span>
                  </motion.div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-success to-secondary rounded-xl text-white font-semibold shadow-lg"
              >
                Download Free Guide
                <FaDownload size={14} />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-success/10 to-secondary/10 rounded-2xl p-8 border border-white/10">
                <FaRegLightbulb className="text-success text-3xl mb-4" />
                <h3 className="text-white font-bold text-xl mb-3">Start Your Learning Journey</h3>
                <p className="text-gray-300 mb-4">
                  Get access to our comprehensive library of educational resources, video tutorials, and beginner guides.
                </p>
                <div className="flex items-center gap-2 text-success">
                  <span>Free for all users</span>
                  <FaCheckCircle size={14} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Market Research Approach */}
      <div className="relative py-20 bg-gradient-to-b from-primary to-primary/95">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-success/20 rounded-full px-4 py-2 mb-4">
              <FaBrain className="text-success" size={14} />
              <span className="text-sm font-medium text-success">Our Research Philosophy</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Building Insights on{' '}
              <span className="text-success">Reliable Research</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              At Tradevora Market Private Limited, we believe that informed decisions are built on reliable research. Our analysis combines market trends, technical studies, economic developments, and risk assessment to provide valuable insights that support disciplined investing.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/5 rounded-xl p-4">
                <FaChartLine className="text-success text-2xl mx-auto mb-2" />
                <div className="text-white font-bold">Market Trends</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <FaBalanceScale className="text-success text-2xl mx-auto mb-2" />
                <div className="text-white font-bold">Technical Studies</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <FaWallet className="text-success text-2xl mx-auto mb-2" />
                <div className="text-white font-bold">Economic Dev.</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <FaShieldAlt className="text-success text-2xl mx-auto mb-2" />
                <div className="text-white font-bold">Risk Assessment</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative py-20">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-success/20 rounded-full px-4 py-2 mb-4">
              <FaUsers className="text-success" size={14} />
              <span className="text-sm font-medium text-success">Common Questions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Frequently Asked <span className="text-success">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="text-white font-semibold">{faq.q}</span>
                  {openFaq === index ? (
                    <FaMinus className="text-success" />
                  ) : (
                    <FaPlus className="text-success" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-gray-300">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Stay Ahead With Professional Market Insights
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Gain access to valuable market perspectives, educational resources, and research-driven insights that help support confident investment decisions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-success hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg"
              >
                Explore Services
                <FaArrowRight />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 border border-white/20 text-white hover:bg-white/20 px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300"
              >
                Contact Our Team
                <FaWhatsapp />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MarketInsights;