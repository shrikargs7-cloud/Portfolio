"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 relative">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-4"
        >
          <span className="px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 inline-block">
            🚀 Open To Opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-violet-500 via-cyan-400 to-pink-500 bg-clip-text text-transparent gradient-text-animate">
            G S Shrikar
          </span>
          <br />
          <span className="text-4xl md:text-5xl lg:text-6xl mt-4 block">
            I think deeply about why things work.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 text-lg md:text-xl mt-8 max-w-3xl mx-auto leading-relaxed"
        >
          I like working with ideas that move the needle, whether it's products, systems, or people.
          I care about craft, momentum, and doing the hard things well. Most days I'm building,
          writing, or helping others figure out how to ship their vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-4 justify-center mt-10"
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 transition-all duration-300 font-medium shadow-lg shadow-violet-500/25"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/5 transition-all duration-300 font-medium"
          >
            Book a Call
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-6 justify-center mt-12"
        >
          <a
            href="https://github.com/shrikargs7-cloud"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <img src="/github.svg" alt="GitHub" className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <img src="/twitter.svg" alt="Twitter" className="w-6 h-6" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <img src="/arrow-down.svg" alt="Scroll down" className="w-8 h-8 text-gray-500 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}