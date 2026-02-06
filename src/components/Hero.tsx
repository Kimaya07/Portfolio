import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background - Dark forest gradient with subtle movement */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(150,30%,10%)] to-background">
        {/* Vertical curtain effect */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 bottom-0 w-[5%] bg-gradient-to-b from-transparent via-[hsl(150,20%,15%)] to-transparent"
              style={{ left: `${i * 5}%` }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Large Letter Display - KIM AYA */}
      <div className="relative z-10 w-full">
        <div className="flex items-center justify-center gap-4 md:gap-8">
          {/* K */}
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-[15vw] md:text-[18vw] font-bold text-cream leading-none"
          >
            K
          </motion.span>

          {/* I */}
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-[15vw] md:text-[18vw] font-bold text-cream leading-none"
          >
            I
          </motion.span>

          {/* M */}
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-display text-[15vw] md:text-[18vw] font-bold text-cream leading-none"
          >
            M
          </motion.span>

          {/* Chinese Characters Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col items-center text-gold font-serif"
          >
            <span className="text-lg md:text-2xl">﹁</span>
            <span className="text-2xl md:text-4xl my-1">貴</span>
            <span className="text-2xl md:text-4xl my-1">摩</span>
            <span className="text-2xl md:text-4xl my-1">耶</span>
            <span className="text-lg md:text-2xl">﹂</span>
          </motion.div>

          {/* A */}
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="font-display text-[15vw] md:text-[18vw] font-bold text-cream leading-none"
          >
            A
          </motion.span>

          {/* Y */}
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="font-display text-[15vw] md:text-[18vw] font-bold text-cream leading-none"
          >
            Y
          </motion.span>

          {/* A */}
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="font-display text-[15vw] md:text-[18vw] font-bold text-cream leading-none"
          >
            A
          </motion.span>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-cream/60 to-transparent"
        />
      </motion.div>
    </section>
  );
};