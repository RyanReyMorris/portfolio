(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function p(){return`
    <section id="hero" class="hero">
      ${Array.from({length:15},(a,s)=>'<div class="star"></div>').join("")}
      <div class="text-center relative z-10">
        <h1 class="text-5xl md:text-7xl font-bold mb-4 text-secondary">Egor Iakimov</h1>
        <h2 class="text-3xl md:text-5xl mb-6 text-text">
          <div class="typing-container mx-auto">
            <span id="typing-text" class="typing-text"></span>
            <span id="cursor" class="cursor"></span>
          </div>
        </h2>
        <p class="text-lg md:text-xl mx-auto mb-8">
          Full-Stack Software Engineer building reliable backends and clean UIs, end to end.
        </p>
      </div>
      <div class="resume-section">
        <a href="/resume.pdf" download="Egor_Iakimov_Resume.pdf" 
           class="resume-button button-86">
          <i class="fas fa-code"></i>
          Peek Behind the Curtain
        </a>
      </div>
      <div class="scroll-indicator">
        <a href="#about" class="bouncing-arrow">
          <i class="fas fa-angle-down"></i>
        </a>
      </div>
    </section>
  `}function m(){return`
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
  `}function u(){return`
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
  `}function f(){return`
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
  `}function g(){return`
    <section id="skills" class="py-16 px-4 bg-background relative z-10">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold text-secondary mb-8 text-center">Skills</h2>
        <div class="skill-cloud flex flex-wrap justify-center">
          <span>Java</span>
          <span>Kotlin</span>
          <span>TypeScript</span>
          <span>JavaScript</span>
          <span>SQL</span>
          <span>HTML/CSS</span>
          <span>Spring Boot</span>
          <span>Hibernate</span>
          <span>REST</span>
          <span>SOAP</span>
          <span>OpenAPI</span>
          <span>gRPC</span>
          <span>Angular</span>
          <span>React</span>
          <span>Node.js</span>
          <span>Webpack</span>
          <span>Vite</span>
          <span>GCP</span>
          <span>Kubernetes</span>
          <span>Docker</span>
          <span>Terraform</span>
          <span>Jenkins</span>
          <span>GitHub</span>
          <span>n8n</span>
          <span>Apache Kafka</span>
          <span>PostgreSQL</span>
          <span>OracleDB</span>
          <span>MongoDB</span>
          <span>Redis</span>
          <span>Prometheus</span>
          <span>Grafana</span>
          <span>OpenTelemetry</span>
          <span>Datadog</span>
        </div>
      </div>
    </section>
  `}function x(){return`
    <section id="contact" class="py-16 px-4 bg-accent relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-2xl font-bold text-secondary mb-8">Contact</h2>
        <p class="text-base mb-6">Interested in collaborating? Reach out via email or LinkedIn.</p>
        <div class="flex justify-center space-x-6">
          <a href="mailto:iamegoriakimov@gmail.com" class="text-xl text-secondary" title="Email"><i class="fas fa-envelope"></i></a>
          <a href="https://linkedin.com/in/egor-iakimov" class="text-xl text-secondary" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
          <a href="https://www.instagram.com/thecozypoesy" class="text-xl text-secondary" title="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="https://github.com/EgorIakimov" class="text-xl text-secondary" title="GitHub"><i class="fab fa-github"></i></a>
          <a href="/resume.pdf" target="_blank" class="text-xl text-secondary" title="Full Resume"><i class="fas fa-file-alt"></i></a>
        </div>
      </div>
    </section>
  `}function h(){return`
    <footer class="py-6 text-center bg-background text-text relative z-10">
      <p>Crafted with Ctrl+Z and caffeine. Egor Iakimov, 2026</p>
    </footer>
  `}function v(){return`
    <div class="background-particles">
      ${Array.from({length:20},(a,s)=>'<div class="particle"></div>').join("")}
    </div>
    <main>
      ${p()}
      ${m()}
      ${u()}
      ${f()}
      ${g()}
      ${x()}
      ${h()}
      <a href="#contact" class="contact-button">
        <i class="fas fa-envelope"></i> 
      </a>
    </main>
  `}const d=["Backend meets frontend","Pragmatic. Consistent. Curious","Shipping features end to end"];let c=0,r=0,l=!1;function b(){const a=document.getElementById("typing-text"),s=document.getElementById("cursor");function n(){const i=d[c];a.textContent=i.substring(0,r);const e=a.offsetWidth,o=(a.parentElement.offsetWidth-e)/2+e;if(s.style.left=`${o}px`,l)if(r>0)r--;else{l=!1,c=(c+1)%d.length,setTimeout(n,500);return}else if(r<i.length)r++;else{l=!0,setTimeout(n,1500);return}setTimeout(n,l?30:50)}n()}document.getElementById("app").innerHTML=v();b();document.addEventListener("mousemove",a=>{document.body.style.setProperty("--x",a.clientX+"px"),document.body.style.setProperty("--y",a.clientY+"px")});
