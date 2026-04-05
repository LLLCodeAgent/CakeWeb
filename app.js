import React, { useMemo, useState } from 'https://esm.sh/react@18.3.1';
import { createRoot } from 'https://esm.sh/react-dom@18.3.1/client';
import { motion } from 'https://esm.sh/framer-motion@11.11.17';

const h = React.createElement;

const products = [
  ['Velvet Noir Truffle', 899, 'Chocolate', 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80'],
  ['Royal Pistachio Dome', 1299, 'Pistachio', 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?auto=format&fit=crop&w=1200&q=80'],
  ['Rose Gold Rasmalai', 1099, 'Rasmalai', 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80'],
  ['Midnight Belgian Silk', 1499, 'Chocolate', 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=1200&q=80'],
  ['Classic Red Velvet', 999, 'Red Velvet', 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=1200&q=80'],
  ['Berry Bloom Gateau', 1199, 'Berry', 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=80']
].map(([name, price, flavour, image], index) => ({
  id: `cake-${index + 1}`,
  name,
  price,
  flavour,
  image,
  rating: (4.7 + (index % 3) * 0.1).toFixed(1)
}));

function NavBar({ cartCount }) {
  return h(
    'header',
    { className: 'sticky top-0 z-50 border-b border-white/10 glass' },
    h(
      'div',
      { className: 'mx-auto flex w-[min(1200px,92vw)] items-center justify-between py-4' },
      h('div', { className: 'text-2xl font-black tracking-tight text-gradient' }, 'LuxCake'),
      h(
        'nav',
        { className: 'hidden gap-8 text-sm text-slate-200 md:flex' },
        ...['Cakes', 'Collections', 'Occasions', 'Testimonials'].map((item) => h('a', { href: '#', key: item, className: 'hover:text-white transition' }, item))
      ),
      h(
        'button',
        { className: 'rounded-full border border-white/20 px-4 py-2 text-sm font-semibold hover:bg-white/10 transition' },
        `Cart (${cartCount})`
      )
    )
  );
}

function Hero() {
  return h(
    'section',
    { className: 'relative mx-auto mt-10 w-[min(1200px,92vw)] overflow-hidden rounded-3xl border border-white/10 glass p-8 md:p-14 noise' },
    h(motion.div, { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7 }, className: 'relative z-10 max-w-2xl' },
      h('p', { className: 'mb-4 inline-flex rounded-full border border-emerald-300/40 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-emerald-200' }, 'Jaipur • 60 min delivery'),
      h('h1', { className: 'text-4xl font-black leading-tight md:text-6xl' },
        'Luxury Cakes Crafted ',
        h('span', { className: 'text-gradient' }, 'for Celebrations')
      ),
      h('p', { className: 'mt-5 text-slate-300 md:text-lg' }, 'Premium handcrafted cakes, curated combos, and concierge delivery for moments that deserve more than ordinary.'),
      h('div', { className: 'mt-8 flex flex-wrap gap-3' },
        h('button', { className: 'rounded-xl bg-gradient-to-r from-brand-500 to-cyan-400 px-6 py-3 font-semibold text-white shadow-glow transition hover:scale-[1.02]' }, 'Order Now'),
        h('button', { className: 'rounded-xl border border-white/20 px-6 py-3 font-semibold text-slate-100 hover:bg-white/10' }, 'Explore Collection')
      )
    )
  );
}

function ProductCard({ product, qty, onAdd, onRemove }) {
  return h(
    motion.article,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      whileHover: { y: -4 },
      className: 'group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-2xl'
    },
    h('img', { src: product.image, alt: product.name, className: 'h-56 w-full object-cover transition duration-500 group-hover:scale-105' }),
    h('div', { className: 'space-y-3 p-4' },
      h('div', { className: 'flex items-start justify-between gap-3' },
        h('h3', { className: 'font-semibold' }, product.name),
        h('span', { className: 'rounded-full bg-white/10 px-2 py-1 text-xs text-slate-300' }, `★ ${product.rating}`)
      ),
      h('p', { className: 'text-sm text-slate-400' }, product.flavour),
      h('div', { className: 'flex items-center justify-between' },
        h('p', { className: 'text-xl font-bold' }, `₹ ${product.price}`),
        qty
          ? h('div', { className: 'flex items-center gap-2' },
              h('button', { onClick: () => onRemove(product.id), className: 'h-8 w-8 rounded-lg border border-white/20' }, '−'),
              h('span', { className: 'w-5 text-center font-semibold' }, qty),
              h('button', { onClick: () => onAdd(product.id), className: 'h-8 w-8 rounded-lg border border-white/20' }, '+')
            )
          : h('button', { onClick: () => onAdd(product.id), className: 'rounded-lg bg-white text-slate-900 px-3 py-2 text-sm font-semibold transition hover:bg-slate-200' }, 'Add')
      )
    )
  );
}

function App() {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('popular');
  const [cart, setCart] = useState({});

  const filtered = useMemo(() => {
    const list = products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));
    if (sort === 'price_low') list.sort((a, b) => a.price - b.price);
    if (sort === 'price_high') list.sort((a, b) => b.price - a.price);
    return list;
  }, [query, sort]);

  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const subtotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const product = products.find((item) => item.id === id);
    return product ? sum + product.price * qty : sum;
  }, 0);

  const addItem = (id) => setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  const removeItem = (id) => setCart((prev) => {
    const next = { ...prev };
    if (!next[id]) return prev;
    if (next[id] === 1) delete next[id];
    else next[id] -= 1;
    return next;
  });

  return h(
    React.Fragment,
    null,
    h(NavBar, { cartCount }),
    h(Hero),
    h('section', { className: 'mx-auto mt-10 w-[min(1200px,92vw)]' },
      h('div', { className: 'mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between' },
        h('h2', { className: 'text-3xl font-bold tracking-tight' }, 'Curated Cakes'),
        h('div', { className: 'flex gap-2' },
          h('input', {
            value: query,
            onChange: (e) => setQuery(e.target.value),
            placeholder: 'Search luxury cakes...',
            className: 'rounded-xl border border-white/15 bg-slate-900/70 px-4 py-2 text-sm outline-none ring-brand-500/40 focus:ring'
          }),
          h('select', {
            value: sort,
            onChange: (e) => setSort(e.target.value),
            className: 'rounded-xl border border-white/15 bg-slate-900/70 px-3 py-2 text-sm outline-none'
          },
            h('option', { value: 'popular' }, 'Most Popular'),
            h('option', { value: 'price_low' }, 'Price ↑'),
            h('option', { value: 'price_high' }, 'Price ↓')
          )
        )
      ),
      h('div', { className: 'grid gap-4 sm:grid-cols-2 lg:grid-cols-3' },
        ...filtered.map((product) => h(ProductCard, {
          key: product.id,
          product,
          qty: cart[product.id] || 0,
          onAdd: addItem,
          onRemove: removeItem
        }))
      )
    ),
    h('section', { className: 'mx-auto my-12 w-[min(1200px,92vw)] rounded-3xl border border-white/10 glass p-6 md:p-8' },
      h('div', { className: 'flex flex-col gap-6 md:flex-row md:items-center md:justify-between' },
        h('div', null,
          h('p', { className: 'text-sm uppercase tracking-widest text-slate-400' }, 'Checkout Preview'),
          h('h3', { className: 'mt-1 text-3xl font-extrabold' }, `₹ ${subtotal.toLocaleString('en-IN')}`),
          h('p', { className: 'text-slate-300' }, `${cartCount} item(s) in cart`)
        ),
        h('button', { className: 'rounded-xl bg-gradient-to-r from-brand-600 to-cyan-400 px-7 py-3 font-semibold text-white shadow-glow hover:scale-[1.02] transition' }, 'Secure Checkout')
      )
    ),
    h('footer', { className: 'border-t border-white/10 py-8 text-center text-sm text-slate-400' },
      '© ',
      new Date().getFullYear(),
      ' LuxCake Jaipur · Crafted for premium celebrations.'
    )
  );
}

createRoot(document.getElementById('root')).render(h(App));
