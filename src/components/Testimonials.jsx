import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const testimonials = [
  {
    name: "Rahim & Nabila",
    text: "They captured our wedding so beautifully. Every moment feels like a movie. Highly recommended!",
    event: "Wedding Client",
  },
  {
    name: "Arif Hossain",
    text: "Professional team with amazing cinematic skills. The video quality exceeded expectations.",
    event: "Wedding Film",
  },
  {
    name: "Sadia Islam",
    text: "Best photography experience ever! The team was very friendly and creative.",
    event: "Engagement Shoot",
  },
  {
    name: "Tanvir & Meher",
    text: "Our wedding album looks like a luxury film storyboard. Truly cinematic work!",
    event: "Premium Wedding",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-[#C8A96B] text-sm">
            Testimonials
          </p>

          <h2 className="font-serif text-4xl md:text-6xl mt-4">
            What Clients Say
          </h2>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="p-8 border border-white/10 rounded-2xl bg-[#0a0a0a] hover:border-[#C8A96B] transition h-full">
                {/* Quote */}
                <p className="text-gray-300 leading-7">“{item.text}”</p>

                {/* Name */}
                <h4 className="mt-6 text-white font-serif text-xl">
                  {item.name}
                </h4>

                {/* Event type */}
                <p className="text-[#C8A96B] text-sm mt-1">{item.event}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
