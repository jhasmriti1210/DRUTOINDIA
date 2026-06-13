import { motion } from "framer-motion";
import {
  FaIndustry,
  FaClipboardCheck,
  FaBoxOpen,
  FaShip,
  FaWarehouse,
  FaFileInvoice,
  FaTruck,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  show: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -55 },
  show: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 55 },
  show: { opacity: 1, x: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const processSteps = [
  {
    icon: <FaIndustry />,
    title: "Factory Assessment",
    desc: "We understand the product, packaging, quantity, export readiness, and buyer requirements.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Exporter Onboarding",
    desc: "We guide MSMEs and first-time exporters through the basic steps needed to start selling internationally.",
  },
  {
    icon: <FaFileInvoice />,
    title: "Documentation",
    desc: "We coordinate invoices, packing lists, certificates, shipping documents, and compliance paperwork.",
  },
  {
    icon: <FaBoxOpen />,
    title: "Packaging & Dispatch",
    desc: "Products are prepared for export with suitable packaging, labeling, and dispatch coordination.",
  },
  {
    icon: <FaShip />,
    title: "Shipment Execution",
    desc: "Freight, customs, port handling, and international movement are coordinated through reliable channels.",
  },
  {
    icon: <FaWarehouse />,
    title: "Customer Warehouse",
    desc: "We support delivery coordination until the shipment reaches the buyer’s warehouse.",
  },
];

const workflowItems = [
  "Exporter onboarding",
  "Documentation coordination",
  "Packaging support",
  "Freight planning",
  "Customs assistance",
  "Shipment tracking",
];

const Process = () => {
  return (
    <main className="bg-[#FAF7F2] text-[#1F2937] font-['Inter'] overflow-hidden">
      {/* Hero */}
      <section className="pt-40 pb-24 relative">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#0F766E]/10 rounded-full blur-[130px]"></div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-7xl mx-auto px-6 relative"
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              variants={fadeUp}
              className="font-['Playfair_Display'] text-4xl md:text-6xl font-black text-[#0F172A] leading-tight"
            >
              From Factory Door To
              <br />
              Customer Warehouse
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-['Playfair_Display'] text-lg text-[#1F2937]/75 mt-8 max-w-3xl mx-auto leading-8"
            >
              Our operating model simplifies export execution for Indian MSMEs
              and overseas buyers by managing onboarding, documentation,
              packaging, logistics coordination, and shipment movement step by
              step.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Process Cards */}
      <section className="pb-28 relative">
        <div className="absolute left-0 bottom-20 w-96 h-96 bg-[#0F172A]/5 rounded-full blur-[140px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  scale: 1.015,
                  boxShadow: "0 30px 80px rgba(15, 23, 42, 0.12)",
                }}
                transition={{ duration: 0.3 }}
                className="bg-[#F5F0E6] border border-[#E7DFD2] rounded-3xl p-8 shadow-sm"
              >
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.08 }}
                    className="w-16 h-16 rounded-2xl bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center text-3xl"
                  >
                    {step.icon}
                  </motion.div>

                  <span className="text-5xl font-black text-[#0F172A]/10">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-['Playfair_Display'] text-2xl font-black text-[#0F172A] mb-4">
                  {step.title}
                </h3>

                <p className="font-['Playfair_Display'] text-[#1F2937]/75 leading-7">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Operating Model */}
      <section className="py-24 bg-[#F5F0E6] relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-3xl overflow-hidden border border-[#E7DFD2] shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
          >
            <motion.img
              src="/process-logistics.jpg"
              alt="Export packaging and logistics process"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.6 }}
              className="w-full h-[520px] object-cover"
            />
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="font-['Playfair_Display'] uppercase tracking-[6px] text-[#0F766E] font-bold mb-5">
              Operating Model
            </p>

            <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl font-black text-[#0F172A] leading-tight">
              One clear workflow for exporters and buyers.
            </h2>

            <p className="font-['Playfair_Display'] text-[#1F2937]/75 text-lg leading-8 mt-6">
              Instead of managing multiple vendors separately, exporters and
              overseas buyers get coordinated support across documentation,
              freight, shipment updates, and delivery execution.
            </p>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4 mt-8"
            >
              {workflowItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{
                    x: 6,
                    boxShadow: "0 18px 50px rgba(15, 23, 42, 0.08)",
                  }}
                  className="bg-[#FAF7F2] border border-[#E7DFD2] rounded-xl p-4 flex items-center gap-3"
                >
                  <FaCheckCircle className="text-[#0F766E] shrink-0" />

                  <span className="font-['Playfair_Display'] font-semibold text-[#1F2937]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#FAF7F2] relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0F766E]/10 rounded-full blur-[140px]"></div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 relative"
        >
          <div className="bg-[#0F172A] rounded-[2rem] p-10 md:p-14 text-white grid lg:grid-cols-2 gap-10 items-center shadow-[0_30px_100px_rgba(15,23,42,0.25)]">
            <div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-20 h-20 rounded-3xl bg-[#0F766E]/20 text-[#5EEAD4] flex items-center justify-center text-5xl mb-6"
              >
                <FaTruck />
              </motion.div>

              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-black leading-tight">
                Need help planning your first export shipment?
              </h2>

              <p className="font-['Playfair_Display'] text-white/75 text-lg mt-6 leading-8">
                Share your product details, destination country, quantity, and
                buyer requirements. We will help you understand the next steps
                for documentation, logistics, and shipment execution.
              </p>
            </div>

            <div className="lg:text-right">
              <motion.button
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="font-['Playfair_Display'] bg-[#0F766E] hover:bg-white hover:text-[#0F172A] text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-3 transition"
              >
                Start Export Process
                <FaArrowRight />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Process;
