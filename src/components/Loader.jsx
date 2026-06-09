import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 sec cinematic intro

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Background glow */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            {/* Brand Text */}
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="font-serif text-5xl md:text-7xl text-[#C8A96B]"
            >
              ETERNAL STUDIO
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-gray-400 mt-4 tracking-[6px] uppercase"
            >
              Cinematic Wedding Stories
            </motion.p>

            {/* Loading line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ delay: 0.5, duration: 1.2 }}
              className="h-[2px] bg-[#C8A96B] mx-auto mt-8"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
