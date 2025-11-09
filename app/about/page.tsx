"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";

const AboutPage = () => {
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

  const founders = [
    {
      name: "Shruti Dhir",
      credentials: "M.Sc. Clinical Psychology",
      role: "Co-Founder, PsychSphere",
      image: "/shruti.jpg", 
    },
    {
      name: "Muskaan Garg",
      credentials: "M.Sc. Clinical Psychology",
      role: "Co-Founder, PsychSphere",
      image: "/muskaan.jpg", 
    },
  ];

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
                className="text-teal-700 hover:text-teal-800 transition-colors font-medium"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-gray-900 transition-colors font-light"
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
                className="block text-teal-700 hover:text-teal-800 transition-colors py-2 font-medium"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="block text-gray-600 hover:text-gray-900 transition-colors py-2 font-light"
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
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-teal-50/30 to-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2  px-4 py-2 rounded-full mb-8">
        
              <span className="text-sm text-gray-400 font-light tracking-widest">
                About PsychSphere
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extralight text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Where healing feels{" "}
              <span className="font-light italic">human</span>
            </h1>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Your mental health journey meets a blend of science, spirituality,
              and self-awareness
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-white rounded-2xl p-8 sm:p-12 border border-gray-100 shadow-sm">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-1 h-12 bg-teal-600 rounded-full"></div>
                <h2 className="text-3xl sm:text-4xl font-light text-slate-900 tracking-tight m-0">
                  About PsychSphere
                </h2>
              </div>

              <div className="space-y-6 text-slate-600 font-light leading-relaxed">
                <p className="text-lg">
                  From evidence-based therapy sessions to intuitive tarot
                  guidance, from mindfulness practices to emotional first aid,
                  PsychSphere brings together diverse approaches to nurture your
                  mental and emotional well-being.
                </p>

                <p className="text-lg">
                  PsychSphere is your metaphorical space to pause, reflect, and
                  reconnect with yourself — a space where healing feels human,
                  gentle, and whole.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Co-Founders Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs font-medium text-gray-400 tracking-[0.25em] uppercase mb-6 relative">
              <span className="bg-gray-50 px-4 relative z-10">
                Meet the Co-Founders
              </span>
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>
              </div>
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-slate-900 max-w-4xl mx-auto leading-[1.1] tracking-tight mb-6">
              Guided by passion and{" "}
              <span className="font-light italic">expertise</span>
            </h2>

            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              We — Shruti and Muskaan, co-founders of PsychSphere — share a
              vision of making mental health support accessible, relatable, and
              deeply healing.
            </p>
          </motion.div>

          {/* Founders Cards */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto"
          >
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl overflow-hidden  hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-square  relative overflow-hidden">
                  {/* Placeholder for founder image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-teal-200 flex items-center justify-center">
                      <span className="text-6xl text-teal-700 font-light">
                        {founder.name.split(" ")[0][0]}
                        {founder.name.split(" ")[1][0]}
                      </span>
                    </div>
                  </div>
                  {/* When you have actual images, replace the above with:
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />
                  */}
                </div>

                <div className="p-8 text-center">
                  <h3 className="text-2xl font-light text-slate-900 mb-2 tracking-tight">
                    {founder.name}
                  </h3>
                  <p className="text-teal-700 font-medium mb-1">
                    {founder.credentials}
                  </p>
                  <p className="text-slate-500 text-sm font-light">
                    {founder.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Credentials Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-20 bg-white rounded-2xl p-8 sm:p-12 border border-gray-200 max-w-4xl mx-auto"
          >
            <div className="text-center space-y-6">
              <p className="text-lg text-slate-700 font-light leading-relaxed">
                Both of us hold an <span className="font-medium">M.Sc. in Clinical Psychology</span> and have
                earned various certifications across multiple therapeutic and
                wellness modalities, ensuring that every service we offer is
                grounded in knowledge, empathy, and authenticity.
              </p>

              <div className="pt-6 border-t border-gray-100">
                <p className="text-lg text-slate-700 font-light leading-relaxed">
                  Our shared passion for emotional wellness inspires us to
                  bridge the gap between traditional therapy and holistic
                  healing — guiding you toward{" "}
                  <span className="text-teal-700 font-medium">
                    self-discovery, resilience, and inner peace
                  </span>
                  .
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-extralight text-slate-900 max-w-3xl mx-auto leading-[1.1] tracking-tight">
              Our approach to{" "}
              <span className="font-light italic">healing</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Evidence-Based",
                description:
                  "Grounded in scientific research and proven therapeutic approaches",
              },
              {
                title: "Holistic",
                description:
                  "Integrating traditional therapy with spiritual and alternative healing",
              },
              {
                title: "Compassionate",
                description:
                  "Creating a safe, non-judgmental space for your journey",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-linear-to-br from-teal-50 to-white rounded-2xl p-8 border border-teal-100"
              >
                <h3 className="text-2xl font-light text-slate-900 mb-4 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  {value.description}
                </p>
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
            <p className="text-teal-100 mb-4 font-light">Ready to begin?</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-gray-200 max-w-4xl mx-auto mb-8 leading-[1.1] tracking-tight">
              Let's start your journey to{" "}
              <span className="font-light italic">wellness</span> together
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
                  href="#"
                  className="block text-slate-600 hover:text-slate-900 transition-colors duration-300 font-light"
                >
                  LinkedIn
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

export default AboutPage;