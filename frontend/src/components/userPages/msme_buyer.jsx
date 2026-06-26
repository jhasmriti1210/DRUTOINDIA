import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  FaArrowRight,
  FaSearch,
  FaClipboardCheck,
  FaHandshake,
  FaFileInvoice,
  FaShip,
  FaChartLine,
  FaGlobeAsia,
  FaShieldAlt,
  FaIndustry,
  FaTruck,
  FaMoneyCheckAlt,
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

const challenges = [
  "Finding trusted foreign buyers",
  "Understanding international laws",
  "Complex shipping documentation",
  "Fear of unpaid overseas invoices",
  "Limited access to global markets",
  "Risk-heavy international trade",
];

const exportSteps = [
  {
    icon: <FaClipboardCheck />,
    title: "Export Readiness Audit",
    desc: "We visit your facility to understand production capacity, lead time, product readiness, and export potential.",
  },
  {
    icon: <FaSearch />,
    title: "Market Research",
    desc: "We study target regions and compare how your product matches or exceeds competitors selling outside India.",
  },
  {
    icon: <FaChartLine />,
    title: "Global Pipeline Alignment",
    desc: "Your products are added into our structured B2B sales pipeline to track buyer interest and sales cycles.",
  },
  {
    icon: <FaFileInvoice />,
    title: "Export Compliance",
    desc: "We manage export documentation, certificates, IEC-related support, HS code alignment, and regulatory coordination.",
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Secure Financial Structure",
    desc: "We reduce payment risk through structured banking channels, advance terms, and controlled credit exposure.",
  },
  {
    icon: <FaTruck />,
    title: "Logistics & Customs",
    desc: "We coordinate pickup, customs clearance, port handling, shipping agents, and global freight movement.",
  },
  {
    icon: <FaShip />,
    title: "Order Fulfilment",
    desc: "Once the order is ready, we handle pickup and shipment execution from India to the buyer’s destination.",
  },
  {
    icon: <FaGlobeAsia />,
    title: "Global Growth",
    desc: "We help build recurring distribution channels and long-term international sales volume.",
  },
];

const IndianMSME = () => {
  return (
    <main className="bg-[#FAF7F2] text-[#1F2937] font-['Inter'] overflow-hidden">
      {/* HERO */}
      <section className="relative pt-36 pb-24 bg-[#0F172A] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#111D32] to-[#0F766E]/30" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center mt-10">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p
              variants={fadeUp}
              className="uppercase tracking-[5px] text-[#5EEAD4] font-bold mb-5"
            >
              For Indian MSMEs
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-['Playfair_Display'] text-4xl md:text-6xl font-black leading-tight"
            >
              Grow Locally, Sell Globally
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-white/80 text-lg mt-7 leading-8 max-w-2xl"
            >
              Turn your factory into an export house with zero international
              risk and total scale. Druto helps Indian manufacturers expand
              globally while they focus on what they do best: manufacturing.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-5">
              <NavLink
                to="/contact"
                className="group bg-[#0F766E] hover:bg-white hover:text-[#0F172A] text-white px-8 py-4 rounded-full font-semibold transition flex items-center gap-3"
              >
                Start Exporting
                <FaArrowRight className="group-hover:translate-x-1 transition" />
              </NavLink>

              <a
                href="#export-process"
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
                src="/msmehero.png"
                alt="Indian MSME export management"
                className="w-full h-[420px] object-cover rounded-3xl"
              />
            </div>

            <div className="absolute -bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl">
              <p className="text-white/80 leading-7">
                Druto acts as your dedicated, fully outsourced export management
                company, handling sales pipeline, logistics, compliance, and
                global growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="py-10">
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
              Excellent Indian products should not stay restricted to local
              markets.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[#1F2937]/75 text-lg mt-6 leading-8"
            >
              For many Indian manufacturers, cross-border trade creates major
              hurdles — finding trusted foreign buyers, navigating international
              laws, handling complex shipping documentation, and managing the
              fear of unpaid overseas invoices.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {challenges.map((item, index) => (
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
      <section className="py-8 bg-[#F5F0E6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-2">
          {/* SECTION HEADING */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="uppercase tracking-[5px] text-[#0F766E] font-bold mb-4"
            >
              Our Role
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-['Playfair_Display'] text-2xl md:text-4xl font-black text-[#0F172A] leading-tight"
            >
              Your Outsourced Export Management Company
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
                <img
                  src="/msme-drutorole_img.png"
                  alt="Druto India Procurement Office"
                  className="w-full h-full object-cover"
                />

                <div className="absolute left-6 bottom-3 bg-white/95 backdrop-blur-md rounded-2xl px-6 py-5 shadow-xl">
                  <p className="text-[#0F766E] text-sm font-bold uppercase tracking-widest">
                    Export Partner
                  </p>

                  <h4 className="text-[#0F172A] text-lg font-bold mt-2">
                    You Manufacture. We Scale.
                  </h4>
                </div>
              </div>
            </motion.div>

            {/* CONTENT */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.h3
                variants={fadeUp}
                className="font-['Playfair_Display'] text-lg md:text-xl font-black text-[#0F172A] leading-tight"
              >
                Druto lets you focus entirely on manufacturing.
              </motion.h3>

              <motion.p
                variants={fadeUp}
                className="mt-7 text-[#1F2937]/75 text-lg leading-8"
              >
                We take total ownership of your international sales pipeline,
                logistics, compliance, and global growth while you continue
                producing high-quality products.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-5 text-[#1F2937]/75 text-lg leading-8"
              >
                From buyer development to export documentation and shipment
                execution, Druto works as your dedicated export management team.
              </motion.p>

              {/* HIGHLIGHTS */}
              <motion.div
                variants={fadeUp}
                className="grid sm:grid-cols-2 gap-4 mt-10"
              >
                {[
                  "Dedicated Local Office",
                  "Verified MSME Network",
                  "Global Quality Standards",
                  "Competitive Pricing",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white rounded-2xl border border-[#E7DFD2] px-5 py-4 shadow-sm hover:shadow-md transition"
                  >
                    <div className="w-3 h-3 rounded-full bg-[#0F766E]" />

                    <span className="font-semibold text-[#0F172A]">{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EXPORT PROCESS */}
      <section id="export-process" className="py-10 bg-[#FAF7F2]">
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
              Our End-to-End Export Process
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-['Playfair_Display'] text-4xl md:text-6xl font-black text-[#0F172A] leading-tight"
            >
              From factory audit to global growth.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[#1F2937]/75 text-lg mt-6 leading-8"
            >
              Druto manages every step needed to move Indian manufacturing from
              local production to international sales, recurring distribution,
              and long-term export volume.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {exportSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="bg-[#F5F0E6] border border-[#E7DFD2] rounded-3xl p-7 shadow-sm"
              >
                <span className="inline-block bg-[#0F766E] text-white text-sm font-black px-4 py-2 rounded-full mb-5">
                  Step {index + 1}
                </span>

                <div className="w-16 h-16 rounded-2xl bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center text-3xl mb-6">
                  {step.icon}
                </div>

                <h3 className="font-['Playfair_Display'] text-2xl font-black text-[#0F172A] mb-4">
                  {step.title}
                </h3>

                <p className="text-[#1F2937]/75 leading-7">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#0F172A] rounded-[40px] md:rounded-[48px] px-8 md:px-16 py-16 md:py-20 text-center shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl font-black text-white leading-tight">
              Ready to turn your factory into an export house?
            </h2>

            <p className="text-white/75 text-lg mt-6 max-w-3xl mx-auto leading-8">
              Share your product category, production capacity, and target
              markets. Druto will help you build a structured path toward
              international sales and global growth.
            </p>

            <NavLink
              to="/contact"
              className="mt-10 bg-[#0F766E] hover:bg-white hover:text-[#0F172A] text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-3 transition"
            >
              Send MSME Inquiry
              <FaArrowRight />
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndianMSME;
