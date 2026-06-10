import { motion } from "framer-motion";
import {
  FaGlobeAsia,
  FaMapMarkedAlt,
  FaShip,
  FaPlane,
  FaWarehouse,
  FaArrowRight,
  FaCheckCircle,
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

const markets = [
  {
    region: "Middle East",
    countries: "UAE, Saudi Arabia, Qatar, Oman, Kuwait",
    desc: "Support for sourcing, documentation, and shipment coordination for fast-growing GCC markets.",
  },
  {
    region: "Europe",
    countries: "Germany, France, Netherlands, Italy, UK",
    desc: "Helping Indian exporters understand buyer expectations, packaging standards, and export documentation.",
  },
  {
    region: "North America",
    countries: "USA, Canada",
    desc: "Assisting manufacturers and buyers with India sourcing, freight planning, and shipment execution.",
  },
  {
    region: "Africa",
    countries: "South Africa, Kenya, Nigeria, Ghana",
    desc: "Trade support for product sourcing, documentation, and logistics movement from India.",
  },
  {
    region: "Asia Pacific",
    countries: "Singapore, Malaysia, Australia, Indonesia",
    desc: "Reliable export coordination for regional buyers and expanding Indian businesses.",
  },
  {
    region: "Global Buyers",
    countries: "Worldwide sourcing support",
    desc: "One execution partner for overseas buyers sourcing products from Indian manufacturers.",
  },
];

const capabilities = [
  "Export market guidance",
  "Buyer requirement coordination",
  "Country-wise documentation support",
  "Freight and shipment planning",
  "Packaging and compliance assistance",
  "India sourcing execution",
];

const shippingModes = [
  {
    icon: <FaShip />,
    title: "Sea Freight",
    desc: "Containerized export shipments for bulk cargo and cost-efficient international movement.",
  },
  {
    icon: <FaPlane />,
    title: "Air Freight",
    desc: "Faster shipment coordination for urgent, lightweight, or time-sensitive export requirements.",
  },
  {
    icon: <FaWarehouse />,
    title: "Warehouse Delivery",
    desc: "Coordination from factory pickup to buyer-side warehouse delivery updates.",
  },
];

const ExportsMarket = () => {
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
              Helping Indian Businesses
              <br />
              Reach Global Buyers
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-[#1F2937]/75 mt-8 max-w-3xl mx-auto leading-8"
            >
              We support exporters and overseas buyers across key international
              markets with sourcing coordination, documentation support, freight
              planning, and shipment execution from India.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Market Cards */}
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
            {markets.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  scale: 1.015,
                  boxShadow: "0 30px 80px rgba(15, 23, 42, 0.12)",
                }}
                transition={{ duration: 0.3 }}
                className="group bg-[#F5F0E6] border border-[#E7DFD2] rounded-3xl p-8 shadow-sm"
              >
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.08 }}
                  className="w-16 h-16 rounded-2xl bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center text-3xl mb-6"
                >
                  <FaGlobeAsia />
                </motion.div>

                <h3 className="text-2xl font-black text-[#0F172A] mb-3">
                  {item.region}
                </h3>

                <p className="text-[#0F766E] font-bold mb-4 leading-7">
                  {item.countries}
                </p>

                <p className="text-[#1F2937]/75 leading-7">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image Section */}
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
              src="/export-market.jpg"
              alt="Shipping containers for export markets"
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
            <p className="uppercase tracking-[6px] text-[#0F766E] font-bold mb-5">
              Market Support
            </p>

            <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight">
              From Indian factories to international warehouses.
            </h2>

            <p className="text-[#1F2937]/75 text-lg leading-8 mt-6">
              Every export market has different documentation, packaging,
              shipping, and buyer communication expectations. We help simplify
              the process by coordinating the operational details required to
              move goods internationally.
            </p>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4 mt-8"
            >
              {capabilities.map((item, index) => (
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

                  <span className="font-semibold text-[#1F2937]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Shipping Modes */}
      <section className="py-24 bg-[#FAF7F2] relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0F766E]/10 rounded-full blur-[140px]"></div>

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
              className="uppercase tracking-[6px] text-[#0F766E] font-bold mb-5"
            >
              Global Movement
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight"
            >
              Export coordination through multiple shipping routes.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {shippingModes.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  scale: 1.015,
                  boxShadow: "0 30px 80px rgba(15, 23, 42, 0.12)",
                }}
                className="bg-[#F5F0E6] border border-[#E7DFD2] rounded-3xl p-8"
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

                <p className="text-[#1F2937]/75 leading-7">
                  {item.desc}
                </p>
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
          <FaMapMarkedAlt className="text-[#5EEAD4] text-5xl mx-auto mb-6" />

          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Looking to Export or Source From India?
          </h2>

          <p className="text-white/75 text-lg mt-6 max-w-3xl mx-auto leading-8">
            Share your target country, product category, and shipment
            requirement. Our team will help you understand the next steps for
            sourcing, documentation, logistics, and execution.
          </p>

          <motion.button
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 bg-[#0F766E] hover:bg-white hover:text-[#0F172A] text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-3 transition"
          >
            Send Market Inquiry
            <FaArrowRight />
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
};

export default ExportsMarket;