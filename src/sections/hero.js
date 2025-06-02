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
        <p class="text-lg md:text-xl mx-auto mb-">
          Java Engineer focused on performance, reliability, and getting things shipped.
        </p>
      </div>
    </section>
  `;
}