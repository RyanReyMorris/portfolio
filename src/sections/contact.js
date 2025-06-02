export default function Contact() {
    return `
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
  `;
}