"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Code, Users } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 uppercase text-sm tracking-widest">
            About Me
          </span>
          <h2 className="text-5xl font-bold mt-4">
            Building Products, Not Just Projects
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Full Stack Developer and AI Engineer passionate about solving real-world problems
            through intelligent software systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm G S Shrikar, a Full Stack Developer and AI Engineer passionate about
              building intelligent products that solve real-world problems.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              My experience spans AI-powered healthcare, computer vision, analytics dashboards,
              supply chain optimization, and scalable web applications. I enjoy transforming
              ideas into production-ready products that make a difference.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="glass-card p-4 rounded-xl flex items-center gap-3">
                <Briefcase className="text-violet-400" size={20} />
                <span>7+ Projects Built</span>
              </div>
              <div className="glass-card p-4 rounded-xl flex items-center gap-3">
                <Code className="text-cyan-400" size={20} />
                <span>Full Stack Developer</span>
              </div>
              <div className="glass-card p-4 rounded-xl flex items-center gap-3">
                <Award className="text-pink-400" size={20} />
                <span>AI Engineer</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="glass-card p-8 rounded-2xl text-center popup-card">
              <h3 className="text-4xl font-bold text-violet-400">7+</h3>
              <p className="text-gray-400 mt-2">Projects Built</p>
            </div>
            <div className="glass-card p-8 rounded-2xl text-center popup-card">
              <h3 className="text-4xl font-bold text-cyan-400">AI</h3>
              <p className="text-gray-400 mt-2">Focused Builder</p>
            </div>
            <div className="glass-card p-8 rounded-2xl text-center popup-card">
              <h3 className="text-4xl font-bold text-pink-400">5+</h3>
              <p className="text-gray-400 mt-2">Technologies</p>
            </div>
            <div className="glass-card p-8 rounded-2xl text-center popup-card">
              <h3 className="text-4xl font-bold text-emerald-400">100%</h3>
              <p className="text-gray-400 mt-2">Passion Driven</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}