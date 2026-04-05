import React, { useMemo, useState } from 'https://esm.sh/react@18.3.1';
import { createRoot } from 'https://esm.sh/react-dom@18.3.1/client';
import { motion } from 'https://esm.sh/framer-motion@11.11.17';

const h = React.createElement;

const PRODUCTS = [
  { id: 1, name: 'Midnight Cocoa Bloom', price: 799, rating: 4.9, flavour: 'Chocolate', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80' },
  { id: 2, name: 'Saffron Pistachio Opera', price: 1299, rating: 4.8, flavour: 'Pistachio', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80' },
  { id: 3, name: 'Ruby Velvet Signature', price: 949, rating: 4.7, flavour: 'Red Velvet', image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=1200&q=80' },
  { id: 4, name: 'Hazelnut Cloud Truffle', price: 1099, rating: 5.0, flavour: 'Chocolate', image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=1200&q=80' },
  { id: 5, name: 'Tropical Pine Cream', price: 749, rating: 4.8, flavour: 'Pineapple', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=80' },
  { id: 6, name: 'Blueberry Aurora Cake', price: 999, rating: 4.9, flavour: 'Blueberry', image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=1200&q=80' },
  { id: 7, name: 'Vanilla Pearl Whip', price: 699, rating: 4.6, flavour: 'Vanilla', image: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?auto=format&fit=crop&w=1200&q=80' },
  { id: 8, name: 'Golden Butterscotch Crunch', price: 849, rating: 4.8, flavour: 'Butterscotch', image: 'https://images.unsplash.com/photo-1622621746668-59fb299bc4d7?auto=format&fit=crop&w=1200&q=80' }
];

const FLAVOURS = [...new Set(PRODUCTS.map((p) => p.flavour))];

const motionIn = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.5 } };

function Header() {
  return h('header', { className: 'sticky top-0 z-50 glass border-b border-white/10' },
    h('div', { className: 'mx-auto flex w-[min(1220px,94vw)] items-center justify-between py-4' },
      h('div', { className: 'text-2xl font-black tracking-tight text-gradient' }, 'Velora Cakes'),
      h('div', { className: 'hidden md:flex items-center gap-8 text-sm text-slate-200' }, ...['Cakes', 'Occasions', 'Gifting', 'Support'].map((t) => h('a', { href: '#', key: t, className: 'hover:text-white transition' }, t))),
      h('button', { className: 'rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20 transition' }, 'Track Order')
    )
  );
}

function Hero() {
  return h('section', { className: 'mx-auto mt-8 w-[min(1220px,94vw)] rounded-3xl border border-white/10 glass p-7 md:p-12 noise relative overflow-hidden' },
    h(motion.div, { ...motionIn, className: 'relative z-10 max-w-3xl' },
      h('p', { className: 'inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200' }, 'Same day delivery in Jaipur'),
      h('h1', { className: 'mt-4 text-4xl font-black leading-tight md:text-6xl' }, 'Premium Cakes Crafted For ', h('span', { className: 'text-gradient' }, 'Modern Celebrations')),
      h('p', { className: 'mt-4 max-w-2xl text-slate-300 md:text-lg' }, 'Inspired by premium commerce experiences, designed with elevated visuals, seamless browsing and high-conversion product discovery.'),
      h('div', { className: 'mt-7 flex flex-wrap gap-3' },
        h('button', { className: 'rounded-xl bg-gradient-to-r from-brand-600 to-cyan-400 px-6 py-3 font-semibold text-white shadow-glow hover:scale-[1.02] transition' }, 'Shop Signature Cakes'),
        h('button', { className: 'rounded-xl border border-white/20 px-6 py-3 font-semibold hover:bg-white/10 transition' }, 'View Delivery Slots')
      )
    )
  );
}

function Filters({ q, setQ, maxPrice, setMaxPrice, selectedFlavours, toggleFlavour }) {
  return h('aside', { className: 'glass rounded-2xl border border-white/10 p-4 md:sticky md:top-24' },
    h('h2', { className: 'text-lg font-bold' }, 'Filters'),
    h('label', { className: 'mt-4 block text-sm text-slate-300' }, 'Search',
      h('input', { value: q, onChange: (e) => setQ(e.target.value), className: 'mt-2 w-full rounded-xl border border-white/15 bg-slate-900/60 px-3 py-2 outline-none focus:ring focus:ring-brand-500/30', placeholder: 'Search cakes' })
    ),
    h('div', { className: 'mt-5' },
      h('p', { className: 'text-sm text-slate-300' }, `Price up to ₹ ${maxPrice}`),
      h('input', { type: 'range', min: 500, max: 1500, step: 50, value: maxPrice, onChange: (e) => setMaxPrice(Number(e.target.value)), className: 'mt-2 w-full accent-violet-400' })
    ),
    h('div', { className: 'mt-5 space-y-2' },
      h('p', { className: 'text-sm text-slate-300' }, 'Flavour'),
      ...FLAVOURS.map((flavour) => h('label', { key: flavour, className: 'flex cursor-pointer items-center gap-2 text-sm text-slate-200' },
        h('input', { type: 'checkbox', checked: selectedFlavours.has(flavour), onChange: () => toggleFlavour(flavour), className: 'accent-violet-400' }),
        flavour
      ))
    )
  );
}

function ProductCard({ product }) {
  return h(motion.article, { ...motionIn, className: 'group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70' },
    h('img', { src: product.image, alt: product.name, loading: 'lazy', className: 'h-52 w-full object-cover transition duration-500 group-hover:scale-105' }),
    h('div', { className: 'p-4' },
      h('div', { className: 'flex items-start justify-between gap-3' },
        h('h3', { className: 'font-semibold' }, product.name),
        h('span', { className: 'rounded-full bg-white/10 px-2 py-1 text-xs text-slate-300' }, `★ ${product.rating.toFixed(1)}`)
      ),
      h('p', { className: 'mt-1 text-sm text-slate-400' }, product.flavour),
      h('div', { className: 'mt-4 flex items-center justify-between' },
        h('p', { className: 'text-xl font-bold' }, `₹ ${product.price}`),
        h('button', { className: 'rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-200' }, 'Add to Cart')
      )
    )
  );
}

function InfoSection() {
  return h('section', { className: 'mx-auto mt-10 w-[min(1220px,94vw)] grid gap-4 md:grid-cols-2' },
    h('div', { className: 'glass rounded-2xl border border-white/10 p-6' },
      h('h3', { className: 'text-xl font-bold' }, 'Why Customers Choose Velora'),
      h('ul', { className: 'mt-4 space-y-2 text-slate-300 text-sm' },
        h('li', null, '• 30 to 90 minute delivery slots across Jaipur'),
        h('li', null, '• Chef-crafted premium recipes with modern presentation'),
        h('li', null, '• Transparent pricing with secure checkout experience')
      )
    ),
    h('div', { className: 'glass rounded-2xl border border-white/10 p-6' },
      h('h3', { className: 'text-xl font-bold' }, 'Frequently Asked Questions'),
      h('div', { className: 'mt-4 space-y-3 text-sm text-slate-300' },
        h('p', null, h('strong', null, 'Can I schedule midnight delivery? '), 'Yes, selected premium slots are available.'),
        h('p', null, h('strong', null, 'Do you offer eggless options? '), 'Most cakes support eggless customisation.'),
        h('p', null, h('strong', null, 'Can I include a custom message? '), 'Yes, every order supports personalized notes.')
      )
    )
  );
}

function App() {
  const [q, setQ] = useState('');
  const [maxPrice, setMaxPrice] = useState(1500);
  const [sort, setSort] = useState('featured');
  const [selectedFlavours, setSelectedFlavours] = useState(new Set());

  const toggleFlavour = (value) => {
    setSelectedFlavours((prev) => {
      const next = new Set(prev);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  };

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()) && p.price <= maxPrice);
    if (selectedFlavours.size) list = list.filter((p) => selectedFlavours.has(p.flavour));
    if (sort === 'low') list = [...list].sort((a, b) => a.price - b.price);
    if (sort === 'high') list = [...list].sort((a, b) => b.price - a.price);
    if (sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [q, maxPrice, selectedFlavours, sort]);

  return h(React.Fragment, null,
    h(Header),
    h(Hero),
    h('main', { className: 'mx-auto mt-8 w-[min(1220px,94vw)]' },
      h('p', { className: 'mb-4 text-sm text-slate-400' }, 'Home / Cakes / Jaipur Collection'),
      h('div', { className: 'grid gap-4 md:grid-cols-[290px_1fr]' },
        h(Filters, { q, setQ, maxPrice, setMaxPrice, selectedFlavours, toggleFlavour }),
        h('section', { className: 'glass rounded-2xl border border-white/10 p-4 md:p-6' },
          h('div', { className: 'mb-5 flex flex-wrap items-center justify-between gap-3' },
            h('div', null,
              h('h2', { className: 'text-3xl font-black' }, 'Cake Delivery in Jaipur'),
              h('p', { className: 'text-slate-400 text-sm mt-1' }, `${filtered.length} products • Premium curated assortment`)
            ),
            h('select', { value: sort, onChange: (e) => setSort(e.target.value), className: 'rounded-xl border border-white/20 bg-slate-900/70 px-3 py-2 text-sm outline-none' },
              h('option', { value: 'featured' }, 'Sort: Featured'),
              h('option', { value: 'low' }, 'Price: Low to High'),
              h('option', { value: 'high' }, 'Price: High to Low'),
              h('option', { value: 'rating' }, 'Top Rated')
            )
          ),
          filtered.length
            ? h('div', { className: 'grid gap-4 sm:grid-cols-2 xl:grid-cols-3' }, ...filtered.map((p) => h(ProductCard, { key: p.id, product: p })))
            : h('div', { className: 'rounded-xl border border-dashed border-white/20 p-10 text-center text-slate-300' }, 'No cakes match this filter right now. Try broadening your selection.')
        )
      )
    ),
    h(InfoSection),
    h('footer', { className: 'mt-12 border-t border-white/10 py-8 text-center text-sm text-slate-400' }, '© ', new Date().getFullYear(), ' Velora Cakes · Original premium storefront concept')
  );
}

createRoot(document.getElementById('root')).render(h(App));
