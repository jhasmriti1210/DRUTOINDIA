import { motion } from "framer-motion";

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
    transition: { staggerChildren: 0.14 },
  },
};

const storyImages = [
  {
    src: "/realisation.png",
    alt: "Our Realisation",
  },
  {
    src: "/trustdeplicit.png",
    alt: "Trust Deficit",
  },
  {
    src: "/techsolution.png",
    alt: "Tech Enabled Solution",
  },
];

const About = () => {
  return (
    <main className="bg-[#F5F0E6] text-[#1F2937] font-['Inter'] overflow-hidden">
      {/* FOUNDER STORY */}
      <section className="pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-16 lg:pb-20 bg-[#F5F0E6]">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative flex justify-center pb-12 lg:pb-0"
            >
              <div className="relative w-full max-w-[340px] sm:max-w-[420px]">
                <motion.img
                  src="/founder.png"
                  alt="Founder"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-auto rounded-[26px] sm:rounded-[30px] shadow-2xl object-contain"
                />

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="absolute -bottom-7 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0 bg-white rounded-2xl shadow-xl border border-[#E7DFD2] px-5 py-4 sm:px-6 sm:py-5 w-[90%] lg:w-[85%]"
                >
                  <p className="uppercase tracking-[3px] text-[#0F766E] text-[11px] sm:text-xs font-bold">
                    Our Purpose
                  </p>

                  <h3 className="font-['Playfair_Display'] text-lg sm:text-xl font-black text-[#0F172A] mt-2">
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
                className="font-['Playfair_Display'] uppercase tracking-[3px] sm:tracking-[5px] text-[#0F766E] font-bold mb-4 text-sm sm:text-base"
              >
                A Message From Our Founder
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="font-['Playfair_Display'] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-[#0F172A] mb-6"
              >
                ABHISHEK ANAND
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-base sm:text-lg leading-7 sm:leading-8 text-[#4B5563] mb-6"
              >
                Global trade should not be limited by trust gaps or complex
                documentation. I founded Druto India to provide confidence for
                international buyers and a reliable roadmap for Indian MSMEs.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-base sm:text-lg leading-7 sm:leading-8 text-[#4B5563]"
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

      {/* STORY IMAGES */}
      <section className="bg-[#F5F0E6] py-10 sm:py-12 lg:py-16 space-y-10 sm:space-y-12 lg:space-y-16">
        {storyImages.map((item) => (
          <div key={item.src} className="w-full px-3 sm:px-6 lg:px-8">
            <motion.img
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              src={item.src}
              alt={item.alt}
              className="w-full h-auto max-h-[760px] object-contain rounded-[20px] sm:rounded-[28px] lg:rounded-[34px] shadow-[0_18px_60px_rgba(15,23,42,0.16)] bg-[#F5F0E6]"
            />
          </div>
        ))}
      </section>

      {/* LEGAL STATUS IMAGE */}
      <section className="bg-[#F5F0E6] py-10 sm:py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.img
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            src="/legalstatus.png"
            alt="Legal Status"
            className="w-full h-auto object-contain rounded-[20px] sm:rounded-[28px] lg:rounded-[32px] shadow-2xl"
          />
        </div>
      </section>
    </main>
  );
};

export default About;
