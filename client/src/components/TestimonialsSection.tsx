import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  title: string;
  text: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'James Mitchell',
    title: 'Executive, Fortune 500',
    text: 'Crimson & Obsidian shirts have become my wardrobe staple. The quality is unmatched, and I receive compliments every time I wear them.',
    rating: 5,
  },
  {
    name: 'David Chen',
    title: 'Fashion Entrepreneur',
    text: 'I have tried countless premium brands, but nothing compares to the craftsmanship of Crimson & Obsidian. Worth every penny.',
    rating: 5,
  },
  {
    name: 'Marcus Williams',
    title: 'Attorney',
    text: 'The attention to detail is extraordinary. These shirts look and feel like they were made specifically for me. Highly recommended.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Trusted by Discerning Men
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our satisfied customers who have experienced the Crimson & Obsidian difference.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="p-8 bg-secondary rounded-lg border border-border hover:border-accent/50 transition-colors"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-border">
                <p className="font-heading text-sm font-bold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.title}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 pt-20 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6"
          >
            <div className="font-display text-4xl font-bold text-accent mb-2">
              10K+
            </div>
            <p className="text-muted-foreground">Happy Customers</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6"
          >
            <div className="font-display text-4xl font-bold text-accent mb-2">
              4.9★
            </div>
            <p className="text-muted-foreground">Average Rating</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6"
          >
            <div className="font-display text-4xl font-bold text-accent mb-2">
              9+ Years
            </div>
            <p className="text-muted-foreground">Of Excellence</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
