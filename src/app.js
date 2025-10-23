import Hero from './sections/hero.js';
import About from './sections/about.js';
import Experience from './sections/experience.js';
import Projects from './sections/projects.js';
import Skills from './sections/skills.js';
import Contact from './sections/contact.js';
import Footer from './sections/footer.js';

export default function App() {
    return `
    <div class="background-particles">
      ${Array.from({ length: 20 }, (_, i) => `<div class="particle"></div>`).join('')}
    </div>
    <main>
      ${Hero()}
      ${About()}
      ${Experience()}
      ${Projects()}
      ${Skills()}
      ${Contact()}
      ${Footer()}
      <a href="#contact" class="contact-button">
        <i class="fas fa-envelope"></i> 
      </a>
    </main>
  `;
}