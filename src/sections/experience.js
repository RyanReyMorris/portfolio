export default function Experience() {
    return `
    <section id="experience" class="py-16 px-4 bg-background relative z-10">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold text-secondary mb-8 text-center">Experience</h2>
        <div class="space-y-8">
          <a href="https://sovcombank.it/" target="_blank" class="block relative timeline-item card">
            <h3 class="text-lg font-semibold">Lead Developer</h3>
            <p class="text-secondary text-sm">Sovcombank Technologies | May 2024 - Present</p>
            <ul class="list-disc pl-5 mt-2 text-sm">
              <li>Reduced deployment times by 30% with streamlined Liquibase migrations.</li>
              <li>Increased throughput by 40% by replacing REST with Kafka messaging.</li>
              <li>Designed APIs with Swagger for efficient external system integration.</li>
              <li>Improved query performance by 90% through indexing and optimization.</li>
            </ul>
          </a>
          <a href="https://softline.ru/" target="_blank" class="block relative timeline-item card">
            <h3 class="text-lg font-semibold">Software Engineer</h3>
            <p class="text-secondary text-sm">Softline | Nov 2021 - May 2024</p>
            <ul class="list-disc pl-5 mt-2 text-sm">
              <li>Increased document processing speed by 300%, scaling imports from 2M to 8M monthly.</li>
              <li>Reduced downtime by 15% with Prometheus and Grafana monitoring.</li>
              <li>Modernized monolithic systems, improving latency and maintainability by 20%.</li>
              <li>Developed Angular 16 MVP clients, speeding up feedback cycles by 40%.</li>
            </ul>
          </a>
        </div>
      </div>
    </section>
  `;
}