import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "WORK", path: "/work" },
  { name: "ON THE SIDE", path: "/side" },
  { name: "INFO", path: "/info" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Desktop Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12">
        <nav className="flex items-start justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-display text-sm font-medium tracking-widest text-cream hover:text-gold transition-colors"
          >
            MHHW
          </Link>

          {/* Center Nav Links - Desktop */}
          <ul className="hidden md:flex flex-col items-start gap-1 text-xs tracking-widest">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`flex items-center gap-2 transition-colors hover:text-gold ${
                    location.pathname === link.path ? "text-cream" : "text-cream/60"
                  }`}
                >
                  {location.pathname === link.path && (
                    <span className="w-1 h-1 bg-cream rounded-full" />
                  )}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Year - Desktop */}
          <span className="hidden md:block text-xs tracking-widest text-cream/60">
            [{currentYear}]
          </span>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span 
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
              className="w-6 h-0.5 bg-cream block"
            />
            <motion.span 
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="w-6 h-0.5 bg-cream block"
            />
            <motion.span 
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
              className="w-6 h-0.5 bg-cream block"
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-display-sm font-display tracking-wider transition-colors hover:text-gold ${
                      location.pathname === link.path ? "text-cream" : "text-cream/60"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xs tracking-widest text-cream/40 mt-8"
              >
                [{currentYear}]
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
