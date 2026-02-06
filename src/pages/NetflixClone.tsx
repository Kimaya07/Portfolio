import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const NetflixClone = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Back Button */}
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-cream/60 hover:text-cream transition-colors mb-8"
            >
              <span>←</span>
              <span className="text-sm tracking-widest">BACK TO WORK</span>
            </Link>

            {/* Project Title */}
            <h1 className="font-display text-display-lg md:text-display-xl font-bold text-cream mb-4">
              NETFLIX CLONE
            </h1>
            <p className="text-lg text-cream/70 mb-8">
              REACT • FIREBASE • TMDB API
            </p>

            {/* Project Tags */}
            <div className="flex flex-wrap gap-3 mb-12">
              <span className="px-4 py-2 bg-cream/10 text-cream text-xs tracking-widest rounded-full">
                STREAMING PLATFORM
              </span>
              <span className="px-4 py-2 bg-cream/10 text-cream text-xs tracking-widest rounded-full">
                RESPONSIVE DESIGN
              </span>
              <span className="px-4 py-2 bg-cream/10 text-cream text-xs tracking-widest rounded-full">
                AUTHENTICATION
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Image */}
      <section className="px-6 md:px-12 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <div className="relative aspect-video overflow-hidden bg-secondary rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop"
              alt="Netflix Clone Preview"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Project Details */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          {/* Left Column - Overview */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="font-display text-2xl font-bold text-cream mb-6">
                Overview
              </h2>
              <p className="text-base text-cream/70 leading-relaxed mb-4">
                A fully responsive streaming platform clone that replicates Netflix's 
                core functionality. Built with React and Firebase, this project showcases 
                dynamic content browsing, user authentication, and real-time data integration 
                with the TMDB API.
              </p>
              <p className="text-base text-cream/70 leading-relaxed">
                The application features personalized user profiles, secure authentication, 
                and smooth navigation across movie and TV show categories. Every component 
                is optimized for performance and designed to deliver a seamless viewing experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="font-display text-2xl font-bold text-cream mb-6">
                Key Features
              </h2>
              <ul className="space-y-4">
                {[
                  "Responsive UI that adapts seamlessly to all screen sizes",
                  "Firebase authentication with secure user profiles",
                  "Real-time movie and TV show data from TMDB API",
                  "Dynamic content categorization and browsing",
                  "Smooth page transitions and animations",
                  "Optimized performance with code splitting"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-gold mt-1">→</span>
                    <span className="text-base text-cream/70">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="font-display text-2xl font-bold text-cream mb-6">
                Tech Stack
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Frontend", value: "React, Tailwind CSS" },
                  { label: "Backend", value: "MongoDB" },
                  { label: "API", value: "TMDB API" },
                //   { label: "Auth", value: "Firebase Authentication" }
                ].map((tech, index) => (
                  <div key={index} className="p-4 bg-cream/5 rounded-lg">
                    <p className="text-xs text-cream/50 mb-1 tracking-widest">{tech.label}</p>
                    <p className="text-sm text-cream font-medium">{tech.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Additional Images/Screenshots */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <h2 className="font-display text-2xl font-bold text-cream mb-6">
                Screenshots
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-video bg-secondary rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop"
                    alt="Netflix Clone - Homepage"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-video bg-secondary rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&h=600&fit=crop"
                    alt="Netflix Clone - Browse"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Project Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-sm font-bold text-cream mb-4 tracking-widest">
                ROLE
              </h3>
              <p className="text-base text-cream/70">Full-Stack Developer</p>
            </div>

            <div>
              <h3 className="font-display text-sm font-bold text-cream mb-4 tracking-widest">
                DURATION
              </h3>
              <p className="text-base text-cream/70">2 Weeks</p>
            </div>

            <div>
              <h3 className="font-display text-sm font-bold text-cream mb-4 tracking-widest">
                YEAR
              </h3>
              <p className="text-base text-cream/70">2025</p>
            </div>

            <div>
              <h3 className="font-display text-sm font-bold text-cream mb-4 tracking-widest">
                LINKS
              </h3>
              <div className="space-y-3">
                <a
                  href="https://github.com/Kimaya07/Netflix-Clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gold hover:text-cream transition-colors"
                >
                  <span>→</span>
                  <span className="text-sm">GitHub Repository</span>
                </a>
                {/* <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gold hover:text-cream transition-colors"
                >
                  <span>→</span>
                  <span className="text-sm">Live Demo</span>
                </a> */}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Project */}
      {/* <section className="px-6 md:px-12 py-24 border-t border-cream/10">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/work/ai-chatbot"
            className="group flex items-center justify-between hover-lift"
          >
            <div>
              <p className="text-xs tracking-widest text-cream/60 mb-2">NEXT PROJECT</p>
              <h3 className="font-display text-3xl font-bold text-cream group-hover:text-gold transition-colors">
                Real-Time AI Chatbot
              </h3>
            </div>
            <span className="text-4xl text-cream/40 group-hover:text-cream transition-colors">
              →
            </span>
          </Link>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default NetflixClone;