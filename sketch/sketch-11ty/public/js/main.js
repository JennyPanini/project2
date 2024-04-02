  // When a filter is changed, update the visible elements.
  document.querySelectorAll('.filter').forEach(filter => {
    filter.addEventListener('change', () => {
      const selectedFilters = Array.from(document.querySelectorAll('.filter:checked')).map(el => el.value);
      
      // Loop through all elements with the `data-items` attribute.
      document.querySelectorAll('[data-items]').forEach(el => {
        const items = JSON.parse(el.getAttribute('data-items'));
        
        // Determine if this element should be visible based on the selected filters.
        // Change `.every()` to `.some()` so it shows elements with any matching filter.
        const isVisible = selectedFilters.length === 0 || selectedFilters.some(filter => items.includes(filter));
        
        // Toggle visibility.
        el.style.display = isVisible ? '' : 'none';
      });
    });
  });
