export default function Hero() {
    return `
    <section id="hero" class="hero">
      ${Array.from({ length: 15 }, (_, i) => `<div class="star"></div>`).join('')}
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
  `;
}