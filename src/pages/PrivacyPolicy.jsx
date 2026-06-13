import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { 
  FaShieldAlt, 
  FaLock, 
  FaUserSecret, 
  FaCookie,
  FaDatabase,
  FaEnvelope,
  FaPhoneAlt,
  FaGlobe,
  FaRegClock,
  FaCheckCircle,
  FaExclamationTriangle,
  FaFileContract,
  FaUserShield,
  FaServer,
  FaRegEnvelope,
  FaWhatsapp
} from 'react-icons/fa';

const PrivacyPolicy = () => {
  const lastUpdated = "March 15, 2024";

  const sections = [
    {
      id: 1,
      title: "Information We Collect",
      icon: <FaDatabase />,
      content: [
        "Personal Information: Name, email address, phone number, date of birth, PAN card details",
        "Financial Information: Bank account details, trading account information, investment history",
        "Technical Information: IP address, browser type, device information, cookies data",
        "Usage Information: Pages visited, time spent, features used, interaction data"
      ]
    },
    {
      id: 2,
      title: "How We Use Your Information",
      icon: <FaUserShield />,
      content: [
        "To provide and maintain our advisory services",
        "To process your transactions and manage your portfolio",
        "To send you market insights, trading tips, and important updates",
        "To improve our services and personalize your experience",
        "To comply with legal and regulatory requirements",
        "To detect and prevent fraud or security issues"
      ]
    },
    {
      id: 3,
      title: "Information Sharing & Disclosure",
      icon: <FaGlobe />,
      content: [
        "We never sell your personal information to third parties",
        "Information shared with SEBI registered brokers and depositories as required",
        "Legal compliance: We may disclose information if required by law",
        "Service providers: We share data with trusted partners who assist our operations",
        "Business transfers: In case of merger or acquisition, your data may be transferred"
      ]
    },
    {
      id: 4,
      title: "Data Security",
      icon: <FaLock />,
      content: [
        "256-bit SSL encryption for all data transmission",
        "Regular security audits and vulnerability assessments",
        "Two-factor authentication for account access",
        "Secure data centers with 24/7 monitoring",
        "Employee background checks and data access controls",
        "Regular backup and disaster recovery procedures"
      ]
    },
    {
      id: 5,
      title: "Cookies & Tracking Technologies",
      icon: <FaCookie />,
      content: [
        "We use cookies to enhance your browsing experience",
        "Essential cookies for website functionality",
        "Analytics cookies to understand user behavior",
        "You can control cookie preferences through browser settings",
        "Third-party cookies from analytics and advertising partners"
      ]
    },
    {
      id: 6,
      title: "Your Rights",
      icon: <FaUserSecret />,
      content: [
        "Access your personal data anytime from your account",
        "Request correction of inaccurate information",
        "Request deletion of your data (subject to legal requirements)",
        "Opt-out of marketing communications",
        "Data portability: Receive your data in structured format",
        "Lodge complaint with data protection authorities"
      ]
    },
    {
      id: 7,
      title: "Data Retention",
      icon: <FaRegClock />,
      content: [
        "We retain your data as long as your account is active",
        "Financial transaction data retained for 8 years as per regulatory requirements",
        "Inactive accounts: Data deleted after 3 years of inactivity",
        "Anonymized data may be retained for analytics purposes"
      ]
    },
    {
      id: 8,
      title: "Third-Party Links",
      icon: <FaServer />,
      content: [
        "Our website may contain links to third-party websites",
        "We are not responsible for privacy practices of other sites",
        "We recommend reviewing privacy policies of external websites"
      ]
    },
    {
      id: 9,
      title: "Children's Privacy",
      icon: <FaUserSecret />,
      content: [
        "Our services are not intended for individuals under 18 years",
        "We do not knowingly collect data from minors",
        "If we discover data from a minor, we will delete it immediately"
      ]
    },
    {
      id: 10,
      title: "Changes to This Policy",
      icon: <FaFileContract />,
      content: [
        "We may update this privacy policy periodically",
        "Significant changes will be notified via email or website notice",
        "Continued use of our services constitutes acceptance of changes"
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
        backgroundImage="https://avatars.mds.yandex.net/i?id=6eb01fdf3c924728dd4e48f46d35586adf3a96a1-5302022-images-thumbs&n=13"
        badgeText="PROTECTING YOUR DATA"
        badgeIcon={<FaShieldAlt />}
        title="Your Privacy"
        highlightedTitle="Matters To Us"
        subtitle={`Last Updated: ${lastUpdated}. We are committed to protecting your personal information and ensuring transparency.`}
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
          className="bg-gradient-to-r from-success/10 to-secondary/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-12 border border-white/10"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <FaLock className="text-success text-xl" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Our Commitment to Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                At Tradevora Market Private Limited, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services. 
                We comply with all applicable data protection laws and regulations, including the Information Technology Act, 2000, 
                and the proposed Digital Personal Data Protection Bill, 2023.
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
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <FaCheckCircle className="text-success text-xl mb-2" />
            <h3 className="text-white font-semibold mb-1">Data Protection</h3>
            <p className="text-gray-400 text-sm">256-bit SSL encryption for all your data</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <FaCheckCircle className="text-success text-xl mb-2" />
            <h3 className="text-white font-semibold mb-1">No Data Selling</h3>
            <p className="text-gray-400 text-sm">We never sell your personal information</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <FaCheckCircle className="text-success text-xl mb-2" />
            <h3 className="text-white font-semibold mb-1">Your Rights</h3>
            <p className="text-gray-400 text-sm">Full control over your personal data</p>
          </div>
        </motion.div>

        {/* Policy Sections */}
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
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-success/30 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                    <div className="text-success text-xl">{section.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white">{section.title}</h3>
                </div>
                <ul className="space-y-2 ml-4">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                      <span className="text-success mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-success/10 to-secondary/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mt-12 border border-white/10"
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <FaEnvelope className="text-success" />
            Contact Us About Privacy
          </h3>
          <p className="text-gray-300 mb-4">
            If you have any questions about this Privacy Policy or how we handle your data, please contact our Grievance Officer:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-400 text-sm">📧 Email: <a href="mailto:privacy@tradevoramarket.com" className="text-success hover:underline">privacy@tradevoramarket.com</a></p>
              <p className="text-gray-400 text-sm mt-2">📞 Phone: <a href="tel:+919876543210" className="text-success hover:underline">+91 98765 43210</a></p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">📱 WhatsApp: <a href="https://wa.me/919876543210" className="text-success hover:underline">+91 98765 43210</a></p>
              <p className="text-gray-400 text-sm mt-2">🏢 Grievance Officer: Mr. Rajesh Sharma</p>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
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

export default PrivacyPolicy;