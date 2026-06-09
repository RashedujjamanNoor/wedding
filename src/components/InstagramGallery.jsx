const images = [
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80",
];

export default function InstagramGallery() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-[#C8A96B] text-sm">
            Instagram Gallery
          </p>

          <h2 className="font-serif text-4xl md:text-6xl mt-4">
            Moments We Share
          </h2>
        </div>

        {/* Artistic Masonry Layout */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, i) => {
            // random height feel using index pattern
            const heights = [
              "h-[250px]",
              "h-[350px]",
              "h-[280px]",
              "h-[420px]",
            ];

            return (
              <div
                key={i}
                className="break-inside-avoid overflow-hidden rounded-xl group"
              >
                <img
                  src={img}
                  alt="gallery"
                  className={`w-full ${heights[i % heights.length]} object-cover transform group-hover:scale-110 transition duration-700`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
