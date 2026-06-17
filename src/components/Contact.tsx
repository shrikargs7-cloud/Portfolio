"use client";

import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-8"
    >
      <div className="max-w-5xl mx-auto">
        <div className="glass-card rounded-3xl p-12 text-center">

          <h2 className="text-5xl font-bold mb-6">
            Let's Build Something Amazing
          </h2>

          <p className="text-gray-400 mb-8">
            Open to AI, Full Stack and Software Engineering opportunities.
          </p>

          <a
            href="mailto:shrikargs7@gmail.com"
            className="inline-flex items-center gap-2 bg-violet-600 px-6 py-3 rounded-xl"
          >
            <Mail size={18} />
            Email Me
          </a>

        </div>
      </div>
    </section>
  );
}