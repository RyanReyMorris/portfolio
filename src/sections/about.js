export default function About() {
    return `
    <section id="about" class="py-16 px-4 bg-accent relative z-10">
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="card">
            <h3 class="text-xl font-semibold text-secondary mb-2">Who I Am</h3>
            <p class="text-base">
              I'm a Full-Stack Software Engineer with 4+ years of experience pairing Java and Spring Boot backends with modern Angular and TypeScript frontends. I like owning features end to end, from monolith optimizations to greenfield microservices that scale under real-world load and stay maintainable over time.
            </p>
          </div>
          <div class="card">
            <h3 class="text-xl font-semibold text-secondary mb-2">What I Do</h3>
            <p class="text-base">
              I design microservices, event-driven architectures, and REST APIs across insurance and FinTech systems, and I build AI-powered internal tooling that measurably shortens developer ramp-up time. My toolkit centers on Spring Boot, Kafka, and Angular.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}