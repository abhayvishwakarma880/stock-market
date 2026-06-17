import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { 
  FaFileContract, 
  FaGavel, 
  FaUserCheck, 
  FaChartLine,
  FaShieldAlt,
  FaExclamationTriangle,
  FaBan,
  FaCopyright,
  FaRegCommentDots,
  FaHandshake,
  FaMoneyBillWave,
  FaUserSecret,
  FaRegClock,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaCheckCircle
} from 'react-icons/fa';

const TermsConditions = () => {
  const lastUpdated = "March 15, 2024";

  const sections = [
    {
      id: 1,
      title: "Acceptance of Terms",
      icon: <FaHandshake />,
      content: [
        "By accessing or using Tradevora Market Private Limited services, you agree to be bound by these Terms & Conditions",
        "If you do not agree with any part of these terms, you must not use our services",
        "We reserve the right to modify these terms at any time without prior notice",
        "Continued use of our services after changes constitutes acceptance of modified terms"
      ]
    },
    {
      id: 2,
      title: "Eligibility Criteria",
      icon: <FaUserCheck />,
      content: [
        "You must be at least 18 years of age to use our services",
        "You must have a valid demat and trading account with a SEBI registered broker",
        "You must provide accurate and complete information during registration",
        "You are responsible for maintaining confidentiality of your account credentials",
        "You must comply with all applicable securities laws and regulations"
      ]
    },
    {
      id: 3,
      title: "Services Provided",
      icon: <FaChartLine />,
      content: [
        "Equity advisory and stock recommendations",
        "Derivatives (F&O) trading strategies",
        "Index fund and ETF investment advice",
        "Portfolio management and review services",
        "Market research and insights reports",
        "Educational content and trading tips"
      ]
    },
    {
      id: 4,
      title: "Risk Disclosure",
      icon: <FaExclamationTriangle />,
      content: [
        "Stock market investments are subject to market risks",
        "Past performance does not guarantee future returns",
        "We do not guarantee any specific returns on investments",
        "You may lose part or all of your invested capital",
        "Leveraged trading (F&O) involves higher risk and potential for significant losses",
        "You should invest only risk capital that you can afford to lose"
      ]
    },
    {
      id: 5,
      title: "Investment Advisory Disclaimer",
      icon: <FaShieldAlt />,
      content: [
        "Our recommendations are based on research and analysis but are not guaranteed",
        "You are solely responsible for your investment decisions",
        "We are not liable for any losses incurred based on our recommendations",
        "You should consult your financial advisor before making investment decisions",
        "Our advisory does not constitute legal or tax advice"
      ]
    },
    {
      id: 6,
      title: "Fees & Payments",
      icon: <FaMoneyBillWave />,
      content: [
        "Subscription fees are clearly mentioned on our pricing page",
        "Payments are non-refundable except as specified in our refund policy",
        "We reserve the right to change our fees with prior notice",
        "All fees are exclusive of applicable taxes (GST)",
        "Automatic renewal applies to subscription plans unless cancelled",
        "Failed payments may result in suspension of services"
      ]
    },
    {
      id: 7,
      title: "User Conduct & Restrictions",
      icon: <FaBan />,
      content: [
        "Do not share our recommendations with non-subscribers",
        "Do not reverse engineer or copy our proprietary research",
        "Do not use our services for illegal activities or market manipulation",
        "Do not harass our support team or other users",
        "Do not provide false or misleading information",
        "We reserve the right to terminate accounts violating these terms"
      ]
    },
    {
      id: 8,
      title: "Intellectual Property",
      icon: <FaCopyright />,
      content: [
        "All content, research reports, and recommendations are our intellectual property",
        "You may not reproduce, distribute, or sell our content without permission",
        "Tradevora Market Private Limited name, logo, and branding are registered trademarks",
        "Unauthorized use of our intellectual property will result in legal action"
      ]
    },
    {
      id: 9,
      title: "Refund & Cancellation Policy",
      icon: <FaMoneyBillWave />,
      content: [
        "7-day free trial available for new users",
        "Monthly plans: No refund after 7 days of subscription",
        "Annual plans: Pro-rata refund available for unused period",
        "To cancel, email us at support@tradevoramarket.com",
        "Refunds processed within 7-10 business days"
      ]
    },
    {
      id: 10,
      title: "Limitation of Liability",
      icon: <FaGavel />,
      content: [
        "We are not liable for any direct, indirect, or consequential losses",
        "Maximum liability limited to the subscription fee paid by you",
        "We are not responsible for technical issues beyond our control",
        "We do not guarantee uninterrupted or error-free service"
      ]
    },
    {
      id: 11,
      title: "Termination of Services",
      icon: <FaBan />,
      content: [
        "Either party may terminate the agreement with written notice",
        "We may terminate immediately for violation of these terms",
        "Upon termination, access to our services will be revoked",
        "Outstanding fees remain payable after termination"
      ]
    },
    {
      id: 12,
      title: "Governing Law & Dispute Resolution",
      icon: <FaGavel />,
      content: [
        "These terms are governed by the laws of India",
        "Courts in Mumbai have exclusive jurisdiction for any disputes",
        "Disputes shall first be attempted to resolve through arbitration",
        "Arbitration shall be conducted in Mumbai as per Arbitration Act"
      ]
    }
  ];

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
    <>
      <Hero 
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600"
        badgeText="LEGAL AGREEMENT"
        badgeIcon={<FaFileContract />}
        title="Terms of"
        highlightedTitle="Service"
        subtitle={`Last Updated: ${lastUpdated}. Please read these terms and conditions carefully before using our services.`}
        showButtons={false}
        showStats={false}
        className="min-h-[50vh] lg:min-h-[60vh]"
      />
      <div className="relative overflow-hidden bg-primary py-12 md:py-16">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-success/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Introduction Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-success/10 to-secondary/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-12 border border-border"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <FaHandshake className="text-success text-xl" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-text mb-2">Legal Agreement</h2>
              <p className="text-text leading-relaxed">
                These Terms & Conditions constitute a legally binding agreement between you ("User", "Client") 
                and Tradevora Market Private Limited ("Company", "We", "Us", "Our"). By accessing or using our services, 
                you acknowledge that you have read, understood, and agree to be bound by these terms.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Key Points Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          <div className="bg-card backdrop-blur-sm rounded-xl p-4 border border-border">
            <FaCheckCircle className="text-success text-xl mb-2" />
            <h3 className="text-text font-semibold mb-1">Read Carefully</h3>
            <p className="text-gray-400 text-sm">Understand all terms before using our services</p>
          </div>
          <div className="bg-card backdrop-blur-sm rounded-xl p-4 border border-border">
            <FaCheckCircle className="text-success text-xl mb-2" />
            <h3 className="text-text font-semibold mb-1">Risk Acknowledgment</h3>
            <p className="text-gray-400 text-sm">You accept all market-related risks</p>
          </div>
          <div className="bg-card backdrop-blur-sm rounded-xl p-4 border border-border">
            <FaCheckCircle className="text-success text-xl mb-2" />
            <h3 className="text-text font-semibold mb-1">Legal Compliance</h3>
            <p className="text-gray-400 text-sm">SEBI regulations and Indian laws apply</p>
          </div>
        </motion.div>

        {/* Terms Sections */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {sections.map((section) => (
            <motion.div
              key={section.id}
              variants={itemVariants}
              className="bg-card backdrop-blur-sm rounded-xl border border-border overflow-hidden hover:border-success/30 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                    <div className="text-success text-xl">{section.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-text">{section.title}</h3>
                </div>
                <ul className="space-y-2 ml-4">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-text">
                      <span className="text-success mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-red-500/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mt-12 border border-red-500/20"
        >
          <div className="flex items-start gap-4">
            <FaExclamationTriangle className="text-red-400 text-xl flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-text mb-2">Important Notice</h3>
              <p className="text-text leading-relaxed">
                Stock market investments and trading involve significant risk. Our advisory services are for educational 
                and informational purposes only. We do not guarantee any specific returns. You should carefully consider 
                your financial situation and consult with qualified professionals before making any investment decisions. 
                By using our services, you acknowledge that you are solely responsible for your investment choices and 
                any resulting profits or losses.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-r from-success/10 to-secondary/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mt-8 border border-border"
        >
          <h3 className="text-xl font-bold text-text mb-4 flex items-center gap-2">
            <FaRegCommentDots className="text-success" />
            Have Questions About Our Terms?
          </h3>
          <p className="text-text mb-4">
            If you have any questions or concerns about these Terms & Conditions, please contact us:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-400 text-sm">📧 Email: <a href="mailto:legal@tradevoramarket.com" className="text-success hover:underline">legal@tradevoramarket.com</a></p>
              <p className="text-gray-400 text-sm mt-2">📞 Phone: <a href="tel:+919876543210" className="text-success hover:underline">+91 98765 43210</a></p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">📱 WhatsApp: <a href="https://wa.me/919876543210" className="text-success hover:underline">+91 98765 43210</a></p>
              <p className="text-gray-400 text-sm mt-2">🏢 Address: <a href="https://maps.app.goo.gl/dE47R1rrJB76phPs5" target="_blank" rel="noopener noreferrer" className="text-success hover:underline">Sector 15A Near shree jaganath temple Faridabad Pin code 121001</a></p>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Tradevora Market Private Limited. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default TermsConditions;