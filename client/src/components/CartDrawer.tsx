import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, subtotal, closeCart, removeFromCart, updateQuantity, clearCart } =
    useCart();

  const handleCheckout = () => {
    toast.info('Checkout flow coming soon');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Drawer panel */}
          <motion.div
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-card border-l border-border z-[70] flex flex-col shadow-2xl"
          >
            {/* ── Header ── */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className="text-accent" />
                <h2 className="font-display text-xl font-bold text-foreground">Your Cart</h2>
                {items.length > 0 && (
                  <span className="bg-accent text-white text-xs font-heading px-2 py-0.5 rounded-full">
                    {items.reduce((s, i) => s + i.quantity, 0)}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3">
                {items.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-muted-foreground hover:text-destructive transition-colors p-1.5 rounded-lg hover:bg-secondary"
                    title="Clear cart"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeCart}
                  className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close cart"
                >
                  <X size={20} />
                </motion.button>
              </div>
            </div>

            {/* ── Items list ── */}
            <div className="flex-1 overflow-y-auto">
              <AnimatePresence initial={false}>
                {items.length === 0 ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center h-full gap-4 px-6 py-20 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
                      <ShoppingBag size={32} className="text-muted-foreground" />
                    </div>
                    <p className="font-display text-lg font-semibold text-foreground">
                      Your cart is empty
                    </p>
                    <p className="text-sm text-muted-foreground max-w-xs">
                      Browse our collection and add your favourite shirts.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={closeCart}
                      className="mt-2 px-6 py-2.5 bg-accent text-white font-heading text-xs tracking-widest uppercase rounded-lg hover:bg-accent/90 transition-colors"
                    >
                      Continue Shopping
                    </motion.button>
                  </motion.div>
                ) : (
                  <ul className="divide-y divide-border px-6">
                    {items.map((item) => (
                      <motion.li
                        key={`${item.productId}-${item.size}`}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 30, transition: { duration: 0.2 } }}
                        className="py-5 flex gap-4"
                      >
                        {/* Thumbnail */}
                        <div className="w-20 h-20 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start gap-2">
                            <p className="font-display font-semibold text-foreground text-sm leading-snug truncate">
                              {item.name}
                            </p>
                            <button
                              onClick={() => removeFromCart(item.productId, item.size)}
                              className="text-muted-foreground hover:text-destructive transition-colors flex-shrink-0 p-0.5"
                              aria-label="Remove item"
                            >
                              <X size={14} />
                            </button>
                          </div>

                          <p className="text-xs text-muted-foreground mt-0.5 font-heading tracking-wider">
                            Size: {item.size}
                          </p>

                          <div className="flex items-center justify-between mt-3">
                            {/* Quantity controls */}
                            <div className="flex items-center gap-2 bg-secondary rounded-lg p-1">
                              <motion.button
                                whileTap={{ scale: 0.85 }}
                                onClick={() =>
                                  updateQuantity(item.productId, item.size, item.quantity - 1)
                                }
                                className="w-6 h-6 rounded flex items-center justify-center hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="Decrease quantity"
                              >
                                <Minus size={12} />
                              </motion.button>
                              <span className="w-5 text-center text-sm font-heading text-foreground">
                                {item.quantity}
                              </span>
                              <motion.button
                                whileTap={{ scale: 0.85 }}
                                onClick={() =>
                                  updateQuantity(item.productId, item.size, item.quantity + 1)
                                }
                                className="w-6 h-6 rounded flex items-center justify-center hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="Increase quantity"
                              >
                                <Plus size={12} />
                              </motion.button>
                            </div>

                            {/* Line price */}
                            <p className="text-sm font-heading font-semibold text-accent">
                              ${(item.price * item.quantity).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </AnimatePresence>
            </div>

            {/* ── Footer / Checkout ── */}
            <AnimatePresence>
              {items.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="border-t border-border px-6 py-6 space-y-4"
                >
                  {/* Subtotal row */}
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Subtotal</span>
                    <span className="font-display text-xl font-bold text-foreground">
                      ${subtotal.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Shipping & taxes calculated at checkout.
                  </p>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleCheckout}
                    className="w-full py-4 bg-accent text-white font-heading text-sm tracking-[0.15em] uppercase rounded-xl hover:bg-accent/90 transition-colors shadow-lg flex items-center justify-center gap-3"
                  >
                    Proceed to Checkout
                    <ArrowRight size={16} />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
