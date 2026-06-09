const services = [
  {
    title: "Basic Wedding Package",
    price: "৳25,000",
    team: "1 Photographer + 1 Cinematographer",
    equipment: [
      "Canon / Sony Full Frame Camera",
      "50mm + 24-70mm Lens",
      "Basic Lighting Kit",
    ],
    benefits: [
      "Full wedding day coverage",
      "Basic cinematic video editing",
      "150–250 edited photos",
      "Online delivery",
    ],
  },
  {
    title: "Standard Wedding Package",
    price: "৳45,000",
    team: "2 Photographers + 1 Cinematographer",
    equipment: [
      "Sony A7 III / A7 IV",
      "24-70mm + 85mm Prime Lens",
      "Professional LED Lighting",
      "Gimbal Stabilizer",
    ],
    benefits: [
      "Full day coverage",
      "Cinematic highlight film",
      "300–500 edited photos",
      "Drone shots (selected moments)",
      "Premium color grading",
    ],
  },
  {
    title: "Premium Wedding Package",
    price: "৳75,000",
    team: "2 Photographers + 2 Cinematographers",
    equipment: [
      "Sony A7S III (Low light specialist)",
      "DJI Ronin Gimbal",
      "Drone (DJI Mini / Air Series)",
      "Professional Audio Recorder",
      "Cinema-grade lighting setup",
    ],
    benefits: [
      "Full cinematic storytelling",
      "Wedding film (3–7 min)",
      "Full ceremony coverage",
      "500–800 edited photos",
      "Slow motion + drone shots",
      "Luxury color grading",
    ],
  },
  {
    title: "Destination Luxury Package",
    price: "৳1,20,000+",
    team: "Full Crew (2 Photographers + 2 Cinematographers + Assistants)",
    equipment: [
      "Cinema Cameras (Sony FX Series)",
      "Drone + Gimbal System",
      "Multi-camera setup",
      "Professional lighting kit",
      "External audio + backup systems",
    ],
    benefits: [
      "International / destination coverage",
      "Luxury cinematic film",
      "Full storytelling production",
      "Premium album design",
      "Trailer + highlight video",
      "Full planning support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="py-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[5px] text-[#C8A96B]">
            Wedding Packages (Bangladesh)
          </p>

          <h1 className="font-serif text-5xl md:text-6xl mt-4">
            Professional Wedding Production Setup
          </h1>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            We use professional cinematic equipment and experienced crew to
            capture your wedding in the highest quality.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((item, i) => (
            <div
              key={i}
              className="border border-white/10 p-10 hover:border-[#C8A96B] transition"
            >
              <h3 className="font-serif text-3xl mb-2">{item.title}</h3>

              <p className="text-[#C8A96B] text-2xl font-semibold mb-2">
                {item.price}
              </p>

              <p className="text-gray-400 mb-4">👥 {item.team}</p>

              {/* Equipment */}
              <div className="mb-6">
                <h4 className="text-white mb-2 font-semibold">🎥 Equipment</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  {item.equipment.map((e, index) => (
                    <li key={index}>• {e}</li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-white mb-2 font-semibold">✅ Benefits</h4>
                <ul className="space-y-2 text-gray-300">
                  {item.benefits.map((b, index) => (
                    <li key={index}>• {b}</li>
                  ))}
                </ul>
              </div>

              <button className="mt-8 bg-[#C8A96B] text-black px-6 py-3 hover:scale-105 transition">
                বুক করুন (Book Now)
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
