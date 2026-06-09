import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black/90 backdrop-blur-lg border-t border-white/10 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div>
          <h4 className="text-white font-serif text-lg">
            Ready to book your wedding?
          </h4>
          <p className="text-gray-400 text-sm">
            Check availability for your date now
          </p>
        </div>

        <a
          href="/contact"
          className="bg-[#C8A96B] text-black px-6 py-3 font-semibold hover:scale-105 transition"
        >
          <Link to="/booking">Check Availability</Link>
        </a>
      </div>
    </div>
  );
}
