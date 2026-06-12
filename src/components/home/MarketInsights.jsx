import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaChartLine, 
  FaNewspaper, 
  FaLightbulb, 
  FaArrowRight, 
  FaCalendarAlt,
  FaClock,
  FaUserTie,
  FaTag,
  FaEye,
  FaThumbsUp,
  FaComment,
  FaShare,
  FaSearch,
  // FaTrendUp,
  FaBullhorn,
  FaRegStar,
  FaChartBar,
  FaRocket,
  FaShieldAlt
} from 'react-icons/fa';

const MarketInsights = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'all', name: 'All Insights', icon: <FaNewspaper /> },
    { id: 'market', name: 'Market Updates', icon: <FaChartLine /> },
    { id: 'tips', name: 'Trading Tips', icon: <FaLightbulb /> },
    { id: 'analysis', name: 'Technical Analysis', icon: <FaChartBar /> }
  ];

  const insights = [
    {
      id: 1,
      title: "Nifty 50 Breaks All-Time High: What's Driving the Rally?",
      category: "Market Updates",
      categoryId: "market",
      excerpt: "Indian equity benchmarks surged to record highs today, driven by strong FII inflows and positive global cues. The rally was led by banking and IT stocks...",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
      date: "March 15, 2024",
      readTime: "5 min read",
      author: "Rahul Sharma",
      authorRole: "Senior Market Analyst",
      views: "12.5K",
      likes: "845",
      comments: "127",
      tags: ["Nifty", "Market Rally", "FII"],
      featured: true
    },
    {
      id: 2,
      title: "Top 5 Banking Stocks to Watch This Quarter",
      category: "Trading Tips",
      categoryId: "tips",
      excerpt: "With strong credit growth and improving asset quality, these banking stocks are poised for significant upside in the coming months...",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
      date: "March 14, 2024",
      readTime: "4 min read",
      author: "Priya Mehta",
      authorRole: "Equity Research Analyst",
      views: "8.2K",
      likes: "567",
      comments: "89",
      tags: ["Banking", "Stocks", "Investment"],
      featured: false
    },
    {
      id: 3,
      title: "Technical Analysis: Bank Nifty Support & Resistance Levels",
      category: "Technical Analysis",
      categoryId: "analysis",
      excerpt: "Bank Nifty is consolidating in a range. Here are key support and resistance levels to watch for breakout trading opportunities...",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800",
      date: "March 13, 2024",
      readTime: "6 min read",
      author: "Amit Kumar",
      authorRole: "Technical Analyst",
      views: "15.3K",
      likes: "1.2K",
      comments: "234",
      tags: ["Bank Nifty", "Technical Analysis", "Trading"],
      featured: true
    },
    {
      id: 4,
      title: "IT Sector Outlook: Recovery on the Horizon?",
      category: "Market Updates",
      categoryId: "market",
      excerpt: "After a challenging year, IT stocks are showing signs of recovery. Here's what experts are saying about the sector's future...",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      date: "March 12, 2024",
      readTime: "4 min read",
      author: "Neha Gupta",
      authorRole: "Sector Analyst",
      views: "6.8K",
      likes: "423",
      comments: "56",
      tags: ["IT Sector", "Recovery", "Earnings"],
      featured: false
    },
    {
      id: 5,
      title: "Mastering Options Selling: Theta Decay Strategy",
      category: "Trading Tips",
      categoryId: "tips",
      excerpt: "Learn how to generate consistent income through options selling using theta decay strategies. Complete guide with examples...",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
      date: "March 11, 2024",
      readTime: "8 min read",
      author: "Vikram Singh",
      authorRole: "Derivatives Expert",
      views: "22.1K",
      likes: "2.1K",
      comments: "345",
      tags: ["Options", "Theta Decay", "Strategy"],
      featured: false
    },
    {
      id: 6,
      title: "Weekly Market Wrap: Key Events to Track Next Week",
      category: "Market Updates",
      categoryId: "market",
      excerpt: "From RBI policy meetings to global economic data, here are all the key events that could impact the markets next week...",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      date: "March 10, 2024",
      readTime: "3 min read",
      author: "Rahul Sharma",
      authorRole: "Senior Market Analyst",
      views: "9.4K",
      likes: "678",
      comments: "92",
      tags: ["Weekly Wrap", "Events", "Calendar"],
      featured: false
    }
  ];

  const featuredInsights = insights.filter(i => i.featured);
  const filteredInsights = insights.filter(insight => {
    const matchesCategory = activeTab === 'all' || insight.categoryId === activeTab;
    const matchesSearch = insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          insight.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
    <div className="relative overflow-hidden bg-primary py-20 md:py-8">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-success/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full filter blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat'
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 bg-success/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4"
          >
            <FaChartLine className="text-success" size={16} />
            <span className="text-sm font-medium text-success">Market Insights</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Latest{' '}
            <span className="text-success relative inline-block">
              Market Updates
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
          
          <p className="text-gray-300 text-lg">
            Stay ahead with expert analysis, trading tips, and real-time market insights
          </p>
        </motion.div>

        

        {/* Featured Insights */}
        {activeTab === 'all' && searchQuery === '' && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <FaRegStar className="text-success" />
              Featured Insights
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredInsights.map((insight, index) => (
                <motion.div
                  key={insight.id}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-success/30 transition-all duration-300 group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={insight.image} 
                      alt={insight.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-success/90 text-white text-xs px-3 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt size={12} />
                        {insight.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock size={12} />
                        {insight.readTime}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-success transition-colors">
                      {insight.title}
                    </h4>
                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {insight.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-success to-secondary flex items-center justify-center">
                          <FaUserTie size={14} className="text-white" />
                        </div>
                        <div>
                          <div className="text-white text-sm font-medium">{insight.author}</div>
                          <div className="text-gray-400 text-xs">{insight.authorRole}</div>
                        </div>
                      </div>
                      <button className="text-success group-hover:translate-x-1 transition-transform">
                        <FaArrowRight />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Insights Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredInsights.map((insight) => (
              <motion.div
                key={insight.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                layout
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-success/30 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={insight.image} 
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary/90 backdrop-blur-sm text-success text-xs px-2 py-1 rounded-full border border-success/30">
                      {insight.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt size={11} />
                      {insight.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock size={11} />
                      {insight.readTime}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-success transition-colors">
                    {insight.title}
                  </h4>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {insight.excerpt}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {insight.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Engagement Stats */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <FaEye size={12} />
                        {insight.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaThumbsUp size={12} />
                        {insight.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaComment size={12} />
                        {insight.comments}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredInsights.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400">No articles found. Try a different search term.</div>
          </motion.div>
        )}


       
      </div>
    </div>
  );
};

export default MarketInsights;