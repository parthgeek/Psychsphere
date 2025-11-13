"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

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
import Image from "next/image";

const CountUp: React.FC<{
  end: number;
  suffix?: string;
  duration?: number; // seconds
  className?: string;
}> = ({ end, suffix = "", duration = 1.8, className = "" }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  // make sure useInView is imported: useInView(ref, { once: false })
  const inView = useInView(ref, { once: false });
  const [value, setValue] = useState<number>(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // start animation when it becomes visible
    if (inView) {
      const start = performance.now();
      const from = 0;
      const to = end;

      const animate = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(1, elapsed / (duration * 1000));
        // easeOutQuad
        const eased = 1 - (1 - progress) * (1 - progress);
        const current = Math.floor(from + (to - from) * eased);
        setValue(current);
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          setValue(to);
          rafRef.current = null;
        }
      };

      // ensure any prior RAF is cleared
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(animate);
      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      };
    }

    // when it goes out of view, cancel animation and reset so it can run again
    if (!inView) {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      setValue(0);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
};

const PsychsphereWebsite = () => {
  const [activeSection, setActiveSection] = useState("about");
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
      icon: "/mental-health.gif",
      duration: "40–45 minutes",
      category: "Clinical",
    },
    {
      title: "Vent-Out Session",
      description:
        "A safe space to express yourself freely without judgment or pressure.",
      icon: "/relaxed.gif",
      duration: " 25 minutes",
      category: "Support",
    },
    {
      title: "Mindfulness-Based Relaxation",
      description:
        "Guided practices to cultivate present-moment awareness and inner calm.",
      icon: "/mindfulness.gif",
      duration: "25–30 minutes",
      category: "Wellness",
    },
    {
      title: "Tarot Guidance",
      description:
        "Intuitive guidance for self-reflection and exploring life's questions.",
      icon: "/tarot.gif",
      duration: "15 minutes",
      category: "Spiritual",
    },
    {
      title: "Emotional First Aid",
      description:
        "Immediate support for emotional crises and overwhelming feelings.",
      icon: "/crisis-support.gif",
      duration: "30 min",
      category: "Crisis Support",
    },
    {
      title: "Inner Child Healing & Shadow Work",
      description:
        "Deep healing work to integrate all parts of yourself with compassion.",
      icon: "/yoga.gif",
      duration: "To be determined",
      category: "Deep Work",
    },
    {
      title: "Relationship Clarity Session",
      description:
        "Navigate relationship challenges and gain clarity on your connections.",
      icon: "/relationship.gif",
      duration: "To be determined",
      category: "Relationships",
    },
    {
      title: "Career counseling",
      description:
        "Guidance and support for career decisions and professional growth.",
      icon: "/path.gif",
      duration: "To be determined",
      category: "Career",
    },
  ];

  const founders = [
    {
      name: "Shruti",
      credentials: "M.Sc. Clinical Psychology",
      specialties: [
        "Cognitive Behavioural Therapy",
        "Tarot guidance",
        "Couple therapist",
        "Inner child healing",
        "Mindfulness-Based Interventions",
        "Humanistic Therapy",
      ],
      bio: "Passionate about creating safe spaces for healing and growth, Shruti brings warmth and evidence-based approaches to every session.",
    },
    {
      name: "Muskaan",
      credentials: "M.Sc. Clinical Psychology",
      specialties: [
        "Dialectical Behaviour Therapy",
        "Relationship guidance",
        "Career guidance",
        "Mindfulness and stress management",
        "Emotional regulation and coping skills",
        "Anger management",
      ],
      bio: "Muskaan combines traditional therapeutic methods with holistic approaches to support your journey toward wholeness and self-discovery.",
    },
  ];

  const features = [
    {
      title: "Personalized Approach",
      description:
        "Every session is customized to meet your unique needs, ensuring a focused and effective healing experience.",
      icon: "/heart.gif",
    },
    {
      title: "Evidence-Based & Holistic",
      description:
        "We blend traditional clinical psychology with spiritual and alternative healing approaches for comprehensive care.",
      icon: "/brain.gif",
    },
    {
      title: "Safe & Supportive",
      description:
        "We offer a welcoming, non-judgmental atmosphere designed to make you feel comfortable and supported.",
      icon: "/magic.gif",
    },
    {
      title: "Qualified Professionals",
      description:
        "Both co-founders hold M.Sc. in Clinical Psychology with certifications across multiple therapeutic modalities.",
      icon: "/badge.gif",
    },
    {
      title: "Flexible Scheduling",
      description:
        "We provide convenient session times to fit seamlessly into your busy lifestyle and commitments.",
      icon: "/calendar.gif",
    },
    {
      title: "Comprehensive Care",
      description:
        "From therapy to tarot guidance, we offer diverse approaches to nurture your mental and emotional well-being.",
      icon: "/email.gif",
    },
  ];

  const testimonials = [
    {
      text: "PsychSphere provided me with the perfect blend of therapy and spiritual guidance. The sessions were insightful and helped me find clarity I've been seeking for years.",
      name: "Priya Sharma",
      role: "Marketing Professional",
    },
    // {
    //   text: "The co-founders create such a safe and nurturing environment. Their holistic approach helped me heal not just mentally but spiritually too.",
    //   name: "Rahul Gupta",
    //   role: "Software Engineer",
    // },
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
        "Yes, we offer virtual sessions to provide flexible options that fit your lifestyle and comfort level.",
    },
  ];

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 py-4">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
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

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/about"
                className={`transition-colors ${
                  activeSection === "about"
                    ? "text-teal-700 text-lg font-semibold"
                    : "text-gray-700 hover:text-teal-700"
                }`}
              >
                About
              </Link>

              <Link
                href="/services"
                className={`transition-colors ${
                  activeSection === "services"
                    ? "text-teal-700 text-lg font-semibold"
                    : "text-gray-700 hover:text-teal-700"
                }`}
              >
                Services
              </Link>

              <Link
                href="/contact"
                className={`transition-colors ${
                  activeSection === "contact"
                    ? "text-teal-700 text-lg font-semibold"
                    : "text-gray-700 hover:text-teal-700"
                }`}
              >
                Contact Us
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <motion.a
                href="#booking"
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  document.getElementById("booking")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
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
            <motion.div className="md:hidden py-4 border-t border-gray-100">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-gray-700"
              >
                Home
              </Link>

              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-teal-700 font-semibold"
              >
                Services
              </Link>

              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-gray-700"
              >
                About
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-gray-700"
              >
                Contact Us
              </Link>
            </motion.div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
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

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold text-slate-900 max-w-4xl mx-auto mb-8 leading-[1.1] tracking-wider"
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
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                document.getElementById("booking")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
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
            {/* Small Round Profile Images */}
            <div className="flex -space-x-3">
              <img
                src="/user1.avif"
                alt="user1"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
              <img
                src="/user2.avif"
                alt="user2"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
              <img
                src="/user3.avif"
                alt="user3"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
            </div>

            {/* Text + Rating Section */}
            <div className="text-left">
              <p className="text-sm text-gray-600">Trusted by many</p>
              <div className="flex items-center space-x-1">
                <Star size={16} fill="#FFA500" stroke="#FFA500" />
                <span className="text-sm font-semibold text-black">4.9</span>
                <span className="text-sm text-gray-500">(150+ sessions)</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-12 sm:mt-16 rounded-2xl overflow-hidden relative"
          >
            <img
              src="/hero.jpg"
              alt="Healing Journey"
              className="w-full h-full object-cover  sm:h-160 md:h-200"
            />
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Welcome to PsychSphere <br /> a safe, compassionate, and holistic
              space
            </h2>

            <div className="text-lg text-gray-500 space-y-6 text-center tracking-tighter max-w-4xl mx-auto">
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
      {/* About Us Section with Image and Stats */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#EDF5F7]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Image Side */}
            <div className="order-2 lg:order-1">
              <img
                src="/about-us.jpg"
                alt="Therapy Session"
                className="w-full h-[400px] sm:h-[500px] object-cover rounded-3xl shadow-lg"
              />
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              {/* Section label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 h-px bg-linear-to-r from-transparent via-gray-200 to-gray-200" />
                <span className="px-4 text-xs font-medium text-gray-400 tracking-[0.15em] uppercase">
                  About Us
                </span>
                <div className="flex-1 h-px bg-linear-to-r from-gray-200 to-transparent" />
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-slate-900 max-w-4xl mx-auto mb-8 leading-[1.1] tracking-tight">
                Empowering <span className="font-light italic">growth</span> and{" "}
                <span className="font-light italic">well-being</span> care.
              </h2>

              <p className="text-lg text-gray-500 mb-8 text-center">
                At our core, we believe in creating a safe, supportive
                environment where individuals can explore their emotions,
                overcome challenges, and achieve personal transformation. With a
                focus on compassion and tailored approaches, we guide you toward
                clarity, resilience, and a fulfilling life.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-4xl sm:text-5xl font-bold text-[#5A8B94] mb-2">
                    <CountUp end={95} suffix="%" />
                  </h3>
                  <p className="text-gray-700">Client satisfaction</p>
                </div>
                {/* <div>
                  <h3 className="text-4xl sm:text-5xl font-bold text-[#5A8B94] mb-2">
                    <CountUp end={5} suffix="+" />
                  </h3>
                  <p className="text-gray-700">Years experience</p>
                </div> */}
                {/* <div>
                  <h3 className="text-4xl sm:text-5xl font-bold text-[#5A8B94] mb-2">
                    <CountUp end={150} suffix="+" />
                  </h3>
                  <p className="text-gray-700">Sessions completed</p>
                </div> */}
                <div>
                  <h3 className="text-4xl sm:text-5xl font-bold text-[#5A8B94] mb-2">
                    <CountUp end={85} suffix="%" />
                  </h3>
                  <p className="text-gray-700">Improved well-being</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Co-Founders Section - Sophisticated Cards */}
      <section id="founders" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          {/* Refined Header */}
          <motion.div className="text-center mb-20">
            <p className="text-xs font-medium text-gray-400 tracking-[0.25em] uppercase mb-6 relative">
              <span className="bg-white px-4 relative z-10">Leadership</span>
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>
              </div>
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-slate-900 max-w-4xl mx-auto leading-[1.1] tracking-tight">
              Meet Our <em className="italic font-normal">Co-Founders</em>
            </h2>
          </motion.div>

          {/* Sophisticated Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {founders.map((founder, idx) => (
              <motion.div
                key={idx}
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-700 hover:-translate-y-1"
              >
                {/* Card background gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-teal-25 via-transparent to-gray-25 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative z-10">
                  {/* Premium Avatar */}
                  {/* Premium Avatar */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full overflow-hidden transition-all duration-500">
                        <img
                          src={idx === 0 ? "/f1.jpeg" : "/f2.jpeg"}
                          alt={founder.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -inset-2 rounded-full border border-teal-200 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-light text-gray-900 mb-1 tracking-wide">
                      {founder.name}
                    </h3>
                    <p className="text-sm text-teal-700 font-medium">
                      {founder.credentials}
                    </p>
                  </div>

                  <p className="text-sm text-gray-600 font-light leading-relaxed text-center mb-6">
                    {founder.bio}
                  </p>

                  {/* Elegant list */}
                  <div className="pt-4 border-t border-gray-100">
                    <div className="space-y-2">
                      {founder.specialties.map((specialty, specIdx) => (
                        <div
                          key={specIdx}
                          className="flex items-center justify-center text-center"
                        >
                          <span className="text-xs text-gray-600 font-light tracking-wide">
                            {specialty}
                          </span>
                          {specIdx < founder.specialties.length - 1 && (
                            <span className="mx-2 text-teal-300">•</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            <p className="text-xs font-medium text-gray-400 tracking-[0.25em] uppercase mb-6 relative">
              <span className="bg-white px-4 relative z-10">Service</span>
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>
              </div>
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-slate-900 max-w-4xl mx-auto leading-[1.1] tracking-tight">
              Our Holistic <span className="font-light italic">Healing</span>{" "}
              Services
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
                whileHover={{ x: 10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-teal-500"
              >
                <div className="flex items-center p-6">
                  {/* Icon Section */}
                  {/* Icon Section */}
                  <div className="shrink-0 mr-6">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center">
                      {service.icon.startsWith("/") ? (
                        <img
                          src={service.icon}
                          alt={service.title}
                          className="w-10 h-10 object-contain"
                        />
                      ) : (
                        <span className="text-2xl">{service.icon}</span>
                      )}
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-xs text-teal-600 font-medium">
                        {service.duration}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 ">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {service.category}
                      </span>
                      <a
                        href="/contact"
                        className="text-teal-600 hover:text-teal-700 text-sm font-medium"
                      >
                        Book Now
                      </a>
                    </div>
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
            <p className="text-xs font-medium text-gray-400 tracking-[0.25em] uppercase mb-6 relative">
              <span className="bg-white px-4 relative z-10">
                Why Choose PsychSphere
              </span>
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>
              </div>
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-slate-900 max-w-4xl mx-auto leading-[1.1] tracking-tight">
              Key features to enhance your{" "}
              <span className="font-light italic">Journey </span>
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
                className="p-6 sm:p-8 rounded-2xl border border-teal-100"
              >
                <div className="w-12 h-12  rounded-xl mb-6 flex items-center justify-center text-white">
                  {typeof feature.icon === "string" ? (
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-12 h-12 object-contain "
                    />
                  ) : (
                    feature.icon
                  )}
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

      {/* Booking Section - Updated */}
      <section id="booking" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:pr-8"
            >
              <p className="text-teal-600 mb-4 font-medium">
                Book Your Session
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-slate-900 max-w-4xl mx-auto leading-[1.1] tracking-tight">
                Start Your <span className="font-light italic">Healing </span>{" "}
                <span className="font-light italic">Journey </span> Today
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Fill out the form and we'll get back to you within 24 hours to
                schedule your personalized session. Take the first step towards
                emotional well-being.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10  rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-teal-700" />
                  </div>
                  <span className="text-gray-700">+91 XXXXX XXXXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10  rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-teal-700" />
                  </div>
                  <span className="text-gray-700">
                    psychsphereorg@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10  rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-teal-700" />
                  </div>
                  <span className="text-gray-700">Mon-Sat, 9AM-7PM</span>
                </div>
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:pl-10"
            >
              <div className="bg-teal-50 rounded-2xl p-8 ">
                <form className="space-y-10">
                  {/* Name and Phone */}
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <motion.input
                        type="text"
                        className="w-full px-4 py-2 rounded-sm outline-none focus:ring-1 focus:ring-teal-300 transition-all duration-300 bg-white"
                        whileFocus={{ scale: 1.02 }}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile Number *
                      </label>
                      <motion.input
                        type="tel"
                        className="w-full px-4 py-2 rounded-sm outline-none focus:ring-1 focus:ring-teal-300 transition-all duration-300 bg-white"
                        whileFocus={{ scale: 1.02 }}
                        required
                      />
                    </div>
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email ID
                    </label>
                    <motion.input
                      type="email"
                      className="w-full px-4 py-2 rounded-sm outline-none focus:ring-1 focus:ring-teal-300 transition-all duration-300 bg-white"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>

                  {/* Service Selection - Simplified */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Service *
                    </label>
                    <motion.select
                      className="w-full px-4 py-2 rounded-sm outline-none focus:ring-1 focus:ring-teal-300 transition-all duration-300 bg-white"
                      whileFocus={{ scale: 1.02 }}
                      required
                    >
                      <option value="">Select a service</option>
                      <option>Therapy Session</option>
                      <option>Vent-Out Session</option>
                      <option>Mindfulness-Based Relaxation</option>
                      <option>Tarot Guidance</option>
                      <option>Emotional First Aid</option>
                      <option>Inner Child Healing & Shadow Work</option>
                      <option>Relationship Clarity Session</option>
                      <option>Other</option>
                    </motion.select>
                  </motion.div>

                  {/* Preferred Time */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Contact Time
                    </label>
                    <motion.select
                      className="w-full px-4 py-2  rounded-sm outline-none focus:ring-1 focus:ring-teal-300 transition-all duration-300 bg-white"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <option>Morning (9 AM - 12 PM)</option>
                      <option>Afternoon (12 PM - 5 PM)</option>
                      <option>Evening (5 PM - 8 PM)</option>
                    </motion.select>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg hover:bg-teal-800 transition-all duration-300 font-semibold shadow-lg"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      Submit Booking Request
                    </motion.span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
            className="text-center mb-20"
          >
            <p className="text-xs font-medium text-gray-400 tracking-[0.25em] uppercase mb-6 relative">
              <span className="bg-white px-4 relative z-10">Testimonials</span>
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>
              </div>
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-slate-900 max-w-4xl mx-auto leading-[1.1] tracking-tight">
              What our clients say about their{" "}
              <span className="font-light italic">journey</span>
            </h2>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-slate-100"
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group bg-white hover:bg-slate-50/50 transition-all duration-500"
              >
                <div className="p-10 lg:p-12 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex mb-8 space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill="currentColor"
                        className="text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-slate-700 mb-12 text-lg leading-relaxed font-light grow">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-600 text-white rounded-t-full rounded-br-full flex items-center justify-center text-sm font-medium tracking-wide">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-medium text-base tracking-tight">
                        {testimonial.name}
                      </h4>
                      <p className="text-slate-500 text-sm font-light mt-1 tracking-wide">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center mt-20 pt-16 border-t border-slate-100"
          >
            <p className="text-slate-500 text-sm font-light tracking-wide max-w-md mx-auto">
              Join hundreds of forward-thinking companies who trust us with
              their growth
            </p>
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
            <p className="text-xs font-medium text-gray-400 tracking-[0.25em] uppercase mb-6 relative">
              <span className="bg-white px-4 relative z-10">FAQ's</span>
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>
              </div>
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-slate-900 max-w-4xl mx-auto leading-[1.1] tracking-tight">
              Frequently asked questions about{" "}
              <span className="font-light italic">our services</span>
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
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-gray-200 max-w-4xl mx-auto mb-8 leading-[1.1] tracking-tight">
              Discover your path to emotional well-being and{" "}
              <span className="font-light italic">mindful</span> growth
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

export default PsychsphereWebsite;
