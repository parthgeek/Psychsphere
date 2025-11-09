"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Clock, IndianRupee, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ServicesPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const services = [
    {
      title: "Therapy Session",
      price: 499,
      duration: "40–45 minutes",
      description:
        "One-on-one professional counseling tailored to your emotional needs. Our approach integrates evidence-based therapies including Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and Mindfulness-based techniques to help you heal, cope, and grow.",
      icon: "/mental-health.gif",
      whatsappText: "Hi, I want to book a Therapy Session.",
      featured: true,
    },
    {
      title: "Mindfulness-Based Relaxation",
      price: 499,
      duration: "25–30 minutes",
      description:
        "A guided practice designed to calm your mind, reduce stress, and restore inner balance through breathwork, awareness, and present-moment grounding.",
      icon: "/mindfulness.gif",
      whatsappText: "Hi, I want to book a Mindfulness-Based Relaxation session.",
    },
    {
      title: "Vent-Out Session",
      price: 399,
      duration: "25 minutes",
      description:
        "A safe and judgment-free space to release whatever you've been holding in. Sometimes, you don't need advice — you just need to be heard. These sessions help you express emotions freely and feel lighter.",
      icon: "/relaxed.gif",
      whatsappText: "Hi, I want to book a Vent-Out Session.",
    },
    {
      title: "Tarot Guidance",
      price: 399,
      duration: "15 minutes",
      description:
        "A holistic, intuitive reading that offers clarity, reflection, and self-insight. Through symbolic guidance and intuitive wisdom, tarot can illuminate patterns and help you align with your emotional path.",
      icon: "/tarot.gif",
      whatsappText: "Hi, I want to book a Tarot Guidance session.",
    },
    {
      title: "Inner Child Healing & Shadow Work",
      price: 599,
      duration: "To be determined",
      description:
        "Transformative sessions focused on healing deep-rooted emotional wounds, reconnecting with your inner child, and integrating your shadow self — helping you reclaim wholeness and self-compassion.",
      icon: "/yoga.gif",
      whatsappText: "Hi, I want to book an Inner Child & Shadow Work session.",
      featured: true,
    },
    {
      title: "Emotional First Aid Kit",
      price: 449,
      duration: "30 minutes",
      description:
        "A quick, practical session to manage overwhelming emotions in the moment. Learn self-soothing techniques, coping strategies, and grounding practices you can carry into your everyday life for emotional stability.",
      icon: "/crisis-support.gif",
      whatsappText: "Hi, I want to book an Emotional First Aid Kit session.",
    },
  ];

  const relationshipServices = [
    {
      title: "Individual Relationship Clarity Session",
      price: 699,
      duration: "45 minutes",
      description:
        "For people who want to understand their own patterns, attachment style, or emotional needs within a relationship — whether they're single, dating, or processing a breakup.",
      icon: "/relationship.gif",
      whatsappText:
        "Hi, I want to book an Individual Relationship Clarity Session.",
    },
    {
      title: "Couple Relationship Clarity Session",
      price: 999,
      duration: "80 minutes",
      description:
        "For couples who want to explore their relationship dynamics together — understanding differences, conflict areas, and emotional communication patterns.",
      icon: "/relationship.gif",
      whatsappText:
        "Hi, I want to book a Couple Relationship Clarity Session.",
    },
  ];

  const getWhatsAppLink = (text: string) => {
    const phoneNumber = "917357495979"; // WhatsApp business number
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 py-4">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden flex items-center justify-center">
                <Image
                  src="/logo.jpeg"
                  alt="Logo"
                  width="112"
                  height="112"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-teal-700 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-teal-700 text-lg font-semibold"
              >
                Services
              </Link>
              <Link
                href="/#founders"
                className="text-gray-700 hover:text-teal-700 transition-colors"
              >
                Co-Founders
              </Link>
              <Link
                href="/#booking"
                className="text-gray-700 hover:text-teal-700 transition-colors"
              >
                Book Now
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                href="/#booking"
                className="hidden sm:block bg-teal-700 text-white px-6 py-2.5 rounded-lg hover:bg-teal-800 transition-colors"
              >
                Book Session
              </Link>

              <button
                className="md:hidden text-gray-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 border-t border-gray-100"
            >
              <Link href="/" className="block py-2 text-gray-700">
                Home
              </Link>
              <Link href="/services" className="block py-2 text-teal-700 font-semibold">
                Services
              </Link>
              <Link href="/#founders" className="block py-2 text-gray-700">
                Co-Founders
              </Link>
              <Link href="/#booking" className="block py-2 text-gray-700">
                Book Now
              </Link>
            </motion.div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-medium text-gray-400 tracking-[0.25em] uppercase mb-6"
          >
            Our Services
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extralight text-slate-900 max-w-4xl mx-auto mb-8 leading-[1.1] tracking-tight"
          >
            Supporting You,{" "}
            <span className="font-light italic">Wherever You Are</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700"
          >
            <p>
              At PsychSphere, we believe mental health support should be
              affordable, accessible and flexible — no matter where you are.
            </p>
            <p className="flex items-center justify-center gap-2 text-teal-700 font-medium">
              <span>💻</span>
              <span>
                Online sessions are available across India and worldwide, and we
                make sure to respond promptly when you reach out.
              </span>
            </p>
            <p className="flex items-center justify-center gap-2 text-gray-600">
              <span>🏠</span>
              <span>
                Offline sessions will be available soon at our physical center.
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`group relative bg-white rounded-2xl p-8 border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  service.featured
                    ? "border-teal-200 shadow-lg"
                    : "border-gray-100"
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 right-6 bg-teal-700 text-white text-xs px-3 py-1 rounded-full font-medium">
                    Popular
                  </div>
                )}

                <div className="mb-6">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1 text-teal-700">
                    <IndianRupee size={16} />
                    <span className="font-semibold text-lg">{service.price}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Clock size={16} />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 min-h-[100px]">
                  {service.description}
                </p>

                <a
                  href={getWhatsAppLink(service.whatsappText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-800 transition-all duration-300 font-medium group-hover:shadow-lg"
                >
                  <MessageCircle size={18} />
                  <span>Book Now</span>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Relationship Clarity Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-medium text-gray-400 tracking-[0.25em] uppercase mb-6 relative">
              <span className="bg-gray-50 px-4 relative z-10">
                Relationship Support
              </span>
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
              </div>
            </p>

            <h2 className="text-4xl sm:text-5xl font-extralight text-slate-900 max-w-3xl mx-auto leading-[1.1] tracking-tight">
              Relationship{" "}
              <span className="font-light italic">Clarity Sessions</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {relationshipServices.map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group relative bg-white rounded-2xl p-8 border border-teal-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="mb-6">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1 text-teal-700">
                    <IndianRupee size={16} />
                    <span className="font-semibold text-lg">{service.price}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Clock size={16} />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <a
                  href={getWhatsAppLink(service.whatsappText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-800 transition-all duration-300 font-medium group-hover:shadow-lg"
                >
                  <MessageCircle size={18} />
                  <span>Book Now</span>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-teal-700 text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-teal-100 mb-4">Ready to begin?</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-gray-200 max-w-4xl mx-auto mb-8 leading-[1.1] tracking-tight">
              Take the first step toward{" "}
              <span className="font-light italic">healing</span> and{" "}
              <span className="font-light italic">growth</span>
            </h2>
            <motion.a
              href="/#booking"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-teal-700 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Book Your Session Today
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-16">
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <motion.p className="text-gray-600 text-4xl">
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
              </div>
            </div>

            <div className="lg:justify-self-end">
              <h4 className="text-slate-900 font-medium mb-8 tracking-wide text-sm uppercase">
                Connect
              </h4>
              <nav className="space-y-4">
                <a
                  href="#"
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
                  href="mailto:hello@psychsphere.com"
                  className="block text-slate-600 hover:text-slate-900 transition-colors duration-300 font-light"
                >
                  Email Us
                </a>
              </nav>
            </div>
          </div>

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

export default ServicesPage;