import { motion } from 'framer-motion';
import { useState } from 'react';
import { Heart, ShoppingBag, Truck, Shield, RotateCcw } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const product = {
    name: 'White Elegance',
    price: 299,
    rating: 4.8,
    reviews: 124,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663493750158/a2WmF5jykB4Dohf2AkMVGg/hero-main-PrTbwQ7y36PCnLozQx2jVN.webp',
    material: 'Premium Egyptian Cotton',
    fit: 'Classic',
    colors: ['White', 'Ivory', 'Pearl'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'The epitome of timeless elegance. Our White Elegance shirt is crafted from premium Egyptian cotton with a perfect balance of comfort and sophistication. Every detail has been meticulously designed to ensure you look and feel your absolute best.',
    features: [
      'Premium Egyptian Cotton Giza 45',
      '2mm precision stitching',
      'Mother-of-pearl buttons',
      'Hand-finished seams',
      'Reinforced collar stays',
      'Wrinkle-resistant treatment',
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Product Section */}
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Image Gallery */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="aspect-square rounded-lg overflow-hidden bg-secondary"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square rounded-lg overflow-hidden bg-secondary cursor-pointer"
                  >
                    <img
                      src={product.image}
                      alt={`View ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Title & Rating */}
              <div>
                <h1 className="font-display text-4xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent">★</span>
                    ))}
                  </div>
                  <span className="text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                <div className="text-3xl font-bold text-accent">
                  ${product.price}
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Color Selection */}
              <div>
                <h3 className="font-heading text-sm uppercase tracking-wider text-foreground mb-4">
                  Color
                </h3>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <motion.button
                      key={color}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 border-2 border-border rounded-lg text-foreground hover:border-accent transition-colors"
                    >
                      {color}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="font-heading text-sm uppercase tracking-wider text-foreground mb-4">
                  Size
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {product.sizes.map((size) => (
                    <motion.button
                      key={size}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="py-2 border-2 border-border rounded-lg text-foreground hover:border-accent transition-colors font-heading"
                    >
                      {size}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="font-heading text-sm uppercase tracking-wider text-foreground mb-4">
                  Quantity
                </h3>
                <div className="flex items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-border rounded-lg hover:border-accent transition-colors"
                  >
                    −
                  </motion.button>
                  <span className="text-lg font-heading w-8 text-center">{quantity}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-border rounded-lg hover:border-accent transition-colors"
                  >
                    +
                  </motion.button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-6 py-3 bg-accent text-white font-heading rounded-lg hover:bg-accent/90 transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={20} />
                  Add to Cart
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="px-6 py-3 border-2 border-border rounded-lg hover:border-accent transition-colors"
                >
                  <Heart
                    size={20}
                    className={isFavorite ? 'fill-accent text-accent' : 'text-foreground'}
                  />
                </motion.button>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-border">
                <div className="flex items-start gap-3">
                  <Truck size={20} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-heading text-sm text-foreground">Free Shipping</p>
                    <p className="text-xs text-muted-foreground">On orders over $200</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield size={20} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-heading text-sm text-foreground">Lifetime Warranty</p>
                    <p className="text-xs text-muted-foreground">On all stitching</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <RotateCcw size={20} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-heading text-sm text-foreground">30-Day Returns</p>
                    <p className="text-xs text-muted-foreground">Satisfaction guaranteed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20 pt-20 border-t border-border"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-8">
              Premium Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 bg-secondary rounded-lg border border-border"
                >
                  <p className="text-foreground">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
