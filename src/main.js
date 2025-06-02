import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/main.css';
import App from './App.js';
import { initTypingEffect } from './scripts/typingEffect.js';

document.getElementById('app').innerHTML = App();

initTypingEffect();
document.addEventListener('mousemove', (e) => {
    document.body.style.setProperty('--x', e.clientX + 'px');
    document.body.style.setProperty('--y', e.clientY + 'px');
});