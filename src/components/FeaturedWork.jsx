const works = [
  {
    title: "Royal Wedding",
    category: "Wedding",
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Engagement Moments",
    category: "Pre-Wedding",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Luxury Event",
    category: "Event",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Birthday Celebration",
    category: "Birthday",
    image:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function FeaturedWork() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-[#C8A96B] text-sm">
            Featured Work
          </p>

          <h2 className="font-serif text-4xl md:text-6xl mt-4">
            Moments We Captured
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A selection of our best cinematic wedding and event photography,
            crafted with emotion and storytelling.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {works.map((item, i) => (
            <div key={i} className="relative group overflow-hidden rounded-2xl">
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[450px] object-cover transform group-hover:scale-110 transition duration-700"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-[#C8A96B] text-sm uppercase tracking-widest">
                  {item.category}
                </p>

                <h3 className="text-2xl md:text-3xl font-serif mt-2">
                  {item.title}
                </h3>
              </div>

              {/* Hover border glow */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[#C8A96B] transition rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
