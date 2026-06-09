import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setLoading(false);
          formRef.current.reset();
        },
        () => {
          alert("Failed to send message");
          setLoading(false);
        },
      );
  };

  return (
    <section className="py-32 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-[#C8A96B] mb-4">
            Contact Us
          </p>

          <h1 className="font-serif text-5xl md:text-6xl">Book Your Wedding</h1>
        </div>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-4 bg-black border border-white/20 text-white"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-4 bg-black border border-white/20 text-white"
            required
          />

          <input
            type="text"
            name="date"
            placeholder="Wedding Date"
            className="w-full p-4 bg-black border border-white/20 text-white"
          />

          <textarea
            name="message"
            placeholder="Tell us about your wedding..."
            rows="5"
            className="w-full p-4 bg-black border border-white/20 text-white"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#C8A96B] text-black py-4 font-semibold hover:scale-105 transition"
          >
            {loading ? "Sending..." : "Send Inquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}
