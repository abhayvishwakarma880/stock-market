import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaChartLine, 
  FaChartBar, 
  FaChartPie,
  FaArrowRight,
  FaPhoneAlt,
  FaWhatsapp
} from 'react-icons/fa';
import Hero from '../components/Hero';

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Equity-Intraday", "Futures", "Options", "Equity-Positional"];

  const servicesData = [
    {
      id: 1,
      category: "Equity-Intraday",
      title: "CASH INTRADAY",
      credits: ["30 Credits: ₹ 7,100", "300 Credits: ₹ 35,000"],
      description: "Intraday Cash Segment Stocks for Small Traders (1- 2 Trade Calls Per Day)",
      risk: "Moderate Risk",
      riskColor: "text-orange-500",
      capital: "₹ 50,000",
    },
    {
      id: 2,
      category: "Options",
      title: "INDEX OPTIONS (B)",
      credits: ["300 Credits: ₹ 75,000", "30 Credits: ₹ 15,000"],
      description: "Options Trading Calls for F&O Traders (1- 2 Trade Calls Per Day)",
      risk: "High Risk",
      riskColor: "text-red-500",
      capital: "₹ 50,000",
    },
    {
      id: 3,
      category: "Options",
      title: "STOCK OPTIONS (B)",
      credits: ["300 Credits: ₹ 75,000", "30 Credits: ₹ 15,000"],
      description: "Options Trading Calls for F&O Traders (1- 2 Trade Calls Per Day)",
      risk: "High Risk",
      riskColor: "text-red-500",
      capital: "₹ 1,00,000",
    },
    {
      id: 4,
      category: "Options",
      title: "INDEX OPTIONS",
      credits: ["300 Credits: ₹ 1,25,000"],
      description: "Options Trading Calls for F&O Traders (1- 5 Trade Calls Per Day)",
      risk: "High Risk",
      riskColor: "text-red-500",
      capital: "₹ 2,00,000",
    },
    {
      id: 5,
      category: "Equity-Intraday",
      title: "CASH PREMIUM",
      credits: ["300 Credits: ₹ 45,000"],
      description: "Momentum Cash Segment Calls For HNI Traders (1- 5 Trade Calls Per Day)",
      risk: "Moderate Risk",
      riskColor: "text-orange-500",
      capital: "₹ 1,00,000",
    },
    {
      id: 6,
      category: "Options",
      title: "STOCK OPTIONS",
      credits: ["300 Credits: ₹ 1,25,000"],
      description: "Options Trading Calls for F&O Traders (1- 5 Trade Calls Per Day)",
      risk: "High Risk",
      riskColor: "text-red-500",
      capital: "₹ 2,00,000",
    },
    {
      id: 7,
      category: "Futures",
      title: "FUTURES INTRADAY",
      credits: ["300 Credits: ₹ 55,000", "30 Credits: ₹ 12,500"],
      description: "Intraday Stock Futures Segment Trading Calls for F&O Traders (1- 2 Trade Calls Per Day)",
      risk: "Moderate Risk",
      riskColor: "text-orange-500",
      capital: "₹ 1,00,000",
    },
    {
      id: 8,
      category: "Futures", 
      title: "MCX ENERGY",
      credits: ["30 Credits: ₹ 9,000", "100 Credits: ₹ 24,000"],
      description: "Trading Calls In MCX-Commodity Segment (1- 2 Trade Calls Per Day)",
      risk: "Moderate Risk",
      riskColor: "text-orange-500",
      capital: "₹ 50,000",
    },
    {
      id: 9,
      category: "Futures",
      title: "MCX BULLION",
      credits: ["30 Credits: ₹ 9,000", "100 Credits: ₹ 24,000"],
      description: "Trading Calls In MCX-Bullion Segment (1- 2 Trade Calls Per Day)",
      risk: "High",
      riskColor: "text-red-500",
      capital: "₹ 2,00,000",
    },
    {
      id: 10,
      category: "Equity-Positional",
      title: "GROWTH STOCKS",
      credits: ["60 Credits: ₹ 22,000", "20 Credits: ₹ 9,000"],
      description: "Growth Stock For Medium-Term Investors (5- 10 Trade Calls Per Month)",
      risk: "Low Risk",
      riskColor: "text-green-500",
      capital: "₹ 1,00,000",
    },
    {
      id: 11,
      category: "Equity-Positional",
      title: "MULTIBAGGERS",
      credits: ["20 Credits: ₹ 35,000"],
      description: "Multibagger Stocks for Long-Term Investors (5- 10 Trade Calls Per Quarter)",
      risk: "Low Risk",
      riskColor: "text-green-500",
      capital: "₹ 1,00,000",
    }
  ];

  const filteredServices = activeTab === "All" 
    ? servicesData 
    : servicesData.filter(service => service.category === activeTab);

  return (
    <div className="relative overflow-hidden bg-white">
      
      {/* Hero Section */}
      <Hero 
        images={[
          "https://www.svgrepo.com/show/421840/chart-growth-invest.svg",
          "https://www.svgrepo.com/show/421834/bag-cash-currency.svg",
          "https://www.svgrepo.com/show/421839/briefcase-business-case.svg"
        ]}
        badgeText="OUR SERVICES"
        badgeIcon={<FaChartLine />}
        title="Professional Market Research"
        subtitle="Expert market research and strategic guidance across equity, derivative, and index segments to help you trade with confidence."
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

      {/* Tabs Section */}
      <div className="bg-white py-12 md:py-20">
        <div className="max-w-5xl md:max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tabs Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-16">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 border-2 ${
                  activeTab === tab
                    ? "bg-[#2563eb] border-[#2563eb] text-white shadow-lg shadow-blue-500/30 scale-105"
                    : "bg-white border-[#2563eb] text-[#2563eb] hover:bg-blue-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#f4f7fb] rounded-2xl p-6 border border-blue-100 flex flex-col h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Card Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className="w-10 h-10 rounded-full bg-[#2563eb] flex items-center justify-center text-white flex-shrink-0 shadow-md">
                        <FaChartBar size={18} />
                      </div>
                      <h3 className="text-lg md:text-xl font-extrabold text-slate-900 leading-tight">{service.title}</h3>
                    </div>
                    <div className="flex flex-col items-end gap-1 flex-shrink-0 mt-1">
                      {service.credits.map((credit, idx) => (
                        <span key={idx} className="text-[10px] font-semibold text-slate-500 bg-slate-200/50 px-2 py-0.5 rounded">
                          {credit}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Description */}
                  <p className="text-slate-500 text-sm mb-8 flex-grow leading-relaxed">
                    {service.description}
                  </p>

                  {/* Risk & Capital & View */}
                  <div className="flex flex-wrap items-center justify-between border-t border-blue-200/60 pt-5 mt-auto gap-4">
                    <div className="flex items-center gap-6">
                      <div className="flex flex-col">
                        <span className="text-slate-400 text-xs font-semibold mb-1">Risk</span>
                        <span className={`text-sm font-bold ${service.riskColor}`}>{service.risk}</span>
                      </div>
                      
                      <div className="w-px h-8 bg-blue-200/60"></div>

                      <div className="flex flex-col">
                        <span className="text-slate-400 text-xs font-semibold mb-1">Req. Capital</span>
                        <span className="text-[#2563eb] text-sm font-bold">{service.capital}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative py-20 bg-gradient-to-r from-[#2563eb] to-blue-800">
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
              Ready To Take Your Market Decisions To The Next Level?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Get access to professional market research, strategic guidance, and personalized advisory support designed to help you navigate financial markets with confidence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#2563eb] hover:bg-gray-100 px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all duration-300 shadow-xl"
              >
                Get Free Consultation
                <FaArrowRight />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all duration-300"
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