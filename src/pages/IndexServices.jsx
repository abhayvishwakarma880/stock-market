import React from 'react';
import { motion } from 'framer-motion';
import { FaChartPie, FaCheckCircle, FaArrowRight, FaWhatsapp, FaGlobe, FaSearchDollar, FaCalendarDay, FaChartLine, FaRegLightbulb, FaUsers } from 'react-icons/fa';
import Hero from '../components/Hero';
import CTASection from '../components/home/CTASection';

const IndexServices = () => {
  const offerings = [
    {
      icon: <FaChartLine />,
      title: "Intraday Index Calls",
      description: "Quick, momentum-based setups in Nifty and Bank Nifty to capture daily market volatility with highly accurate entry, exit, and stop-loss levels.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaCalendarDay />,
      title: "Positional Index Strategies",
      description: "Capturing multi-day or multi-week trends using advanced technical analysis, volume profiling, and broader market sentiment.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaGlobe />,
      title: "Global Cues & Macro Analysis",
      description: "Analyzing the impact of global markets (US indices, crude oil, currency) and macroeconomic data on domestic indices to stay ahead of the curve.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaSearchDollar />,
      title: "Expiry Day Special Trades",
      description: "Capitalizing on gamma blasts, short-covering, and long-unwinding moves during weekly and monthly expiry days for maximum ROI.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const targetAudience = [
    "Intraday and swing traders who prefer trading highly liquid instruments.",
    "Traders looking to avoid the unsystematic risk associated with individual stock movements.",
    "Individuals wanting to capitalize on broader economic trends rather than company-specific news.",
    "Market participants seeking structured, disciplined trading setups in Nifty and Bank Nifty."
  ];

  return (
    <div className="relative overflow-hidden bg-primary">
      <Hero 
        backgroundImage="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800"
        badgeText="NIFTY & BANK NIFTY"
        badgeIcon={<FaChartPie />}
        title="Index"
        highlightedTitle="Services"
        subtitle="Benchmark indices like Nifty 50 and Bank Nifty dictate the broader market sentiment. Our Index Services focus exclusively on these highly liquid instruments, providing actionable insights derived from institutional flows, macroeconomic data, and global cues."
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
              <div className="inline-flex items-center gap-2 bg-green-500/20 rounded-full px-4 py-2 mb-4">
                <FaRegLightbulb className="text-green-400" size={14} />
                <span className="text-sm font-medium text-green-400">Our Approach</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                Trading The Trend With <span className="text-green-400">Benchmark Indices</span>
              </h2>
              <p className="text-text text-lg leading-relaxed mb-6">
                Trading benchmark indices offers superior liquidity, lower impact cost, and immunity from individual stock manipulation. Our research methodology is rooted in identifying key support and resistance levels, pivot points, and institutional (FII/DII) activity.
              </p>
              <p className="text-text text-lg leading-relaxed">
                We synthesize complex data points—including sector rotation, option chain analysis, and global market correlations—to generate high-conviction trading signals, helping you navigate the market with clarity and confidence.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-border"
            >
              <img loading="lazy" src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202508/68a6be7d73690-axis-securities-said-the-retail-sector-remains-a-structural-growth-story--underpinned-by-rapid-forma-21364054-16x9.jpg" alt="Index Analysis" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Key Offerings Section */}
      <div className="relative py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Our Key <span className="text-green-400">Offerings</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Specialized advisory focused on maximizing opportunities in major market indices.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-green-500/30 transition-all duration-300"
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
            className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl p-8 md:p-12 border border-green-500/20"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <FaUsers className="text-green-400 text-xl" />
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
                  <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
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

export default IndexServices;
