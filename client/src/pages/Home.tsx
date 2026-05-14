import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { FEATURED_PRODUCTS } from '@/data/products';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedSection from '@/components/FeaturedSection';
import CraftsmanshipSection from '@/components/CraftsmanshipSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <Hero
        image="https://d2xsxph8kpxj0f.cloudfront.net/310519663493750158/a2WmF5jykB4Dohf2AkMVGg/hero-main-PrTbwQ7y36PCnLozQx2jVN.webp"
        title="Crimson & Obsidian"
        subtitle="Luxury Redefined. Craftsmanship Perfected."
        cta="Explore Collection"
      />

      <FeaturedSection
        title="Featured Collection"
        description="Discover our most coveted pieces, meticulously crafted with the finest materials and uncompromising attention to detail."
        products={FEATURED_PRODUCTS}
      />

      <CraftsmanshipSection />

      <TestimonialsSection />

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 sm:py-28 bg-secondary relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4"
          >
            Stay Updated
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground mb-8"
          >
            Subscribe to our newsletter for exclusive collections and early access to new releases.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={(e) => {
              e.preventDefault();
              toast.success('Thank you for subscribing!');
              (e.target as HTMLFormElement).reset();
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-6 py-3 bg-accent text-white font-heading rounded-lg hover:bg-accent/90 transition-colors shadow-lg"
            >
              Subscribe
            </motion.button>
          </motion.form>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
