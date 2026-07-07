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

const legalItems = [
  "Registered Business",
  "GST Compliant",
  "Export Documentation Support",
  "Professional Trade Operations",
];

const About = () => {
  return (
    <main className="bg-[#FAF7F2] text-[#1F2937] font-['Inter'] overflow-hidden">
      {/* FOUNDER STORY */}
      <section className="py-14 sm:py-16 md:py-20 lg:py-20 bg-[#F5F0E6] relative mt-20">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-20 items-center">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative flex justify-center pb-12 lg:pb-0"
            >
              <div className="relative w-full max-w-md">
                <motion.img
                  src="/founder.png"
                  alt="Founder"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-auto rounded-[30px] shadow-2xl object-cover"
                />

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0 bg-white rounded-2xl shadow-xl border border-[#E7DFD2] px-6 py-5 w-[88%] lg:w-[85%]"
                >
                  <p className="uppercase tracking-[3px] text-[#0F766E] text-xs font-bold">
                    Our Purpose
                  </p>

                  <h3 className="font-['Playfair_Display'] text-xl font-black text-[#0F172A] mt-2">
                    Simplifying Export Growth
                  </h3>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
            >
              <motion.p
                variants={fadeUp}
                className="font-['Playfair_Display'] uppercase tracking-[3px] sm:tracking-[5px] md:tracking-[6px] text-[#0F766E] font-bold mb-4 sm:mb-5 text-sm sm:text-base"
              >
                A MESSAGE FROM OUR FOUNDER
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-[#0F172A] mb-6"
              >
                ABHISHEK ANAND
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-lg leading-8 text-[#4B5563] mb-6"
              >
                Global trade should not be limited by trust gaps or complex
                documentation. I founded Druto India to provide confidence for
                international buyers and a reliable roadmap for Indian MSMEs.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-lg leading-8 text-[#4B5563]"
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

      {/* OUR REALISATION */}
      <section className="bg-[#F5F0E6]">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          src="/realisation.png"
          alt="Our Realisation"
          className="w-full min-h-screen object-cover"
        />
      </section>

      {/* OUR REALISATION */}
      <section className="bg-[#F5F0E6]">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          src="/trustdeplicit.png"
          alt="Our Realisation"
          className="w-full min-h-screen object-cover"
        />
      </section>

      {/* OUR REALISATION */}
      <section className="bg-[#F5F0E6]">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          src="/techsolution.png"
          alt="Our Realisation"
          className="w-full min-h-screen object-cover"
        />
      </section>
      {/* LEGAL STATUS IMAGE */}
      <section className="bg-[#F5F0E6] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.img
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            src="/legalstatus.png"
            alt="Legal Status"
            className="w-full rounded-[32px] shadow-2xl object-contain"
          />
        </div>
      </section>
    </main>
  );
};

export default About;
