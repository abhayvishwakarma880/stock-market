import React from "react";
import Hero from "../components/Hero";
import { FiArrowRight, FiPlay, FiTrendingUp } from "react-icons/fi";
import stockBanner from "../assets/stockBanner.png";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Services from "../components/home/Services";
import AboutCompany from "../components/home/AboutCompany";
import MarketInsights from "../components/home/MarketInsights";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import CTASection from "../components/home/CTASection";

const Home = () => {
  return (
    <div>
      <Hero
        backgroundImage={stockBanner}
        overlayOpacity="bg-gradient-to-r from-black/90 to-black/50"
        badgeText="LIMITED TIME OFFER"
        badgeIcon={<FiTrendingUp />}
        title="Start Trading"
        highlightedTitle="Like a Pro"
        features={[
          { value: "$0", label: "Account Opening" },
          { value: "0.01%", label: "Brokerage" },
          { value: "1000+", label: "Stocks" },
        ]}
        primaryButton={{
          text: "Get Free Consultation",
          link: "tel:+919876543210",
          icon: <FiArrowRight />,
        }}
        secondaryButton={{
          text: "Contact",
          link: "/contact",
          icon: <FiPlay />,
        }}
      />
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
