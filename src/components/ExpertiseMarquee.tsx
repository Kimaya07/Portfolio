import { motion } from "framer-motion";

const services = [
  "REACT DEVELOPMENT",
  "FULL-STACK ENGINEERING",
  "3D WEB EXPERIENCES",
  "RESPONSIVE UI/UX",
  "API INTEGRATION",
  "PERFORMANCE OPTIMIZATION",
];

const MarqueeRow = ({ reverse = false }: { reverse?: boolean }) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap py-3 md:py-4">
      <motion.div
        className={`flex gap-8 md:gap-16 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
      >
        {[...services, ...services, ...services, ...services].map((service, index) => (
          <span
            key={index}
            className="text-display-sm md:text-display-md font-display font-bold text-cream/10 hover:text-cream/30 transition-colors duration-500"
          >
            {service}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export const ExpertiseMarquee = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Header */}
      <div className="px-6 md:px-12 mb-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] text-cream/60 text-center"
        >
          [技術スタック & サービス]
        </motion.p>
      </div>

      {/* Marquee Rows */}
      <div className="space-y-0">
        <MarqueeRow />
        <MarqueeRow reverse />
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>

      {/* Tagline */}
      <div className="px-6 md:px-12 mt-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] text-cream/60 text-center"
        >
          [好奇心に駆られ、洞察によって形作られる]
        </motion.p>
      </div>
    </section>
  );
};