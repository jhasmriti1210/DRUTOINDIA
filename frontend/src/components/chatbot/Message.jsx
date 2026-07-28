import botLogo from "../../../assets/botlogo.jpeg";

export default function Message({ sender, text, options = [], onOptionClick }) {
  const isUser = sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div className="flex items-end gap-2 max-w-[85%]">
        {/* Bot Avatar */}
        {!isUser && (
          <img
            src={botLogo}
            alt="Atlas"
            className="w-9 h-9 rounded-full object-cover shadow"
          />
        )}

        <div>
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

          {/* Quick Reply Buttons */}
          {!isUser && options.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => onOptionClick(option)}
                  className="px-4 py-2 rounded-full border border-[#0F766E] text-[#0F766E] bg-white hover:bg-[#0F766E] hover:text-white transition text-sm font-medium shadow-sm"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* User Avatar */}
        {isUser && (
          <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center font-semibold text-sm shadow">
            U
          </div>
        )}
      </div>
    </div>
  );
}
