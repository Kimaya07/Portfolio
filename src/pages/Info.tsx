import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const InfoHero = () => {
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
          {/* I */}
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-[15vw] md:text-[18vw] font-bold text-cream leading-none"
          >
            I
          </motion.span>

          {/* N */}
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-[15vw] md:text-[18vw] font-bold text-cream leading-none"
          >
            N
          </motion.span>

          {/* Chinese Characters Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col items-center text-gold font-serif"
          >
            <span className="text-lg md:text-2xl">﹁</span>
            <span className="text-2xl md:text-4xl my-1">簡</span>
            <span className="text-2xl md:text-4xl my-1">介</span>
            <span className="text-lg md:text-2xl">﹂</span>
          </motion.div>

          {/* F */}
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-display text-[15vw] md:text-[18vw] font-bold text-cream leading-none"
          >
            F
          </motion.span>

          {/* O */}
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="font-display text-[15vw] md:text-[18vw] font-bold text-cream leading-none"
          >
            O
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

const Info = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <InfoHero />

      {/* About Content */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1067&fit=crop"
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-display text-display-sm font-bold text-cream mb-4">
                A <span className="text-gold">[cross-cultural]</span> perspective
              </h2>
              <p className="text-base text-cream/70 leading-relaxed">
                Born in Hong Kong and raised in the English countryside, my design 
                approach is shaped by this unique blend of Eastern and Western 
                influences. This dual perspective allows me to create experiences 
                that resonate across cultural boundaries.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-cream mb-3">
                Currently
              </h3>
              <p className="text-base text-cream/70">
                Senior Visual Design Consultant at IBM iX, based in London.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-cream mb-3">
                Philosophy
              </h3>
              <p className="text-base text-cream/70 leading-relaxed">
                Design to me is a bridge between emotion and function. My goal has 
                always been to elevate everyday interactions into something more 
                meaningful and crucially, quietly threading in moments of joy that 
                catch us by surprise and stay with us for years to come.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-cream mb-3">
                Experience
              </h3>
              <div className="space-y-4">
                {[
                  { role: "Sr Visual Design Consultant", company: "IBM iX", years: "2022 — Present" },
                  { role: "Visual Designer", company: "Publicis Sapient", years: "2020 — 2022" },
                  { role: "UI/UX Designer", company: "Freelance", years: "2018 — 2020" },
                ].map((job, index) => (
                  <div key={index} className="flex justify-between items-start border-b border-cream/10 pb-4">
                    <div>
                      <p className="text-sm font-medium text-cream">{job.role}</p>
                      <p className="text-sm text-cream/50">{job.company}</p>
                    </div>
                    <p className="text-xs text-cream/40">{job.years}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-cream mb-3">
                Get in Touch
              </h3>
              <a 
                href="mailto:hello@masonwong.com" 
                className="text-gold hover:text-cream transition-colors"
              >
                hello@masonwong.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 md:px-12 py-24 bg-cream">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-display-md font-bold text-primary-foreground mb-12"
          >
            Skills & Tools
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { category: "Design", skills: ["Figma", "Sketch", "Adobe CC", "Framer"] },
              { category: "Strategy", skills: ["User Research", "Workshops", "Design Thinking", "Prototyping"] },
              { category: "Development", skills: ["HTML/CSS", "React", "Webflow", "Principle"] },
              { category: "Soft Skills", skills: ["Collaboration", "Storytelling", "Mentoring", "Leadership"] },
            ].map((group, index) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="font-display text-sm font-bold text-primary-foreground mb-4 tracking-widest">
                  {group.category.toUpperCase()}
                </h3>
                <ul className="space-y-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-sm text-primary-foreground/70">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Info;
