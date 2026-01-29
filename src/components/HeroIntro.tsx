import { motion } from "framer-motion";

export const HeroIntro = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column - Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Name construction */}
            <div className="space-y-2">
              <p className="text-xs tracking-[0.3em] text-cream/60 uppercase">
                MHHW
              </p>
              <p className="text-sm tracking-widest text-cream/80">
                <span className="text-cream/60">is the folio of</span>
              </p>
              <h1 className="font-display text-display-md font-bold text-cream">
                mason
                <span className="text-gold mx-2">[</span>
                <span className="text-cream">HOI HEI</span>
                <span className="text-gold mx-2">]</span>
                wong
                <span className="text-gold">↓</span>
              </h1>
            </div>

            {/* Title */}
            <p className="text-sm tracking-widest text-cream/70">
              <span className="text-cream">visual designer</span>, swimmer
              <br />
              and <span className="text-cream">Porsche fanatic</span>
            </p>
          </motion.div>

          {/* Right Column - Position & Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Current Position */}
            <div className="space-y-2">
              <p className="text-2xl md:text-3xl font-display font-medium text-cream">
                SR VISUAL DESIGN CONSULTANT
              </p>
              <p className="text-lg text-cream/60">
                @ IBM IX
              </p>
              <p className="text-lg text-cream/80 mt-4">
                BASED IN LONDON
              </p>
            </div>

            {/* Mission Statement */}
            <p className="text-base md:text-lg text-cream/70 leading-relaxed max-w-lg">
              I partner with brands, companies and entrepreneurs to transform 
              visions into captivating experiences, all designed with the 
              users at the helm.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <span className="text-xs tracking-[0.2em] text-cream/60">
              [SCROLL<span className="text-gold mx-1">請下去</span>DOWN]
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs tracking-[0.2em] text-cream/60">
              [NICE TO MEET YOU]
            </span>
            <span className="text-gold text-sm">「很高興見到你」</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
