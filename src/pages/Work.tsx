import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const WorkHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(150,30%,10%)] to-background">
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

      {/* Large Letter Display */}
      <div className="relative z-10 w-full px-4">
        <div className="flex items-center justify-center gap-4 md:gap-8">
          {/* W */}
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-[15vw] md:text-[18vw] font-bold text-cream leading-none"
          >
            W
          </motion.span>

          {/* O */}
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-[15vw] md:text-[18vw] font-bold text-cream leading-none"
          >
            O
          </motion.span>

          {/* Chinese Characters Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col items-center text-gold font-serif"
          >
            <span className="text-lg md:text-2xl">﹁</span>
            <span className="text-2xl md:text-4xl my-1">作</span>
            <span className="text-2xl md:text-4xl my-1">品</span>
            <span className="text-2xl md:text-4xl my-1">集</span>
            <span className="text-lg md:text-2xl">﹂</span>
          </motion.div>

          {/* R */}
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-display text-[15vw] md:text-[18vw] font-bold text-cream leading-none"
          >
            R
          </motion.span>

          {/* K */}
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="font-display text-[15vw] md:text-[18vw] font-bold text-cream leading-none"
          >
            K
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

const allProjects = [
  {
    id: 1,
    title: "LIVERPOOL FC",
    type: "MOBILE APP",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop",
    slug: "liverpool-fc",
  },
  {
    id: 2,
    title: "THE NORWEGIAN CAPSULE",
    type: "RESPONSIVE WEB",
    category: "Web",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop",
    slug: "norwegian-capsule",
  },
  {
    id: 3,
    title: "FINTECH DASHBOARD",
    type: "WEB APPLICATION",
    category: "Web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    slug: "fintech-dashboard",
  },
  {
    id: 4,
    title: "WELLNESS APP",
    type: "MOBILE APP",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop",
    slug: "wellness-app",
  },
  {
    id: 5,
    title: "E-COMMERCE PLATFORM",
    type: "RESPONSIVE WEB",
    category: "Web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    slug: "ecommerce-platform",
  },
  {
    id: 6,
    title: "TRAVEL COMPANION",
    type: "MOBILE APP",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=800&fit=crop",
    slug: "travel-companion",
  },
];

const Work = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WorkHero />
      
      {/* Content Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg text-cream/70 max-w-2xl mb-16"
          >
            A curated collection of digital experiences, crafted with intention 
            and designed to create meaningful connections.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <Link
                  to={`/work/${project.slug}`}
                  className="group block relative overflow-hidden"
                >
                  {/* Project Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />
                  </div>

                  {/* Project Info */}
                  <div className="mt-6 flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-cream">
                        {project.title}
                      </h3>
                      <p className="text-sm text-cream/60 mt-1 tracking-widest">
                        {project.type}
                      </p>
                    </div>
                    
                    {/* Arrow */}
                    <motion.span
                      className="text-2xl text-cream/40 group-hover:text-cream transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      →
                    </motion.span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;
