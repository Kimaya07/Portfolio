import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState, useEffect } from "react";

const Coboard = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const screenshots = [
    { src: "/Coboard1.png", alt: "Coboard - Whiteboard View" },
    { src: "/Coboard2.png", alt: "Coboard - Blackboard View" },
  ];

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
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-cream/60 hover:text-cream transition-colors mb-8"
            >
              <span>←</span>
              <span className="text-sm tracking-widest">BACK TO WORK</span>
            </Link>

            <h1 className="font-display text-display-lg md:text-display-xl font-bold text-cream mb-4">
              COBOARD
            </h1>
            <p className="text-lg text-cream/70 mb-8">
              REACT • NODE.JS • SOCKET.IO • CANVAS API
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <span className="px-4 py-2 bg-cream/10 text-cream text-xs tracking-widest rounded-full">
                REAL-TIME COLLABORATION
              </span>
              <span className="px-4 py-2 bg-cream/10 text-cream text-xs tracking-widest rounded-full">
                WEBSOCKETS
              </span>
              <span className="px-4 py-2 bg-cream/10 text-cream text-xs tracking-widest rounded-full">
                CANVAS DRAWING
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
              src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&h=800&fit=crop"
              alt="Coboard Preview"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Project Details */}
      <section className="px-6 md:px-12 pb-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">

          {/* Left Column */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="font-display text-2xl font-bold text-cream mb-6">Overview</h2>
              <p className="text-base text-cream/70 leading-relaxed mb-4">
                Coboard is a real-time collaborative whiteboard where multiple users
                can draw together on a shared canvas simultaneously. It features a
                clean, minimal interface with a full drawing toolkit — pen, eraser,
                color palette, adjustable brush size, undo/redo, clear canvas, and
                canvas download.
              </p>
              <p className="text-base text-cream/70 leading-relaxed">
                Built with a fully separated client/server architecture — the React
                frontend handles all canvas rendering via the HTML5 Canvas API, while
                a dedicated Node.js + Socket.io server manages WebSocket connections
                and broadcasts drawing events to all connected users in real time.
                The backend is deployed on Render.com and the frontend on Netlify.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="font-display text-2xl font-bold text-cream mb-6">Key Features</h2>
              <ul className="space-y-4">
                {[
                  "Real-time multi-user drawing — see everyone's strokes instantly via Socket.io",
                  "Freehand pen tool and eraser with adjustable brush size slider",
                  "8-color palette for expressive drawing",
                  "Undo and redo support to fix mistakes without losing progress",
                  "Clear canvas and download canvas as an image",
                  "Live connected user count and connection status indicator",
                  "Dark mode toggle for comfortable use in any lighting",
                  "Separate client/server architecture — frontend on Netlify, backend on Render.com",
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
              <h2 className="font-display text-2xl font-bold text-cream mb-6">Tech Stack</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Frontend", value: "React, Canvas API, Tailwind CSS" },
                  { label: "Backend", value: "Node.js, Socket.io" },
                  { label: "Protocol", value: "WebSockets" },
                  { label: "Deployment", value: "Netlify + Render.com" },
                ].map((tech, index) => (
                  <div key={index} className="p-4 bg-cream/5 rounded-lg">
                    <p className="text-xs text-cream/50 mb-1 tracking-widest">{tech.label}</p>
                    <p className="text-sm text-cream font-medium">{tech.value}</p>
                  </div>
                ))}
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
              <h3 className="font-display text-sm font-bold text-cream mb-4 tracking-widest">ROLE</h3>
              <p className="text-base text-cream/70">Full-Stack Developer</p>
            </div>
            <div>
              <h3 className="font-display text-sm font-bold text-cream mb-4 tracking-widest">DURATION</h3>
              <p className="text-base text-cream/70">2 Days</p>
            </div>
            <div>
              <h3 className="font-display text-sm font-bold text-cream mb-4 tracking-widest">YEAR</h3>
              <p className="text-base text-cream/70">2026</p>
            </div>
            <div>
              <h3 className="font-display text-sm font-bold text-cream mb-4 tracking-widest">LINKS</h3>
              <div className="space-y-3">
                <a
                  href="https://coboard-realtime-whiteboard.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gold hover:text-cream transition-colors"
                >
                  <span>→</span>
                  <span className="text-sm">Live Demo</span>
                </a>
                <a
                  href="https://github.com/Kimaya07/Coboard-realtime-whiteboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gold hover:text-cream transition-colors"
                >
                  <span>→</span>
                  <span className="text-sm">GitHub Repository</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Screenshots - outside grid, full width */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="font-display text-2xl font-bold text-cream mb-6">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {screenshots.map((img, index) => (
                <div
                  key={index}
                  className="aspect-video bg-black rounded-lg overflow-hidden cursor-zoom-in"
                  onClick={() => setLightbox(img.src)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
            <p className="text-xs text-cream/30 tracking-widest mt-4">
              CLICK TO ENLARGE
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <motion.img
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={lightbox}
            alt="Fullscreen preview"
            className="max-w-full max-h-[90vh] rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-6 right-8 text-white/60 hover:text-white text-4xl font-light transition-colors"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
          <p className="absolute bottom-6 text-white/30 text-xs tracking-widest">
            CLICK ANYWHERE TO CLOSE
          </p>
        </motion.div>
      )}

      <Footer />
    </div>
  );
};

export default Coboard;