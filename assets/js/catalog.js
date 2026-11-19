/**
 * Bernadya Store - Product Catalog JavaScript
 * Pure vanilla JS search, category filtering, sorting, quick tags, and empty state
 */

document.addEventListener('DOMContentLoaded', () => {
  const catalogContainer = document.getElementById('catalogApp');
  if (!catalogContainer) return;

  const searchInput = document.getElementById('catalogSearch');
  const searchClearBtn = document.getElementById('catalogSearchClear');
  const sortSelect = document.getElementById('catalogSort');
  const categoryPills = document.querySelectorAll('.filter-pill');
  const quickChips = document.querySelectorAll('.quick-tag-chip');
  const productCards = Array.from(document.querySelectorAll('.catalog-product-item'));
  const emptyState = document.getElementById('catalogEmptyState');
  const resetBtn = document.getElementById('catalogResetBtn');
  const resultCount = document.getElementById('catalogResultCount');

  let currentCategory = 'all';
  let searchQuery = '';
  let currentSort = 'asc';

  // 1. Calculate and inject dynamic counts into category pills
  const updatePillCounts = () => {
    const counts = { all: productCards.length };
    productCards.forEach(card => {
      const cat = card.getAttribute('data-category') || 'other';
      counts[cat] = (counts[cat] || 0) + 1;
    });

    categoryPills.forEach(pill => {
      const cat = pill.getAttribute('data-category');
      const count = counts[cat] || 0;
      let countSpan = pill.querySelector('.filter-pill-count');
      if (!countSpan) {
        countSpan = document.createElement('span');
        countSpan.className = 'filter-pill-count';
        pill.appendChild(countSpan);
      }
      countSpan.textContent = count;
    });
  };
  updatePillCounts();

  // 2. Read URL query parameters on load
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get('category');
  const initialSearch = urlParams.get('search');

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

  if (initialSearch) {
    searchQuery = initialSearch.trim().toLowerCase();
    if (searchInput) {
      searchInput.value = initialSearch;
      if (searchClearBtn) searchClearBtn.classList.add('visible');
    }
  }

  // 3. Filter & Sort Function
  const renderCatalog = () => {
    let visibleCount = 0;
    const visibleCards = [];

    // Filter cards
    productCards.forEach(card => {
      const name = (card.getAttribute('data-name') || '').toLowerCase();
      const desc = (card.getAttribute('data-desc') || '').toLowerCase();
      const category = card.getAttribute('data-category') || '';
      const tags = (card.getAttribute('data-tags') || '').toLowerCase();

      const matchesSearch = !searchQuery || 
        name.includes(searchQuery) || 
        desc.includes(searchQuery) || 
        tags.includes(searchQuery) ||
        category.includes(searchQuery);

      const matchesCategory = currentCategory === 'all' || category === currentCategory;

      if (matchesSearch && matchesCategory) {
        card.style.display = '';
        card.classList.remove('item-hidden');
        visibleCount++;
        visibleCards.push(card);
      } else {
        card.style.display = 'none';
        card.classList.add('item-hidden');
      }
    });

    // Sort visible cards
    const grid = document.getElementById('catalogProductsGrid');
    if (grid && visibleCards.length > 0) {
      visibleCards.sort((a, b) => {
        const nameA = (a.getAttribute('data-name') || '').toLowerCase();
        const nameB = (b.getAttribute('data-name') || '').toLowerCase();
        const isPopA = a.querySelector('.product-badge') ? 1 : 0;
        const isPopB = b.querySelector('.product-badge') ? 1 : 0;

        if (currentSort === 'popular') {
          if (isPopA !== isPopB) return isPopB - isPopA;
          return nameA.localeCompare(nameB);
        } else if (currentSort === 'desc') {
          return nameB.localeCompare(nameA);
        } else {
          return nameA.localeCompare(nameB);
        }
      });

      // Re-append in sorted order
      visibleCards.forEach(card => grid.appendChild(card));
    }

    // Toggle Empty State
    if (emptyState) {
      if (visibleCount === 0) {
        emptyState.style.display = 'block';
        const emptyQueryText = document.getElementById('catalogEmptyQuery');
        if (emptyQueryText) {
          emptyQueryText.textContent = searchQuery ? `"${searchQuery}"` : 'kategori ini';
        }
      } else {
        emptyState.style.display = 'none';
      }
    }

    // Update Result Counter
    if (resultCount) {
      if (searchQuery) {
        resultCount.innerHTML = `Menampilkan <strong>${visibleCount}</strong> produk untuk pencarian "<em>${escapeHtml(searchQuery)}</em>"`;
      } else if (currentCategory !== 'all') {
        const activePill = document.querySelector(`.filter-pill[data-category="${currentCategory}"]`);
        const catName = activePill ? activePill.childNodes[0].textContent.trim() : currentCategory;
        resultCount.innerHTML = `Menampilkan <strong>${visibleCount}</strong> produk dalam kategori <strong>${catName}</strong>`;
      } else {
        resultCount.innerHTML = `Menampilkan semua <strong>${visibleCount}</strong> produk digital terkurasi`;
      }
    }

    // Toggle clear search button
    if (searchClearBtn) {
      if (searchQuery) {
        searchClearBtn.classList.add('visible');
      } else {
        searchClearBtn.classList.remove('visible');
      }
    }
  };

  const escapeHtml = (text) => {
    return text.replace(/[&<>"']/g, (m) => {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  };

  // 4. Search Input Event
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      
      // Update URL query state without page reload
      const newUrl = new URL(window.location.href);
      if (searchQuery) {
        newUrl.searchParams.set('search', searchQuery);
      } else {
        newUrl.searchParams.delete('search');
      }
      window.history.replaceState({}, '', newUrl.toString());

      renderCatalog();
    });
  }

  // Clear search button
  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchInput.focus();
      }
      searchQuery = '';
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.delete('search');
      window.history.replaceState({}, '', newUrl.toString());
      renderCatalog();
    });
  }

  // 5. Category Pills Event
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

  // 6. Quick Filter Chips Event
  quickChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const tag = chip.getAttribute('data-tag') || '';
      if (searchInput) {
        searchInput.value = tag;
        searchQuery = tag.toLowerCase();
        if (searchClearBtn) searchClearBtn.classList.add('visible');
      }

      // If chip specifies a category, activate it
      const chipCat = chip.getAttribute('data-category');
      if (chipCat) {
        currentCategory = chipCat;
        categoryPills.forEach(p => {
          if (p.getAttribute('data-category') === chipCat) {
            p.classList.add('active');
          } else {
            p.classList.remove('active');
          }
        });
      }

      quickChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const newUrl = new URL(window.location.href);
      if (searchQuery) newUrl.searchParams.set('search', searchQuery);
      if (currentCategory !== 'all') newUrl.searchParams.set('category', currentCategory);
      window.history.replaceState({}, '', newUrl.toString());

      renderCatalog();
    });
  });

  // 7. Sort Event
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderCatalog();
    });
  }

  // 8. Reset Button Event
  const resetFilters = () => {
    searchQuery = '';
    currentCategory = 'all';
    currentSort = 'asc';

    if (searchInput) searchInput.value = '';
    if (sortSelect) sortSelect.value = 'asc';
    quickChips.forEach(c => c.classList.remove('active'));

    categoryPills.forEach(pill => {
      if (pill.getAttribute('data-category') === 'all') {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });

    const newUrl = new URL(window.location.href);
    newUrl.searchParams.delete('category');
    newUrl.searchParams.delete('search');
    window.history.replaceState({}, '', newUrl.toString());

    renderCatalog();
  };

  if (resetBtn) {
    resetBtn.addEventListener('click', resetFilters);
  }

  const globalResetBtn = document.getElementById('catalogGlobalReset');
  if (globalResetBtn) {
    globalResetBtn.addEventListener('click', resetFilters);
  }

  // Catalog Storytelling Tab Switcher (4 Story Showcase)
  const storyTabs = document.querySelectorAll('.catalog-story-tab-btn');
  const storyPanels = document.querySelectorAll('.catalog-story-panel');
  if (storyTabs.length && storyPanels.length) {
    storyTabs.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-story-target');
        storyTabs.forEach(t => t.classList.remove('active'));
        storyPanels.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const targetPanel = document.getElementById(targetId);
        if (targetPanel) {
          targetPanel.classList.add('active');
        }
      });
    });
  }

  // Initial render
  renderCatalog();
});
