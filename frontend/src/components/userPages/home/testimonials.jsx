import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const testimonials = [
  {
    quote:
      "Our company was new to exporting and had no experience with international documentation. The team guided us through the entire process and helped us complete our first overseas shipment.",
    name: "Manufacturing Business Owner",
    location: "India",
  },
  {
    quote:
      "We were looking for a reliable sourcing partner in India. Their coordination with suppliers, documentation, and logistics made the procurement process smooth and transparent.",
    name: "Procurement Manager",
    location: "United Arab Emirates",
  },
  {
    quote:
      "From exporter onboarding to shipment execution, every stage was clearly communicated. Their support helped us expand into international markets with confidence.",
    name: "Export Manager",
    location: "India",
  },
];

const stats = [
  { value: "500+", label: "Businesses Assisted" },
  { value: "50+", label: "Global Markets" },
  { value: "1000+", label: "Shipments Coordinated" },
  { value: "98%", label: "Client Satisfaction" },
];

const Testimonials = () => {
  return (
    <section className="py-8 bg-[#FAF7F2] text-[#1F2937] font-['Inter'] overflow-hidden relative">
      <div className="absolute -top-20 right-0 w-80 h-80 bg-[#0F766E]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Heading */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto text-center mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="uppercase tracking-[5px] text-[#0F766E] font-bold mb-4"
          >
            
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight"
          >
            Trusted by businesses expanding globally.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[#1F2937]/75 text-lg mt-6 leading-8"
          >
            See how manufacturers, exporters, and international buyers work
            with us to simplify sourcing, documentation, logistics, and shipment
            execution.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 30px 80px rgba(15, 23, 42, 0.12)",
              }}
              transition={{ duration: 0.3 }}
              className="bg-[#F5F0E6] border border-[#E7DFD2] rounded-3xl p-8 shadow-sm"
            >
              <motion.div
                whileHover={{ rotate: -8, scale: 1.08 }}
                className="w-16 h-16 rounded-2xl bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center mb-6"
              >
                <FaQuoteLeft className="text-3xl" />
              </motion.div>

              <div className="flex gap-1 text-[#0F766E] mb-5">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.4 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.08, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <FaStar />
                  </motion.span>
                ))}
              </div>

              <p className="text-[#1F2937]/80 leading-8 mb-8">
                “{item.quote}”
              </p>

              <div className="border-t border-[#E7DFD2] pt-5">
                <h4 className="text-xl font-black text-[#0F172A]">
                  {item.name}
                </h4>

                <p className="text-[#1F2937]/65 mt-1">
                  {item.location}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-16"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.03 }}
              className="bg-[#0F172A] rounded-3xl p-8 text-center shadow-xl"
            >
              <h3 className="text-4xl md:text-5xl font-black text-white">
                {item.value}
              </h3>

              <p className="text-white/70 mt-2 font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;