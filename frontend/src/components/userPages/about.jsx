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
  hidden: { opacity: 0, x: -40 },
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
      {/* HERO */}
      <section className="relative pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-16 sm:pb-20 md:pb-24">
        <div className="hidden lg:block absolute top-24 right-0 w-96 h-96 bg-[#0F766E]/10 rounded-full blur-[130px]" />
        <div className="hidden lg:block absolute bottom-0 left-0 w-80 h-80 bg-[#0F172A]/5 rounded-full blur-[140px]" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="font-['Playfair_Display'] uppercase tracking-[3px] sm:tracking-[5px] md:tracking-[6px] text-[#0F766E] font-bold mb-4 sm:mb-5 text-sm sm:text-base"
            >
              About Us
            </motion.p>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-[#0F172A] leading-tight"
            >
              Helping Businesses
              <br className="hidden sm:block" />
              Trade Beyond Borders
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.9 }}
              className="font-['Playfair_Display'] text-base sm:text-lg md:text-xl text-[#1F2937]/75 mt-6 sm:mt-8 leading-7 sm:leading-8 max-w-3xl mx-auto"
            >
              We support Indian manufacturers, MSMEs, exporters, and
              international buyers through structured export management,
              documentation support, logistics coordination, and shipment
              execution.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* FOUNDER STORY */}
      <section className="py-14 sm:py-16 md:py-20 lg:py-10 bg-[#F5F0E6] relative">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-14 lg:gap-16 items-center">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.25 }}
              className="relative pb-16 sm:pb-10 lg:pb-0"
            >
              <div className="rounded-3xl overflow-hidden ">
                <motion.img
                  src="/founder.png"
                  alt="Founder"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-auto max-h-[620px] object-contain"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  opacity: { duration: 0.7 },
                  y: { duration: 4, repeat: Infinity },
                }}
                viewport={{ once: true }}
                className="absolute left-4 right-4 sm:left-8 sm:right-auto -bottom-1 sm:-bottom-8 bg-[#FAF7F2] border border-[#E7DFD2] rounded-2xl shadow-xl p-5 sm:p-6 w-[calc(100%-2rem)] sm:w-auto sm:max-w-xs"
              >
                <p className="font-['Playfair_Display'] uppercase tracking-[3px] text-[#0F766E] font-bold text-xs sm:text-sm">
                  Our Purpose
                </p>

                <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl font-black text-[#0F172A] mt-2">
                  Simplifying Export Growth
                </h3>
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="text-center lg:text-left"
            >
              <motion.p
                variants={fadeUp}
                className="font-['Playfair_Display'] uppercase tracking-[3px] sm:tracking-[5px] md:tracking-[6px] text-[#0F766E] font-bold mb-4 sm:mb-5 text-sm sm:text-base"
              >
                Founder Story
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] mb-5 sm:mb-6"
              >
                Why We Started
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="font-['Playfair_Display'] text-base sm:text-lg text-[#1F2937]/75 leading-7 md:leading-8 mb-5 sm:mb-6"
              >
                Many Indian businesses produce quality products but face
                challenges when entering international markets due to
                documentation requirements, logistics complexities, buyer
                communication, and export processes.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="font-['Playfair_Display'] text-base sm:text-lg text-[#1F2937]/75 leading-7 md:leading-8"
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

      {/* MISSION */}
      <section className="py-14 sm:py-16 md:py-20 lg:py-24 relative">
        <div className="hidden lg:block absolute left-0 bottom-10 w-96 h-96 bg-[#0F172A]/5 rounded-full blur-[140px]" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <motion.p
            variants={fadeUp}
            className="font-['Playfair_Display'] uppercase tracking-[3px] sm:tracking-[5px] md:tracking-[6px] text-[#0F766E] font-bold mb-4 sm:mb-5 text-sm sm:text-base"
          >
            Our Mission
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#0F172A] leading-tight"
          >
            Making Global Trade More Accessible
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-['Playfair_Display'] text-base sm:text-lg md:text-xl text-[#1F2937]/75 mt-6 sm:mt-8 leading-7 sm:leading-8 md:leading-9"
          >
            To help Indian businesses expand internationally and help global
            buyers source products from India through reliable onboarding,
            documentation support, logistics coordination, and shipment
            execution.
          </motion.p>
        </motion.div>
      </section>

      {/* LEGAL STATUS */}
      <section className="py-14 sm:py-16 md:py-20 lg:py-24 bg-[#F5F0E6]">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-4xl mx-auto text-center mb-10 sm:mb-12 md:mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="font-['Playfair_Display'] uppercase tracking-[3px] sm:tracking-[5px] md:tracking-[6px] text-[#0F766E] font-bold mb-4 sm:mb-5 text-sm sm:text-base"
            >
              Legal Status
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A]"
            >
              Operating With Transparency
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6"
          >
            {legalItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                  boxShadow: "0 24px 70px rgba(15, 23, 42, 0.1)",
                }}
                transition={{ duration: 0.3 }}
                className="bg-[#FAF7F2] rounded-3xl border border-[#E7DFD2] p-6 sm:p-8 shadow-sm"
              >
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.08 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center mb-5"
                >
                  <FaCheckCircle className="text-xl sm:text-2xl" />
                </motion.div>

                <h3 className="font-['Playfair_Display'] text-lg sm:text-xl font-black text-[#0F172A]">
                  {item}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-14 sm:py-16 md:py-20 lg:py-24 relative">
        <div className="hidden lg:block absolute right-0 top-10 w-96 h-96 bg-[#0F766E]/10 rounded-full blur-[140px]" />

        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-4xl mx-auto text-center mb-10 sm:mb-12 md:mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="font-['Playfair_Display'] uppercase tracking-[3px] sm:tracking-[5px] md:tracking-[6px] text-[#0F766E] font-bold mb-4 sm:mb-5 text-sm sm:text-base"
            >
              Core Values
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A]"
            >
              Principles That Guide Us
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6"
          >
            {values.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                  boxShadow: "0 24px 70px rgba(15, 23, 42, 0.12)",
                }}
                transition={{ duration: 0.3 }}
                className="bg-[#F5F0E6] border border-[#E7DFD2] rounded-3xl p-6 sm:p-8"
              >
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.08 }}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center text-2xl sm:text-3xl mb-5 sm:mb-6"
                >
                  {item.icon}
                </motion.div>

                <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl font-black text-[#0F172A] mb-3 sm:mb-4">
                  {item.title}
                </h3>

                <p className="font-['Playfair_Display'] text-sm sm:text-base text-[#1F2937]/75 leading-7">
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
