// Accessibility enhancements
export const initAccessibility = () => {
    // Add ARIA attributes where needed
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // Add keyboard navigation for interactive elements
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Close any open menus or modals
            document.body.classList.remove('mobile-menu-active');
            if (menuToggle) {
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });
};

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', initAccessibility); 