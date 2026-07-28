import { useState } from "react";
import ChatWindow from "./ChatWindow";
import botIcon from "../../../assets/atlasbot.png";

export default function ChatBot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="group fixed bottom-4 right-6 z-50 flex items-center justify-center
                   w-12 h-12 rounded-full bg-white shadow-2xl
                   hover:scale-110 transition-all duration-300"
      >
        {/* Tooltip */}
        <span
          className="absolute right-20 top-1/2 -translate-y-1/2
                     bg-[#0F172A] text-white text-sm font-medium
                     px-4 py-2 rounded-lg shadow-lg
                     whitespace-nowrap
                     opacity-0 translate-x-2
                     group-hover:opacity-100
                     group-hover:translate-x-0
                     transition-all duration-300"
        >
          💬 Chat with Atlas
        </span>

        {/* Bot Icon */}
        <img
          src={botIcon}
          alt="Atlas Bot"
          className="w-12 h-12 object-contain"
        />
      </button>

      {open && <ChatWindow onClose={() => setOpen(false)} />}
    </>
  );
}
