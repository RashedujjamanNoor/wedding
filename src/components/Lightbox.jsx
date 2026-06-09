import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Lightbox({
  images,
  currentIndex,
  setCurrentIndex,
  onClose,
}) {
  if (currentIndex === null) return null;

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
    >
      {/* Close */}
      <button className="absolute top-6 right-6 text-white text-3xl">
        <IoClose />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        className="absolute left-6 text-white text-3xl"
      >
        <FaChevronLeft />
      </button>

      {/* Image */}
      <img
        onClick={(e) => e.stopPropagation()}
        src={images[currentIndex]}
        className="max-h-[85vh] max-w-[90vw] object-contain"
      />

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className="absolute right-6 text-white text-3xl"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}
