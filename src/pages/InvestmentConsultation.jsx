import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaCheckCircle, FaArrowRight, FaWhatsapp, FaSearchDollar, FaChartPie, FaRegLightbulb, FaShieldAlt, FaUsers, FaUserTie } from 'react-icons/fa';
import Hero from '../components/Hero';
import CTASection from '../components/home/CTASection';

const InvestmentConsultation = () => {
  const offerings = [
    {
      icon: <FaChartLine />,
      title: "Personalized Financial Planning",
      description: "Tailored investment strategies that align with your unique financial situation, risk appetite, and long-term objectives.",
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: <FaChartPie />,
      title: "Goal-Based Investing",
      description: "Structured investment pathways for specific life goals such as retirement planning, children's education, or wealth accumulation.",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: <FaShieldAlt />,
      title: "Tax Optimization Strategies",
      description: "Smart investment choices designed to maximize your after-tax returns while remaining fully compliant with regulations.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaUserTie />,
      title: "One-on-One Mentorship",
      description: "Direct access to experienced market professionals who guide you through market cycles and investment decisions.",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const targetAudience = [
    "Working professionals seeking structured financial independence.",
    "Retirees looking for stable income and capital preservation.",
    "Business owners needing comprehensive wealth management solutions.",
    "Individuals seeking expert guidance to navigate complex financial markets."
  ];

  return (
    <div className="relative overflow-hidden bg-primary">
      <Hero 
        backgroundImage="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800"
        badgeText="EXPERT GUIDANCE"
        badgeIcon={<FaUserTie />}
        title="Investment"
        highlightedTitle="Consultation"
        subtitle="Achieve your financial goals with personalized, expert guidance. Our Investment Consultation services offer tailored strategies designed to build, protect, and grow your wealth over time."
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
              <div className="inline-flex items-center gap-2 bg-amber-500/20 rounded-full px-4 py-2 mb-4">
                <FaRegLightbulb className="text-amber-400" size={14} />
                <span className="text-sm font-medium text-amber-400">Our Approach</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                Tailored Strategies For <span className="text-amber-400">Your Financial Future</span>
              </h2>
              <p className="text-text text-lg leading-relaxed mb-6">
                We understand that every investor has unique goals, timelines, and risk tolerances. That's why our consultation process begins with a deep dive into your financial reality.
              </p>
              <p className="text-text text-lg leading-relaxed">
                By combining comprehensive financial planning with actionable market insights, we construct personalized investment roadmaps that provide clarity, minimize risk, and accelerate your journey toward financial freedom.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-border"
            >
              <img loading="lazy" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800" alt="Investment Consultation" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Key Offerings Section */}
      <div className="relative py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Our Key <span className="text-amber-400">Offerings</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Comprehensive consultation services tailored to your specific financial needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-amber-500/30 transition-all duration-300"
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
            className="bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-3xl p-8 md:p-12 border border-amber-500/20"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                <FaUsers className="text-amber-400 text-xl" />
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
                  <FaCheckCircle className="text-amber-400 mt-1 flex-shrink-0" />
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

export default InvestmentConsultation;
