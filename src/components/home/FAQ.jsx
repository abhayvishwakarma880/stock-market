import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaPlus, 
  FaMinus, 
  FaQuestionCircle, 
  FaHeadset, 
  FaEnvelope, 
  FaPhoneAlt,
  FaWhatsapp,
  FaComments,
  FaShieldAlt,
  FaClock,
  FaUserCheck,
  FaChartLine,
  FaRupeeSign,
  FaRegLightbulb
} from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('general');

  const categories = [
    { id: 'general', name: 'General', icon: <FaQuestionCircle /> },
    { id: 'account', name: 'Account & Trading', icon: <FaUserCheck /> },
    { id: 'investment', name: 'Investment', icon: <FaChartLine /> },
    { id: 'support', name: 'Support', icon: <FaHeadset /> }
  ];

  const faqs = {
    general: [
      {
        id: 1,
        question: "What is Tradevora Market Private Limited and how does it work?",
        answer: "Tradevora Market Private Limited is a SEBI-registered financial advisory platform that provides expert guidance for stock market investments. We offer research-backed recommendations, portfolio management services, and personalized advisory to help you achieve your financial goals. Our team of experts analyzes market trends and provides actionable insights through our platform, WhatsApp, and email."
      },
      {
        id: 2,
        question: "Is Tradevora Market Private Limited SEBI registered?",
        answer: "Yes, Tradevora Market Private Limited is fully SEBI registered (Registration No: INA000012345). We comply with all SEBI regulations and guidelines to ensure complete transparency and security for our clients. Our advisors are certified professionals with years of market experience."
      },
      {
        id: 3,
        question: "How much capital do I need to start investing?",
        answer: "You can start investing with as low as ₹10,000. However, we recommend a minimum of ₹50,000 for a diversified portfolio. For specific strategies like F&O trading, we suggest a higher capital of ₹1-2 lakhs to manage risks effectively."
      },
      {
        id: 4,
        question: "What returns can I expect from your recommendations?",
        answer: "While past performance doesn't guarantee future returns, our equity recommendations have generated average returns of 18-25% annually. Our intraday calls have a success rate of 75-80%. We focus on risk-adjusted returns rather than just high returns."
      }
    ],
    account: [
      {
        id: 5,
        question: "How do I open an account with Tradevora Market Private Limited?",
        answer: "Opening an account is simple! Click on 'Get Started' button, fill in your basic details, complete KYC verification online, and choose your subscription plan. The entire process takes less than 15 minutes. Our team will assist you at every step."
      },
      {
        id: 6,
        question: "Which brokers do you support?",
        answer: "We support all major brokers including Zerodha, Groww, Angel One, ICICI Direct, HDFC Securities, Kotak Securities, and Upstox. You can continue using your existing demat account with any of these brokers."
      },
      {
        id: 7,
        question: "Is there any lock-in period or hidden charges?",
        answer: "No lock-in period! You can cancel anytime. There are absolutely no hidden charges. Our pricing is completely transparent - you pay only for the plan you choose. All charges are clearly mentioned before you subscribe."
      },
      {
        id: 8,
        question: "How do I receive your recommendations?",
        answer: "You'll receive recommendations via multiple channels: WhatsApp (instant alerts), Email (detailed reports), Mobile App (real-time notifications), and Telegram (community updates). You can choose your preferred mode of communication."
      }
    ],
    investment: [
      {
        id: 9,
        question: "Do you provide intraday trading calls?",
        answer: "Yes, we provide intraday trading calls with proper risk management. Each call comes with entry price, target prices (2-3 levels), and strict stop-loss. Our intraday calls have a proven track record with 75-80% accuracy rate."
      },
      {
        id: 10,
        question: "What is your approach to risk management?",
        answer: "Risk management is our top priority. We follow strict position sizing (max 2-3% risk per trade), defined stop-losses for every recommendation, portfolio diversification across sectors, and regular monitoring of open positions with timely exit suggestions."
      },
      {
        id: 11,
        question: "Do you provide long-term investment advice?",
        answer: "Absolutely! We provide comprehensive long-term investment advice based on fundamental analysis. Our research team identifies quality stocks with strong business models, good management, and growth potential. We recommend holding periods of 3-5 years for maximum wealth creation."
      },
      {
        id: 12,
        question: "Can I get customized portfolio management?",
        answer: "Yes, we offer personalized portfolio management services (PMS) for HNIs and retail investors. Our experts will create a customized portfolio based on your financial goals, risk appetite, and investment horizon with regular reviews and rebalancing."
      }
    ],
    support: [
      {
        id: 13,
        question: "What kind of customer support do you provide?",
        answer: "We provide 24/7 customer support via phone, email, WhatsApp, and live chat. Our dedicated support team resolves queries within 2-4 hours on business days. Premium plan members get priority support with dedicated relationship managers."
      },
      {
        id: 14,
        question: "Do you offer a free trial or demo?",
        answer: "Yes, we offer a 7-day free trial for our basic plan. You can test our services, receive recommendations, and experience our platform before committing. No credit card required for the trial period."
      },
      {
        id: 15,
        question: "What is your refund policy?",
        answer: "We offer a 15-day money-back guarantee if you're not satisfied with our services. No questions asked! For annual plans, we provide pro-rata refunds for the unused period. Just email us at support@tradevoramarket.com."
      },
      {
        id: 16,
        question: "How can I schedule a consultation with an expert?",
        answer: "You can schedule a free consultation by clicking the 'Book Consultation' button on our website or calling our support number. Our experts are available Monday to Saturday, 9 AM to 6 PM. We offer both online and offline consultation options."
      }
    ]
  };

  const currentFaqs = faqs[activeCategory];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="relative overflow-hidden bg-primary py-20 md:py-28">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-success/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
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
            <FaComments className="text-success" size={14} />
            <span className="text-sm font-medium text-success">FAQ</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
            Frequently Asked{' '}
            <span className="text-success relative inline-block">
              Questions
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
            Find answers to common questions about our services and platform
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setOpenIndex(null);
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-success text-text shadow-lg'
                  : 'bg-card text-text hover:bg-card-hover border border-border'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div 
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {currentFaqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left p-5 rounded-xl transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-gradient-to-r from-success/20 to-secondary/20 border border-success/30'
                    : 'bg-card border border-border hover:border-success/20'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className={`font-semibold ${
                    openIndex === index ? 'text-success' : 'text-text'
                  }`}>
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index ? 'bg-success text-text' : 'bg-card-hover text-text'
                  }`}>
                    {openIndex === index ? <FaMinus size={12} /> : <FaPlus size={12} />}
                  </div>
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-2 text-text leading-relaxed border-l-2 border-success/30 ml-5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12"
        >
          <div className="bg-card rounded-xl p-3 text-center border border-border">
            <FaClock className="text-success mx-auto mb-2" />
            <div className="text-text font-bold">24/7</div>
            <div className="text-gray-400 text-xs">Support Available</div>
          </div>
          <div className="bg-card rounded-xl p-3 text-center border border-border">
            <FaShieldAlt className="text-success mx-auto mb-2" />
            <div className="text-text font-bold">100%</div>
            <div className="text-gray-400 text-xs">Secure & Safe</div>
          </div>
          <div className="bg-card rounded-xl p-3 text-center border border-border">
            <FaRegLightbulb className="text-success mx-auto mb-2" />
            <div className="text-text font-bold">15-min</div>
            <div className="text-gray-400 text-xs">Quick Response</div>
          </div>
          <div className="bg-card rounded-xl p-3 text-center border border-border">
            <FaUserCheck className="text-success mx-auto mb-2" />
            <div className="text-text font-bold">5000+</div>
            <div className="text-gray-400 text-xs">Happy Clients</div>
          </div>
        </motion.div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-success/10 to-secondary/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 text-center border border-border max-w-3xl mx-auto"
        >
          <FaHeadset className="text-success text-4xl mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-text mb-2">
            Still Have Questions?
          </h3>
          <p className="text-text mb-6">
            Can't find the answer you're looking for? Please chat with our friendly team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 bg-success hover:bg-hover text-text px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              <FaPhoneAlt />
              Call Us Now
            </a>
            <a 
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-card-hover hover:bg-white/20 text-text px-6 py-3 rounded-xl font-semibold transition-all duration-300 border border-border"
            >
              <FaWhatsapp />
              WhatsApp Us
            </a>
            <a 
              href="mailto:support@tradevoramarket.com"
              className="inline-flex items-center gap-2 bg-card-hover hover:bg-white/20 text-text px-6 py-3 rounded-xl font-semibold transition-all duration-300 border border-border"
            >
              <FaEnvelope />
              Email Support
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;