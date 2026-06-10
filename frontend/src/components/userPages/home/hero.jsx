import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGlobe,
  FaShip,
  FaBoxOpen,
  FaFileInvoice,
  FaWarehouse,
  FaHandshake,
  FaIndustry,
  FaUsers,
  FaCheckCircle,
  FaClipboardCheck,
  FaTruck,
  FaShieldAlt,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const heroStats = [
  { icon: <FaGlobe />, value: "Global", text: "Export Support" },
  { icon: <FaShip />, value: "End-to-End", text: "Shipment Execution" },
  { icon: <FaBoxOpen />, value: "India", text: "Sourcing Partner" },
];

const services = [
  {
    icon: <FaUsers />,
    title: "Exporter Onboarding",
    desc: "We help first-time Indian MSMEs understand export readiness, registrations, buyer communication, and international selling basics.",
  },
  {
    icon: <FaFileInvoice />,
    title: "Documentation Support",
    desc: "Support for export documents, compliance files, invoices, packing lists, shipping bills, certificates, and buyer-side paperwork coordination.",
  },
  {
    icon: <FaShip />,
    title: "Logistics Coordination",
    desc: "Sea, air, and road freight coordination with shipping timelines, freight planning, customs assistance, and shipment tracking.",
  },
  {
    icon: <FaTruck />,
    title: "Shipment Execution",
    desc: "A practical operating model from factory pickup to port handling and customer warehouse delivery coordination.",
  },
];

const helpCards = [
  {
    icon: <FaIndustry />,
    title: "For Indian MSMEs",
    subtitle: "Start selling internationally",
    desc: "We guide first-time exporters with onboarding, export documents, packaging requirements, logistics planning, and buyer coordination.",
    points: [
      "First-time exporters",
      "Manufacturers",
      "Small businesses",
      "Indian product brands",
    ],
  },
  {
    icon: <FaHandshake />,
    title: "For Global Buyers",
    subtitle: "Source from India with one partner",
    desc: "We help overseas buyers source products from India through one execution partner handling supplier coordination, documentation, shipping, and delivery updates.",
    points: [
      "Importers",
      "Distributors",
      "Retail buyers",
      "Global sourcing teams",
    ],
  },
];

const steps = [
  {
    icon: <FaIndustry />,
    title: "Factory Door",
    desc: "Product, packaging, and export-readiness assessment.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Documentation",
    desc: "Export documents, invoices, and compliance files.",
  },
  {
    icon: <FaBoxOpen />,
    title: "Packaging",
    desc: "Products prepared for international shipment.",
  },
  {
    icon: <FaShip />,
    title: "Logistics",
    desc: "Freight, customs, port handling, and shipment movement.",
  },
  {
    icon: <FaWarehouse />,
    title: "Warehouse",
    desc: "Delivery coordination to the buyer’s warehouse.",
  },
];

const whyChoose = [
  "Single execution partner for exporters and buyers",
  "Support for first-time exporters and MSMEs",
  "Export documentation and compliance coordination",
  "Factory-to-warehouse shipment operating model",
  "Real logistics, packaging, and supply-chain execution",
  "Clear communication through email, phone, and WhatsApp",
];

const trustSignals = [
  {
    title: "Clear Company Overview",
    desc: "Show who the company is, what it exports, and where it operates.",
  },
  {
    title: "Product Catalogue Ready",
    desc: "Product photos, specifications, packaging details, and compliance information.",
  },
  {
    title: "Export Market Support",
    desc: "Help businesses understand target countries, buyer expectations, and shipment routes.",
  },
  {
    title: "Buyer Inquiry System",
    desc: "Inquiry form, email, phone, and WhatsApp support for faster communication.",
  },
];

const Home = () => {
  return (
    <main className="bg-[#FAF7F2] text-[#1F2937] overflow-hidden font-['Inter']">
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('/heroimg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0F172A]/75"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/90 via-[#0F172A]/70 to-[#0F172A]/80"></div>

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute right-20 top-40 hidden lg:block w-40 h-40 rounded-full border border-white/20"
        ></motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-5xl mx-auto text-center"
          >
            <motion.p
              variants={fadeUp}
              className="uppercase tracking-[5px] text-[#5EEAD4] font-bold mb-6 mt-8"
            >
              Export Management • India Sourcing • Global Trade
            </motion.p>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.9 }}
              className="text-5xl md:text-7xl font-black leading-[1.05] text-white"
            >
              Helping Indian Businesses Export Globally
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-white/85 mt-8 max-w-3xl mx-auto leading-relaxed"
            >
              From exporter onboarding and documentation to logistics
              coordination and shipment execution, we help MSMEs sell
              internationally and help global buyers source from India.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-5 justify-center"
            >
              <button className="group bg-[#0F766E] hover:bg-white hover:text-[#0F172A] text-white px-8 py-4 rounded-full font-semibold transition flex items-center gap-3">
                Request Consultation
                <FaArrowRight className="group-hover:translate-x-1 transition" />
              </button>

              <button className="border border-white/40 text-white hover:bg-white hover:text-[#0F172A] px-8 py-4 rounded-full font-semibold transition">
                Explore Services
              </button>
            </motion.div>

            <motion.div
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16 max-w-4xl mx-auto"
            >
              {heroStats.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl"
                >
                  <div className="text-[#5EEAD4] text-3xl mb-4 flex justify-center">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-black text-white">
                    {item.value}
                  </h3>

                  <p className="text-white/75 mt-1">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-24 bg-[#FAF7F2] relative">
        <div className="absolute left-0 top-20 w-72 h-72 bg-[#0F766E]/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-4xl mx-auto text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="uppercase tracking-[5px] text-[#0F766E] font-bold mb-4"
            >
              What We Do
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight"
            >
              End-to-end export support from India to global markets.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[#1F2937]/75 text-lg mt-6 leading-8"
            >
              We support exporters and buyers with onboarding, documentation,
              logistics coordination, and shipment execution through a clear
              operating process.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  boxShadow: "0 30px 80px rgba(15, 23, 42, 0.12)",
                }}
                className="group bg-[#F5F0E6] border border-[#E7DFD2] rounded-3xl p-7 shadow-sm"
              >
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.08 }}
                  className="w-16 h-16 rounded-2xl bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center text-3xl mb-6"
                >
                  {item.icon}
                </motion.div>

                <h3 className="text-2xl font-black text-[#0F172A] mb-4">
                  {item.title}
                </h3>

                <p className="text-[#1F2937]/75 leading-7">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="py-24 bg-[#F5F0E6]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="uppercase tracking-[5px] text-[#0F766E] font-bold mb-4"
            >
              Who We Help
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight"
            >
              Built for Indian MSMEs and overseas buyers.
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {helpCards.map((card, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="show"
                variants={index === 0 ? fadeLeft : fadeRight}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.25 }}
                whileHover={{ y: -10 }}
                className="bg-[#FAF7F2] border border-[#E7DFD2] rounded-3xl p-8 shadow-sm"
              >
                <div className="w-20 h-20 rounded-3xl bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center text-4xl mb-7">
                  {card.icon}
                </div>

                <p className="uppercase tracking-[4px] text-[#0F766E] font-bold mb-3">
                  {card.subtitle}
                </p>

                <h3 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-5">
                  {card.title}
                </h3>

                <p className="text-[#1F2937]/75 leading-8 mb-7">{card.desc}</p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {card.points.map((point, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-[#1F2937] font-semibold"
                    >
                      <FaCheckCircle className="text-[#0F766E]" />
                      {point}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="uppercase tracking-[5px] text-[#0F766E] font-bold mb-4"
            >
              How It Works
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight"
            >
              From factory door to customer warehouse.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-5 gap-5"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative bg-[#F5F0E6] border border-[#E7DFD2] rounded-3xl p-6 shadow-sm"
              >
                <span className="text-[#0F766E] font-black text-sm">
                  0{index + 1}
                </span>

                <div className="w-14 h-14 rounded-2xl bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center text-2xl my-5">
                  {step.icon}
                </div>

                <h3 className="text-xl font-black text-[#0F172A] mb-3">
                  {step.title}
                </h3>

                <p className="text-[#1F2937]/70 text-sm leading-6">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-[#0F172A] text-white relative">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#0F766E]/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center relative">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.p
              variants={fadeUp}
              className="uppercase tracking-[5px] text-[#5EEAD4] font-bold mb-4"
            >
              Why Choose Us
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-6xl font-black leading-tight"
            >
              One execution partner for export growth.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-white/75 text-lg mt-6 leading-8"
            >
              Our model reduces confusion for first-time exporters and gives
              overseas buyers a dependable India sourcing and shipment execution
              partner.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ x: 8, backgroundColor: "rgba(255,255,255,0.14)" }}
                className="bg-white/10 border border-white/10 rounded-2xl p-5 flex gap-3 backdrop-blur-md"
              >
                <FaCheckCircle className="text-[#5EEAD4] mt-1 shrink-0" />
                <p className="text-white/85 font-medium">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="uppercase tracking-[5px] text-[#0F766E] font-bold mb-4"
            >
              Trust Signals
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight"
            >
              Build credibility with clear export information.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {trustSignals.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  boxShadow: "0 30px 80px rgba(15, 23, 42, 0.12)",
                }}
                className="bg-[#F5F0E6] border border-[#E7DFD2] rounded-3xl p-7 shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center mb-6">
                  <FaShieldAlt />
                </div>

                <h3 className="text-xl font-black text-[#0F172A] mb-3">
                  {item.title}
                </h3>

                <p className="text-[#1F2937]/70 leading-7">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 bg-[#0F172A] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-8 shadow-2xl"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-black">
                Ready to start exporting or sourcing from India?
              </h3>

              <p className="text-white/75 mt-4 max-w-2xl">
                Send your inquiry and our team will help you with exporter
                onboarding, documentation, logistics coordination, or buyer
                sourcing support.
              </p>
            </div>

            <button className="bg-[#0F766E] hover:bg-white hover:text-[#0F172A] text-white px-8 py-4 rounded-full font-semibold transition flex items-center gap-3 whitespace-nowrap">
              Send Inquiry
              <FaArrowRight />
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
