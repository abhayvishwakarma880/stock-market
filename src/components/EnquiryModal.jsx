import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaTimes } from 'react-icons/fa';

const EnquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const payload = {
      access_key: "6321f359-02b0-4e8d-be16-c120b165a4bc",
      ...formData
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => {
          onClose();
          setSubmitStatus(null);
        }, 3000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          ></motion.div>

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-card border border-border rounded-3xl p-6 md:p-8 shadow-2xl z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-primary/50 hover:bg-border text-text transition-colors"
            >
              <FaTimes />
            </button>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-text">Get In Touch</h3>
              <p className="text-sm text-text/80 mt-1">
                Fill out the form below and we'll get back to you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-text mb-1">Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="w-full bg-primary/50 text-text px-4 py-2.5 rounded-xl border border-border focus:ring-2 focus:ring-success focus:border-success outline-none transition-all placeholder:text-text/30" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text mb-1">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className="w-full bg-primary/50 text-text px-4 py-2.5 rounded-xl border border-border focus:ring-2 focus:ring-success focus:border-success outline-none transition-all placeholder:text-text/30" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text mb-1">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 98765 43210" className="w-full bg-primary/50 text-text px-4 py-2.5 rounded-xl border border-border focus:ring-2 focus:ring-success focus:border-success outline-none transition-all placeholder:text-text/30" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text mb-1">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="3" placeholder="Write your message here..." className="w-full h-[80px] bg-primary/50 text-text px-4 py-2.5 rounded-xl border border-border focus:ring-2 focus:ring-success focus:border-success outline-none transition-all resize-none placeholder:text-text/30"></textarea>
              </div>
              {submitStatus === 'success' && (
                <div className="text-green-500 text-sm font-semibold">Message sent successfully!</div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-500 text-sm font-semibold">Failed to send message. Please try again.</div>
              )}
              <div className="pt-2">
                <button type="submit" disabled={isSubmitting} className="bg-success hover:bg-success/90 disabled:opacity-70 disabled:cursor-not-allowed text-white px-8 py-2.5 rounded-xl font-bold transition-all shadow-lg hover:shadow-success/40 active:scale-95 text-base w-full inline-flex justify-center items-center gap-3">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <FaArrowRight size={14} />}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryModal;
