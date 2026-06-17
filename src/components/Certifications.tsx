"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

const certifications = [
  {
    name: "AI Engineering Specialization",
    issuer: "DeepLearning.AI",
    year: "2024",
  },
  {
    name: "Full Stack Web Development",
    issuer: "Meta",
    year: "2023",
  },
  {
    name: "Machine Learning with Python",
    issuer: "IBM",
    year: "2023",
  },
  {
    name: "Computer Vision Fundamentals",
    issuer: "OpenCV",
    year: "2024",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
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
            Certifications
          </span>
          <h2 className="text-5xl font-bold mt-4">
            Learning & Growth
          </h2>
          <p className="text-gray-400 text-lg mt-4">
            Certifications that validate my expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl flex items-center gap-4 hover:border-violet-500/30 transition-all duration-300"
            >
              <Award className="text-violet-400 flex-shrink-0" size={32} />
              <div>
                <h3 className="font-bold">{cert.name}</h3>
                <p className="text-sm text-gray-400">{cert.issuer}</p>
                <p className="text-xs text-gray-500 mt-1">{cert.year}</p>
              </div>
              <CheckCircle className="text-emerald-400 ml-auto" size={20} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}