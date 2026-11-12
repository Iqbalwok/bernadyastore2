/**
 * Bernadya Store - Hero Banner Slider (Vanilla JS)
 * Features:
 * - Autoplay every 5s
 * - Prev / Next navigation
 * - Dot indicators
 * - Touch swipe gesture on mobile
 * - Pause on hover and focus
 * - prefers-reduced-motion support
 */

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.hero-slider-section');
  if (!slider) return;

  const wrapper = slider.querySelector('.slider-wrapper');
  const slides = slider.querySelectorAll('.slide-item');
  const prevBtn = slider.querySelector('.slider-arrow-prev');
  const nextBtn = slider.querySelector('.slider-arrow-next');
  const dots = slider.querySelectorAll('.slider-dot');

  if (!wrapper || slides.length === 0) return;

  let currentIndex = 0;
  const totalSlides = slides.length;
  let autoplayTimer = null;
  const AUTOPLAY_INTERVAL = 5000;

  // Check prefers-reduced-motion
  const mediaQueryReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let isReducedMotion = mediaQueryReducedMotion.matches;
  mediaQueryReducedMotion.addEventListener('change', () => {
    isReducedMotion = mediaQueryReducedMotion.matches;
    if (isReducedMotion) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  });

  const updateSlide = (index) => {
    if (index < 0) {
      currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    // Move slider track
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update dots
    dots.forEach((dot, i) => {
      if (i === currentIndex) {
        dot.classList.add('active');
        dot.setAttribute('aria-current', 'true');
      } else {
        dot.classList.remove('active');
        dot.removeAttribute('aria-current');
      }
    });
  };

  const nextSlide = () => updateSlide(currentIndex + 1);
  const prevSlide = () => updateSlide(currentIndex - 1);

  // Autoplay handler
  const startAutoplay = () => {
    if (isReducedMotion) return;
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_INTERVAL);
  };

  const stopAutoplay = () => {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  };

  // Button clicks
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      startAutoplay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      startAutoplay();
    });
  }

  // Dots clicks
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const targetIndex = parseInt(dot.getAttribute('data-index') || '0', 10);
      updateSlide(targetIndex);
      startAutoplay();
    });
  });

  // Pause on pointer hover or focus
  slider.addEventListener('mouseenter', stopAutoplay);
  slider.addEventListener('mouseleave', startAutoplay);
  slider.addEventListener('focusin', stopAutoplay);
  slider.addEventListener('focusout', startAutoplay);

  // Touch Swipe Gesture for Mobile
  let touchStartX = 0;
  let touchEndX = 0;
  let touchStartY = 0;
  let touchEndY = 0;

  wrapper.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
    stopAutoplay();
  }, { passive: true });

  wrapper.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
    startAutoplay();
  }, { passive: true });

  const handleSwipe = () => {
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    // Verify horizontal swipe intent (not vertical scroll)
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX < 0) {
        // Swipe left -> next
        nextSlide();
      } else {
        // Swipe right -> prev
        prevSlide();
      }
    }
  };

  // Initialize
  updateSlide(0);
  startAutoplay();
});
