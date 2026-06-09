import { motion } from "framer-motion";

export default function Hero() {
  const videoId = "zotshy8YzHE"; // 👈 replace this

  return (
    <section className="relative h-screen overflow-hidden">
      {/* YouTube Background Video */}
      <iframe
        className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&playsinline=1`}
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="max-w-5xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-4 uppercase tracking-[6px] text-[#C8A96B]"
          >
            Luxury Wedding Photography
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight"
          >
            Capturing
            <br />
            Timeless Love Stories
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mx-auto mt-8 max-w-2xl text-gray-300"
          >
            Elegant wedding photography and cinematic films crafted to preserve
            your most precious memories forever.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-col md:flex-row justify-center gap-4"
          >
            <button className="bg-[#C8A96B] px-8 py-4 text-black font-medium hover:scale-105 transition">
              View Portfolio
            </button>

            <button className="border border-white px-8 py-4 hover:bg-white hover:text-black transition">
              Book Consultation
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="h-12 w-7 rounded-full border border-white flex justify-center">
          <div className="mt-2 h-3 w-1 rounded-full bg-white animate-bounce" />
        </div>
      </div>
    </section>
  );
}
