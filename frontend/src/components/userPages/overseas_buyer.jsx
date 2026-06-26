import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  FaArrowRight,
  FaSearch,
  FaClipboardCheck,
  FaHandshake,
  FaClock,
  FaCheckCircle,
  FaChartLine,
  FaFileInvoice,
  FaShip,
  FaGlobeAsia,
  FaShieldAlt,
  FaIndustry,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const risks = [
  "Fragmented supplier market",
  "Communication gaps",
  "Inconsistent quality control",
  "Long-distance procurement risks",
  "Documentation complexity",
  "Logistical uncertainty",
];

const sourcingSteps = [
  {
    icon: <FaGlobeAsia />,
    title: "Sourcing Inquiry",
    desc: "We understand your product requirement, quantity, standards, target price, and delivery expectations.",
  },
  {
    icon: <FaSearch />,
    title: "Supplier Scouting",
    desc: "We identify high-potential MSME manufacturers across India.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Due Diligence",
    desc: "We audit production capability, quality readiness, reliability, ethics, and business suitability.",
  },
  {
    icon: <FaHandshake />,
    title: "Secure Agreement",
    desc: "We help coordinate competitive pricing, communication, and favorable procurement terms.",
  },
  {
    icon: <FaClock />,
    title: "Production Monitoring",
    desc: "We track manufacturing progress, timelines, updates, and production-related issues.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Quality Control",
    desc: "We support multi-stage pre-production checks, in-process review, and final inspection coordination.",
  },
  {
    icon: <FaChartLine />,
    title: "Pipeline Visibility",
    desc: "We provide real-time updates, transparent status reporting, and sourcing visibility.",
  },
  {
    icon: <FaFileInvoice />,
    title: "Compliance & Logistics",
    desc: "We coordinate export documentation, customs clearance, logistics planning, and global shipping.",
  },
  {
    icon: <FaShip />,
    title: "Consignment Delivery",
    desc: "We support shipment movement until the consignment reaches the buyer’s destination.",
  },
];

const OverseasBuyers = () => {
  return (
    <main className="bg-[#FAF7F2] text-[#1F2937] font-['Inter'] overflow-hidden">
      {/* HERO */}
      <section className="relative pt-36 pb-24 bg-[#0F172A] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#111D32] to-[#0F766E]/30" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p
              variants={fadeUp}
              className="uppercase tracking-[5px] text-[#5EEAD4] font-bold mb-5"
            >
              For Overseas Buyers
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-['Playfair_Display'] text-4xl md:text-6xl font-black leading-tight"
            >
              Your Dedicated Procurement Office in India
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-white/80 text-lg mt-7 leading-8 max-w-2xl"
            >
              India offers a vast and highly competitive manufacturing
              ecosystem. But navigating it from thousands of miles away comes
              with risks. Fragmented supplier markets, communication gaps,
              inconsistent quality control, and logistical uncertainty can turn
              a profitable sourcing strategy into a logistical nightmare.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-5">
              <NavLink
                to="/contact"
                className="group bg-[#0F766E] hover:bg-white hover:text-[#0F172A] text-white px-8 py-4 rounded-full font-semibold transition flex items-center gap-3"
              >
                Start Sourcing
                <FaArrowRight className="group-hover:translate-x-1 transition" />
              </NavLink>

              <a
                href="#sourcing-process"
                className="border border-white/30 hover:bg-white hover:text-[#0F172A] text-white px-8 py-4 rounded-full font-semibold transition"
              >
                View Process
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-white/10 backdrop-blur-xl p-4">
              <img
                src="/sourcing-process.jpg"
                alt="Druto India end-to-end sourcing process"
                className="w-full h-[420px] object-cover rounded-3xl"
              />
            </div>

            <div className="absolute -bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl">
              <p className="text-white/80 leading-7">
                Druto India becomes your eyes and ears on the ground, offering
                sourcing transparency from inquiry to consignment delivery.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.p
              variants={fadeUp}
              className="uppercase tracking-[5px] text-[#0F766E] font-bold mb-4"
            >
              The Challenge
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-['Playfair_Display'] text-4xl md:text-5xl font-black text-[#0F172A] leading-tight"
            >
              A profitable sourcing strategy should not become a logistical
              nightmare.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[#1F2937]/75 text-lg mt-6 leading-8"
            >
              For overseas buyers, sourcing from India can be highly rewarding.
              However, without trusted local support, fragmented markets,
              communication delays, inconsistent quality checks, and procurement
              risks can slow down execution and reduce transparency.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {risks.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-[#F5F0E6] border border-[#E7DFD2] rounded-2xl p-6"
              >
                <FaShieldAlt className="text-[#0F766E] text-2xl mb-4" />
                <p className="font-semibold text-[#0F172A]">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DRUTO ROLE */}
      <section className="py-24 bg-[#F5F0E6]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.p
              variants={fadeUp}
              className="uppercase tracking-[5px] text-[#0F766E] font-bold mb-4"
            >
              Our Role
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-['Playfair_Display'] text-4xl md:text-6xl font-black text-[#0F172A] leading-tight"
            >
              Druto India acts as your dedicated boots-on-the-ground sourcing
              office.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[#1F2937]/75 text-lg mt-7 leading-8"
            >
              We remove the friction of cross-border procurement, allowing you
              to leverage India’s manufacturing strength with the security,
              transparency, and accountability of a trusted local partner.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[#1F2937]/75 text-lg mt-5 leading-8"
            >
              We work intimately with Indian MSMEs on a daily basis. We know who
              is capable of meeting global standards, who has the capacity to
              scale, and who can offer the most competitive pricing.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* SOURCING PROCESS IMAGE */}
      <section id="sourcing-process" className="py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-5xl mx-auto text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="uppercase tracking-[5px] text-[#0F766E] font-bold mb-4"
            >
              What We Do
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-['Playfair_Display'] text-4xl md:text-6xl font-black text-[#0F172A] leading-tight"
            >
              Druto India End-to-End Sourcing Process
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[#1F2937]/75 text-lg mt-6 leading-8"
            >
              From sourcing inquiry to final consignment delivery, we provide
              full India sourcing transparency with local coordination,
              visibility, and execution support at every stage.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] p-4 md:p-6 shadow-[0_24px_80px_rgba(15,23,42,0.12)] border border-[#E7DFD2]"
          >
            <img
              src="/sourcing-process.jpg"
              alt="Druto India end-to-end sourcing process diagram"
              className="w-full rounded-[1.5rem] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-16 bg-[#0F172A] text-white rounded-[2rem] p-8 md:p-12 text-center"
          >
            <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl font-black">
              Druto India: Your Eyes and Ears on the Ground.
            </h3>

            <p className="text-white/75 text-lg mt-5 leading-8 max-w-3xl mx-auto">
              Experience full India sourcing transparency with a dedicated local
              partner managing supplier scouting, due diligence, production
              monitoring, quality control, compliance, logistics, and final
              delivery updates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl font-black text-white leading-tight">
            Need a trusted procurement office in India?
          </h2>

          <p className="text-white/75 text-lg mt-6 max-w-3xl mx-auto leading-8">
            Share your sourcing requirement, target product, quantity, and
            delivery destination. Druto India will help you source with
            security, transparency, and local execution.
          </p>

          <NavLink
            to="/contact"
            className="mt-10 bg-[#0F766E] hover:bg-white hover:text-[#0F172A] text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-3 transition"
          >
            Send Buyer Inquiry
            <FaArrowRight />
          </NavLink>
        </div>
      </section>
    </main>
  );
};

export default OverseasBuyers;
