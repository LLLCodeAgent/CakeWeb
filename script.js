const CAKE_IMAGES = [
  'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1622621746668-59fb299bc4d7?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1559620192-032c4bc4674e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=900&q=80'
];

const PRODUCTS = [
  { name: 'Chocolate Truffle Delicious Cake Half kg Eggless', price: 549, oldPrice: 699, rating: 4.9, reviews: '3.1K', flavour: 'Chocolate', type: 'Cake', occasion: 'Birthday', eggless: true },
  { name: 'Enchanting Orchid Bouquet & Truffle Cake', price: 775, oldPrice: 925, rating: 5.0, reviews: '406', flavour: 'Chocolate', type: 'Combo', occasion: 'Anniversary', eggless: true },
  { name: 'Fruit Overload Cake Half Kg Eggless', price: 699, oldPrice: 849, rating: 4.9, reviews: '1.5K', flavour: 'Fruit', type: 'Cake', occasion: 'Birthday', eggless: true },
  { name: 'Angelic Rose Bouquet n Truffle Birthday Bliss', price: 749, oldPrice: 899, rating: 5.0, reviews: '176', flavour: 'Chocolate', type: 'Combo', occasion: 'Birthday', eggless: true },
  { name: 'Velvety Chocolate Eggless Truffle Cake', price: 575, oldPrice: 725, rating: 5.0, reviews: '263', flavour: 'Chocolate', type: 'Cake', occasion: 'Occasions', eggless: true },
  { name: 'Rosy Blooms & Choco Cake Combo', price: 1799, oldPrice: 2049, rating: 4.8, reviews: '106', flavour: 'Chocolate', type: 'Combo', occasion: 'Anniversary', eggless: true },
  { name: 'Rainbow Delight Pineapple Birthday Cake', price: 749, oldPrice: 899, rating: 4.8, reviews: '91', flavour: 'Pineapple', type: 'Cake', occasion: 'Birthday', eggless: true },
  { name: 'Chocolate Caramel Fudge Cake Half Kg Eggless', price: 525, oldPrice: 675, rating: 5.0, reviews: '992', flavour: 'Chocolate', type: 'Cake', occasion: 'Occasions', eggless: true },
  { name: 'Butterscotch Cake Half kg Eggless', price: 549, oldPrice: 699, rating: 4.9, reviews: '1.0K', flavour: 'Butterscotch', type: 'Cake', occasion: 'Birthday', eggless: true },
  { name: 'Truffle Bento Cake N Blue Orchid', price: 949, oldPrice: 1099, rating: 4.8, reviews: '120', flavour: 'Chocolate', type: 'Combo', occasion: 'Anniversary', eggless: true },
  { name: 'Black Forest Cake Half kg Eggless', price: 549, oldPrice: 699, rating: 4.9, reviews: '3.1K', flavour: 'Black Forest', type: 'Cake', occasion: 'Birthday', eggless: true },
  { name: 'Pineapple Cake Half kg Eggless', price: 525, oldPrice: 675, rating: 4.9, reviews: '2.0K', flavour: 'Pineapple', type: 'Cake', occasion: 'Occasions', eggless: true },
  { name: 'Ruby Rose N Truffle Cake Combo', price: 1299, oldPrice: 1499, rating: 4.8, reviews: '232', flavour: 'Chocolate', type: 'Combo', occasion: 'Anniversary', eggless: true },
  { name: 'Rose Paradise Chocolate Cake Eggless Half Kg', price: 699, oldPrice: 849, rating: 5.0, reviews: '1.1K', flavour: 'Chocolate', type: 'Cake', occasion: 'Birthday', eggless: true },
  { name: 'Luxe Love Orchids Bouquet & Truffle Cake', price: 1875, oldPrice: 2125, rating: 4.9, reviews: '211', flavour: 'Chocolate', type: 'Combo', occasion: 'Anniversary', eggless: true },
  { name: 'Timeless Love Red Roses Bouquet & Chocolate Cake', price: 1325, oldPrice: 1525, rating: 4.9, reviews: '558', flavour: 'Chocolate', type: 'Combo', occasion: 'Anniversary', eggless: true },
  { name: 'Golden Delight Rasmalai Eggless Cake', price: 749, oldPrice: 899, rating: 4.8, reviews: '90', flavour: 'Rasmalai', type: 'Cake', occasion: 'Birthday', eggless: true },
  { name: 'Red Velvet Cake Half Kg Eggless', price: 699, oldPrice: 849, rating: 4.8, reviews: '241', flavour: 'Red Velvet', type: 'Cake', occasion: 'Occasions', eggless: true },
  { name: 'Belgian Chocolate Cake Half Kg Eggless', price: 799, oldPrice: 949, rating: 4.9, reviews: '353', flavour: 'Chocolate', type: 'Cake', occasion: 'Birthday', eggless: true },
  { name: 'Vanilla Fresh Cream Cake Half Kg', price: 499, oldPrice: 649, rating: 4.8, reviews: '214', flavour: 'Vanilla', type: 'Cake', occasion: 'Birthday', eggless: false }
].map((item, index) => ({ ...item, image: CAKE_IMAGES[index % CAKE_IMAGES.length] }));

const state = {
  search: '',
  minPrice: 200,
  maxPrice: 3500,
  egglessOnly: false,
  occasion: new Set(),
  flavour: new Set(),
  type: new Set(),
  sort: 'recommended'
};

const refs = {
  productGrid: document.getElementById('productGrid'),
  visibleCount: document.getElementById('visibleCount'),
  totalCount: document.getElementById('totalCount'),
  sortSelect: document.getElementById('sortSelect'),
  searchInput: document.getElementById('searchInput'),
  minPriceInput: document.getElementById('minPriceInput'),
  maxPriceInput: document.getElementById('maxPriceInput'),
  priceReadout: document.getElementById('priceReadout'),
  egglessToggle: document.getElementById('egglessToggle'),
  occasionFilters: document.getElementById('occasionFilters'),
  flavourFilters: document.getElementById('flavourFilters'),
  typeFilters: document.getElementById('typeFilters'),
  activeFilters: document.getElementById('activeFilters'),
  clearFiltersBtn: document.getElementById('clearFiltersBtn'),
  emptyState: document.getElementById('emptyState')
};

const formatter = new Intl.NumberFormat('en-IN');

function uniqValues(key) {
  return [...new Set(PRODUCTS.map((item) => item[key]))].sort();
}

function createChips(root, values, groupKey) {
  root.innerHTML = values
    .map((value) => `<button type="button" class="chip" data-group="${groupKey}" data-value="${value}">${value}</button>`)
    .join('');
}

function productCard(product) {
  const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
  return `<article class="card">
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      <div class="card-body">
        <h3>${product.name}</h3>
        <div class="price">
          <span class="new">₹ ${formatter.format(product.price)}</span>
          <span class="old">₹ ${formatter.format(product.oldPrice)}</span>
          <span class="off">${discount}% OFF</span>
        </div>
        <div class="meta">★ ${product.rating.toFixed(1)} · ${product.reviews} reviews</div>
      </div>
    </article>`;
}

function applyFilters(products) {
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

function applySort(items) {
  if (state.sort === 'low') return items.sort((a, b) => a.price - b.price);
  if (state.sort === 'high') return items.sort((a, b) => b.price - a.price);
  if (state.sort === 'rating') return items.sort((a, b) => b.rating - a.rating);
  return items;
}

function renderActiveFilters() {
  const pills = [];
  if (state.search) pills.push(`Search: ${state.search}`);
  if (state.egglessOnly) pills.push('Eggless');
  if (state.occasion.size) pills.push(...[...state.occasion].map((v) => `Occasion: ${v}`));
  if (state.flavour.size) pills.push(...[...state.flavour].map((v) => `Flavour: ${v}`));
  if (state.type.size) pills.push(...[...state.type].map((v) => `Type: ${v}`));

  refs.activeFilters.innerHTML = pills.map((pill) => `<span class="pill">${pill}</span>`).join('');
}

function render() {
  refs.totalCount.textContent = PRODUCTS.length;
  refs.priceReadout.textContent = `₹ ${formatter.format(state.minPrice)} to ₹ ${formatter.format(state.maxPrice)}${state.maxPrice >= 3500 ? '+' : ''}`;

  const filtered = applySort(applyFilters([...PRODUCTS]));
  refs.visibleCount.textContent = filtered.length;
  refs.emptyState.hidden = filtered.length !== 0;
  refs.productGrid.innerHTML = filtered.map(productCard).join('');
  renderActiveFilters();
}

function resetFilters() {
  state.search = '';
  state.minPrice = 200;
  state.maxPrice = 3500;
  state.egglessOnly = false;
  state.occasion.clear();
  state.flavour.clear();
  state.type.clear();
  state.sort = 'recommended';

  refs.searchInput.value = '';
  refs.minPriceInput.value = '200';
  refs.maxPriceInput.value = '3500';
  refs.egglessToggle.checked = false;
  refs.sortSelect.value = 'recommended';

  document.querySelectorAll('.chip.active').forEach((el) => el.classList.remove('active'));
  render();
}

function handleChipClick(event) {
  const button = event.target.closest('.chip');
  if (!button) return;

  const { group, value } = button.dataset;
  const bucket = state[group];

  if (bucket.has(value)) {
    bucket.delete(value);
    button.classList.remove('active');
  } else {
    bucket.add(value);
    button.classList.add('active');
  }

  render();
}

function sanitizePriceRange() {
  let min = Number(refs.minPriceInput.value || 200);
  let max = Number(refs.maxPriceInput.value || 3500);

  if (min < 200) min = 200;
  if (max > 3500) max = 3500;
  if (min > max) [min, max] = [max, min];

  state.minPrice = min;
  state.maxPrice = max;

  refs.minPriceInput.value = String(min);
  refs.maxPriceInput.value = String(max);
}

function init() {
  createChips(refs.occasionFilters, uniqValues('occasion'), 'occasion');
  createChips(refs.flavourFilters, uniqValues('flavour'), 'flavour');
  createChips(refs.typeFilters, uniqValues('type'), 'type');

  refs.sortSelect.addEventListener('change', (e) => {
    state.sort = e.target.value;
    render();
  });

  refs.searchInput.addEventListener('input', (e) => {
    state.search = e.target.value.trim();
    render();
  });

  refs.minPriceInput.addEventListener('change', () => {
    sanitizePriceRange();
    render();
  });

  refs.maxPriceInput.addEventListener('change', () => {
    sanitizePriceRange();
    render();
  });

  refs.egglessToggle.addEventListener('change', (e) => {
    state.egglessOnly = e.target.checked;
    render();
  });

  refs.occasionFilters.addEventListener('click', handleChipClick);
  refs.flavourFilters.addEventListener('click', handleChipClick);
  refs.typeFilters.addEventListener('click', handleChipClick);

  refs.clearFiltersBtn.addEventListener('click', resetFilters);

  refs.productGrid.addEventListener(
    'error',
    (event) => {
      const img = event.target;
      if (!(img instanceof HTMLImageElement) || img.classList.contains('is-fallback')) return;
      img.classList.add('is-fallback');
      img.src =
        'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"700\" height=\"500\"><rect width=\"100%\" height=\"100%\" fill=\"%23f3f4f6\"/><text x=\"50%\" y=\"50%\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"%236b7280\" font-family=\"Arial\" font-size=\"24\">Image unavailable</text></svg>';
    },
    true
  );

  render();
}

init();
