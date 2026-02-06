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
              <span className="text-2xl">こ</span>
<span className="text-2xl">ん</span>
<span className="text-2xl">に</span>
<span className="text-2xl">ち</span>
<span className="text-2xl">は</span>
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
    href="https://open.spotify.com/track/3be9ACTxtcL6Zm4vJRUiPG"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col items-start gap-3 hover-lift"
  >
    {/* Vinyl Record with Album Cover on top */}
<div className="relative w-40 h-40">
  {/* Spinning vinyl (behind) */}
  <motion.div
    className="absolute inset-0 w-full h-full rounded-full"
    style={{
      background: 'radial-gradient(circle, #2a2a2a 0%, #1a1a1a 50%, #0a0a0a 100%)',
      boxShadow: 'inset 0 0 30px rgba(0,0,0,0.6), 0 4px 20px rgba(0,0,0,0.4)'
    }}
    animate={{ rotate: 360 }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "linear"
    }}
  >
    {/* Vinyl grooves - multiple concentric circles */}
    {[...Array(12)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full border border-white/8"
        style={{
          inset: `${8 + i * 3}px`,
        }}
      ></div>
    ))}
    
    {/* Center label */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-cream/30 flex items-center justify-center">
      <div className="text-[9px] text-cream/50 font-serif text-center leading-tight">
        <div>YUNG</div>
        <div>KAI</div>
      </div>
    </div>
    
    {/* Center hole */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-black border border-cream/20"></div>
  </motion.div>

  {/* Album Cover (on top, right side middle) */}
  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-24 rounded-xl overflow-hidden shadow-2xl z-10 group-hover:scale-105 transition-transform duration-500">
    <img
      src="https://miro.medium.com/v2/resize:fit:1400/1*NAPGbtZuoDXVlBuNJbyA_w.jpeg"
      alt="Blue - Yung Kai album cover"
      className="w-full h-full object-cover"
    />
  </div>
</div>

    {/* Song Info */}
    <div className="pl-1 mt-2">
      <p className="text-base font-medium text-cream group-hover:text-gold transition-colors">
        Blue
      </p>
      <p className="text-sm text-cream/60">
        Yung Kai
      </p>
    </div>
  </a>
  <p className="text-xs text-cream/40">
    [YUNG KAI - BLUE]
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
              href="https://linkedin.com/in/kimayaa1234"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-cream/60 hover:text-cream transition-colors"
            >
              <span className="text-lg">→</span>
              <span className="text-sm tracking-widest">LINKEDIN</span>
            </a>
            <a
              href="https://mail.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-cream/60 hover:text-cream transition-colors"
            >
              <span className="text-lg">→</span>
              <span className="text-sm tracking-widest">EMAIL</span>
            </a>
          </div>

          {/* Center - Copyright */}
          <div className="text-center">
            <p className="text-xs tracking-[0.2em] text-cream/40">
              [KIM © {currentYear}]
            </p>
            <p className="text-xs text-cream/30 mt-2">
              [KIMAYA AMBEKAR]
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
