"use client";

import { projects } from "@/data/Projects";
import { motion } from "framer-motion";
import VegaShowcase from "./VegaShowcase";

export default function Projects() {
  return (
    <section
      id="projects"
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
            Projects
          </span>
          <h2 className="text-5xl font-bold mt-4">
            Milestones in the Learning Journey
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Each project marks a step forward, showcasing my growth and journey as a developer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-3xl p-8 border border-white/10 hover:border-violet-500/30 transition-all duration-300"
            >
              {project.featured && (
                <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-500/20 text-violet-400 text-xs font-semibold mb-4">
                  Featured Project
                </span>
              )}
              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {project.title?.toLowerCase().includes("vega") && (
                <VegaShowcase />
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <img src="/external-link.svg" alt="External Link" className="w-4 h-4" />
                    View Project
                  </a>
                )}
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <img src="/github.svg" alt="GitHub" className="w-4 h-4" />
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}