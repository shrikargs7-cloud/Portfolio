"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "AI Engineer & Full Stack Developer",
    company: "Freelance",
    period: "2023 - Present",
    description: "Building AI-powered applications and full-stack solutions for clients across various industries.",
  },
  {
    title: "Vega AI - Medical Image Analysis",
    company: "Project Lead",
    period: "2024",
    description: "Led development of AI-powered medical image analysis platform using Next.js, Firebase, and OpenAI.",
  },
  {
    title: "Spice Vault - Business Platform",
    company: "Full Stack Developer",
    period: "2023",
    description: "Built comprehensive inventory management and analytics platform for spice businesses.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
            Experience
          </span>
          <h2 className="text-5xl font-bold mt-4">
            Professional Journey
          </h2>
          <p className="text-gray-400 text-lg mt-4">
            Milestones in my development career
          </p>
        </motion.div>

        <div className="space-y-8 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:border-violet-500/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-violet-400">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="text-gray-400 mt-4">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}