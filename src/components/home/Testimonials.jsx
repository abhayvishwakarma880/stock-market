import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaQuoteLeft, 
  FaQuoteRight, 
  FaStar, 
  FaStarHalfAlt, 
  FaRegStar,
  FaChevronLeft, 
  FaChevronRight,
  FaUserCircle,
  FaChartLine,
  FaRupeeSign,
  FaShieldAlt,
  FaRegGem,
  FaTwitter,
  FaLinkedin,
  FaGoogle,
  FaWhatsapp
} from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Mumbai",
      role: "Business Owner",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 5,
      date: "March 2024",
      platform: "Google",
      platformIcon: <FaGoogle />,
      testimonial: "I've been trading with Tradevora Market Private Limited for over 2 years now. Their equity advisory has been spot-on, helping me generate consistent returns of 25%+ annually. The team is highly professional and always available for guidance.",
      stats: {
        returns: "+32%",
        period: "1 Year",
        investment: "₹25L+"
      },
      tags: ["Equity Trading", "Long Term"]
    },
    {
      id: 2,
      name: "Priya Singhania",
      location: "Delhi",
      role: "CA & Investor",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 5,
      date: "February 2024",
      platform: "LinkedIn",
      platformIcon: <FaLinkedin />,
      testimonial: "The derivatives strategies provided by Tradevora Market Private Limited are exceptional. Their risk management approach helped me hedge my portfolio effectively during volatile markets. Highly recommended for serious investors.",
      stats: {
        returns: "+45%",
        period: "6 Months",
        investment: "₹50L+"
      },
      tags: ["Derivatives", "Hedging"]
    },
    {
      id: 3,
      name: "Amit Mehta",
      location: "Bangalore",
      role: "IT Professional",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      rating: 5,
      date: "March 2024",
      platform: "Twitter",
      platformIcon: <FaTwitter />,
      testimonial: "As a beginner in the stock market, I was skeptical at first. But the team made investing simple and understandable. Their index fund recommendations have given me steady returns without much stress.",
      stats: {
        returns: "+18%",
        period: "1 Year",
        investment: "₹10L+"
      },
      tags: ["Index Funds", "Beginner"]
    },
    {
      id: 4,
      name: "Neha Gupta",
      location: "Pune",
      role: "Entrepreneur",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      rating: 4.5,
      date: "January 2024",
      platform: "Google",
      platformIcon: <FaGoogle />,
      testimonial: "Great advisory service! Their research team provides detailed analysis before every recommendation. The transparency in communication and regular portfolio reviews are commendable.",
      stats: {
        returns: "+28%",
        period: "8 Months",
        investment: "₹40L+"
      },
      tags: ["Portfolio Management", "Research"]
    },
    {
      id: 5,
      name: "Vikram Singh",
      location: "Jaipur",
      role: "Stock Trader",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      rating: 5,
      date: "March 2024",
      platform: "WhatsApp",
      platformIcon: <FaWhatsapp />,
      testimonial: "Their intraday calls have amazing accuracy. The risk-reward ratio is clearly defined in each call. I've been able to generate consistent monthly income through their trading tips.",
      stats: {
        returns: "+55%",
        period: "3 Months",
        investment: "₹15L+"
      },
      tags: ["Intraday", "Active Trading"]
    },
    {
      id: 6,
      name: "Anjali Sharma",
      location: "Chennai",
      role: "Financial Advisor",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      rating: 5,
      date: "February 2024",
      platform: "LinkedIn",
      platformIcon: <FaLinkedin />,
      testimonial: "I recommend Tradevora Market Private Limited to all my clients. Their research-backed strategies and personalized advisory approach align perfectly with long-term wealth creation goals. Truly a trusted partner.",
      stats: {
        returns: "+22%",
        period: "1 Year",
        investment: "₹1Cr+"
      },
      tags: ["Wealth Management", "Long Term"]
    }
  ];

  const overallStats = {
    averageRating: 4.9,
    totalReviews: 5234,
    satisfiedClients: "98%",
    yearsExperience: 5
  };

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }
    while (stars.length < 5) {
      stars.push(<FaRegStar key={stars.length} className="text-yellow-400" />);
    }
    return stars;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary to-primary/95 py-4 md:py-8">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-success/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full filter blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat'
      }}></div>

      <div className="relative max-w-5xl md:max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          {/* <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 bg-success/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4"
          >
            <FaQuoteLeft className="text-success" size={14} />
            <span className="text-sm font-medium text-success">Client Testimonials</span>
            <FaQuoteRight className="text-success" size={14} />
          </motion.div> */}
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
            What Our{' '}
            <span className="text-success relative inline-block">
              Clients Say
              <motion.svg 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-2 left-0 h-3 text-success/30" 
                viewBox="0 0 100 10"
              >
                <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" fill="none" strokeWidth="2"/>
              </motion.svg>
            </span>
          </h2>
          
          <p className="text-text text-lg">
            Trusted by 10,000+ investors across India
          </p>
        </motion.div>

        {/* Overall Stats Banner */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          <motion.div variants={itemVariants} className="bg-card backdrop-blur-sm rounded-xl p-4 text-center border border-border">
            <div className="text-yellow-400 flex justify-center mb-2">
              {renderStars(overallStats.averageRating)}
            </div>
            <div className="text-2xl font-bold text-text">{overallStats.averageRating}</div>
            <div className="text-xs text-gray-400">Average Rating</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-card backdrop-blur-sm rounded-xl p-4 text-center border border-border">
            <div className="text-success text-2xl mb-2 flex justify-center">
              <FaUserCircle />
            </div>
            <div className="text-2xl font-bold text-text">{overallStats.totalReviews.toLocaleString()}+</div>
            <div className="text-xs text-gray-400">Total Reviews</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-card backdrop-blur-sm rounded-xl p-4 text-center border border-border">
            <div className="text-success text-2xl mb-2 flex justify-center">
              <FaShieldAlt />
            </div>
            <div className="text-2xl font-bold text-text">{overallStats.satisfiedClients}</div>
            <div className="text-xs text-gray-400">Satisfied Clients</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-card backdrop-blur-sm rounded-xl p-4 text-center border border-border">
            <div className="text-success text-2xl mb-2 flex justify-center">
              <FaRegGem />
            </div>
            <div className="text-2xl font-bold text-text">{overallStats.yearsExperience}+</div>
            <div className="text-xs text-gray-400">Years Experience</div>
          </motion.div>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-border shadow-2xl"
            >
              {/* Quotation Marks */}
              <FaQuoteLeft className="text-success/20 text-6xl absolute top-6 left-6" />
              <FaQuoteRight className="text-success/20 text-6xl absolute bottom-6 right-6" />
              
              {/* Platform Badge */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-2 bg-card-hover rounded-full px-3 py-1">
                  <span className="text-text text-xs">Verified via</span>
                  <span className="text-success">{testimonials[currentIndex].platformIcon}</span>
                  <span className="text-text text-xs font-medium">{testimonials[currentIndex].platform}</span>
                </div>
                <div className="flex">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-text text-lg md:text-xl leading-relaxed mb-8 relative z-10">
                "{testimonials[currentIndex].testimonial}"
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-success/10 rounded-xl p-3 text-center border border-success/20">
                  <div className="text-success text-sm font-bold">{testimonials[currentIndex].stats.returns}</div>
                  <div className="text-gray-400 text-xs">Returns</div>
                </div>
                <div className="bg-success/10 rounded-xl p-3 text-center border border-success/20">
                  <div className="text-success text-sm font-bold">{testimonials[currentIndex].stats.period}</div>
                  <div className="text-gray-400 text-xs">Period</div>
                </div>
                <div className="bg-success/10 rounded-xl p-3 text-center border border-success/20">
                  <div className="text-success text-sm font-bold">{testimonials[currentIndex].stats.investment}</div>
                  <div className="text-gray-400 text-xs">Investment</div>
                </div>
              </div>

              {/* Client Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img loading="lazy" 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-success"
                  />
                  <div>
                    <h4 className="text-text font-bold text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-400 text-sm">{testimonials[currentIndex].role}, {testimonials[currentIndex].location}</p>
                    <p className="text-gray-500 text-xs">{testimonials[currentIndex].date}</p>
                  </div>
                </div>
                
                {/* Tags */}
                <div className="hidden md:flex gap-2">
                  {testimonials[currentIndex].tags.map((tag, idx) => (
                    <span key={idx} className="bg-card text-text text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 lg:-translate-x-6 bg-card-hover hover:bg-success/20 rounded-full p-3 backdrop-blur-sm transition-all duration-300"
          >
            <FaChevronLeft className="text-text" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 lg:translate-x-6 bg-card-hover hover:bg-success/20 rounded-full p-3 backdrop-blur-sm transition-all duration-300"
          >
            <FaChevronRight className="text-text" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mb-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setAutoplay(false);
                setCurrentIndex(idx);
                setTimeout(() => setAutoplay(true), 10000);
              }}
              className={`transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-8 h-2 bg-success rounded-full'
                  : 'w-2 h-2 bg-white/30 rounded-full hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Additional Testimonials Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.slice(0, 3).map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-card backdrop-blur-sm rounded-xl p-6 border border-border hover:border-success/30 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-text text-sm mb-4 line-clamp-3">
                "{testimonial.testimonial}"
              </p>
              <div className="flex items-center gap-3">
                <img loading="lazy" 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h5 className="text-text font-medium text-sm">{testimonial.name}</h5>
                  <p className="text-gray-400 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        
      </div>
    </div>
  );
};

export default Testimonials;