import Lenis from 'https://cdn.jsdelivr.net/npm/lenis@1.1.18/+esm';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing Lenis...');
    try {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2
        });

        console.log('Lenis instance created:', lenis);

        lenis.on('scroll', (e) => {
            console.log('Scrolling with Lenis:', e);
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
        console.log('Lenis animation frame loop started');
    } catch (error) {
        console.error('Error initializing Lenis:', error);
    }
});