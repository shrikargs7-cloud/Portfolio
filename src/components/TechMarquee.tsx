const tech = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "Flask",
  "Firebase",
  "Supabase",
  "OpenAI",
  "Gemini",
  "AI",
  "Machine Learning"
];

export default function TechMarquee() {
  return (
    <section className="overflow-hidden py-12">

      <div className="animate-marquee flex gap-20 whitespace-nowrap">

        {tech.concat(tech).map((item, index) => (
          <span
            key={index}
            className="text-3xl font-bold text-white/20"
          >
            {item}
          </span>
        ))}

      </div>

    </section>
  );
}