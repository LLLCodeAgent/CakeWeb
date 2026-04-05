const products = [
  ['Chocolate Truffle Delicious Cake Half kg Eggless', 549, 699, 4.9, '3.1K'],
  ['Enchanting Orchid Bouquet & Truffle Cake', 775, 925, 5.0, '406'],
  ['Fruit Overload Cake Half Kg Eggless', 699, 849, 4.9, '1.5K'],
  ['Angelic Rose Bouquet n Truffle Birthday Bliss', 749, 899, 5.0, '176'],
  ['Velvety Chocolate Eggless Truffle Cake', 575, 725, 5.0, '263'],
  ['Rosy Blooms & Choco Cake Combo', 1799, 2049, 4.8, '106'],
  ['Rainbow Delight Eggless Pineapple Birthday Cake', 749, 899, 4.8, '91'],
  ['Birthday Blooms & Truffle Delight', 1775, 2025, 5.0, '199'],
  ['Chocolate Caramel Fudge Cake Half Kg Eggless', 525, 675, 5.0, '992'],
  ['Butterscotch Cake Half kg Eggless', 549, 699, 4.9, '1.0K'],
  ['Truffle Bento Cake N Blue Orchid', 949, 1099, 4.8, '120'],
  ['Black Forest Cake Half kg Eggless', 549, 699, 4.9, '3.1K'],
  ['Serenade of Roses and Truffle Symphony', 699, 849, 5.0, '166'],
  ['Decorated Chocolate Truffle Cake Half Kg Eggless', 675, 825, 4.9, '1.6K'],
  ['Dreamy Violet Whispers Orchids Bouquet & Black Forest Combo', 949, 1099, 5.0, '155'],
  ['Truffle Treat Bento Eggless Cake', 375, 475, 4.7, '80'],
  ['Pineapple Cake Half kg Eggless', 525, 675, 4.9, '2.0K'],
  ['Ruby Rose N Truffle Cake Combo', 1299, 1499, 4.8, '232'],
  ['Rose Paradise Chocolate Cake Eggless Half Kg', 699, 849, 5.0, '1.1K'],
  ['Luxe Love Orchids Bouquet & Truffle Cake', 1875, 2125, 4.9, '211'],
  ['Timeless Love Red Roses Bouquet & Chocolate Cake', 1325, 1525, 4.9, '558'],
  ['Golden Delight Rasmalai Eggless Cake', 749, 899, 4.8, '90'],
  ['Butterscotch Crunch Cake- Half Kg', 625, 775, 4.7, '74'],
  ['Chocolate Cream Cake Half kg Eggless', 525, 675, 4.9, '1.5K']
].map(([name, price, oldPrice, rating, reviews], i) => ({
  name,
  price,
  oldPrice,
  rating,
  reviews,
  image: `https://picsum.photos/seed/jaipur-cake-${i + 1}/600/420`
}));

const grid = document.getElementById('productGrid');
const sortSelect = document.getElementById('sortSelect');

function card(p) {
  const off = Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100);
  return `<article class="card">
      <img src="${p.image}" alt="${p.name}" loading="lazy" />
      <div class="card-body">
        <h3>${p.name}</h3>
        <div class="price"><span class="new">₹ ${p.price}</span><span class="old">₹ ${p.oldPrice}</span><span class="off">${off}% OFF</span></div>
        <div class="meta">★ ${p.rating} · ${p.reviews} reviews</div>
      </div>
    </article>`;
}

function render(list) {
  grid.innerHTML = list.map(card).join('');
}

function sortAndRender(type) {
  const copy = [...products];
  if (type === 'low') copy.sort((a, b) => a.price - b.price);
  if (type === 'high') copy.sort((a, b) => b.price - a.price);
  if (type === 'rating') copy.sort((a, b) => b.rating - a.rating);
  render(copy);
}

sortSelect.addEventListener('change', (e) => sortAndRender(e.target.value));
sortAndRender('recommended');
