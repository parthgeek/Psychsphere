'use client'
import React, { useState } from 'react';

import { motion } from 'framer-motion';
import { Menu, X, Star, Play } from 'lucide-react';

const PsychsphereWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const services = [
    {
      title: "Relation counseling",
      duration: "45 min",
      price: "$90.00",
      rating: 4.8,
      image: "/api/placeholder/400/300"
    },
    {
      title: "Anxiety manage",
      duration: "75 min",
      price: "$200.00",
      rating: 4.9,
      image: "/api/placeholder/400/300"
    },
    {
      title: "Stress relief",
      duration: "30 min",
      price: "$55.00",
      rating: 4.9,
      image: "/api/placeholder/400/300"
    },
    {
      title: "Emotional Wellness",
      duration: "30 min",
      price: "$60.00",
      rating: 4.7,
      image: "/api/placeholder/400/300"
    },
    {
      title: "Resilience Coaching",
      duration: "60 min",
      price: "$100.00",
      rating: 4.5,
      image: "/api/placeholder/400/300"
    },
    {
      title: "Mindful healing",
      duration: "45 min",
      price: "$75.00",
      rating: 4.9,
      image: "/api/placeholder/400/300"
    }
  ];

  const features = [
    {
      title: "Therapy plans",
      description: "Every session is customized to meet your unique needs, ensuring a focused and effective healing experience."
    },
    {
      title: "Experienced therapy",
      description: "Our qualified therapists provide a safe, non-judgmental space to help you explore and challenges."
    },
    {
      title: "Safe & supportive",
      description: "We offer a welcoming atmosphere designed to make you feel comfortable and supported through."
    },
    {
      title: "Holistic approach",
      description: "Our methods address emotional, mental, and physical well-being, promoting a comprehensive path."
    },
    {
      title: "Flexible scheduling",
      description: "We provide convenient session times to fit seamlessly into your busy lifestyle and commitments."
    },
    {
      title: "Practical tools",
      description: "Learn actionable strategies and coping mechanisms that empower you to thrive in everyday life."
    }
  ];

  const testimonials = [
    {
      text: "Repause Therapy helped me rediscover balance in my life. The sessions were insightful and tailored to my needs. I feel more confident and in control of my emotions now.",
      name: "Sophia Bennett",
      role: "Creative Director"
    },
    {
      text: "The supportive environment at Repause Therapy made all the difference. Their personalized approach helped me overcome challenges I had been struggling.",
      name: "Muzamal hussain",
      role: "Framer Expert"
    },
    {
      text: "Thanks to Repause Therapy, I've developed effective tools to manage stress and improve my overall well-being. It's been a transformative experience for mental health.",
      name: "Ethan Carter",
      role: "Marketing Manager"
    }
  ];

  const blogPosts = [
    {
      title: "The connection between physical and mental health",
      category: "Resources",
      date: "Dec 10, 2024",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Understanding the impact of stress on mental health",
      category: "News",
      date: "Dec 31, 2024",
      image: "/api/placeholder/400/300"
    },
    {
      title: "The power of mindfulness in daily life",
      category: "Articles",
      date: "Dec 12, 2024",
      image: "/api/placeholder/400/300"
    }
  ];

  const faqs = [
    {
      question: "What types of therapy do you offer?",
      answer: "We offer various types of therapy including cognitive behavioral therapy, mindfulness-based therapy, relationship counseling, and stress management techniques tailored to your needs."
    },
    {
      question: "How long is each therapy session?",
      answer: "Our therapy sessions typically range from 30 to 75 minutes depending on the type of service you choose. We offer flexible scheduling to accommodate your needs."
    },
    {
      question: "Do you offer virtual therapy sessions?",
      answer: "Yes, we offer both in-person and virtual therapy sessions to provide flexible options that fit your lifestyle and comfort level."
    },
    {
      question: "Is therapy confidential?",
      answer: "Absolutely. All therapy sessions are completely confidential and follow strict privacy guidelines to ensure your information remains secure."
    },
    {
      question: "How do I book a session?",
      answer: "You can book a session by clicking the 'Get started' button on our website, calling our office, or using our online booking system."
    }
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
              <span className="text-xl sm:text-2xl font-semibold text-gray-900">Psychsphere</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-teal-700 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-teal-700 transition-colors flex items-center">
                Services
                <span className="ml-1 w-2 h-2 bg-teal-500 rounded-full"></span>
              </a>
              <a href="#blog" className="text-gray-700 hover:text-teal-700 transition-colors">Blog</a>
              <a href="#therapist" className="text-gray-700 hover:text-teal-700 transition-colors">Therapist</a>
            </div>

            <div className="flex items-center space-x-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:block bg-teal-700 text-white px-6 py-2.5 rounded-lg hover:bg-teal-800 transition-colors"
              >
                Get started
              </motion.button>

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
              <a href="#about" className="block py-2 text-gray-700">About</a>
              <a href="#services" className="block py-2 text-gray-700">Services</a>
              <a href="#blog" className="block py-2 text-gray-700">Blog</a>
              <a href="#therapist" className="block py-2 text-gray-700">Therapist</a>
              <button className="w-full mt-4 bg-teal-700 text-white px-6 py-2.5 rounded-lg">
                Get started
              </button>
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
            Begin your healing!!
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight"
          >
            A safe space for healing
            <br />& personal growth
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-12"
          >
            <button className="bg-teal-700 text-white px-8 py-3 rounded-lg hover:bg-teal-800 transition-colors w-full sm:w-auto">
              Get started
            </button>
            <button className="flex items-center space-x-2 text-gray-700 hover:text-teal-700 transition-colors w-full sm:w-auto justify-center">
              <Play size={20} />
              <span>Watch Video</span>
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center space-x-3"
          >
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white"></div>
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-600">Our Happy Guests</p>
              <div className="flex items-center space-x-1">
                <Star size={16} fill="#FFA500" stroke="#FFA500" />
                <span className="text-sm font-semibold">4.8</span>
                <span className="text-sm text-gray-500">(2,382 reviews)</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-12 sm:mt-16 rounded-2xl overflow-hidden"
          >
            <div className="bg-gray-200 h-64 sm:h-96 md:h-[500px] flex items-center justify-center">
              <span className="text-gray-400">Hero Image Placeholder</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="about" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden mb-12 sm:mb-16"
          >
            <div className="bg-gray-200 h-64 sm:h-96 flex items-center justify-center">
              <span className="text-gray-400">Introduction Image Placeholder</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-gray-600 mb-4">Introduction</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Welcome to a space dedicated to your well-being.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {[
            {
              title: "Training programs and coaching sessions tailored to your workforce & ideas.",
              link: "Learn more"
            },
            {
              title: "Comprehensive and engaging sessions designed to meet the unique needs of team.",
              link: "Learn more"
            },
            {
              title: "Innovative strategies and ideas crafted to individuals and organizational success.",
              link: "Learn more"
            }
          ].map((item, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-teal-700 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <p className="text-gray-700 mb-4 text-lg">{item.title}</p>
              <a href="#" className="text-teal-700 hover:text-teal-800 inline-flex items-center space-x-2">
                <span>{item.link}</span>
                <span>→</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden"
            >
              <div className="bg-gray-200 h-96 flex items-center justify-center">
                <span className="text-gray-400">About Image Placeholder</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 mb-4">About us</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Empowering growth and well-being care.
              </h2>
              <p className="text-gray-700 mb-6">
                At our core, we believe in creating a safe, supportive environment where individuals can explore their emotions, overcome challenges, and achieve personal growth.
              </p>
              <p className="text-gray-700">
                With a focus on compassion and tailored approaches, we guide you toward clarity, resilience, and a fulfilling life.
              </p>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-20"
          >
            {[
              { stat: "80%", label: "Emotional well-being." },
              { stat: "10+", label: "Years experience." },
              { stat: "300+", label: "Client supported" },
              { stat: "50%", label: "Faster recovery" }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="text-center p-6 bg-white rounded-xl">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-700 mb-2">{item.stat}</h3>
                <p className="text-gray-600">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-gray-600 mb-4">Services</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Our specialized therapy services for you
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
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="bg-gray-200 h-48 sm:h-64 flex items-center justify-center">
                  <span className="text-gray-400">Service Image {idx + 1}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    <div className="flex items-center space-x-1">
                      <Star size={16} fill="#FFA500" stroke="#FFA500" />
                      <span className="text-sm font-semibold">{service.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-gray-600">
                    <span>{service.duration}</span>
                    <span className="font-semibold text-gray-900">{service.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-300"></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Muzamal Hussain</h3>
                  <p className="text-gray-600">Framer Designer</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg sm:text-xl text-gray-700">
                Repause Therapy truly understood the calming and minimalistic atmosphere we were seeking. We couldn't be happier with the supportive and serene environment they've helped us create.
              </p>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gray-600 mb-4">Features</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-16">
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
                className="bg-teal-700/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl"
              >
                <div className="w-12 h-12 bg-teal-700 rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden"
            >
              <div className="bg-gray-200 h-96 flex items-center justify-center">
                <span className="text-gray-400">Results Image Placeholder</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 mb-4">Results</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 sm:mb-12">
                Transformative results you can trust right now.
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">68%</h3>
                  <p className="text-gray-700">
                    Clients report enhanced focus and reduced overwhelm after participating in tailored therapy sessions designed to meet their needs.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">75%</h3>
                  <p className="text-gray-700">
                    Practical tools and personalized strategies empower clients to manage stress effectively and lead a more balanced life.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-gray-600 mb-4">Testimonials</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Hear from what our clients say about us
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
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="#000" stroke="#000" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">{testimonial.text}</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-gray-600 mb-4">Blog & resources</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Insights and tips for a healthier mind
            </h2>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-700 text-white px-8 py-3 rounded-lg hover:bg-teal-800 transition-colors"
            >
              Explore All
            </motion.button>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {blogPosts.map((post, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="bg-gray-200 h-56 flex items-center justify-center">
                  <span className="text-gray-400">Blog Image {idx + 1}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{post.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="text-teal-700 font-medium">{post.category}</span>
                    <span>{post.date}</span>
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
            <p className="text-gray-600 mb-4">Faq's</p>
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
                  <span className="text-lg font-medium text-gray-900 pr-8">{faq.question}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-teal-700 text-white flex items-center justify-center transition-transform ${openFaq === idx ? 'rotate-45' : ''}`}>
                    <span className="text-xl">+</span>
                  </div>
                </button>
                {openFaq === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
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
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-teal-700 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Get started
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Subscribe to our Newsletter
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-900 font-medium mb-4">Stay up to date</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="name@email.com"
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-teal-700 text-white px-8 py-3 rounded-lg hover:bg-teal-800 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </motion.button>
              </div>
              <p className="text-sm text-gray-600 mt-3">
                by subscribing you will agree to privacy and policy
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-teal-700 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                  P
                </div>
                <span className="text-xl font-semibold text-gray-900">Psychsphere</span>
              </div>
              <p className="text-gray-600">
                A therapy template designed to highlight transformative services and promote personal well-being.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Static pages</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-teal-700 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-teal-700 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-teal-700 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-teal-700 transition-colors">404</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">CMS Pages</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-teal-700 transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-teal-700 transition-colors">Blogs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Follow us</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-teal-700 transition-colors">Linkedin</a></li>
                <li><a href="#" className="hover:text-teal-700 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-teal-700 transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
            <p>&copy; 2024 Psychsphere. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PsychsphereWebsite;