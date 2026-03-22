"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const AboutPage = () => {
 

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

  const founder = {
    name: "Shruti Dhir",
    credentials: "M.Sc. Clinical Psychology",
    bio: "Shruti founded PsychSphere with the vision of making mental health support accessible, compassionate, and stigma-free. Through this platform, she aims to create safe spaces where individuals can seek guidance, emotional support, and professional psychological care.",
  };

  const team = [
    {
      name: "Dolly",
      role: "Psychologist",
      credentials: "M.Sc. Clinical Psychology",
    },
    {
      name: "Harshita",
      role: "Psychologist",
      credentials: "M.Sc. Clinical Psychology",
    },
    {
      name: "Nashika",
      role: "Junior Psychologist",
      credentials: "B.Sc. Psychology (Hons.)",
    },
    {
      name: "Muskaan",
      role: "Senior Psychologist",
      credentials: "M.Sc. Clinical Psychology",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar/>

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

      {/* Founder Section */}
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
                Meet Our Founder
              </span>
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>
              </div>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-12 shadow-sm text-center">
              <h2 className="text-3xl sm:text-4xl font-light text-slate-900 tracking-tight mb-3">
                {founder.name}
              </h2>
              <p className="text-xl text-teal-700 font-medium mb-8">
                {founder.credentials}
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed max-w-3xl mx-auto">
                {founder.bio}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <p className="text-xs font-medium text-gray-400 tracking-[0.25em] uppercase mb-6 relative">
                <span className="bg-gray-50 px-4 relative z-10">
                  Meet Our Team
                </span>
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>
                </div>
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 xl:grid-cols-4 gap-6"
            >
              {team.map((member) => (
                <motion.div
                  key={member.name}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm text-center"
                >
                  <h3 className="text-2xl font-light text-slate-900 tracking-tight mb-3">
                    {member.name}
                  </h3>
                  <p className="text-teal-700 font-medium mb-2">{member.role}</p>
                  <p className="text-slate-600 font-light leading-relaxed">
                    {member.credentials}
                  </p>
                </motion.div>
              ))}
            </motion.div>
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
              Our approach to <span className="font-light italic">healing</span>
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
              href="/#booking"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-teal-700 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Book Your First Session
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
