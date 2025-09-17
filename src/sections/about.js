export default function About() {
    return `
    <section id="about" class="py-16 px-4 bg-accent relative z-10">
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="card">
            <h3 class="text-xl font-semibold text-secondary mb-2">Who I Am</h3>
            <p class="text-base">
              I'm a Java Software Engineer with 4+ years of hands-on experience designing backend architectures and full-stack solutions. My focus is on building high-performance services — from monolith optimizations to greenfield microservices — that scale under real-world load and stay maintainable over time.
            </p>
          </div>
          <div class="card">
            <h3 class="text-xl font-semibold text-secondary mb-2">What I Do</h3>
            <p class="text-base">
              I optimize workflows, enhance system performance, and develop robust solutions for financial and document management sectors, using tools like Spring Boot, Kafka, and Angular.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}