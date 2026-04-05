(function (global) {
  function applyFilters(products, state) {
    return products.filter((item) => {
      if (item.price < state.minPrice || item.price > state.maxPrice) return false;
      if (state.egglessOnly && !item.eggless) return false;

      if (state.search) {
        const hay = `${item.name} ${item.flavour} ${item.occasion}`.toLowerCase();
        if (!hay.includes(state.search.toLowerCase())) return false;
      }

      if (state.occasion.size && !state.occasion.has(item.occasion)) return false;
      if (state.flavour.size && !state.flavour.has(item.flavour)) return false;
      if (state.type.size && !state.type.has(item.type)) return false;
      return true;
    });
  }

  function applySort(items, sort) {
    const copy = [...items];
    if (sort === 'low') return copy.sort((a, b) => a.price - b.price);
    if (sort === 'high') return copy.sort((a, b) => b.price - a.price);
    if (sort === 'rating') return copy.sort((a, b) => b.rating - a.rating);
    return copy;
  }

  function sanitizePriceRange(minRaw, maxRaw, minBound = 200, maxBound = 3500) {
    let min = Number(minRaw || minBound);
    let max = Number(maxRaw || maxBound);
    if (min < minBound) min = minBound;
    if (max > maxBound) max = maxBound;
    if (min > max) [min, max] = [max, min];
    return { min, max };
  }

  const api = { applyFilters, applySort, sanitizePriceRange };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  global.Catalog = api;
})(typeof window !== 'undefined' ? window : globalThis);
