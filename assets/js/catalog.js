/**
 * Bernadya Store - Product Catalog JavaScript
 * Pure vanilla JS search, category filtering, sorting, and empty state
 */

document.addEventListener('DOMContentLoaded', () => {
  const catalogContainer = document.getElementById('catalogApp');
  if (!catalogContainer) return;

  const searchInput = document.getElementById('catalogSearch');
  const sortSelect = document.getElementById('catalogSort');
  const categoryPills = document.querySelectorAll('.filter-pill');
  const productCards = Array.from(document.querySelectorAll('.catalog-product-item'));
  const emptyState = document.getElementById('catalogEmptyState');
  const resetBtn = document.getElementById('catalogResetBtn');
  const resultCount = document.getElementById('catalogResultCount');

  let currentCategory = 'all';
  let searchQuery = '';
  let currentSort = 'asc';

  // Read URL query parameters on load
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get('category');
  if (initialCategory) {
    currentCategory = initialCategory;
    categoryPills.forEach(pill => {
      if (pill.getAttribute('data-category') === initialCategory) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
  }

  // Filter & Sort Function
  const renderCatalog = () => {
    let visibleCount = 0;

    // Filter cards
    const visibleCards = [];

    productCards.forEach(card => {
      const name = (card.getAttribute('data-name') || '').toLowerCase();
      const desc = (card.getAttribute('data-desc') || '').toLowerCase();
      const category = card.getAttribute('data-category') || '';

      const matchesSearch = !searchQuery || name.includes(searchQuery) || desc.includes(searchQuery);
      const matchesCategory = currentCategory === 'all' || category === currentCategory;

      if (matchesSearch && matchesCategory) {
        card.style.display = '';
        visibleCount++;
        visibleCards.push(card);
      } else {
        card.style.display = 'none';
      }
    });

    // Sort visible cards in DOM
    const grid = document.getElementById('catalogProductsGrid');
    if (grid && visibleCards.length > 0) {
      visibleCards.sort((a, b) => {
        const nameA = (a.getAttribute('data-name') || '').toLowerCase();
        const nameB = (b.getAttribute('data-name') || '').toLowerCase();
        if (currentSort === 'asc') {
          return nameA.localeCompare(nameB);
        } else {
          return nameB.localeCompare(nameA);
        }
      });

      // Re-append in sorted order
      visibleCards.forEach(card => grid.appendChild(card));
    }

    // Toggle Empty State
    if (emptyState) {
      if (visibleCount === 0) {
        emptyState.style.display = 'block';
      } else {
        emptyState.style.display = 'none';
      }
    }

    // Update Result Counter
    if (resultCount) {
      resultCount.textContent = `Menampilkan ${visibleCount} produk digital`;
    }
  };

  // Search Input Event
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderCatalog();
    });
  }

  // Category Pills Event
  categoryPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      currentCategory = pill.getAttribute('data-category') || 'all';

      // Update URL query state without full page reload
      const newUrl = new URL(window.location.href);
      if (currentCategory === 'all') {
        newUrl.searchParams.delete('category');
      } else {
        newUrl.searchParams.set('category', currentCategory);
      }
      window.history.replaceState({}, '', newUrl.toString());

      renderCatalog();
    });
  });

  // Sort Event
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderCatalog();
    });
  }

  // Reset Button Event
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      searchQuery = '';
      currentCategory = 'all';
      currentSort = 'asc';

      if (searchInput) searchInput.value = '';
      if (sortSelect) sortSelect.value = 'asc';

      categoryPills.forEach(pill => {
        if (pill.getAttribute('data-category') === 'all') {
          pill.classList.add('active');
        } else {
          pill.classList.remove('active');
        }
      });

      const newUrl = new URL(window.location.href);
      newUrl.searchParams.delete('category');
      window.history.replaceState({}, '', newUrl.toString());

      renderCatalog();
    });
  }

  // Initial render
  renderCatalog();
});
