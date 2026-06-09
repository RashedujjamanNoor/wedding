import { useState } from "react";

const data = {
  photos: {
    wedding: [
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    ],
    event: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80",
    ],
    birthday: [
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80",
    ],
  },

  videos: {
    wedding: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43f?auto=format&fit=crop&w=1200&q=80",
    ],
    event: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

export default function Portfolio() {
  const [type, setType] = useState("photos"); // photos / videos
  const [category, setCategory] = useState("wedding");

  const items = data[type][category] || [];

  return (
    <section className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-[#C8A96B]">Portfolio</p>
          <h1 className="font-serif text-5xl md:text-6xl mt-4">
            Our Creative Work
          </h1>
        </div>

        {/* TYPE TABS (Photos / Videos) */}
        <div className="flex justify-center gap-4 mb-10">
          {["photos", "videos"].map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`px-6 py-2 border transition ${
                type === t
                  ? "bg-[#C8A96B] text-black"
                  : "border-white/20 text-white"
              }`}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>

        {/* CATEGORY TABS */}
        <div className="flex justify-center gap-4 mb-14 flex-wrap">
          {["wedding", "event", "birthday"].map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-5 py-2 border transition capitalize ${
                category === c
                  ? "bg-white text-black"
                  : "border-white/20 text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="overflow-hidden group">
              <img
                src={item}
                alt=""
                className="w-full h-[350px] object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-75"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
