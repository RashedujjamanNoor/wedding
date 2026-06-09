export default function AboutStudio() {
  return (
    <section className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Photographer"
              className="w-full h-[700px] object-cover"
            />

            <div className="absolute -bottom-8 -right-8 bg-[#C8A96B] text-black p-8">
              <h3 className="text-4xl font-bold">8+</h3>
              <p>Years Experience</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="uppercase tracking-[5px] text-[#C8A96B] mb-4">
              About The Studio
            </p>

            <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">
              Creating timeless memories through elegant storytelling.
            </h2>

            <p className="text-gray-400 leading-8 mb-6">
              We believe wedding photography is more than taking pictures. It is
              about preserving emotions, laughter, tears, and the beautiful
              moments that become family history.
            </p>

            <p className="text-gray-400 leading-8 mb-10">
              For over eight years, we have documented love stories with an
              artistic and cinematic approach, creating imagery that remains
              beautiful for generations.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-4xl font-serif text-[#C8A96B]">250+</h3>
                <p className="text-gray-400 mt-2">Weddings Captured</p>
              </div>

              <div>
                <h3 className="text-4xl font-serif text-[#C8A96B]">50+</h3>
                <p className="text-gray-400 mt-2">Destination Events</p>
              </div>

              <div>
                <h3 className="text-4xl font-serif text-[#C8A96B]">12</h3>
                <p className="text-gray-400 mt-2">Industry Awards</p>
              </div>

              <div>
                <h3 className="text-4xl font-serif text-[#C8A96B]">99%</h3>
                <p className="text-gray-400 mt-2">Happy Couples</p>
              </div>
            </div>

            <button className="bg-[#C8A96B] text-black px-8 py-4 hover:scale-105 transition">
              Meet Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
