import { useEffect, useRef, useState } from "react";
import { X, SendHorizontal } from "lucide-react";
import { v4 as uuid } from "uuid";

import Message from "./Message";
import { askBot } from "../services/chatbot";
import botLogo from "../../../assets/atlasbot.png";

export default function ChatWindow({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [options, setOptions] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [sessionId] = useState(uuid());

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  useEffect(() => {
    startConversation();
  }, []);

  const startConversation = async () => {
    try {
      setLoading(true);

      const data = await askBot("start", sessionId);

      setMessages([
        {
          sender: "bot",
          text: data.reply,
        },
      ]);

      setOptions(data.options || []);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  const sendMessage = async (selectedText = null) => {
    const question = selectedText || input;

    if (!question.trim()) return;

    setOptions([]);

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
      const data = await askBot(question, sessionId);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: data.reply,
        },
      ]);

      setOptions(data.options || []);
    } catch (err) {
      console.log(err);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, something went wrong.\n\nPlease contact DRUTO INDIA.",
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
    <div
      className="
    fixed
    z-50

    inset-x-2
    top-2
    bottom-2

    sm:inset-auto
    sm:bottom-6
    sm:right-6
    sm:w-[380px]
    sm:h-[400px]

    md:w-[390px]
    md:h-[430px]

    lg:w-[400px]
    lg:h-[500px]

    bg-white
    rounded-2xl
    shadow-2xl
    border
    border-gray-200
    flex
    flex-col
    overflow-hidden
  "
    >
      {/* Header */}
      <div className="bg-white px-4 sm:px-5 py-3 sm:py-4 shadow-md flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={botLogo}
            alt="Atlas"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-gray-200"
          />

          <div>
            <h2 className="font-bold text-base sm:text-lg">Atlas</h2>
            <p className="text-[11px] sm:text-xs text-gray-700">
              DRUTO INDIA • Online
            </p>
          </div>
        </div>

        <button onClick={onClose} className="hover:text-red-500 transition">
          <X size={22} />
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-3 sm:p-4">
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender} text={msg.text} />
        ))}

        {/* Quick Reply Buttons */}
        {options.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => sendMessage(option)}
                className="
                  px-3 sm:px-4
                  py-2
                  rounded-full
                  border
                  border-[#0F766E]
                  text-[#0F766E]
                  bg-white
                  hover:bg-[#0F766E]
                  hover:text-white
                  transition
                  text-xs
                  sm:text-sm
                  font-medium
                "
              >
                {option}
              </button>
            ))}
          </div>
        )}

        {/* Typing Indicator */}
        {loading && (
          <div className="flex justify-start mb-4">
            <div className="flex items-center gap-2">
              <img
                src={botLogo}
                alt="Atlas"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover"
              />

              <div className="bg-white border rounded-2xl px-4 py-3 shadow-sm text-gray-500 text-sm animate-pulse">
                Atlas is typing...
              </div>
            </div>
          </div>
        )}

        <div ref={bottomRef}></div>
      </div>

      {/* Input */}
      <div className="border-t bg-white p-3">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            placeholder="Type your message..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="
              flex-1
              border
              rounded-xl
              px-3 sm:px-4
              py-2.5 sm:py-3
              text-sm
              outline-none
              focus:ring-2
              focus:ring-[#0F766E]
            "
          />

          <button
            disabled={loading}
            onClick={() => sendMessage()}
            className="
              bg-[#0F766E]
              hover:bg-[#0C6558]
              disabled:opacity-60
              text-white
              p-2.5 sm:p-3
              rounded-xl
              transition
            "
          >
            <SendHorizontal size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
