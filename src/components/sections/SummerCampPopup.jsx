import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { X, Sparkles, Rocket, Gamepad2, Brain, Palette, Music, Video, Code, Star, Calendar, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SummerCampPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative max-w-lg w-full bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-500 rounded-3xl p-8 text-white overflow-hidden shadow-2xl"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-yellow-300/20 rounded-full blur-3xl" />
            <div className="absolute top-10 left-10 w-4 h-4 bg-yellow-300 rounded-full animate-pulse" />
            <div className="absolute bottom-20 right-10 w-3 h-3 bg-pink-300 rounded-full animate-bounce" />
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              Summer 2025 Registration Open
            </motion.div>

            <motion.h2
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-heading font-bold mb-4 leading-tight"
            >
              Soar AI Summer Camp for Kids
            </motion.h2>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-white/90 mb-6 leading-relaxed"
            >
              Transform your child's screen time into creation time! Ages 5-16 learn to build apps, create AI art, make music, and code their imagination into reality.
            </motion.p>

            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {["AI & Coding", "Game Design", "Digital Art", "Music Creation"].map((tag) => (
                <span key={tag} className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-3"
            >
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-white/90 rounded-full font-bold shadow-lg group"
                onClick={() => {
                  navigate("/summer-camp");
                  setIsOpen(false);
                }}
              >
                Enroll Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/50 text-white hover:bg-white/20 rounded-full bg-transparent"
                onClick={() => setIsOpen(false)}
              >
                Maybe Later
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xs text-white/60 mt-4 flex items-center gap-1"
            >
              <Calendar className="w-3 h-3" />
              Limited spots available • July 15 - August 30, 2025
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
