import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLocation } from 'wouter';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  material: string;
  color: string;
  index?: number;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  material,
  color,
  index = 0,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [, navigate] = useLocation();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    },
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.4 },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.25 },
    },
  };

  const viewBtnVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, delay: 0.05 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer"
      onClick={() => navigate(`/product/${id}`)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-lg mb-4 bg-secondary">
        <motion.div
          variants={imageVariants}
          initial="initial"
          animate={isHovered ? 'hover' : 'initial'}
          className="aspect-square w-full"
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Hover Overlay — single VIEW button */}
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate={isHovered ? 'visible' : 'hidden'}
          className="absolute inset-0 bg-black/50 flex items-center justify-center"
        >
          <motion.button
            variants={viewBtnVariants}
            initial="hidden"
            animate={isHovered ? 'visible' : 'hidden'}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product/${id}`);
            }}
            className="px-8 py-2.5 bg-white text-black font-heading text-xs tracking-[0.2em] uppercase rounded-sm hover:bg-accent hover:text-white transition-colors duration-200 shadow-lg"
          >
            View
          </motion.button>
        </motion.div>

        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-heading">
          ${price}
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-1.5">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.2 }}
          className="font-display text-lg font-bold text-foreground group-hover:text-accent transition-colors"
        >
          {name}
        </motion.h3>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="flex items-center gap-2 text-sm text-muted-foreground"
        >
          <span
            className="inline-block w-3 h-3 rounded-full border border-border/50"
            style={{ backgroundColor: color }}
          />
          <span>{material}</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
