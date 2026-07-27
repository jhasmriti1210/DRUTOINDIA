import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const phoneNumber = "919220475166";
  const message = encodeURIComponent(
    "Hello DRUTO INDIA, I'm interested in your export management services.",
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-24 z-50 group"
    >
      <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-[#0F172A] text-white px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg">
        Chat with Us
      </span>

      <div className="bg-[#25D366] hover:bg-[#20ba5a] w-12 h-12 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110">
        <FaWhatsapp className="text-white text-4xl" />
      </div>
    </a>
  );
}
