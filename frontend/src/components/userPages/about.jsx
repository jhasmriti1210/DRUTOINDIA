import { motion } from "framer-motion";
import {
  FaBullseye,
  FaHandshake,
  FaShieldAlt,
  FaGlobe,
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

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const values = [
  {
    icon: <FaHandshake />,
    title: "Trust",
    desc: "Building long-term relationships through transparent communication and reliable execution.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Compliance",
    desc: "Supporting documentation, export procedures, and international trade requirements.",
  },
  {
    icon: <FaGlobe />,
    title: "Global Reach",
    desc: "Helping Indian businesses access international markets and buyers.",
  },
  {
    icon: <FaBullseye />,
    title: "Execution",
    desc: "Managing every stage from onboarding and documentation to shipment coordination.",
  },
];

const legalItems = [
  "Registered Business",
  "GST Compliant",
  "Export Documentation Support",
  "Professional Trade Operations",
];

const About = () => {
  return (
    <main className="bg-[#FAF7F2] text-[#1F2937] font-['Inter'] overflow-hidden">

      {/* Hero */}
      <section className="pt-40 pb-24 relative">
        <div className="absolute top-24 right-0 w-96 h-96 bg-[#0F766E]/10 rounded-full blur-[130px]"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0F172A]/5 rounded-full blur-[140px]"></div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-7xl mx-auto px-6 relative z-10"
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="uppercase tracking-[6px] text-[#0F766E] font-bold mb-5"
            >
              About Us
            </motion.p>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-black text-[#0F172A] leading-tight"
            >
              Helping Businesses
              <br />
              Trade Beyond Borders
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.9 }}
              className="text-lg text-[#1F2937]/75 mt-8 leading-8 max-w-3xl mx-auto"
            >
              We support Indian manufacturers, MSMEs, exporters, and
              international buyers through structured export management,
              documentation support, logistics coordination, and shipment
              execution.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Founder Story */}
      <section className="py-24 bg-[#F5F0E6] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-[0_24px_70px_rgba(15,23,42,0.12)] border border-[#E7DFD2]">
                <motion.img
                  src="/founder.jpg"
                  alt="Founder"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-[550px] object-cover"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  opacity: { duration: 0.7 },
                  y: { duration: 4, repeat: Infinity },
                }}
                viewport={{ once: true }}
                className="absolute -bottom-8 left-8 bg-[#FAF7F2] border border-[#E7DFD2] rounded-2xl shadow-xl p-6 max-w-xs"
              >
                <p className="uppercase tracking-[3px] text-[#0F766E] font-bold text-sm">
                  Our Purpose
                </p>

                <h3 className="text-2xl font-black text-[#0F172A] mt-2">
                  Simplifying Export Growth
                </h3>
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.p
                variants={fadeUp}
                className="uppercase tracking-[6px] text-[#0F766E] font-bold mb-5"
              >
                Founder Story
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="text-4xl md:text-5xl font-black text-[#0F172A] mb-6"
              >
                Why We Started
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-[#1F2937]/75 leading-8 mb-6"
              >
                Many Indian businesses produce quality products but face
                challenges when entering international markets due to
                documentation requirements, logistics complexities, buyer
                communication, and export processes.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-[#1F2937]/75 leading-8"
              >
                Our goal is to simplify international trade by providing a
                structured approach that helps businesses navigate export
                operations while helping overseas buyers source products from
                India through a trusted execution partner.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 relative">
        <div className="absolute left-0 bottom-10 w-96 h-96 bg-[#0F172A]/5 rounded-full blur-[140px]"></div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-5xl mx-auto px-6 text-center relative z-10"
        >
          <motion.p
            variants={fadeUp}
            className="uppercase tracking-[6px] text-[#0F766E] font-bold mb-5"
          >
            Our Mission
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-6xl font-black text-[#0F172A] leading-tight"
          >
            Making Global Trade More Accessible
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-xl text-[#1F2937]/75 mt-8 leading-9"
          >
            To help Indian businesses expand internationally and help global
            buyers source products from India through reliable onboarding,
            documentation support, logistics coordination, and shipment
            execution.
          </motion.p>
        </motion.div>
      </section>

      {/* Legal Status */}
      <section className="py-24 bg-[#F5F0E6]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="uppercase tracking-[6px] text-[#0F766E] font-bold mb-5"
            >
              Legal Status
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black text-[#0F172A]"
            >
              Operating With Transparency
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {legalItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  scale: 1.015,
                  boxShadow: "0 24px 70px rgba(15, 23, 42, 0.1)",
                }}
                transition={{ duration: 0.3 }}
                className="bg-[#FAF7F2] rounded-3xl border border-[#E7DFD2] p-8 shadow-sm"
              >
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.08 }}
                  className="w-14 h-14 rounded-2xl bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center mb-5"
                >
                  <FaCheckCircle className="text-2xl" />
                </motion.div>

                <h3 className="text-xl font-black text-[#0F172A]">
                  {item}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative">
        <div className="absolute right-0 top-10 w-96 h-96 bg-[#0F766E]/10 rounded-full blur-[140px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="uppercase tracking-[6px] text-[#0F766E] font-bold mb-5"
            >
              Core Values
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black text-[#0F172A]"
            >
              Principles That Guide Us
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  scale: 1.015,
                  boxShadow: "0 24px 70px rgba(15, 23, 42, 0.12)",
                }}
                transition={{ duration: 0.3 }}
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

    </main>
  );
};

export default About;