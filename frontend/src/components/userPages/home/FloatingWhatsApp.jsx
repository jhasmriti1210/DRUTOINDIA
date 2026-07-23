import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const phoneNumber = "919220475166"; // Replace with your WhatsApp number
  const message = encodeURIComponent(
    "Hello DRUTO INDIA, I'm interested in your export management services.",
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="bg-[#25D366] hover:bg-[#20ba5a] w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110">
        <FaWhatsapp className="text-white text-4xl" />
      </div>
    </a>
  );
}
