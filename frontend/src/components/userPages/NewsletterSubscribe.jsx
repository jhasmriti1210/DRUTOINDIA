import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { subscribeToNews } from "../services/subscriberApi";

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();

    const normalizedEmail = email.trim();

    if (!normalizedEmail) {
      setStatus({
        type: "error",
        message: "Please enter your email address",
      });

      return;
    }

    try {
      setLoading(true);
      setStatus({
        type: "",
        message: "",
      });

      const result = await subscribeToNews(normalizedEmail);

      setStatus({
        type: "success",
        message: result.message,
      });

      setEmail("");
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.response?.data?.message || "Unable to subscribe right now",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#FAF7F2] py-14 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[32px] sm:rounded-[40px] bg-[#0F172A] px-5 sm:px-10 lg:px-16 py-10 sm:py-14 text-center shadow-[0_30px_90px_rgba(15,23,42,0.22)]"
        >
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#0F766E]/30 rounded-full blur-[120px]" />

          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-white/5 rounded-full blur-[120px]" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#0F766E] text-white flex items-center justify-center text-2xl shadow-xl">
              <FaEnvelope />
            </div>

            <p className="mt-6 uppercase tracking-[4px] text-[#5EEAD4] text-sm font-bold">
              DRUTO Newsletter
            </p>

            <h2 className="mt-4 font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Stay Updated With Global Trade
            </h2>

            <p className="mt-5 text-white/70 text-base sm:text-lg leading-8">
              Receive DRUTO updates, industry news, export policies, trade
              regulations, and international market insights directly in your
              inbox.
            </p>

            <form
              onSubmit={submitHandler}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto"
            >
              <div className="relative flex-1">
                <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-[#0F766E]" />

                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full min-h-14 rounded-full bg-white pl-12 pr-5 text-[#0F172A] outline-none border-2 border-transparent focus:border-[#5EEAD4]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group min-h-14 rounded-full bg-[#0F766E] hover:bg-white hover:text-[#0F172A] disabled:opacity-60 text-white px-7 font-semibold inline-flex items-center justify-center gap-3 transition-all"
              >
                {loading ? "Subscribing..." : "Subscribe"}

                {!loading && (
                  <FaArrowRight className="group-hover:translate-x-1 transition" />
                )}
              </button>
            </form>

            {status.message && (
              <div
                className={`mt-5 flex items-center justify-center gap-2 text-sm font-medium ${
                  status.type === "success" ? "text-[#99F6E4]" : "text-red-300"
                }`}
              >
                {status.type === "success" && <FaCheckCircle />}

                {status.message}
              </div>
            )}

            <p className="mt-5 text-white/45 text-xs leading-6">
              By subscribing, you agree to receive DRUTO INDIA news emails. You
              can unsubscribe at any time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
