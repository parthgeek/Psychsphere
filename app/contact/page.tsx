"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Menu,
  X,
  Mail,
  Instagram,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

const ContactPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const contactFaqs = [
    {
      icon: "🔒",
      question: "Are the sessions confidential?",
      answer:
        "Absolutely. Your comfort, privacy, and trust are our top priorities.",
    },
    {
      icon: "⏱️",
      question: "How long does it take to get a reply after filling the form?",
      answer: "We usually respond within a few hours.",
    },
    {
      icon: "💬",
      question: "I'm not sure which session to — can you help me decide?",
      answer:
        "Yes, we can guide you! Just drop us a message and we'll help you choose the right service for your needs.",
    },
    {
      icon: "❤️",
      question:
        'Can I book a "vent-out" session just to talk, even if I don\'t want therapy?',
      answer:
        "Definitely. Our vent-out sessions are designed exactly for that — a safe, judgment-free space to release and express.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link
              href="/"
              className="text-2xl font-light text-slate-900 tracking-tight"
            >
              PsychSphere
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 transition-colors font-light"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-gray-600 hover:text-gray-900 transition-colors font-light"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-gray-900 transition-colors font-light"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-teal-700 hover:text-teal-800 transition-colors font-medium"
              >
                Contact
              </Link>
              <motion.a
                href="#booking"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-teal-700 text-white px-6 py-2.5 rounded-lg hover:bg-teal-800 transition-colors font-medium"
              >
                Book Session
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-600"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              <Link
                href="/"
                className="block text-gray-600 hover:text-gray-900 transition-colors py-2 font-light"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block text-gray-600 hover:text-gray-900 transition-colors py-2 font-light"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="block text-gray-600 hover:text-gray-900 transition-colors py-2 font-light"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-teal-700 hover:text-teal-800 transition-colors py-2 font-medium"
              >
                Contact
              </Link>
              <a
                href="#booking"
                className="block bg-teal-700 text-white px-6 py-2.5 rounded-lg hover:bg-teal-800 transition-colors text-center font-medium"
              >
                Book Session
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-50/30 to-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-teal-50 px-4 py-2 rounded-full mb-8">
              <Mail className="w-4 h-4 text-teal-600" />
              <span className="text-sm text-teal-700 font-medium">
                Get in Touch
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extralight text-slate-900 mb-8 leading-[1.1] tracking-tight">
              We'd love to{" "}
              <span className="font-light italic">hear from you</span>
            </h1>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Whether you have a question, need guidance, or simply wish to
              begin your healing journey — we're here for you. Reach out and
              let's take the first step together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl sm:text-4xl font-light text-slate-900 mb-8 tracking-tight">
                  Contact Details
                </h2>

                <div className="space-y-6">
                  {/* Email */}
                  <motion.a
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-teal-200 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-teal-100 transition-colors">
                      <Mail className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900 mb-1">
                        Email Us
                      </h3>
                      <p className="text-slate-600 font-light">
                        psychsphereorg@gmail.com
                      </p>
                    </div>
                  </motion.a>

                  {/* Instagram */}
                  <motion.a
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-teal-200 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-teal-100 transition-colors">
                      <Instagram className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900 mb-1">
                        Instagram
                      </h3>
                      <p className="text-slate-600 font-light">
                        @psychsphereorg
                      </p>
                    </div>
                  </motion.a>

                  {/* WhatsApp */}
                  <motion.a
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-teal-200 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-teal-100 transition-colors">
                      <MessageCircle className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900 mb-1">
                        WhatsApp
                      </h3>
                      <p className="text-slate-600 font-light">
                        Send us a message
                      </p>
                    </div>
                  </motion.a>

                  {/* Phone */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-teal-200 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-teal-100 transition-colors">
                      <Phone className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900 mb-1">Phone</h3>
                      <p className="text-slate-600 font-light">
                        Contact number to be added
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Closing Note */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl border border-teal-100"
              >
                <Sparkles className="w-6 h-6 text-teal-600 mb-4" />
                <p className="text-slate-700 font-light leading-relaxed mb-4">
                  "Every message we receive is treated with care and
                  confidentiality.
                </p>
                <p className="text-slate-700 font-light leading-relaxed">
                  Your journey matters — and we're honored to be part of it."
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-10 shadow-sm">
                <h2 className="text-2xl font-light text-slate-900 mb-6 tracking-tight">
                  Send us a message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none font-light"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none font-light"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all outline-none resize-none font-light"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-teal-700 text-white px-6 py-4 rounded-lg hover:bg-teal-800 transition-colors font-medium flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs font-medium text-gray-400 tracking-[0.25em] uppercase mb-6 relative">
              <span className="bg-gray-50 px-4 relative z-10">
                Common Questions
              </span>
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
              </div>
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-slate-900 max-w-4xl mx-auto leading-[1.1] tracking-tight">
              Wondering about{" "}
              <span className="font-light italic">something?</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactFaqs.map((faq, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white rounded-xl overflow-hidden border border-gray-200"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-start justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start space-x-4 pr-8">
                    <span className="text-2xl shrink-0">{faq.icon}</span>
                    <span className="text-lg font-medium text-gray-900">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full bg-teal-700 text-white flex items-center justify-center transition-transform ${
                      openFaq === idx ? "rotate-45" : ""
                    }`}
                  >
                    <span className="text-xl">+</span>
                  </div>
                </button>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 pl-16"
                  >
                    <p className="text-gray-700 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-teal-700 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-teal-100 mb-4 font-light">
              Ready to take the first step?
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-gray-200 max-w-4xl mx-auto mb-8 leading-[1.1] tracking-tight">
              Your healing journey{" "}
              <span className="font-light italic">begins here</span>
            </h2>
            <motion.a
              href="#booking"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-teal-700 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Book Your First Session
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-16">
            {/* Brand Section */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <motion.p className="text-gray-600 mb-4 sm:mb-6 text-4xl">
                  {"PsychSphere".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      animate={{
                        opacity: [0, 1, 1, 0],
                        y: [20, 0, 0, -20],
                      }}
                      transition={{
                        delay: index * 0.05,
                        duration: 5,
                        times: [0, 0.2, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                      style={{ display: "inline-block" }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.p>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-slate-600 leading-relaxed font-light">
                  Exploring routes to mental well-being through a blend of
                  science, spirituality, and self-awareness.
                </p>
                <p className="text-slate-500 text-sm font-light leading-relaxed">
                  A safe space for healing and personal growth, created by
                  Shruti and Muskaan.
                </p>
              </div>
            </div>

            {/* Connect Section */}
            <div className="lg:justify-self-end">
              <h4 className="text-slate-900 font-medium mb-8 tracking-wide text-sm uppercase">
                Connect
              </h4>
              <nav className="space-y-4">
                <a
                  href="https://instagram.com/psychsphereorg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-600 hover:text-slate-900 transition-colors duration-300 font-light"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="block text-slate-600 hover:text-slate-900 transition-colors duration-300 font-light"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="block text-slate-600 hover:text-slate-900 transition-colors duration-300 font-light"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:psychsphereorg@gmail.com"
                  className="block text-slate-600 hover:text-slate-900 transition-colors duration-300 font-light"
                >
                  Email Us
                </a>
              </nav>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-12 border-t border-slate-100">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="flex space-x-8 text-sm">
                <a
                  href="#"
                  className="text-slate-500 hover:text-slate-700 transition-colors font-light"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="text-slate-500 hover:text-slate-700 transition-colors font-light"
                >
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
