// components/Navbar.tsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 py-4">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden flex items-center justify-center">
                <Image
                  src="/logo.jpeg"
                  alt="Logo"
                  width="112"
                  height="112"
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  isActive(item.href)
                    ? "text-teal-700 text-lg font-semibold"
                    : "text-gray-700 hover:text-teal-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
            
      
          </div>

          <div className="flex items-center space-x-4">
            <motion.a
              href="#booking"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                if (pathname === "/") {
                  document.getElementById("booking")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                } else {
                  window.location.href = "/#booking";
                }
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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 ${
                  isActive(item.href)
                    ? "text-teal-700 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="block bg-teal-700 text-white px-6 py-2.5 rounded-lg hover:bg-teal-800 transition-colors text-center font-medium mt-4"
            >
              Book Session
            </a>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;