import React, { useState, useEffect } from "react";
import { FiArrowRight, FiPlay, FiTrendingUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Hero = ({
  badgeText = "TRUSTED BY 10,000+ INVESTORS",
  badgeIcon = <FiTrendingUp />,
  title,
  highlightedTitle,
  subtitle,
  features = [
    { value: "10K+", label: "Active Investors" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Expert Support" },
  ],
  primaryButton = {
    text: "Get Started Free",
    link: "tel:+919876543210",
    icon: <FiArrowRight />,
  },
  secondaryButton,
  image,
  images = [],
}) => {
  const displayImages = image ? [image] : (images.length > 0 ? images : [
    "/assets/images/equity-icon.png",
    "/assets/images/derivative-icon.png",
    "/assets/images/index-icon.png",
  ]);

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (displayImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % displayImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [displayImages.length]);

  return (
    <div className="relative bg-white overflow-hidden min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-116px)] flex items-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-7 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >


            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
              {title}
              {highlightedTitle && (
                <>
                  {" "}
                  <span className="text-success relative inline-block">
                    {highlightedTitle}
                  </span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              {subtitle}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {primaryButton && (
                <a
                  href={primaryButton.link}
                  className="group inline-flex items-center justify-center gap-2 bg-success hover:bg-success/90 text-white px-6 py-3 text-sm rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-success/30 hover:-translate-y-1"
                >
                  {primaryButton.text}
                  <span className="group-hover:translate-x-1 transition-transform">
                    {primaryButton.icon}
                  </span>
                </a>
              )}

              {secondaryButton && (
                <Link
                  to={secondaryButton.link}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 px-6 py-3 text-sm rounded-xl font-semibold transition-all duration-300 border border-slate-200 shadow-sm"
                >
                  {secondaryButton.icon}
                  {secondaryButton.text}
                </Link>
              )}
            </div>


          </motion.div>

          {/* Right Side - Image Slider */}
          <div className="relative h-[300px] lg:h-[400px] w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={displayImages[currentImage]}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="absolute max-w-full max-h-full object-contain"
                alt="Hero Illustration"
              />
            </AnimatePresence>
            
            {/* Slider Dots */}
            {displayImages.length > 1 && (
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                {displayImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentImage === index ? 'bg-success scale-125' : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
