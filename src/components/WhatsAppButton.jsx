import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "8801765966912";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      className="fixed bottom-25 right-6 bg-green-500 p-4 rounded-full text-white text-3xl shadow-lg hover:scale-110 transition z-50"
    >
      <FaWhatsapp />
    </a>
  );
}
