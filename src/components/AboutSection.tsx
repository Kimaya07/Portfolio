import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const AboutSection = () => {
  return (
    <section className="relative py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Single Block - Developer Background */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24"
        >
          {/* Left - Header */}
          <div className="flex items-start gap-6">
            <div>
              <h2 className="font-display text-display-lg font-bold text-cream leading-none">
                IN
              </h2>
              <h2 className="font-display text-display-lg font-bold text-cream leading-none">
                FO
              </h2>
            </div>
            
            {/* Vertical Japanese decoration */}
            <div className="flex flex-col items-center text-gold font-serif mt-4">
              <span className="text-sm">﹁</span>
              <span className="text-xl">開</span>
              <span className="text-xl">発</span>
              <span className="text-sm">﹂</span>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <p className="text-display-sm font-display text-cream leading-tight">
              A <span className="text-gold">[full-stack developer]</span> with
              <br />
              a designer's eye and
              <br />
              a passion for immersive experiences
            </p>

            <p className="text-base text-cream/70 leading-relaxed max-w-lg">
              I build scalable web applications and 3D experiences that balance
              technical performance with visual appeal. Every project is crafted
              with clean architecture and intuitive interfaces.
            </p>

            <Link
              to="/info"
              className="group inline-flex flex-col items-start hover-lift"
            >
              <span className="text-lg font-display font-medium text-cream border-b-2 border-cream/20 group-hover:border-cream transition-colors pb-1">
                READ MY STORY
              </span>
              <span className="text-sm text-gold mt-1">
                私のストーリーを読む
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};