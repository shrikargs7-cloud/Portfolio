"use client";

import { motion } from "framer-motion";

export default function VegaShowcase() {
  const layers = [
    "Firebase Authentication",
    "Supabase Database",
    "AI Analysis Engine",
    "Medical Report Generation",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-2xl p-6 mt-6"
    >
      <h4 className="text-sm uppercase tracking-widest text-violet-400 mb-6">
        System Architecture
      </h4>

      <div className="flex flex-col gap-3">
        {layers.map((layer, index) => (
          <div key={layer}>
            <div className="glass-card p-3 rounded-xl text-sm text-center">
              {layer}
            </div>
            {index < layers.length - 1 && (
              <div className="text-center text-violet-400 leading-none py-1">
                ↓
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}