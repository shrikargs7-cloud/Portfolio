"use client";

import { Briefcase, Brain, Code } from "lucide-react";

export default function Recruiter() {
  return (
    <section className="py-32 px-8">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <span className="text-violet-400 uppercase tracking-widest">
            Recruiters
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Currently Open To
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="glass-card p-8 rounded-3xl">
            <Code size={40} />
            <h3 className="text-2xl font-bold mt-4">
              Software Engineering
            </h3>
          </div>

          <div className="glass-card p-8 rounded-3xl">
            <Brain size={40} />
            <h3 className="text-2xl font-bold mt-4">
              AI Engineering
            </h3>
          </div>

          <div className="glass-card p-8 rounded-3xl">
            <Briefcase size={40} />
            <h3 className="text-2xl font-bold mt-4">
              Full Stack Roles
            </h3>
          </div>

        </div>

      </div>

    </section>
  );
}