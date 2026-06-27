import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaCheckCircle, FaArrowRight, FaWhatsapp, FaSearchDollar, FaChartPie, FaRegLightbulb, FaShieldAlt, FaUsers, FaSearch } from 'react-icons/fa';
import Hero from '../components/Hero';
import CTASection from '../components/home/CTASection';

const MarketResearch = () => {
  const offerings = [
    {
      icon: <FaSearchDollar />,
      title: "Macro-Economic Analysis",
      description: "In-depth studies on interest rates, inflation, fiscal policies, and their direct impact on the stock market and various asset classes.",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: <FaChartPie />,
      title: "Sectoral Studies",
      description: "Deep dive into specific industries to identify emerging trends, regulatory changes, and top-performing companies within the sector.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <FaChartLine />,
      title: "Trend Forecasting",
      description: "Predicting future market movements using advanced quantitative models, historical data analysis, and predictive analytics.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaRegLightbulb />,
      title: "Custom Research Reports",
      description: "Tailor-made research documents addressing specific investment themes or companies based on client requirements.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const targetAudience = [
    "Institutional investors and High Net-Worth Individuals (HNIs).",
    "Active traders looking for deep, data-driven market insights.",
    "Corporate clients seeking industry trends and competitor analysis.",
    "Investors wanting to stay ahead of the curve with predictive forecasting."
  ];

  return (
    <div className="relative overflow-hidden bg-primary">
      <Hero 
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
        badgeText="IN-DEPTH ANALYSIS"
        badgeIcon={<FaSearch />}
        title="Market"
        highlightedTitle="Research"
        subtitle="Knowledge is power in the financial markets. Our Market Research services provide you with comprehensive data, deep insights, and actionable intelligence to make informed investment decisions."
        primaryButton={{
          text: "Get Free Consultation",
          link: "tel:+919876543210",
          icon: <FaArrowRight />
        }}
        secondaryButton={{
          text: "Chat on WhatsApp",
          link: "https://wa.me/919876543210",
          icon: <FaWhatsapp />
        }}
        showStats={false}
      />

      {/* Overview Section */}
      <div className="relative py-20 bg-gradient-to-b from-primary to-primary/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-teal-500/20 rounded-full px-4 py-2 mb-4">
                <FaRegLightbulb className="text-teal-400" size={14} />
                <span className="text-sm font-medium text-teal-400">Our Approach</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                Data-Driven Intelligence For <span className="text-teal-400">Smart Decisions</span>
              </h2>
              <p className="text-text text-lg leading-relaxed mb-6">
                We go beyond surface-level news to uncover the fundamental truths driving market dynamics. Our research methodology combines rigorous quantitative analysis with qualitative insights from industry experts.
              </p>
              <p className="text-text text-lg leading-relaxed">
                By synthesizing global macroeconomic trends, sectoral shifts, and company-specific fundamentals, we deliver research that doesn't just inform, but actively empowers your investment strategy.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-border"
            >
              <img loading="lazy" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" alt="Market Research" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Key Offerings Section */}
      <div className="relative py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Our Key <span className="text-teal-400">Offerings</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Comprehensive research solutions designed to give you a competitive edge.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-teal-500/30 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${offering.color} flex items-center justify-center mb-6`}>
                  <div className="text-text text-2xl">{offering.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-text mb-4">{offering.title}</h3>
                <p className="text-gray-400 leading-relaxed">{offering.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Target Audience Section */}
      <div className="relative py-20 bg-gradient-to-b from-primary to-primary/95 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-3xl p-8 md:p-12 border border-teal-500/20"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center">
                <FaUsers className="text-teal-400 text-xl" />
              </div>
              <h2 className="text-3xl font-bold text-text">Who is this for?</h2>
            </div>
            <ul className="space-y-4">
              {targetAudience.map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <FaCheckCircle className="text-teal-400 mt-1 flex-shrink-0" />
                  <span className="text-text text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      <CTASection />
    </div>
  );
};

export default MarketResearch;
