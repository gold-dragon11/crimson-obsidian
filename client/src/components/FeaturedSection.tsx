import { motion } from 'framer-motion';
import { toast } from 'sonner';
import ProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  material: string;
  color: string;
}

interface FeaturedSectionProps {
  title: string;
  description: string;
  products: Product[];
}

export default function FeaturedSection({
  title,
  description,
  products,
}: FeaturedSectionProps) {
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
    <section id="shop" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
              {title}
            </h2>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            variants={itemVariants}
            className="w-16 h-1 bg-accent mx-auto mt-6"
          />
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              {...product}
              index={index}
            />
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => toast.info('Full catalog coming soon')}
            className="px-8 py-3 bg-accent text-white font-heading rounded-lg hover:bg-accent/90 transition-colors shadow-lg"
          >
            View All Collections
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
