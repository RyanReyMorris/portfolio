(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function p(){return`
    <section id="hero" class="hero">
      ${Array.from({length:15},(s,a)=>'<div class="star"></div>').join("")}
      <div class="text-center relative z-10">
        <h1 class="text-5xl md:text-7xl font-bold mb-4 text-secondary">Egor Iakimov</h1>
        <h2 class="text-3xl md:text-5xl mb-6 text-text">
          <div class="typing-container mx-auto">
            <span id="typing-text" class="typing-text"></span>
            <span id="cursor" class="cursor"></span>
          </div>
        </h2>
        <p class="text-lg md:text-xl mx-auto mb-8">
          Java Engineer focused on performance, reliability, and getting things shipped.
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
  `}function u(){return`
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
            <p class="text-secondary text-sm">Softline | Oct 2021 - May 2024</p>
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
  `}function f(){return`
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
  `}function x(){return`
    <section id="skills" class="py-16 px-4 bg-background relative z-10">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold text-secondary mb-8 text-center">Skills</h2>
        <div class="skill-cloud flex flex-wrap justify-center">
          <span>Java 8-21</span>
          <span>TypeScript</span>
          <span>JavaScript</span>
          <span>HTML/CSS</span>
          <span>SQL</span>
          <span>Spring Boot</span>
          <span>Spring Data</span>
          <span>Spring Security</span>
          <span>Spring MVC</span>
          <span>Swagger</span>
          <span>JPA/Hibernate</span>
          <span>Liquibase</span>
          <span>JUnit/Mockito</span>
          <span>Angular</span>
          <span>Node.js</span>
          <span>Git</span>
          <span>Maven/Gradle</span>
          <span>Jenkins</span>
          <span>GitLab</span>
          <span>Docker</span>
          <span>Kubernetes</span>
          <span>Prometheus</span>
          <span>Grafana</span>
        </div>
      </div>
    </section>
  `}function g(){return`
    <section id="contact" class="py-16 px-4 bg-accent relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-2xl font-bold text-secondary mb-8">Contact</h2>
        <p class="text-base mb-6">Interested in collaborating? Reach out via email or LinkedIn.</p>
        <div class="flex justify-center space-x-6">
          <a href="mailto:ryanreymorris@gmail.com" class="text-xl text-secondary" title="Email"><i class="fas fa-envelope"></i></a>
          <a href="https://linkedin.com/in/egor-iakimov" class="text-xl text-secondary" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
          <a href="https://www.instagram.com/thecozypoesy" class="text-xl text-secondary" title="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="https://github.com/RyanReyMorris" class="text-xl text-secondary" title="GitHub"><i class="fab fa-github"></i></a>
          <a href="/resume.pdf" target="_blank" class="text-xl text-secondary" title="Full Resume"><i class="fas fa-file-alt"></i></a>
        </div>
      </div>
    </section>
  `}function h(){return`
    <footer class="py-6 text-center bg-background text-text relative z-10">
      <p>Crafted with Ctrl+Z and caffeine — Egor Iakimov, 2025</p>
    </footer>
  `}function y(){return`
    <div class="background-particles">
      ${Array.from({length:20},(s,a)=>'<div class="particle"></div>').join("")}
    </div>
    <main>
      ${p()}
      ${m()}
      ${u()}
      ${f()}
      ${x()}
      ${g()}
      ${h()}
      <a href="#contact" class="contact-button">
        <i class="fas fa-envelope"></i> 
      </a>
    </main>
  `}const d=["Java, Spring, and sanity","Pragmatic. Consistent. Curious","Backend with a business sense"];let l=0,r=0,c=!1;function b(){const s=document.getElementById("typing-text"),a=document.getElementById("cursor");function n(){const i=d[l];s.textContent=i.substring(0,r);const e=s.offsetWidth,o=(s.parentElement.offsetWidth-e)/2+e;if(a.style.left=`${o}px`,c)if(r>0)r--;else{c=!1,l=(l+1)%d.length,setTimeout(n,500);return}else if(r<i.length)r++;else{c=!0,setTimeout(n,1500);return}setTimeout(n,c?30:50)}n()}document.getElementById("app").innerHTML=y();b();document.addEventListener("mousemove",s=>{document.body.style.setProperty("--x",s.clientX+"px"),document.body.style.setProperty("--y",s.clientY+"px")});
