import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h2 className="font-serif text-4xl text-[#C8A96B] mb-4">ETERNAL</h2>
          <p className="text-gray-400 leading-7">
            Luxury wedding photography & cinematic storytelling capturing
            timeless love stories.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>

          <a href="/" className="text-gray-400 hover:text-[#C8A96B]">
            Home
          </a>
          <a href="/portfolio" className="text-gray-400 hover:text-[#C8A96B]">
            Portfolio
          </a>
          <a href="/services" className="text-gray-400 hover:text-[#C8A96B]">
            Services
          </a>
          <a href="/contact" className="text-gray-400 hover:text-[#C8A96B]">
            Contact
          </a>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Get In Touch</h3>

          <p className="text-gray-400">Saidpur, Rangpur, Bangladesh</p>
          <p className="text-gray-400">+880 1765966912</p>
          <p className="text-gray-400">noorrk042@gmail.com</p>

          {/* Social */}
          <div className="flex gap-4 mt-6 text-xl text-gray-400">
            <FaFacebook className="hover:text-[#C8A96B] cursor-pointer" />
            <FaInstagram className="hover:text-[#C8A96B] cursor-pointer" />
            <FaYoutube className="hover:text-[#C8A96B] cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 mt-16 border-t border-white/10 pt-8">
        © {new Date().getFullYear()} Eternal Studio. All rights reserved.
      </div>
    </footer>
  );
}
