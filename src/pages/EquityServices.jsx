import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaCheckCircle, FaArrowRight, FaWhatsapp, FaSearchDollar, FaChartPie, FaRegLightbulb, FaShieldAlt, FaUsers } from 'react-icons/fa';
import Hero from '../components/Hero';
import CTASection from '../components/home/CTASection';

const EquityServices = () => {
  const offerings = [
    {
      icon: <FaSearchDollar />,
      title: "Fundamental Research",
      description: "In-depth analysis of company financials, management quality, competitive advantage, and future growth prospects to identify long-term multi-baggers.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaChartLine />,
      title: "Technical Analysis",
      description: "Identifying optimal entry and exit points using advanced chart patterns, moving averages, and momentum indicators for short-to-medium term gains.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaChartPie />,
      title: "Portfolio Restructuring",
      description: "Expert review of your existing stock portfolio to weed out underperformers and reallocate capital into high-growth potential sectors.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaShieldAlt />,
      title: "Risk Management",
      description: "Strict capital allocation rules, sector diversification, and defined stop-loss strategies to protect your hard-earned capital during market downturns.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const targetAudience = [
    "Investors seeking medium to long-term capital appreciation.",
    "Individuals looking to build a robust retirement or wealth-creation portfolio.",
    "Investors who prefer owning fundamentally strong businesses over short-term speculation.",
    "Those looking for expert guidance to navigate complex market cycles."
  ];

  return (
    <div className="relative overflow-hidden bg-primary">
      <Hero 
        backgroundImage="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800"
        badgeText="LONG TERM & SHORT TERM"
        badgeIcon={<FaChartLine />}
        title="Equity"
        highlightedTitle="Services"
        subtitle="Equity markets offer unparalleled potential for wealth creation through ownership in quality businesses. Our Equity Services are designed to provide investors with deeply researched, fundamental, and technical insights to build a winning stock portfolio."
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
              <div className="inline-flex items-center gap-2 bg-blue-500/20 rounded-full px-4 py-2 mb-4">
                <FaRegLightbulb className="text-blue-400" size={14} />
                <span className="text-sm font-medium text-blue-400">Our Approach</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Strategic Wealth Creation Through <span className="text-blue-400">Quality Equities</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We believe that successful equity investing requires a blend of top-down macroeconomic analysis and bottom-up stock picking. We don't just recommend stocks; we identify businesses with sustainable competitive advantages, strong corporate governance, and clear earnings visibility.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Whether you are looking to invest in established large-cap leaders for stability, or emerging mid-cap and small-cap companies for explosive growth, our research team provides actionable recommendations tailored to your risk profile.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800" alt="Equity Analysis" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Key Offerings Section */}
      <div className="relative py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Key <span className="text-blue-400">Offerings</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Comprehensive equity solutions designed to maximize returns while managing downside risk.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${offering.color} flex items-center justify-center mb-6`}>
                  <div className="text-white text-2xl">{offering.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{offering.title}</h3>
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
            className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl p-8 md:p-12 border border-blue-500/20"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <FaUsers className="text-blue-400 text-xl" />
              </div>
              <h2 className="text-3xl font-bold text-white">Who is this for?</h2>
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
                  <FaCheckCircle className="text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-200 text-lg">{item}</span>
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

export default EquityServices;
