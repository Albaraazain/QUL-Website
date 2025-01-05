// Header functionality
import { debounce } from '../utilities/helpers.js';

// Initialize header functionality
export const initHeader = () => {
    const header = document.getElementById('header');
    const menuToggle = document.querySelector('.menu-toggle');
    
    // Handle sticky header
    const handleScroll = debounce(() => {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }, 10);

    // Handle mobile menu
    const handleMobileMenu = () => {
        const isActive = menuToggle.classList.contains('active');
        document.body.classList.toggle('mobile-menu-active', isActive);
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    if (menuToggle) {
        menuToggle.addEventListener('click', handleMobileMenu);
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initHeader); 