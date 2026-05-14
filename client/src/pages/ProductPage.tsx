import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useParams, useLocation } from 'wouter';
import { ArrowLeft, ShoppingBag, Check, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';
import { ALL_PRODUCTS } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SIZES = ['S', 'M', 'L', 'XL', 'XXL'];

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [added, setAdded] = useState(false);
  const { addToCart, openCart } = useCart();

  const product = ALL_PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">
            Product Not Found
          </h1>
          <button
            onClick={() => navigate('/')}
            className="text-accent hover:underline"
          >
            Return to Shop
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size before adding to cart.');
      return;
    }

    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
    });

    setAdded(true);
    openCart();
    toast.success(`${product.name} (${selectedSize}) added to cart!`);
    setTimeout(() => setAdded(false), 2500);
  };

  const handleBack = () => {
    navigate('/');
    setTimeout(() => {
      document.querySelector('#shop')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        {/* Breadcrumb / Back */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-sm text-muted-foreground mb-10"
        >
          <button
            onClick={handleBack}
            className="flex items-center gap-1.5 hover:text-accent transition-colors group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform duration-200"
            />
            <span>Back to Shop</span>
          </button>
          <ChevronRight size={14} className="opacity-40" />
          <span className="text-foreground/60">{product.name}</span>
        </motion.div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-start">

          {/* ── LEFT: Product Image ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl bg-secondary aspect-square shadow-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/5 pointer-events-none" />
            </div>

            {/* Floating price tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="absolute top-6 left-6 bg-accent text-white px-4 py-1.5 rounded-full font-heading text-sm shadow-lg"
            >
              ${product.price}
            </motion.div>

            {/* Color swatch accent */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-6 left-6 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-2 rounded-lg"
            >
              <span
                className="w-4 h-4 rounded-full border border-white/30"
                style={{ backgroundColor: product.color }}
              />
              <span className="text-white text-xs font-heading tracking-wider">
                {product.material}
              </span>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Product Details ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col"
          >
            {/* Category label */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-heading text-xs tracking-[0.25em] text-accent uppercase mb-3"
            >
              Premium Men's Shirt
            </motion.p>

            {/* Product name */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-2 leading-tight"
            >
              {product.name}
            </motion.h1>

            {/* Price */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl text-accent font-heading font-semibold mb-6"
            >
              ${product.price}
            </motion.p>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="h-px bg-border mb-6 origin-left"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground leading-relaxed mb-8"
            >
              {product.description}
            </motion.p>

            {/* Details list */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="space-y-2 mb-10"
            >
              {product.details.map((detail, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {detail}
                </li>
              ))}
            </motion.ul>

            {/* Size Selector */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <div className="flex items-center justify-between mb-3">
                <p className="font-heading text-sm uppercase tracking-widest text-foreground">
                  Select Size
                </p>
                {selectedSize && (
                  <span className="text-xs text-accent font-heading">
                    {selectedSize} selected
                  </span>
                )}
              </div>
              <div className="flex gap-3 flex-wrap">
                {SIZES.map((size) => (
                  <motion.button
                    key={size}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={() => setSelectedSize(size)}
                    className={`
                      w-12 h-12 rounded-lg font-heading text-sm tracking-wider border transition-all duration-200
                      ${
                        selectedSize === size
                          ? 'bg-accent border-accent text-white shadow-lg shadow-accent/20'
                          : 'bg-card border-border text-muted-foreground hover:border-accent/60 hover:text-foreground'
                      }
                    `}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Add to Cart CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleAddToCart}
                className={`
                  w-full py-4 rounded-xl font-heading text-sm tracking-[0.15em] uppercase
                  flex items-center justify-center gap-3 transition-all duration-300 shadow-lg
                  ${
                    added
                      ? 'bg-green-700 text-white'
                      : 'bg-accent text-white hover:bg-accent/90 hover:shadow-accent/20 hover:shadow-xl'
                  }
                `}
              >
                <AnimatePresence mode="wait">
                  {added ? (
                    <motion.span
                      key="added"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="flex items-center gap-2"
                    >
                      <Check size={18} />
                      Added to Cart
                    </motion.span>
                  ) : (
                    <motion.span
                      key="add"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="flex items-center gap-2"
                    >
                      <ShoppingBag size={18} />
                      Add to Cart
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>

            {/* Trust badge */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="text-center text-xs text-muted-foreground mt-4 tracking-wide"
            >
              Free worldwide shipping · 30-day returns · Authenticity guaranteed
            </motion.p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
