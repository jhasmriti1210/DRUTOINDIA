import { motion } from "framer-motion";
import {
  FaUsers,
  FaFileInvoice,
  FaShip,
  FaTruck,
  FaHandshake,
  FaGlobe,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const services = [
  {
    icon: <FaUsers />,
    title: "Exporter Onboarding",
    description:
      "We help first-time exporters understand export readiness, registration requirements, buyer expectations, and international trade processes.",
  },
  {
    icon: <FaFileInvoice />,
    title: "Documentation Support",
    description:
      "Assistance with export documents, invoices, packing lists, compliance requirements, certificates, and shipment paperwork.",
  },
  {
    icon: <FaShip />,
    title: "Logistics Coordination",
    description:
      "Coordination of sea freight, air freight, customs support, shipment planning, and international transportation.",
  },
  {
    icon: <FaTruck />,
    title: "Shipment Execution",
    description:
      "Managing the complete shipment journey from factory pickup to customer warehouse delivery.",
  },
  {
    icon: <FaHandshake />,
    title: "Buyer Sourcing Support",
    description:
      "Helping overseas buyers identify suppliers, coordinate sourcing, and manage procurement from India.",
  },
  {
    icon: <FaGlobe />,
    title: "Export Consulting",
    description:
      "Guidance on international market opportunities, export planning, product positioning, and global expansion.",
  },
];

const workflow = [
  "Exporter Assessment",
  "Documentation",
  "Packaging",
  "Logistics",
  "Final Delivery",
];

const Services = () => {
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
              className="text-5xl md:text-7xl font-black text-[#0F172A] leading-tight"
            >
              Export Services Designed
              <br />
              For Growing Businesses
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-[#1F2937]/75 mt-8 max-w-3xl mx-auto leading-8"
            >
              We provide structured support for exporters and international
              buyers through onboarding, documentation, logistics coordination,
              sourcing assistance, and shipment execution.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
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
            {services.map((service, index) => (
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
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.08 }}
                  className="w-16 h-16 rounded-2xl bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center text-3xl mb-6"
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-2xl font-black text-[#0F172A] mb-4">
                  {service.title}
                </h3>

                <p className="text-[#1F2937]/75 leading-7">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24 bg-[#F5F0E6] relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-4xl mx-auto text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="uppercase tracking-[6px] text-[#0F766E] font-bold mb-5"
            >
              Service Workflow
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight"
            >
              From Factory Door To Customer Warehouse
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-5 gap-6"
          >
            {workflow.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  boxShadow: "0 24px 70px rgba(15, 23, 42, 0.1)",
                }}
                className="bg-[#FAF7F2] border border-[#E7DFD2] rounded-3xl p-6 text-center"
              >
                <div className="text-[#0F766E] text-4xl font-black mb-4">
                  0{index + 1}
                </div>

                <h3 className="font-black text-[#0F172A]">
                  {step}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0F766E]/20 rounded-full blur-[140px]"></div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 text-center relative"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Ready To Expand Internationally?
          </h2>

          <p className="text-white/75 text-lg mt-6 max-w-3xl mx-auto leading-8">
            Whether you are an Indian exporter or an overseas buyer, our team
            can help you navigate sourcing, documentation, logistics, and
            shipment execution.
          </p>

          <motion.button
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 bg-[#0F766E] hover:bg-white hover:text-[#0F172A] text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-3 transition"
          >
            Request Consultation
            <FaArrowRight />
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
};

export default Services;