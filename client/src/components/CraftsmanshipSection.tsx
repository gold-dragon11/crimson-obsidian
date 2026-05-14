import { motion } from 'framer-motion';
import { Zap, Award, Leaf, Sparkles } from 'lucide-react';

export default function CraftsmanshipSection() {
  const features = [
    {
      icon: Award,
      title: 'Premium Materials',
      description: 'Egyptian cotton Giza 45 and finest silk blends sourced globally.',
    },
    {
      icon: Zap,
      title: 'Precision Stitching',
      description: '2mm precision stitching ensures exquisite sharpness and durability.',
    },
    {
      icon: Leaf,
      title: 'Sustainable',
      description: 'Eco-conscious production with minimal environmental impact.',
    },
    {
      icon: Sparkles,
      title: 'Timeless Design',
      description: 'Classic cuts that transcend trends and seasons.',
    },
  ];

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

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-secondary relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Craftsmanship Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every shirt is a masterpiece of precision, quality, and timeless elegance.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group p-6 rounded-lg bg-card hover:bg-card/80 transition-colors border border-border hover:border-accent/50"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors"
                >
                  <Icon size={24} className="text-accent" />
                </motion.div>

                {/* Title */}
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>

                {/* Decorative Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-px bg-accent/30 mt-4 origin-left"
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            "Craftsmanship is not just about making something. It's about making something right."
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToAbout}
            className="px-8 py-3 bg-accent text-white font-heading rounded-lg hover:bg-accent/90 transition-colors shadow-lg"
          >
            Learn Our Story
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
