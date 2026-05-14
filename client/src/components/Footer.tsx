import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
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

  const socialLinks = [
    { icon: Facebook, label: 'Facebook' },
    { icon: Instagram, label: 'Instagram' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Linkedin, label: 'LinkedIn' },
  ];

  const footerLinks = [
    {
      title: 'Shop',
      links: ['All Shirts', 'New Arrivals', 'Collections', 'Sale'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Press', 'Blog'],
    },
    {
      title: 'Support',
      links: ['Contact Us', 'Shipping Info', 'Returns', 'FAQ'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'],
    },
  ];



  return (
    <footer id="contact" className="bg-secondary border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/60 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">C&O</span>
              </div>
              <span className="font-display text-lg font-bold text-foreground">
                Crimson & Obsidian
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Crafting premium men's shirts with uncompromising attention to detail and the finest materials.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.button
                  key={social.label}
                  whileHover={{ scale: 1.1, color: '#8B0000' }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                  className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-accent"
                >
                  <social.icon size={18} />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h3 className="font-heading text-sm uppercase tracking-wider text-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      whileHover={{ x: 4, color: '#8B0000' }}
                      className="text-muted-foreground hover:text-accent transition-colors text-sm"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © 2024 Crimson & Obsidian. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" onClick={(e) => e.preventDefault()} className="text-muted-foreground hover:text-accent transition-colors text-sm">
              Privacy
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-muted-foreground hover:text-accent transition-colors text-sm">
              Terms
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-muted-foreground hover:text-accent transition-colors text-sm">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
