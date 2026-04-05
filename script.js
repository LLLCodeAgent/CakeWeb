const products = [
  {
    name: 'Chocolate Truffle Delicious Cake Half kg Eggless',
    price: 549,
    oldPrice: 699,
    rating: 4.9,
    reviews: '3.1K',
    image:
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Enchanting Orchid Bouquet & Truffle Cake',
    price: 775,
    oldPrice: 925,
    rating: 5.0,
    reviews: '361',
    image:
      'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Ruby Rose N Truffle Cake Combo',
    price: 1299,
    oldPrice: 1499,
    rating: 4.8,
    reviews: '247',
    image:
      'https://images.unsplash.com/photo-1626803775151-61d756612f97?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Velvety Chocolate Eggless Truffle Cake',
    price: 575,
    oldPrice: 725,
    rating: 5.0,
    reviews: '246',
    image:
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Fruit Overload Cake Half Kg Eggless',
    price: 699,
    oldPrice: 849,
    rating: 4.9,
    reviews: '1.5K',
    image:
      'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Butterscotch Cake Half kg Eggless',
    price: 549,
    oldPrice: 699,
    rating: 4.9,
    reviews: '1.0K',
    image:
      'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Black Forest Cake Half kg Eggless',
    price: 549,
    oldPrice: 699,
    rating: 4.9,
    reviews: '3.1K',
    image:
      'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Chocolate Caramel Fudge Cake Half Kg Eggless',
    price: 525,
    oldPrice: 675,
    rating: 5.0,
    reviews: '970',
    image:
      'https://images.unsplash.com/photo-1622621746668-59fb299bc4d7?auto=format&fit=crop&w=900&q=80',
  },
];

const grid = document.getElementById('productGrid');
const sortSelect = document.getElementById('sortSelect');

function cardTemplate(product) {
  const off = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

  return `
    <article class="card">
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      <div class="card-body">
        <h3>${product.name}</h3>
        <div class="price-row">
          <span class="new-price">₹ ${product.price}</span>
          <span class="old-price">₹ ${product.oldPrice}</span>
          <span class="off">${off}% OFF</span>
        </div>
        <div class="small-meta">★ ${product.rating} · ${product.reviews} reviews</div>
      </div>
    </article>`;
}

function render(items) {
  grid.innerHTML = items.map(cardTemplate).join('');
}

function sortProducts(mode) {
  const copy = [...products];

  switch (mode) {
    case 'low':
      copy.sort((a, b) => a.price - b.price);
      break;
    case 'high':
      copy.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      copy.sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  render(copy);
}

sortSelect.addEventListener('change', (event) => {
  sortProducts(event.target.value);
});

sortProducts('recommended');
