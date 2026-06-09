import { Camera, Video, Plane, Heart } from "lucide-react";

const services = [
  {
    icon: <Camera size={32} />,
    title: "Wedding Photography",
    desc: "Elegant storytelling through timeless imagery.",
  },
  {
    icon: <Video size={32} />,
    title: "Cinematic Films",
    desc: "Beautiful wedding films crafted like movies.",
  },
  {
    icon: <Plane size={32} />,
    title: "Destination Weddings",
    desc: "Capturing love stories around the world.",
  },
  {
    icon: <Heart size={32} />,
    title: "Engagement Sessions",
    desc: "Authentic moments before your big day.",
  },
];

export default function Services() {
  return (
    <section className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[5px] text-[#C8A96B] mb-4">
            Our Services
          </p>

          <h2 className="font-serif text-5xl md:text-6xl">
            Crafted For Every Love Story
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border border-white/10 p-8 hover:border-[#C8A96B] transition duration-500"
            >
              <div className="text-[#C8A96B] mb-6">{service.icon}</div>

              <h3 className="font-serif text-3xl mb-4">{service.title}</h3>

              <p className="text-gray-400 leading-7">{service.desc}</p>

              <button className="mt-8 text-[#C8A96B]">Learn More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
