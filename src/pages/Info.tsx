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

          {/* Japanese Characters Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col items-center text-gold font-serif"
          >
            <span className="text-lg md:text-2xl">﹁</span>
            <span className="text-2xl md:text-4xl my-1">情</span>
            <span className="text-2xl md:text-4xl my-1">報</span>
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
                src="https://images.unsplash.com/photo-1763152496539-302ef51ef66f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                Where <span className="text-gold">[code]</span> meets creativity
              </h2>
              <p className="text-base text-cream/70 leading-relaxed">
                I'm a full-stack developer based in India with a passion for building
                scalable web applications and immersive 3D experiences. My approach
                combines technical expertise with a designer's eye, ensuring every
                project balances performance with visual appeal.
              </p>
            </div>

            {/* <div>
              <h3 className="font-display text-xl font-bold text-cream mb-3">
                Currently
              </h3>
              <p className="text-base text-cream/70">
                ReactJS Developer Intern at Fareintelligence Pvt Ltd, optimizing
                performance and building responsive UI components.
              </p>
            </div> */}

            <div>
              <h3 className="font-display text-xl font-bold text-cream mb-3">
                Philosophy
              </h3>
              <p className="text-base text-cream/70 leading-relaxed">
                I believe great development is where logic meets creativity. My goal
                is to build applications that not only perform flawlessly but feel
                intuitive and engaging. From responsive interfaces to 3D experiences,
                I focus on making technology accessible and delightful.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-cream mb-3">
                Experience
              </h3>
              <div className="space-y-4">
                {[
                  { 
                    role: "ReactJS Developer", 
                    company: "Fareintelligence Pvt Ltd", 
                    years: "Dec 2024 — Jun 2025" 
                  },
                  { 
                    role: "UI/UX Intern", 
                    company: "Jujubee Digital", 
                    years: "Sep 2024 — Nov 2024" 
                  },
                  { 
                    role: "Web Development Intern", 
                    company: "Prodigy Infotech", 
                    years: "Oct 2023 — Jan 2024" 
                  },
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
                Beyond Code
              </h3>
              <p className="text-base text-cream/70">
                When I'm not debugging code, I'm either grinding through games
                or crafting 3D models in Blender. Currently learning Japanese
                because anime subtitles move too fast.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-cream mb-3">
                Get in Touch
              </h3>
              <a 
                href="mailto:kimayaambekar@gmail.com" 
                className="text-gold hover:text-cream transition-colors"
              >
                kimaya.ambekar1@gmail.com
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
            SKILLS 
           <span className="ml-5 text-sm text-gold ">
             [ 技術スタック ]
            </span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { 
                category: "Frontend", 
                skills: ["React", "TypeScript", "Tailwind CSS", "HTML5/CSS3"] 
              },
              { 
                category: "Backend", 
                skills: ["Node.js", "Python", "Express", "MongoDB"] 
              },
              { 
                category: "Tools", 
                skills: ["Git/GitHub", "Figma", "Postman", "VS Code"] 
              },
              { 
                category: "Creative", 
                skills: ["Blender", "Unity", "3D Modeling", "UI/UX Design"] 
              },
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