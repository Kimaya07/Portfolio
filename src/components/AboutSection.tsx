import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const AboutSection = () => {
  return (
    <section className="relative py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* First Block - Cultural Background */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-32"
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
            
            {/* Vertical Chinese decoration */}
            <div className="flex flex-col items-center text-gold font-serif mt-4">
              <span className="text-sm">﹁</span>
              <span className="text-xl">簡</span>
              <span className="text-xl">介</span>
              <span className="text-sm">﹂</span>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <p className="text-display-sm font-display text-cream leading-tight">
              A <span className="text-gold">[cross-cultural]</span> perspective shaped
              <br />
              by Hong Kong roots and
              <br />
              An English countryside upbringing
            </p>

            <p className="text-base text-cream/70 leading-relaxed max-w-lg">
              A design approach led by curiosity, emotion, and empathy.
              All digital experiences created are crafted to be intuitive, 
              meaningful, and quietly delightful.
            </p>

            <Link
              to="/info"
              className="group inline-flex flex-col items-start hover-lift"
            >
              <span className="text-lg font-display font-medium text-cream border-b-2 border-cream/20 group-hover:border-cream transition-colors pb-1">
                READ MY STORY
              </span>
              <span className="text-sm text-gold mt-1">
                讀我的故事
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Second Block - Philosophy with Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Vertical Chinese decoration */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center text-gold font-serif">
              <span className="text-sm">﹁</span>
              <span className="text-lg">技</span>
              <span className="text-lg">術</span>
              <span className="text-sm">﹂</span>
            </div>
          </div>

          {/* Large Image */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-secondary">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&h=700&fit=crop"
              alt="Workspace"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>

          {/* Title & Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h3 className="font-display text-display-md font-bold text-cream leading-tight">
                Quietly powerful
                <br />
                <span className="font-serif italic text-gold">Digital Experiences</span>
              </h3>
            </div>

            <div className="space-y-6">
              <p className="text-base text-cream/70 leading-relaxed">
                Design to me is a bridge between emotion and function. 
                My goal has always been to elevate everyday interactions 
                into something more meaningful and crucially, quietly 
                threading in moments of joy that catch us by surprise 
                and stay with us for years to come.
              </p>

              <Link
                to="/info"
                className="group inline-flex flex-col items-start hover-lift"
              >
                <span className="text-lg font-display font-medium text-cream border-b-2 border-cream/20 group-hover:border-cream transition-colors pb-1">
                  READ MY STORY
                </span>
                <span className="text-sm text-gold mt-1">
                  讀我的故事
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
