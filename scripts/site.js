// public/js/site.js

// Import utility JS
import './utilities/helpers.js';
import './utilities/accessibility.js';

// Import layout JS
import './layout/header.js';

document.addEventListener('DOMContentLoaded', () => {
    // Function to wrap each word in a span with a transition delay
    const wrapWordsInSpans = (element) => {
        const words = element.textContent.split(' ');
        element.innerHTML = words
            .map((word, index) => `<span style="transition-delay: ${index * 0.05}s">${word}</span>`)
            .join(' ');
    };

    // Get all h1 and h2 elements
    const headers = document.querySelectorAll('h1, h2');

    // Wrap each word in spans for each header
    headers.forEach(header => wrapWordsInSpans(header));

    // Set up intersection observer for animations
    const blocks = document.querySelectorAll('.block');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe each block
    blocks.forEach(block => observer.observe(block));
});