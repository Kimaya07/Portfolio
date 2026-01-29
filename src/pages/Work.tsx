import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

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
      
      {/* Hero Header */}
      <section className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-start gap-8"
          >
            <div>
              <h1 className="font-display text-display-xl font-bold text-cream leading-none">
                WORK
              </h1>
            </div>
            
            {/* Vertical Chinese decoration */}
            <div className="flex flex-col items-center text-gold font-serif mt-4">
              <span className="text-sm">﹁</span>
              <span className="text-xl">作</span>
              <span className="text-xl">品</span>
              <span className="text-xl">集</span>
              <span className="text-sm">﹂</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-cream/70 max-w-2xl mt-8"
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
