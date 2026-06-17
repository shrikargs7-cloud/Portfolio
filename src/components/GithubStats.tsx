export default function GithubStats() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold mb-16">
          GitHub Activity
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-4xl font-bold">
              7+
            </h3>
            <p>Repositories</p>
          </div>

          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-4xl font-bold">
              AI
            </h3>
            <p>Projects</p>
          </div>

          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-4xl font-bold">
              Full Stack
            </h3>
            <p>Applications</p>
          </div>

          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-4xl font-bold">
              Open
            </h3>
            <p>Source Learning</p>
          </div>

        </div>

      </div>

    </section>
  );
}