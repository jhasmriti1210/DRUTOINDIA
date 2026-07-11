import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { FaCheckCircle, FaHome } from "react-icons/fa";
import { unsubscribeFromNews } from "../services/subscriberApi";

export default function Unsubscribe() {
  const { token } = useParams();

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const unsubscribe = async () => {
      try {
        const result = await unsubscribeFromNews(token);
        setMessage(result.message);
      } catch (error) {
        setMessage(
          error.response?.data?.message ||
            "Unable to process unsubscribe request",
        );
      } finally {
        setLoading(false);
      }
    };

    unsubscribe();
  }, [token]);

  return (
    <section className="min-h-screen bg-[#FAF7F2] pt-36 pb-20 px-4">
      <div className="max-w-xl mx-auto bg-white border border-[#E7DFD2] rounded-[32px] shadow-xl p-8 sm:p-12 text-center">
        {loading ? (
          <p className="text-[#4B5563]">Processing your request...</p>
        ) : (
          <>
            <div className="w-16 h-16 mx-auto rounded-full bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center text-3xl">
              <FaCheckCircle />
            </div>

            <h1 className="font-['Playfair_Display'] text-3xl font-black text-[#0F172A] mt-6">
              Subscription Updated
            </h1>

            <p className="text-[#4B5563] mt-4 leading-7">{message}</p>

            <NavLink
              to="/"
              className="mt-8 inline-flex items-center gap-3 bg-[#0F766E] text-white px-7 py-4 rounded-full font-semibold"
            >
              <FaHome />
              Return Home
            </NavLink>
          </>
        )}
      </div>
    </section>
  );
}
