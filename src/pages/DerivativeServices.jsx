import React from 'react';
import { motion } from 'framer-motion';
import { FaChartBar, FaCheckCircle, FaArrowRight, FaWhatsapp, FaBolt, FaShieldAlt, FaChartArea, FaBalanceScale, FaRegLightbulb, FaUsers } from 'react-icons/fa';
import Hero from '../components/Hero';
import CTASection from '../components/home/CTASection';

const DerivativeServices = () => {
  const offerings = [
    {
      icon: <FaChartArea />,
      title: "Options Trading Strategies",
      description: "Directional and non-directional strategies including Straddles, Strangles, Bull/Bear Spreads, and Iron Condors based on market volatility and trend.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaBolt />,
      title: "Momentum Futures",
      description: "High-probability stock and index futures recommendations driven by volume breakouts, open-interest (OI) analysis, and price action.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaBalanceScale />,
      title: "Hedging Solutions",
      description: "Protect your long-term equity portfolio against severe market corrections using advanced derivative hedging techniques.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaShieldAlt />,
      title: "Risk & Capital Management",
      description: "Strict position sizing, pre-defined stop-losses, and continuous monitoring of Greeks (Delta, Theta, Vega) to preserve trading capital.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const targetAudience = [
    "Experienced active traders looking to capitalize on short-term market volatility.",
    "Investors seeking to hedge their existing stock portfolios against market downturns.",
    "Traders who understand the risks and rewards associated with leverage.",
    "Individuals wanting professional insights into Options Greeks and Open Interest data."
  ];

  return (
    <div className="relative overflow-hidden bg-primary">
      <Hero 
        backgroundImage="https://images.unsplash.com/photo-1642543348745-0d4db81d3b52?w=800"
        badgeText="FUTURES & OPTIONS"
        badgeIcon={<FaChartBar />}
        title="Derivative"
        highlightedTitle="Services"
        subtitle="The Derivatives market is highly dynamic and requires precision, speed, and strict risk management. Our Derivative Services cater to active traders who wish to leverage market volatility, hedge their portfolios, or generate income through strategic options trading."
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
              <div className="inline-flex items-center gap-2 bg-purple-500/20 rounded-full px-4 py-2 mb-4">
                <FaRegLightbulb className="text-purple-400" size={14} />
                <span className="text-sm font-medium text-purple-400">Our Approach</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                Mastering Volatility with <span className="text-purple-400">Precision Trading</span>
              </h2>
              <p className="text-text text-lg leading-relaxed mb-6">
                Trading in Futures and Options is not about guessing market direction; it's about calculating probabilities and managing risk. Our dedicated derivatives research desk monitors institutional data, Open Interest (OI) build-ups, and implied volatility (IV) to identify high-probability setups.
              </p>
              <p className="text-text text-lg leading-relaxed">
                Whether you prefer directional bets using naked options, or steady income generation through complex multi-leg option strategies, we provide clear, actionable recommendations with strict entry, target, and stop-loss levels.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-border"
            >
              <img loading="lazy" src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800" alt="Derivative Analysis" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Key Offerings Section */}
      <div className="relative py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Our Key <span className="text-purple-400">Offerings</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Advanced derivative strategies designed for active traders prioritizing risk-reward optimization.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-purple-500/30 transition-all duration-300"
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
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-8 md:p-12 border border-purple-500/20"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <FaUsers className="text-purple-400 text-xl" />
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
                  <FaCheckCircle className="text-purple-400 mt-1 flex-shrink-0" />
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

export default DerivativeServices;
