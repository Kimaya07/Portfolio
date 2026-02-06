import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "NETFLIX CLONE",
    type: "REACT • FIREBASE • TMDB API",
    image: "https://images.unsplash.com/photo-1512070679279-8988d32161be?q=80&w=1938&auto=format&fit=crop",
    slug: "netflix-clone",
  },
  {
    id: 2,
    title: "REAL-TIME AI CHATBOT",
    type: "REACT • NODE.JS • GEMINI API",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop",
    slug: "ai-chatbot",
  },
];

export const FeaturedProjects = () => {
  return (
    <section className="relative py-24 md:py-40 px-6 md:px-12 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-start gap-8 mb-16"
        >
          <div>
            <h2 className="font-display text-display-lg font-bold text-primary-foreground leading-none">
              FEATURED
            </h2>
            <h2 className="font-display text-display-lg font-bold text-primary-foreground leading-none">
              PROJECTS
            </h2>
          </div>
          
          {/* Vertical Japanese decoration */}
          <div className="flex flex-col items-center text-gold-muted font-serif mt-4">
            <span className="text-sm">﹁</span>
            <span className="text-xl">プ</span>
            <span className="text-xl">ロ</span>
            <span className="text-xl">ジ</span>
            <span className="text-xl">ェ</span>
            <span className="text-xl">ク</span>
            <span className="text-xl">ト</span>
            <span className="text-sm">﹂</span>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <Link
                to={`/work/${project.slug}`}
                className="group block relative overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary-foreground/0 group-hover:bg-primary-foreground/10 transition-colors duration-500" />
                </div>

                {/* Project Info */}
                <div className="mt-6 flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary-foreground/60 mt-1 tracking-widest">
                      {project.type}
                    </p>
                  </div>
                  
                  {/* Arrow */}
                  <motion.span
                    className="text-2xl text-primary-foreground/40 group-hover:text-primary-foreground transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Description & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
        >
          <p className="text-lg text-primary-foreground/70 max-w-xl leading-relaxed">
            Full-stack applications built with modern technologies and best
            practices. From streaming platforms to AI-powered tools, each
            project showcases scalable architecture and polished user experience.
          </p>

          <Link
            to="/work"
            className="group inline-flex flex-col items-start hover-lift"
          >
            <span className="text-lg font-display font-medium text-primary-foreground border-b-2 border-primary-foreground/20 group-hover:border-primary-foreground transition-colors pb-1">
              VIEW ALL WORK
            </span>
            <span className="text-sm text-gold-muted mt-1">
              全ての作品を見る
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};