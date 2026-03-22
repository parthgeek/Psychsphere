"use client";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Connect Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <motion.h4
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.25em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs font-medium text-slate-400 tracking-[0.25em] uppercase mb-16"
          >
            Connect
          </motion.h4>
          <nav className="flex flex-col items-center space-y-8">
            {[
              { label: "Instagram", href: "#" },
              { label: "Email Us", href: "mailto:hello@psychsphere.com" },
            ].map(({ label, href }, index) => (
              <motion.a
                key={label}
                href={href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.04, color: "#0f172a" }}
                className="text-lg font-light text-slate-500 tracking-wide transition-colors duration-300 cursor-pointer"
              >
                {label}
              </motion.a>
            ))}
          </nav>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-12 border-t border-slate-100"
        >
          <div className="flex justify-center space-x-10">
            {["Privacy", "Terms"].map((label, index) => (
              <motion.a
                key={label}
                href="#"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, color: "#334155" }}
                className="text-base text-slate-400 hover:text-slate-700 transition-colors font-light tracking-wide"
              >
                {label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
