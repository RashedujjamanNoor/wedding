export default function About() {
  return (
    <section className="py-32 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-[#C8A96B]">About Us</p>
          <h1 className="font-serif text-5xl md:text-6xl mt-4">Our Story</h1>
        </div>

        <div className="space-y-8 text-gray-300 leading-8">
          <p>
            We are a luxury wedding photography studio dedicated to capturing
            timeless love stories with cinematic storytelling.
          </p>

          <p>
            Every wedding is unique. We focus on real emotions, natural moments,
            and artistic composition to create unforgettable memories.
          </p>

          <p>
            With years of experience, we have documented hundreds of weddings
            across different cultures and destinations.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-serif text-[#C8A96B]">8+</h3>
            <p className="text-gray-400">Years Experience</p>
          </div>

          <div>
            <h3 className="text-4xl font-serif text-[#C8A96B]">250+</h3>
            <p className="text-gray-400">Weddings Captured</p>
          </div>

          <div>
            <h3 className="text-4xl font-serif text-[#C8A96B]">99%</h3>
            <p className="text-gray-400">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}
