import { useState } from "react";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    service: "Wedding Photography",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
New Booking Inquiry:
Name: ${form.name}
Email: ${form.email}
Date: ${form.date}
Service: ${form.service}
Message: ${form.message}
    `;

    const phone = "8801XXXXXXXXX";

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank",
    );
  };

  return (
    <section className="py-32 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[5px] text-[#C8A96B]">Booking</p>
          <h1 className="font-serif text-5xl md:text-6xl mt-4">
            Check Availability
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-4 bg-black border border-white/20 text-white"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-4 bg-black border border-white/20 text-white"
            required
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full p-4 bg-black border border-white/20 text-white"
            required
          />

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full p-4 bg-black border border-white/20 text-white"
          >
            <option>Wedding Photography</option>
            <option>Cinematic Videography</option>
            <option>Engagement Shoot</option>
            <option>Destination Wedding</option>
          </select>

          <textarea
            name="message"
            rows="5"
            placeholder="Tell us about your wedding..."
            value={form.message}
            onChange={handleChange}
            className="w-full p-4 bg-black border border-white/20 text-white"
          />

          <button
            type="submit"
            className="w-full bg-[#C8A96B] text-black py-4 font-semibold hover:scale-105 transition"
          >
            Send Booking Request
          </button>
        </form>
      </div>
    </section>
  );
}
