const phrases = ["Java, Spring, and sanity", "Pragmatic. Consistent. Curious", "Backend with a business sense"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

export function initTypingEffect() {
    const typingTextElement = document.getElementById('typing-text');
    const cursorElement = document.getElementById('cursor');

    function updateTyping() {
        const currentPhrase = phrases[phraseIndex];
        typingTextElement.textContent = currentPhrase.substring(0, charIndex);

        const textWidth = typingTextElement.offsetWidth;
        const containerWidth = typingTextElement.parentElement.offsetWidth;
        const cursorPosition = (containerWidth - textWidth) / 2 + textWidth;
        cursorElement.style.left = `${cursorPosition}px`;

        if (!isDeleting) {
            if (charIndex < currentPhrase.length) {
                charIndex++;
            } else {
                isDeleting = true;
                setTimeout(updateTyping, 1500);
                return;
            }
        } else {
            if (charIndex > 0) {
                charIndex--;
            } else {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(updateTyping, 500);
                return;
            }
        }
        setTimeout(updateTyping, isDeleting ? 30 : 50);
    }

    updateTyping();
}