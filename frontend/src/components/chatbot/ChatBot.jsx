import { useState } from "react";
import { MessageCircle } from "lucide-react";
import ChatWindow from "./ChatWindow";

export default function ChatBot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-24 right-6 bg-[#0F766E] hover:bg-[#0c6558] text-white w-16 h-16 rounded-full shadow-xl flex items-center justify-center z-50"
      >
        <MessageCircle size={28} />
      </button>

      {open && <ChatWindow onClose={() => setOpen(false)} />}
    </>
  );
}
