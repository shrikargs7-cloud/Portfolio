"use client";

const skills = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Flask",
  "Firebase",
  "Supabase",
  "SQL",
  "Git",
  "GitHub",
  "OpenAI",
  "Gemini",
  "Computer Vision",
  "Machine Learning",
  "Tailwind CSS",
  "Render",
  "Vercel"
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold mb-16">
          Skills & Technologies
        </h2>

        <div className="flex flex-wrap gap-4">

          {skills.map((skill) => (
            <div
              key={skill}
              className="
                px-6
                py-3
                rounded-full
                bg-white/5
                border
                border-white/10
                hover:border-violet-500
                transition-all
                duration-300
                hover:scale-110
              "
            >
              {skill}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}