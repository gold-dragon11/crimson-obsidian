import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
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

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pt-32 pb-20 bg-secondary border-b border-border"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl sm:text-6xl font-bold text-foreground mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Crafting excellence since 2015
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* Section 1 */}
          <motion.div variants={itemVariants}>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              The Beginning
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Crimson & Obsidian was founded on a simple principle: that luxury should be defined not by price, but by the uncompromising attention to detail in every stitch, every button, and every fiber. Our founder, inspired by the craftsmanship of European tailoring houses, set out to create shirts that would become heirlooms—pieces that would outlast trends and define their wearer's character.
            </p>
          </motion.div>

          {/* Section 2 */}
          <motion.div variants={itemVariants}>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Our Philosophy
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that true luxury lies in the intersection of tradition and innovation. Each shirt is a dialogue between time-honored tailoring techniques and contemporary design sensibilities. We source only the finest materials—Egyptian cotton Giza 45, premium silk blends, and sustainable linens—ensuring that every garment meets our exacting standards.
            </p>
          </motion.div>

          {/* Section 3 */}
          <motion.div variants={itemVariants}>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Craftsmanship
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our master tailors bring decades of experience to every piece. Precision 2mm stitching, hand-finished seams, and mother-of-pearl buttons are not luxuries—they are standards. Each shirt undergoes rigorous quality control, ensuring that only perfection reaches our clients. We don't just make shirts; we craft experiences.
            </p>
          </motion.div>

          {/* Section 4 */}
          <motion.div variants={itemVariants}>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Sustainability
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Luxury and responsibility go hand in hand. We are committed to sustainable practices throughout our supply chain, from ethical sourcing to eco-friendly production methods. Our packaging is 100% recyclable, and we offset our carbon footprint through verified environmental initiatives. Craftsmanship should never come at the expense of our planet.
            </p>
          </motion.div>

          {/* Section 5 */}
          <motion.div variants={itemVariants}>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Our Commitment
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every customer is a partner in our mission to redefine luxury. We stand behind every shirt with a lifetime warranty on stitching and a 30-day satisfaction guarantee. Your satisfaction is not just our goal—it's our obsession. Welcome to Crimson & Obsidian, where excellence is not an option, it's a promise.
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 pt-20 border-t border-border text-center"
        >
          <h3 className="font-display text-3xl font-bold text-foreground mb-6">
            Ready to Experience Luxury?
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-accent text-white font-heading rounded-lg hover:bg-accent/90 transition-colors shadow-lg"
          >
            Explore Our Collection
          </motion.button>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
