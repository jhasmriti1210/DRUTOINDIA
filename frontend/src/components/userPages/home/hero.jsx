import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import {
  FaArrowRight,
  FaGlobe,
  FaShip,
  FaBoxOpen,
  FaFileInvoice,
  FaHandshake,
  FaIndustry,
  FaUsers,
  FaCheckCircle,
  FaClipboardCheck,
  FaTruck,
  FaShieldAlt,
  FaWarehouse,
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
const heroImages = ["/img1.png", "/img2.png", "/img3.png", "/img4.png"];
const heroStats = [
  { icon: <FaGlobe />, value: "MSME", text: "Exporter Support" },
  { icon: <FaShip />, value: "End-to-End", text: "Shipment Execution" },
  { icon: <FaBoxOpen />, value: "India", text: "Sourcing Partner" },
];

const services = [
  {
    icon: <FaUsers />,
    title: "Export Management",
    desc: "We work as an export management company for Indian businesses, manufacturers, and individual traders.",
  },
  {
    icon: <FaFileInvoice />,
    title: "Documentation Support",
    desc: "We support export documentation, compliance files, invoices, packing lists, shipping bills, and certificates.",
  },
  {
    icon: <FaShip />,
    title: "India Sourcing",
    desc: "Druto India acts as a dedicated boots-on-the-ground sourcing office for overseas buyers.",
  },
  {
    icon: <FaTruck />,
    title: "Shipment Execution",
    desc: "We coordinate logistics, freight, shipment movement, and delivery through a clear operating process.",
  },
];

const helpCards = [
  {
    id: "msme",
    icon: <FaIndustry />,
    title: "For Indian MSMEs",
    subtitle: "Start selling internationally",
    desc: "We guide Indian manufacturers, MSMEs, individual traders, and product brands with export documentation, logistics coordination, and shipment execution.",
    button: "View MSME Process",
    link: "/msme-buyers",
    points: [
      "Manufacturers",
      "Individual traders",
      "Small businesses",
      "Indian product brands",
    ],
  },
  {
    id: "buyer",
    icon: <FaHandshake />,
    title: "For Overseas Buyers",
    subtitle: "Source from India with one partner",
    desc: "We help overseas buyers source products from India through a dedicated local sourcing office handling supplier coordination, documentation, and shipment updates.",
    button: "View Buyer Process",
    link: "/overseas-buyers",
    points: ["Importers", "Distributors", "Retail buyers", "Sourcing teams"],
  },
];

const processFlows = {
  msme: {
    title: "Process for Indian MSMEs",
    desc: "A clear export support workflow for Indian manufacturers, MSMEs, and individual traders.",
    steps: [
      {
        icon: <FaIndustry />,
        title: "Business Assessment",
        desc: "We understand your product, capacity, packaging, readiness, and target export goals.",
      },
      {
        icon: <FaClipboardCheck />,
        title: "Export Readiness",
        desc: "We guide you through documentation, compliance needs, and export preparation.",
      },
      {
        icon: <FaFileInvoice />,
        title: "Documentation",
        desc: "We coordinate invoices, packing lists, certificates, shipping bills, and required files.",
      },
      {
        icon: <FaShip />,
        title: "Logistics Coordination",
        desc: "We support freight planning, port coordination, customs assistance, and shipment movement.",
      },
      {
        icon: <FaWarehouse />,
        title: "Buyer Delivery",
        desc: "We coordinate updates until the shipment reaches the buyer or destination warehouse.",
      },
    ],
  },

  buyer: {
    title: "Process for Overseas Buyers",
    desc: "A dedicated India sourcing workflow for overseas buyers, importers, distributors, and sourcing teams.",
    steps: [
      {
        icon: <FaUsers />,
        title: "Requirement Collection",
        desc: "We understand your product category, quantity, quality expectations, and delivery needs.",
      },
      {
        icon: <FaIndustry />,
        title: "Supplier Coordination",
        desc: "We work locally with Indian manufacturers, suppliers, traders, and product brands.",
      },
      {
        icon: <FaBoxOpen />,
        title: "Product & Packaging Check",
        desc: "We support product details, packaging requirements, specifications, and buyer-side expectations.",
      },
      {
        icon: <FaFileInvoice />,
        title: "Documentation Support",
        desc: "We coordinate export documents, supplier paperwork, compliance details, and shipment files.",
      },
      {
        icon: <FaShip />,
        title: "Shipment Updates",
        desc: "We act as your India-side sourcing office and coordinate shipment execution updates.",
      },
    ],
  },
};

const whyChoose = [
  "Single execution partner for Indian exporters and overseas buyers",
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
  const [activeProcess, setActiveProcess] = useState("msme");

  const [activeHero, setActiveHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHero((prev) => (prev + 1) % heroImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#FAF7F2] text-[#1F2937] overflow-hidden font-['Inter']">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden ">
        {/* Background Carousel */}
        <div className="absolute inset-0">
          {heroImages.map((img, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{
                opacity: activeHero === index ? 1 : 0,
                scale: activeHero === index ? 1.05 : 1,
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${img})`,
              }}
            />
          ))}
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0F172A]/65"></div>
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/90 via-[#0F172A]/70 to-[#0F172A]/85"></div> */}

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-32 lg:py-36 ">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.9 }}
              className="font-['Playfair_Display'] text-2xl md:text-4xl lg:text-5xl font-black leading-[1.05] text-white mt-6"
            >
              Exporting Indian Manufacturing
              <br />
              with Deep Local Market Expertise
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-['Inter'] text-lg md:text-xl text-white/85 mt-8 max-w-2xl mx-auto leading-8"
            >
              We help Indian MSMEs export globally and enable overseas buyers to
              source from India through one trusted execution partner.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-wrap items-center justify-center gap-5"
            >
              <NavLink
                to="/contact"
                className="font-['Inter'] group bg-[#0F766E] hover:bg-white hover:text-[#0F172A] text-white px-8 py-4 rounded-full font-semibold transition flex items-center gap-3"
              >
                Partner With Us
                <FaArrowRight className="group-hover:translate-x-1 transition" />
              </NavLink>

              <button className="font-['Inter'] border border-white/40 text-white hover:bg-white hover:text-[#0F172A] px-8 py-4 rounded-full font-semibold transition">
                Explore Services
              </button>
            </motion.div>

            <motion.div
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 max-w-5xl mx-auto -mb-24"
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

            {/* Carousel Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveHero(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeHero === index
                      ? "w-8 bg-[#5EEAD4]"
                      : "w-2 bg-white/50 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-10 bg-[#FAF7F2] relative">
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
              className="font-['Playfair_Display'] uppercase tracking-[5px] text-[#0F766E] font-bold mb-4"
            >
              What We Do
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-['Playfair_Display'] text-3xl md:text-5xl font-black text-[#0F172A] leading-tight"
            >
              Export management for Indian businesses and India sourcing for
              overseas buyers.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-['Inter'] text-[#1F2937]/75 text-lg mt-6 leading-8"
            >
              We support manufacturers and individual traders with
              documentation, logistics coordination, and shipment execution
              through a clear operating process. Druto India acts as your
              dedicated boots-on-the-ground sourcing office for foreign buyers.
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

                <h3 className="font-['Playfair_Display'] text-2xl font-black text-[#0F172A] mb-4">
                  {item.title}
                </h3>

                <p className="font-['Inter'] text-[#1F2937]/75 leading-7">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="py-10 bg-[#F5F0E6]">
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
              className="font-['Playfair_Display'] uppercase tracking-[5px] text-[#0F766E] font-bold mb-4"
            >
              Who We Help
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-['Playfair_Display'] text-4xl md:text-6xl font-black text-[#0F172A] leading-tight"
            >
              Built for Indian MSMEs and overseas buyers.
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {helpCards.map((card, index) => (
              <motion.div
                key={card.id}
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

                <p className="font-['Inter'] uppercase tracking-[4px] text-[#0F766E] font-bold mb-3">
                  {card.subtitle}
                </p>

                <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl font-black text-[#0F172A] mb-5">
                  {card.title}
                </h3>

                <p className="font-['Inter'] text-[#1F2937]/75 leading-8 mb-7">
                  {card.desc}
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-8">
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

                <NavLink
                  to={card.link}
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold bg-[#0F172A] text-white hover:bg-[#0F766E] transition"
                >
                  {card.button}
                  <FaArrowRight className="group-hover:translate-x-1 transition" />
                </NavLink>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-10 bg-[#0F172A] text-white relative">
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
              className="font-['Playfair_Display'] uppercase tracking-[5px] text-[#5EEAD4] font-bold mb-4"
            >
              Why Choose Us
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-['Playfair_Display'] text-4xl md:text-6xl font-black leading-tight"
            >
              One execution partner for export growth.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-['Inter'] text-white/75 text-lg mt-6 leading-8"
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
      <section className="py-10 bg-[#FAF7F2]">
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
              className="font-['Playfair_Display'] uppercase tracking-[5px] text-[#0F766E] font-bold mb-4"
            >
              Trust Signals
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-['Playfair_Display'] text-4xl md:text-6xl font-black text-[#0F172A] leading-tight"
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

                <h3 className="font-['Playfair_Display'] text-xl font-black text-[#0F172A] mb-3">
                  {item.title}
                </h3>

                <p className="font-['Inter'] text-[#1F2937]/70 leading-7">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
