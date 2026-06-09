import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/70 backdrop-blur-lg border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/">
              <h1 className="text-white text-2xl md:text-3xl font-serif tracking-widest">
                ETERNAL
              </h1>
            </NavLink>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-10">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative uppercase tracking-wider text-sm transition duration-300 ${
                      isActive
                        ? "text-[#C8A96B]"
                        : "text-white hover:text-[#C8A96B]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:block">
              <button className="border border-[#C8A96B] px-5 py-2 text-[#C8A96B] hover:bg-[#C8A96B] hover:text-black transition duration-300">
                <a href="/booking">Book Your Date</a>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white text-3xl"
            >
              {open ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black z-40 flex flex-col justify-center items-center"
          >
            <div className="flex flex-col gap-8 text-center">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="text-white text-3xl uppercase tracking-widest hover:text-[#C8A96B] transition"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
