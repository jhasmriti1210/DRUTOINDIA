export default function Message({ sender, text }) {
  const isUser = sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div className="flex items-end gap-2 max-w-[85%]">
        {/* Bot Avatar */}
        {!isUser && (
          <div className="w-9 h-9 rounded-full bg-[#0F766E] text-white flex items-center justify-center font-bold text-sm shadow">
            D
          </div>
        )}

        {/* Message Bubble */}
        <div
          className={`px-4 py-3 rounded-2xl shadow-sm text-sm leading-6 whitespace-pre-wrap break-words
          ${
            isUser
              ? "bg-[#0F766E] text-white rounded-br-md"
              : "bg-white border border-gray-200 text-gray-800 rounded-bl-md"
          }`}
        >
          {text}
        </div>

        {/* User Avatar */}
        {isUser && (
          <div className="w-9 h-9 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center font-semibold text-sm shadow">
            U
          </div>
        )}
      </div>
    </div>
  );
}
