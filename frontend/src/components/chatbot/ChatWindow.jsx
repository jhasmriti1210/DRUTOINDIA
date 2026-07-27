import { useEffect, useRef, useState } from "react";
import { X, SendHorizontal } from "lucide-react";
import Message from "./Message";
import { askBot } from "../services/chatbot";

export default function ChatWindow({ onClose }) {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello 👋\n\nWelcome to DRUTO INDIA.\n\nI'm your AI Export Assistant.\n\nAsk me anything about exports, documentation, logistics, customs, freight, compliance or our services.",
    },
  ]);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const question = input;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: question,
      },
    ]);

    setInput("");

    setLoading(true);

    try {
      const reply = await askBot(question);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: reply,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, I'm unable to answer right now.\n\nPlease contact DRUTO support.",
        },
      ]);
    }

    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-24 right-6 w-[380px] h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden z-50">
      {/* Header */}

      <div className="bg-[#0F172A] text-white px-5 py-4 flex justify-between items-center">
        <div>
          <h2 className="font-bold text-lg">DRUTO AI Assistant</h2>

          <p className="text-xs text-gray-300">Export Support • Online</p>
        </div>

        <button onClick={onClose} className="hover:text-red-400 transition">
          <X size={22} />
        </button>
      </div>

      {/* Messages */}

      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender} text={msg.text} />
        ))}

        {loading && (
          <div className="flex justify-start mb-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-[#0F766E] text-white flex items-center justify-center font-bold">
                D
              </div>

              <div className="bg-white border px-4 py-3 rounded-2xl shadow-sm text-gray-500 text-sm">
                Typing...
              </div>
            </div>
          </div>
        )}

        <div ref={bottomRef}></div>
      </div>

      {/* Input */}

      <div className="border-t bg-white p-3">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Ask about exports..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#0F766E]"
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            className="bg-[#0F766E] hover:bg-[#0c6558] text-white p-3 rounded-xl transition"
          >
            <SendHorizontal size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
