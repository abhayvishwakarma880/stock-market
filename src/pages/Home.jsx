import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPlay, FiTrendingUp } from "react-icons/fi";
import stockBanner from "../assets/Banner.png";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Services from "../components/home/Services";
import AboutCompany from "../components/home/AboutCompany";
import MarketInsights from "../components/home/MarketInsights";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import CTASection from "../components/home/CTASection";
import { GrContact } from "react-icons/gr";

const Home = () => {
  return (
    <div>
      <div className="relative bg-white overflow-hidden min-h-[calc(100vh-70vh)] lg:min-h-[calc(100vh-116px)] flex items-center">
        {/* Background banner image */}
        <img
          src={stockBanner}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none select-none"
        />
        {/* Left side black overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent pointer-events-none"></div>
        <div className="max-w-5xl md:max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-7 w-full relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-12 items-center">
            
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-1"
            >
              <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-2 sm:mb-3 lg:mb-6">
                Master the Stock Market
                {" "}
                <span className="text-success relative inline-block">
                  with Confidence
                </span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white mb-2 sm:mb-3 lg:mb-8 leading-relaxed">
                Learn Equity, Intraday, Options & Price Action Trading from Industry Experts.
              </p>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6 lg:mb-12">
                <a
                  href="tel:+919876543210"
                  className="group inline-flex items-center justify-center gap-1 sm:gap-2 bg-success hover:bg-success/90 text-white px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 text-[10px] sm:text-xs lg:text-sm rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-success/30 hover:-translate-y-1"
                >
                  Start Learning
                  <span className="group-hover:translate-x-1 transition-transform">
                    <FiArrowRight />
                  </span>
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-1 sm:gap-2 bg-white hover:bg-slate-50 text-slate-700 px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 text-[10px] sm:text-xs lg:text-sm rounded-xl font-semibold transition-all duration-300 border border-slate-200 shadow-sm"
                >
                  <GrContact />
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <WhyChooseUs />
      <Services />
      <AboutCompany />
      {/* <MarketInsights /> */}
      <Testimonials />
      <FAQ />
      <CTASection />
    </div>
  );
};

export default Home;
