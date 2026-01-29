import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const sideProjects = [
  {
    id: 1,
    title: "PHOTOGRAPHY",
    description: "Capturing moments through a different lens",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "SWIMMING",
    description: "Finding peace in the water, one lap at a time",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "AUTOMOTIVE",
    description: "The art of engineering and design in motion",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
  },
];

const Side = () => {
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
              <h1 className="font-display text-display-lg font-bold text-cream leading-none">
                ON THE
              </h1>
              <h1 className="font-display text-display-xl font-bold text-cream leading-none">
                SIDE
              </h1>
            </div>
            
            {/* Vertical Chinese decoration */}
            <div className="flex flex-col items-center text-gold font-serif mt-4">
              <span className="text-sm">﹁</span>
              <span className="text-xl">副</span>
              <span className="text-xl">業</span>
              <span className="text-sm">﹂</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-cream/70 max-w-2xl mt-8"
          >
            Beyond the screen, these are the passions that inspire my creativity 
            and keep me grounded.
          </motion.p>
        </div>
      </section>

      {/* Side Projects Grid */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sideProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group"
              >
                {/* Project Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary mb-6">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />
                </div>

                {/* Project Info */}
                <h3 className="font-display text-xl font-bold text-cream">
                  {project.title}
                </h3>
                <p className="text-sm text-cream/60 mt-2">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="px-6 md:px-12 py-24 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif italic text-display-sm text-cream/80"
          >
            "The details are not the details. They make the design."
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sm text-cream/50 mt-6"
          >
            — Charles Eames
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Side;
