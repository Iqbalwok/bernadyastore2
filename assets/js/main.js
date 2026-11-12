/**
 * Bernadya Store - Main Application JavaScript
 * Vanilla JS navigation, accessibility, and utility functions
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Year in Footer
  const yearEls = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  yearEls.forEach(el => {
    el.textContent = currentYear;
  });

  // 2. Mobile Navigation Hamburger Menu
  const navToggle = document.getElementById('navToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.nav-mobile-item a, .nav-mobile-content .btn');

  if (navToggle && mobileDrawer) {
    const toggleMenu = () => {
      const isOpen = navToggle.classList.contains('open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    };

    const openMenu = () => {
      navToggle.classList.add('open');
      navToggle.setAttribute('aria-expanded', 'true');
      mobileDrawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      mobileDrawer.classList.remove('active');
      document.body.style.overflow = '';
    };

    navToggle.addEventListener('click', toggleMenu);

    // Close on mobile link clicked
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    // Close when clicking outside content (on backdrop)
    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) {
        closeMenu();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('active')) {
        closeMenu();
      }
    });
  }

  // 3. Simple Generic Accordion for FAQ preview & product pages
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      if (!item) return;

      const isActive = item.classList.contains('active');

      // Optional: Close sibling accordion items if within same parent
      const parent = item.parentElement;
      if (parent && parent.classList.contains('accordion-exclusive')) {
        parent.querySelectorAll('.accordion-item').forEach(sibling => {
          if (sibling !== item) {
            sibling.classList.remove('active');
            sibling.querySelector('.accordion-header')?.setAttribute('aria-expanded', 'false');
          }
        });
      }

      if (isActive) {
        item.classList.remove('active');
        header.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
