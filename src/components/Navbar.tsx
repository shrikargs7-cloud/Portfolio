"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Menu, X, BookOpen, Sun, Moon } from "lucide-react";
import MacDoc from "./MacDoc";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDoc, setShowDoc] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDocOnHover = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    openTimer.current = setTimeout(() => setShowDoc(true), 150);
  };

  const scheduleCloseDoc = () => {
    if (openTimer.current) clearTimeout(openTimer.current);
    closeTimer.current = setTimeout(() => setShowDoc(false), 400);
  };

  const cancelCloseDoc = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/10" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-8">
          <div className="flex items-center gap-4">
            <motion.h1
              className="font-bold text-2xl cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              GS<span className="text-violet-500">.</span>
            </motion.h1>
            
            {/* Documentation Button */}
            <button
              onClick={() => setShowDoc(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm border border-violet-500/30 text-violet-400 hover:bg-violet-500/10 transition-all duration-300"
            >
              <BookOpen size={16} />
              <span className="hidden sm:inline">Docs</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle light and dark mode"
              className="p-2 rounded-lg border border-white/10 hover:bg-white/5 transition-all duration-300"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-sm items-center">
            {navLinks.map((link) =>
              link.label === "About" ? (
                <a
                  key={link.href}
                  href={link.href}
                  onMouseEnter={openDocOnHover}
                  onMouseLeave={scheduleCloseDoc}
                  className="hover:text-violet-400 transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-violet-400 transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
            >
              <div className="flex flex-col p-8 gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-violet-400 transition-colors py-2"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mac Documentation Panel */}
      <MacDoc
        isOpen={showDoc}
        onClose={() => setShowDoc(false)}
        onPanelMouseEnter={cancelCloseDoc}
        onPanelMouseLeave={scheduleCloseDoc}
      />
    </>
  );
}