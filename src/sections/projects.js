export default function Projects() {
    return `
    <section id="projects" class="py-16 px-4 bg-accent relative z-10">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold text-secondary mb-8 text-center">Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="card">
            <h3 class="text-lg font-semibold">AI-Powered Knowledge Base</h3>
            <p class="text-secondary text-sm">Open-source LLMs, n8n</p>
            <p class="mt-2 text-sm">Built an internal AI knowledge base that cut new-hire ramp-up from roughly two weeks to one.</p>
          </div>
          <div class="card">
            <h3 class="text-lg font-semibold">Event-Driven Microservices</h3>
            <p class="text-secondary text-sm">Java, Spring Boot, Kafka</p>
            <p class="mt-2 text-sm">Designed OpenAPI-driven microservices sustaining +3,000 RPS on average at 99.9% uptime.</p>
          </div>
          <div class="card">
            <h3 class="text-lg font-semibold">Document Platform Scale-Up</h3>
            <p class="text-secondary text-sm">Java, Async Processing</p>
            <p class="mt-2 text-sm">Scaled a document processing platform from 2M to 10M documents with async tasks and query optimizations.</p>
          </div>
          <div class="card">
            <h3 class="text-lg font-semibold">Spring Boot 3 to 4 Migration</h3>
            <p class="text-secondary text-sm">Java, Spring Boot, TDD</p>
            <p class="mt-2 text-sm">Migrated a Tier-1 real-time insurance rating platform to Spring Boot 4, resolving compatibility issues end to end.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}