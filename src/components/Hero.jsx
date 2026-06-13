import React from "react";
import {
  FiArrowRight,
  FiPlay,
  FiTrendingUp,
  FiShield,
  FiClock,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Hero = ({
  // Background
  backgroundImage = "/images/stock-market-bg.jpg",
  overlayOpacity = "bg-black/50",

  // Badge
  badgeText = "TRUSTED BY 10,000+ INVESTORS",
  badgeIcon = <FiTrendingUp />,

  // Main Content
  title = "Smart Investments for",
  highlightedTitle = "Better Future",
  subtitle = "Expert financial guidance and market insights to help you achieve your investment goals with confidence",

  // Features/Stats
  features = [
    { value: "10K+", label: "Active Investors" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Expert Support" },
  ],

  // Buttons
  primaryButton = {
    text: "Get Started Free",
    link: "tel:+919876543210",
    icon: <FiArrowRight />,
  },
  secondaryButton = {
    text: "Watch Demo",
    link: "/demo",
    icon: <FiPlay />,
  },

  // Optional Elements
  showStats = true,
  showBadge = true,
  showButtons = true,
  animation = true,

  // Custom Classes
  className = "",
  contentClassName = "",

  // Children (if you want to add extra content)
  children,
}) => {
  return (
    <div className={`relative overflow-hidden min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-116px)] flex items-center ${className}`}>
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay Gradient */}
        <div
          className={`absolute inset-0 ${overlayOpacity} bg-gradient-to-r from-primary/90 via-primary/70 to-transparent`}
        ></div>
      </div>

      {/* Animated Market Ticker (Optional Background Effect) */}
      {animation && (
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden opacity-10">
          <div className="flex gap-8 animate-marquee whitespace-nowrap py-4">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="text-text text-sm font-mono">
                NIFTY 50 ▲ 24,567.85 • SENSEX ▲ 81,234.56 • BANK NIFTY ▲
                52,345.67
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        <div className={`max-w-3xl ${contentClassName}`}>
          {/* Badge */}
          {showBadge && badgeText && (
            <div className="inline-flex items-center gap-2 bg-card-hover backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-border-hover animate-fadeInUp">
              <span className="text-success">{badgeIcon}</span>
              <span className="text-sm font-medium text-text">
                {badgeText}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight mb-3 animate-fadeInUp animation-delay-100">
            {title}{" "}
            <span className="text-success relative inline-block">
              {highlightedTitle}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-text mb-8 max-w-2xl animate-fadeInUp animation-delay-200">
            {subtitle}
          </p>

          {/* Buttons */}
          {showButtons && (
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fadeInUp animation-delay-300">
              {primaryButton && (
                <a
                  href={primaryButton.link}
                  className="group inline-flex items-center justify-center gap-2 bg-success hover:bg-hover text-text px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
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
                  className="inline-flex items-center justify-center gap-2 bg-card-hover backdrop-blur-sm hover:bg-white/20 text-text px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-border-hover"
                >
                  {secondaryButton.icon}
                  {secondaryButton.text}
                </Link>
              )}
            </div>
          )}

          {/* Stats/Features */}
          {showStats && features && features.length > 0 && (
            <div className="grid grid-cols-3 gap-2 md:flex md:flex-wrap md:gap-5 animate-fadeInUp animation-delay-400 mb-10">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-card backdrop-blur-xl border border-border rounded-xl md:rounded-2xl py-2 px-2 sm:px-4 md:py-3 md:px-6 text-center md:text-left hover:bg-card-hover hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 cursor-default group flex flex-col justify-center"
                >
                  <div className="text-lg sm:text-xl md:text-3xl font-extrabold text-text mb-0.5 md:mb-1 group-hover:text-success transition-colors">
                    {feature.value}
                  </div>
                  <div className="text-[9px] sm:text-[10px] md:text-xs font-medium text-gray-400 uppercase tracking-wider leading-tight">
                    {feature.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Children */}
          {children}
        </div>
      </div>


    </div>
  );
};

// Different Hero Variants for reuse
export const HeroWithCards = (props) => {
  const cards = [
    {
      icon: FiTrendingUp,
      title: "Market Analysis",
      desc: "Real-time insights",
    },
    { icon: FiShield, title: "Secure Trading", desc: "100% protected" },
    { icon: FiClock, title: "24/7 Support", desc: "Always available" },
  ];

  return (
    <Hero {...props}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-card-hover backdrop-blur-md rounded-xl p-6 border border-border-hover hover:bg-white/15 transition-all duration-300"
          >
            <card.icon className="text-success text-2xl mb-3" />
            <h3 className="text-text font-semibold mb-1">{card.title}</h3>
            <p className="text-text text-sm">{card.desc}</p>
          </div>
        ))}
      </div>
    </Hero>
  );
};

export const HeroWithTestimonial = (props) => {
  return (
    <Hero {...props}>
      <div className="mt-12 flex items-center gap-4 p-4 bg-card backdrop-blur-sm rounded-xl max-w-md border border-border">
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-10 h-10 rounded-full bg-success/30 border-2 border-white flex items-center justify-center text-text text-xs font-bold"
            >
              U
            </div>
          ))}
        </div>
        <div>
          <div className="flex text-success">{"★★★★★"}</div>
          <p className="text-text text-sm">
            "Best investment platform" - Rajesh K.
          </p>
        </div>
      </div>
    </Hero>
  );
};

// Add these animations to your global CSS file
const styles = `
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out forwards;
}

.animate-marquee {
  animation: marquee 20s linear infinite;
}

.animation-delay-100 {
  animation-delay: 0.1s;
  opacity: 0;
}

.animation-delay-200 {
  animation-delay: 0.2s;
  opacity: 0;
}

.animation-delay-300 {
  animation-delay: 0.3s;
  opacity: 0;
}

.animation-delay-400 {
  animation-delay: 0.4s;
  opacity: 0;
}

.animation-delay-500 {
  animation-delay: 0.5s;
  opacity: 0;
}
`;

// Export styles to be added in global CSS
export { styles as heroAnimations };

export default Hero;
