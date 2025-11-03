"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Star,
  Play,
  Brain,
  Heart,
  Sparkles,
  Users,
  Calendar,
  Mail,
  Phone,
} from "lucide-react";

const PsychsphereWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const services = [
    {
      title: "Therapy Session",
      description:
        "Evidence-based therapeutic approaches tailored to your unique needs and goals.",
      icon: "🧠",
      duration: "60 min",
      category: "Clinical",
    },
    {
      title: "Vent-Out Session",
      description:
        "A safe space to express yourself freely without judgment or pressure.",
      icon: "💭",
      duration: "45 min",
      category: "Support",
    },
    {
      title: "Mindfulness-Based Relaxation",
      description:
        "Guided practices to cultivate present-moment awareness and inner calm.",
      icon: "🧘‍♀️",
      duration: "30 min",
      category: "Wellness",
    },
    {
      title: "Tarot Guidance",
      description:
        "Intuitive guidance for self-reflection and exploring life's questions.",
      icon: "🔮",
      duration: "45 min",
      category: "Spiritual",
    },
    {
      title: "Emotional First Aid",
      description:
        "Immediate support for emotional crises and overwhelming feelings.",
      icon: "❤️‍🩹",
      duration: "30 min",
      category: "Crisis Support",
    },
    {
      title: "Inner Child Healing & Shadow Work",
      description:
        "Deep healing work to integrate all parts of yourself with compassion.",
      icon: "🌟",
      duration: "75 min",
      category: "Deep Work",
    },
    {
      title: "Relationship Clarity Session",
      description:
        "Navigate relationship challenges and gain clarity on your connections.",
      icon: "💕",
      duration: "60 min",
      category: "Relationships",
    },
  ];

  const founders = [
    {
      name: "Shruti",
      credentials: "M.Sc. Clinical Psychology",
      specialties: [
        "Cognitive Behavioral Therapy",
        "Trauma-Informed Care",
        "Mindfulness-Based Interventions",
      ],
      bio: "Passionate about creating safe spaces for healing and growth, Shruti brings warmth and evidence-based approaches to every session.",
    },
    {
      name: "Muskaan",
      credentials: "M.Sc. Clinical Psychology",
      specialties: [
        "Humanistic Therapy",
        "Spiritual Psychology",
        "Holistic Wellness",
      ],
      bio: "Muskaan combines traditional therapeutic methods with holistic approaches to support your journey toward wholeness and self-discovery.",
    },
  ];

  const features = [
    {
      title: "Personalized Approach",
      description:
        "Every session is customized to meet your unique needs, ensuring a focused and effective healing experience.",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      title: "Evidence-Based & Holistic",
      description:
        "We blend traditional clinical psychology with spiritual and alternative healing approaches for comprehensive care.",
      icon: <Brain className="w-6 h-6" />,
    },
    {
      title: "Safe & Supportive",
      description:
        "We offer a welcoming, non-judgmental atmosphere designed to make you feel comfortable and supported.",
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      title: "Qualified Professionals",
      description:
        "Both co-founders hold M.Sc. in Clinical Psychology with certifications across multiple therapeutic modalities.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Flexible Scheduling",
      description:
        "We provide convenient session times to fit seamlessly into your busy lifestyle and commitments.",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      title: "Comprehensive Care",
      description:
        "From therapy to tarot guidance, we offer diverse approaches to nurture your mental and emotional well-being.",
      icon: <Mail className="w-6 h-6" />,
    },
  ];

  const testimonials = [
    {
      text: "PsychSphere provided me with the perfect blend of therapy and spiritual guidance. The sessions were insightful and helped me find clarity I've been seeking for years.",
      name: "Priya Sharma",
      role: "Marketing Professional",
    },
    {
      text: "The co-founders create such a safe and nurturing environment. Their holistic approach helped me heal not just mentally but spiritually too.",
      name: "Rahul Gupta",
      role: "Software Engineer",
    },
    {
      text: "I was amazed by how they seamlessly integrated traditional therapy with mindfulness and tarot guidance. It's exactly what my healing journey needed.",
      name: "Ananya Singh",
      role: "Creative Director",
    },
  ];

  const faqs = [
    {
      question: "What makes PsychSphere different from traditional therapy?",
      answer:
        "PsychSphere offers a unique blend of evidence-based therapy with holistic healing approaches. We integrate traditional clinical psychology with mindfulness, spiritual guidance, and alternative healing modalities to address your complete well-being.",
    },
    {
      question: "Are your sessions confidential?",
      answer:
        "Absolutely. All sessions are completely confidential and follow strict ethical guidelines. Your privacy and trust are our highest priorities.",
    },
    {
      question: "Do I need to prepare anything before my session?",
      answer:
        "No special preparation is needed. Just come as you are with an open mind. For tarot sessions, you may want to think about questions or areas of life you'd like to explore.",
    },
    {
      question: "How do I know which service is right for me?",
      answer:
        "During your initial consultation, we'll discuss your needs and goals to recommend the most suitable approach. You can also start with a general therapy session and explore other services as you feel comfortable.",
    },
    {
      question: "Do you offer virtual sessions?",
      answer:
        "Yes, we offer both in-person and virtual sessions to provide flexible options that fit your lifestyle and comfort level.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-700 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                P
              </div>
              <span className="text-xl sm:text-2xl font-semibold text-gray-900">
                PsychSphere
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-gray-700 hover:text-teal-700 transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-teal-700 transition-colors flex items-center"
              >
                Services
                <span className="ml-1 w-2 h-2 bg-teal-500 rounded-full"></span>
              </a>
              <a
                href="#founders"
                className="text-gray-700 hover:text-teal-700 transition-colors"
              >
                Co-Founders
              </a>
              <a
                href="#booking"
                className="text-gray-700 hover:text-teal-700 transition-colors"
              >
                Book Now
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <motion.a
                href="#booking"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:block bg-teal-700 text-white px-6 py-2.5 rounded-lg hover:bg-teal-800 transition-colors"
              >
                Book Session
              </motion.a>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-gray-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
              className="md:hidden py-4 border-t border-gray-100"
            >
              <a href="#about" className="block py-2 text-gray-700">
                About
              </a>
              <a href="#services" className="block py-2 text-gray-700">
                Services
              </a>
              <a href="#founders" className="block py-2 text-gray-700">
                Co-Founders
              </a>
              <a href="#booking" className="block py-2 text-gray-700">
                Book Now
              </a>
              <a
                href="#booking"
                className="block w-full mt-4 bg-teal-700 text-white px-6 py-2.5 rounded-lg text-center"
              >
                Book Session
              </a>
            </motion.div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 mb-4 sm:mb-6"
          >
            PsychSphere
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight"
          >
            Exploring Routes to
            <br />
            Mental Well-Being
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-12"
          >
            <a
              href="#booking"
              className="bg-teal-700 text-white px-8 py-3 rounded-lg hover:bg-teal-800 transition-colors w-full sm:w-auto text-center"
            >
              Book Your Session
            </a>
            <button className="flex items-center space-x-2 text-gray-700 hover:text-teal-700 transition-colors w-full sm:w-auto justify-center">
              <Play size={20} />
              <span>Learn More</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center space-x-3"
          >
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-teal-200 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-teal-300 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-teal-400 border-2 border-white"></div>
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-600">Trusted by many</p>
              <div className="flex items-center space-x-1">
                <Star size={16} fill="#FFA500" stroke="#FFA500" />
                <span className="text-sm font-semibold">4.9</span>
                <span className="text-sm text-gray-500">(150+ sessions)</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-12 sm:mt-16 rounded-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-teal-100 to-teal-200 h-64 sm:h-96 md:h-[500px] flex items-center justify-center">
              <span className="text-teal-700 text-lg">
                Welcome to Your Healing Journey
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section
        id="about"
        className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-6xl mx-auto"
          >
            <p className="text-gray-600 mb-4">Introduction</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Welcome to PsychSphere — a safe, compassionate, and holistic space
            </h2>

            <div className="text-lg text-gray-700 space-y-6 text-left max-w-4xl mx-auto">
              <p>
                Here, your mental health journey meets a blend of science,
                spirituality, and self-awareness. From evidence-based therapy
                sessions to intuitive tarot guidance, from mindfulness practices
                to emotional first aid, PsychSphere brings together diverse
                approaches to nurture your mental and emotional well-being.
              </p>
              <p className="text-center font-medium text-teal-700">
                PsychSphere is your metaphorical space to pause, reflect, and
                reconnect with yourself.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Co-Founders Section */}
      <section id="founders" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-gray-600 mb-4">About the Co-Founders</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Meet Shruti and Muskaan
            </h2>
            <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-4">
              <p>
                We — Shruti and Muskaan, co-founders of PsychSphere — share a
                vision of making mental health support accessible, relatable,
                and deeply healing.
              </p>
              <p>
                Both of us hold an M.Sc. in Clinical Psychology and have earned
                certifications across multiple therapeutic and wellness
                modalities to ensure that every service we offer is rooted in
                knowledge, empathy, and authenticity.
              </p>
              <p className="font-medium text-teal-700">
                Our shared passion for emotional wellness inspires us to bridge
                the gap between traditional therapy and holistic healing —
                guiding you towards self-discovery, resilience, and inner peace.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto"
          >
            {founders.map((founder, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {founder.name[0]}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {founder.name}
                  </h3>
                  <p className="text-teal-700 font-medium">
                    {founder.credentials}
                  </p>
                </div>

                <p className="text-gray-700 mb-6">{founder.bio}</p>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Specializations:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {founder.specialties.map((specialty, specIdx) => (
                      <span
                        key={specIdx}
                        className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-gray-600 mb-4">Services</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Our Holistic Healing Services
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <span className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-4 text-center">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-600 border-t pt-4">
                    <span>Duration: {service.duration}</span>
                    <a
                      href="#booking"
                      className="text-teal-700 hover:text-teal-800 font-medium"
                    >
                      Book Now →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-gray-600 mb-4">Why Choose PsychSphere</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Key features to enhance your journey
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-teal-50 p-6 sm:p-8 rounded-2xl border border-teal-100"
              >
                <div className="w-12 h-12 bg-teal-700 rounded-xl mb-6 flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Booking Section */}
      <section
        id="booking"
        className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gray-600 mb-4">Book Your Session</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Start Your Healing Journey Today
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Fill out the form below and we'll get back to you to schedule your
              personalized session.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            {/* Google Form Embed */}
            <div className="w-full">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSf_EXAMPLE_FORM_ID/viewform?embedded=true"
                width="100%"
                height="1200"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-lg"
              >
                Loading…
              </iframe>
            </div>

            {/* Alternative Manual Form (use this if you don't have Google Form ready) */}
            <div className="hidden">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email ID (optional but preferred)
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select the Service You're Interested In *
                  </label>
                  <div className="space-y-2">
                    {services.map((service, idx) => (
                      <label key={idx} className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                        />
                        <span className="ml-2 text-gray-700">
                          {service.title}
                        </span>
                      </label>
                    ))}
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                      />
                      <span className="ml-2 text-gray-700">Other</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time to Contact You
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
                    <option>Morning (9 AM - 12 PM)</option>
                    <option>Afternoon (12 PM - 5 PM)</option>
                    <option>Evening (5 PM - 8 PM)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes / Queries (optional)
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-700 text-white py-3 px-6 rounded-lg hover:bg-teal-800 transition-colors font-semibold"
                >
                  Submit Booking Request
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5 text-teal-700" />
                  <span className="text-gray-700">+91 XXXXX XXXXX</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5 text-teal-700" />
                  <span className="text-gray-700">hello@psychsphere.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Calendar className="w-5 h-5 text-teal-700" />
                  <span className="text-gray-700">Mon-Sat, 9AM-7PM</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-gray-600 mb-4">Testimonials</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              What our clients say about their journey
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="#FFA500" stroke="#FFA500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">{testimonial.text}</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-gray-600 mb-4">FAQ's</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Frequently asked questions about our services
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white rounded-xl overflow-hidden border border-gray-200"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-medium text-gray-900 pr-8">
                    {faq.question}
                  </span>
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
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-700">{faq.answer}</p>
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
            <p className="text-teal-100 mb-4">Start your journey</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Discover your path to emotional well-being and mindful growth
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
      <footer className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-teal-700 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                  P
                </div>
                <span className="text-xl font-semibold text-gray-900">
                  PsychSphere
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Exploring routes to mental well-being through a blend of
                science, spirituality, and self-awareness.
              </p>
              <p className="text-gray-600">
                A safe space for healing and personal growth, created by Shruti
                and Muskaan.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a
                    href="#about"
                    className="hover:text-teal-700 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-teal-700 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#founders"
                    className="hover:text-teal-700 transition-colors"
                  >
                    Co-Founders
                  </a>
                </li>
                <li>
                  <a
                    href="#booking"
                    className="hover:text-teal-700 transition-colors"
                  >
                    Book Session
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-teal-700 transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-700 transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-700 transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@psychsphere.com"
                    className="hover:text-teal-700 transition-colors"
                  >
                    Email Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
            <p>
              &copy; 2024 PsychSphere. All rights reserved. | Designed with ❤️
              for mental wellness
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PsychsphereWebsite;
