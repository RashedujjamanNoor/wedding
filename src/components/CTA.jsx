import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-32 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="uppercase tracking-[5px] text-[#C8A96B] mb-4">
          Let's Create Something Beautiful
        </p>

        <h2 className="font-serif text-5xl md:text-7xl mb-8">
          Ready To Tell Your Story?
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          We would love to hear about your wedding plans and create timeless
          memories together.
        </p>

        <button className="bg-[#C8A96B] text-black px-10 py-5 hover:scale-105 transition">
          <Link to="/booking">Book Your Date</Link>
        </button>
      </div>
    </section>
  );
}
