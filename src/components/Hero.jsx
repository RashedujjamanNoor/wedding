import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  const videoId = "zotshy8YzHE";

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          className="
    absolute top-1/2 left-1/2
    w-[100vw]
    h-[56.25vw]
    min-h-[100vh]
    min-w-[177.77vh]
    -translate-x-1/2
    -translate-y-1/2
    pointer-events-none
  "
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&playsinline=1`}
          frameBorder="0"
          allow="autoplay; fullscreen"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="text-center max-w-5xl">
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              uppercase tracking-[4px] md:tracking-[6px]
              text-[#C8A96B]
              text-xs sm:text-sm
              mb-4
            "
          >
            Luxury Wedding Photography
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              font-serif
              text-3xl sm:text-5xl md:text-7xl lg:text-8xl
              leading-tight
            "
          >
            Capturing
            <br />
            Timeless Love Stories
          </motion.h1>

          {/* Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="
              mt-6 md:mt-8
              mx-auto
              max-w-md md:max-w-2xl
              text-gray-300
              text-sm md:text-base
            "
          >
            Elegant wedding photography and cinematic films crafted to preserve
            your most precious memories forever.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="
              mt-8 md:mt-10
              flex flex-col sm:flex-row
              justify-center gap-3 md:gap-4
            "
          >
            <button
              className="
              bg-[#C8A96B]
              px-6 py-3 md:px-8 md:py-4
              text-black
              hover:scale-105 transition
              text-sm md:text-base
            "
            >
              <Link to="/portfolio">Portfolio</Link>
            </button>

            <button
              className="
              border border-white
              px-6 py-3 md:px-8 md:py-4
              hover:bg-white hover:text-black transition
              text-sm md:text-base
            "
            >
              <Link to="/booking">Book Consultation</Link>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
