/**
 * Bernadya Store - FAQ Page Interactive Filter & Search
 */

document.addEventListener('DOMContentLoaded', () => {
  const faqSearchInput = document.getElementById('faqSearch');
  const faqCategoryPills = document.querySelectorAll('.faq-filter-pill');
  const faqItems = document.querySelectorAll('.faq-page-item');
  const faqEmptyState = document.getElementById('faqEmptyState');
  const faqResetBtn = document.getElementById('faqResetBtn');

  if (!faqItems.length) return;

  let currentCategory = 'all';
  let searchQuery = '';

  const filterFaqs = () => {
    let visibleCount = 0;

    faqItems.forEach(item => {
      const q = (item.getAttribute('data-question') || '').toLowerCase();
      const a = (item.getAttribute('data-answer') || '').toLowerCase();
      const cat = item.getAttribute('data-category') || '';

      const matchesSearch = !searchQuery || q.includes(searchQuery) || a.includes(searchQuery);
      const matchesCategory = currentCategory === 'all' || cat === currentCategory;

      if (matchesSearch && matchesCategory) {
        item.style.display = '';
        visibleCount++;
      } else {
        item.style.display = 'none';
        item.classList.remove('active');
        item.querySelector('.accordion-header')?.setAttribute('aria-expanded', 'false');
      }
    });

    if (faqEmptyState) {
      faqEmptyState.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  };

  if (faqSearchInput) {
    faqSearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      filterFaqs();
    });
  }

  faqCategoryPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      faqCategoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      currentCategory = pill.getAttribute('data-category') || 'all';
      filterFaqs();
    });
  });

  if (faqResetBtn) {
    faqResetBtn.addEventListener('click', () => {
      searchQuery = '';
      currentCategory = 'all';

      if (faqSearchInput) faqSearchInput.value = '';

      faqCategoryPills.forEach(pill => {
        if (pill.getAttribute('data-category') === 'all') {
          pill.classList.add('active');
        } else {
          pill.classList.remove('active');
        }
      });

      filterFaqs();
    });
  }
});
