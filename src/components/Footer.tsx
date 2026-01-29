import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-24 md:py-40 px-6 md:px-12 overflow-hidden">
      {/* Background Image - subtle */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=800&fit=crop&q=60"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 mb-24"
        >
          <div className="flex items-start gap-6">
            {/* Main Text */}
            <div>
              <h2 className="font-display text-display-lg md:text-display-xl font-bold text-cream leading-none">
                COME
              </h2>
              <h2 className="font-serif italic text-display-md md:text-display-lg text-gold leading-none my-2">
                say
              </h2>
              <h2 className="font-display text-display-lg md:text-display-xl font-bold text-cream leading-none">
                HELLO
              </h2>
            </div>

            {/* Vertical Chinese */}
            <div className="flex flex-col items-center text-gold font-serif mt-4">
              <span className="text-sm">﹁</span>
              <span className="text-2xl">你</span>
              <span className="text-2xl">好</span>
              <span className="text-sm">﹂</span>
            </div>
          </div>

          {/* Currently on Repeat */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-xs tracking-[0.2em] text-cream/60">
              [CURRENTLY ON REPEAT]
            </p>
            <a
              href="https://open.spotify.com/track/19yMYXxG3gtIbKxOpQo9vL"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 hover-lift"
            >
              <div className="w-16 h-16 bg-secondary overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=100&h=100&fit=crop"
                  alt="Album cover"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-cream group-hover:text-gold transition-colors">
                  Mean It In The Morning
                </p>
                <p className="text-xs text-cream/60">
                  Loyle Carner
                </p>
              </div>
            </a>
            <p className="text-xs text-cream/40">
              [LC - MEAN IT IN THE MORNING]
            </p>
          </motion.div>
        </motion.div>

        {/* Social Links & Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pt-12 border-t border-cream/10"
        >
          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-cream/60 hover:text-cream transition-colors"
            >
              <span className="text-lg">→</span>
              <span className="text-sm tracking-widest">LINKEDIN</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-cream/60 hover:text-cream transition-colors"
            >
              <span className="text-lg">→</span>
              <span className="text-sm tracking-widest">INSTAGRAM</span>
            </a>
          </div>

          {/* Center - Copyright */}
          <div className="text-center">
            <p className="text-xs tracking-[0.2em] text-cream/40">
              [MHHW © {currentYear}]
            </p>
            <p className="text-xs text-cream/30 mt-2">
              [MASON WONG]
            </p>
            <p className="text-xs text-cream/30">
              [COPYRIGHT {currentYear}]
            </p>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="text-xs tracking-widest text-cream/40 hover:text-cream transition-colors"
          >
            Back to top ↑
          </button>
        </motion.div>
      </div>
    </footer>
  );
};
