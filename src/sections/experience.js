export default function Experience() {
    return `
    <section id="experience" class="py-16 px-4 bg-background relative z-10">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold text-secondary mb-8 text-center">Experience</h2>
        <div class="space-y-8">
          <a href="https://www.allstate.com/" target="_blank" class="block relative timeline-item card">
            <h3 class="text-lg font-semibold">Product Engineer</h3>
            <p class="text-secondary text-sm">Allstate Insurance Company | May 2026 - Present (Remote)</p>
            <ul class="list-disc pl-5 mt-2 text-sm">
              <li>Led the migration of core Java/Spring Boot services in a Tier-1 real-time rating platform from Spring Boot 3 to Spring Boot 4.</li>
              <li>Identified and fixed security vulnerabilities and production defects in a Tier-1 real-time premium calculation service, owning quality end to end under TDD.</li>
              <li>Authored comprehensive technical documentation using AI-assisted tooling and an internal knowledge base to accelerate onboarding.</li>
            </ul>
          </a>
          <a href="https://sovcombank.it/" target="_blank" class="block relative timeline-item card">
            <h3 class="text-lg font-semibold">Software Engineer</h3>
            <p class="text-secondary text-sm">Sovcombank Technologies | May 2024 - Feb 2026 (Remote)</p>
            <ul class="list-disc pl-5 mt-2 text-sm">
              <li>Built an internal AI-powered knowledge base with open-source LLM tooling and n8n automation, cutting new-hire ramp-up from roughly two weeks to one.</li>
              <li>Designed backend microservices and OpenAPI-driven APIs, sustaining +3,000 RPS on average at 99.9% uptime.</li>
              <li>Architected event-driven communication with Apache Kafka, improving throughput and resilience under high load.</li>
              <li>Improved database performance by eliminating N+1 queries, adding indexes, and rewriting slow queries.</li>
              <li>Monitored production in real time with Prometheus, Grafana, and OpenTelemetry, reducing mean time to recovery.</li>
            </ul>
          </a>
          <a href="https://softline.ru/" target="_blank" class="block relative timeline-item card">
            <h3 class="text-lg font-semibold">Software Engineer</h3>
            <p class="text-secondary text-sm">Softline | July 2022 - May 2024 (On-site)</p>
            <ul class="list-disc pl-5 mt-2 text-sm">
              <li>Modernized a legacy monolith from Java 1.8 to a current Spring Boot stack, effectively rebuilding it from the ground up.</li>
              <li>Scaled the document processing platform from 2M to 10M documents with async processing, replicas, and query optimizations.</li>
              <li>Built a new user-facing UI from scratch with Angular 16 and TypeScript in close collaboration with product and QA.</li>
              <li>Introduced monitoring and alerting from scratch with Prometheus and Grafana, reducing production downtime by 40%.</li>
            </ul>
          </a>
        </div>
      </div>
    </section>
  `;
}