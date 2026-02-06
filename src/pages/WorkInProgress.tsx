import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const WorkInProgress = () => {
  const { slug } = useParams();

  // Convert slug to readable title
  const getProjectTitle = (slug: string | undefined) => {
    if (!slug) return "PROJECT";
    return slug
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <section className="flex-1 flex items-center justify-center px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Japanese decoration */}
            <div className="flex justify-center">
              <div className="flex flex-col items-center text-gold font-serif">
                <span className="text-sm">﹁</span>
                <span className="text-3xl my-2">作</span>
                <span className="text-3xl my-2">業</span>
                <span className="text-3xl my-2">中</span>
                <span className="text-sm">﹂</span>
              </div>
            </div>

            {/* Main Message */}
            <h1 className="font-display text-display-md md:text-display-lg font-bold text-cream">
              WORK IN
              <br />
              <span className="text-gold">PROGRESS</span>
            </h1>

            <p className="text-lg text-cream/70 max-w-md mx-auto">
              {getProjectTitle(slug)} is currently under development. 
              Check back soon to see the full case study.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link
                to="/work"
                className="group inline-flex flex-col items-center hover-lift"
              >
                <span className="text-lg font-display font-medium text-cream border-b-2 border-cream/20 group-hover:border-cream transition-colors pb-1">
                  VIEW ALL WORK
                </span>
                <span className="text-sm text-gold mt-1">
                  全ての作品を見る
                </span>
              </Link>

              <span className="text-cream/40">or</span>

              <Link
                to="/"
                className="group inline-flex flex-col items-center hover-lift"
              >
                <span className="text-lg font-display font-medium text-cream border-b-2 border-cream/20 group-hover:border-cream transition-colors pb-1">
                  BACK TO HOME
                </span>
                <span className="text-sm text-gold mt-1">
                  ホームに戻る
                </span>
              </Link>
            </div>

            {/* Progress Indicator */}
            <div className="pt-12">
              <p className="text-xs tracking-[0.3em] text-cream/40 mb-4">
                [DEVELOPMENT STATUS]
              </p>
              <div className="w-64 h-1 bg-cream/10 mx-auto rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gold"
                  initial={{ width: "0%" }}
                  animate={{ width: "60%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </div>
              <p className="text-xs text-cream/60 mt-2">60% Complete</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkInProgress;