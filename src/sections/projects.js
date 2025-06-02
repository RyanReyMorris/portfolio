export default function Projects() {
    return `
    <section id="projects" class="py-16 px-4 bg-accent relative z-10">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold text-secondary mb-8 text-center">Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="card">
            <h3 class="text-lg font-semibold">Metrics Tracking System</h3>
            <p class="text-secondary text-sm">Prometheus, Grafana</p>
            <p class="mt-2 text-sm">Designed a real-time monitoring solution with Prometheus and Grafana that helped reduce downtime by 15%.</p>
          </div>
          <div class="card">
            <h3 class="text-lg font-semibold">Web Client MVP</h3>
            <p class="text-secondary text-sm">Angular 16</p>
            <p class="mt-2 text-sm">Developed MVP clients, accelerating feedback cycles by 40%.</p>
          </div>
          <div class="card">
            <h3 class="text-lg font-semibold">Document Workflow Optimization</h3>
            <p class="text-secondary text-sm">Java, Asynchronous Tasks</p>
            <p class="mt-2 text-sm">Optimized workflows, boosting document imports by 300%.</p>
          </div>
          <div class="card">
            <h3 class="text-lg font-semibold">Microservices Architecture</h3>
            <p class="text-secondary text-sm">Java, Spring Boot, Kafka</p>
            <p class="mt-2 text-sm">Designed scalable microservices, increasing RPS by 40%.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}