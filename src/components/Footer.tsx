"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-3xl font-bold">
              G S Shrikar
            </h3>
            <p className="text-gray-500 mt-2">
              Full Stack Developer • AI Engineer
            </p>
            
            {/* Signature Animation */}
            <div className="mt-4">
              <svg
                width="200"
                height="50"
                viewBox="0 0 200 50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M 10 25 Q 20 20 30 30 Q 40 40 50 25 Q 60 10 70 20 Q 80 30 90 25 Q 100 20 110 30 Q 120 40 130 25 Q 140 10 150 20 Q 160 30 170 25 Q 180 20 190 30"
                  stroke="url(#signatureGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="signature-path"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="signatureGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="50%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4">
              <a
                href="mailto:shrikargs7@gmail.com"
                className="text-gray-400 hover:text-violet-400 transition-colors"
              >
                <img src="/mail.svg" alt="Email" className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/shrikargs7-cloud"
                target="_blank"
                className="text-gray-400 hover:text-violet-400 transition-colors"
              >
                <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-violet-400 transition-colors"
              >
                <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-violet-400 transition-colors"
              >
                <img src="/twitter.svg" alt="Twitter" className="w-5 h-5" />
              </a>
            </div>
            
            <motion.button
              onClick={scrollToTop}
              className="bg-violet-600/20 hover:bg-violet-600/40 p-3 rounded-full transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src="/arrow-up.svg" alt="Scroll to top" className="w-5 h-5 text-violet-400" />
            </motion.button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} G S Shrikar. All rights reserved.</p>
          <p className="mt-1">
            Built with 💜 using Next.js, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}