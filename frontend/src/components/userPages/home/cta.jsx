import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const highlights = [
  "Exporter Onboarding",
  "Documentation Support",
  "Logistics Coordination",
  "Shipment Execution",
  "Buyer Assistance",
];

const CTA = () => {
  return (
    <section className=" bg-[#FAF7F2] overflow-hidden font-['Inter'] relative mb-10">
      {/* RECOGNITIONS */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative overflow-hidden rounded-[36px] bg-[#0F172A] border border-white/10 shadow-[0_30px_90px_rgba(15,23,42,0.22)] px-6 sm:px-10 lg:px-14 py-12"
        >
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#0F766E]/30 rounded-full blur-[120px]" />
          <div className="absolute -bottom-28 -right-24 w-80 h-80 bg-[#F5F0E6]/10 rounded-full blur-[120px]" />

          <div className="relative z-10 grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
            <div>
              <motion.p
                variants={fadeUp}
                className="font-['Playfair_Display'] uppercase tracking-[5px] text-[#5EEAD4] font-bold mb-4"
              >
                Recognized By
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="font-['Playfair_Display'] text-3xl md:text-5xl font-black text-white leading-tight"
              >
                Government Recognitions
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-white/70 mt-5 leading-8 max-w-xl"
              >
                DRUTO INDIA is recognized under Startup India and registered as
                an Udyam enterprise, reflecting our commitment to transparent,
                compliant, and professional trade operations.
              </motion.p>
            </div>

            <motion.div
              variants={stagger}
              className="grid sm:grid-cols-2 gap-6"
            >
              {[
                {
                  title: "Startup India",
                  subtitle: "DPIIT Recognition",
                  logo: "/dpiit.png",
                  link: "/startuppdf.pdf",
                },
                {
                  title: "Udyam Registration",
                  subtitle: "MSME Registered Enterprise",
                  logo: "/udyam.png",
                  link: "/MSME-DRUTO.pdf",
                },
              ].map((item) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group bg-white rounded-[30px] border border-white/10 p-7 shadow-xl"
                >
                  <div className="h-36 sm:h-40 flex items-center justify-center bg-[#FAF7F2] rounded-3xl px-6">
                    <img
                      src={item.logo}
                      alt={item.title}
                      className="max-h-28 sm:max-h-32 max-w-[90%] object-contain group-hover:scale-105 transition"
                    />
                  </div>

                  {/* <h3 className="mt-6 font-['Playfair_Display'] text-2xl font-black text-[#0F172A]">
                    {item.title}
                  </h3>

                  <p className="text-[#4B5563] mt-2 text-sm">{item.subtitle}</p> */}

                  <span className="mt-5 inline-flex items-center gap-2 text-[#0F766E] font-semibold group-hover:gap-3 transition-all">
                    View Certificate
                    <FaArrowRight className="text-sm" />
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 w-96 h-72 bg-[#0F766E]/10 rounded-full blur-[140px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-72 bg-[#0F172A]/10 rounded-full blur-[140px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative rounded-[40px] bg-[#0F172A] p-10 md:p-16 lg:p-20 overflow-hidden shadow-[0_30px_100px_rgba(15,23,42,0.25)]"
        >
          {/* Left Bubble */}
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-10 left-10 w-48 h-48 border border-white/10 rounded-full hidden lg:block"
          />

          {/* Right Bubble */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-10 right-10 w-48 h-48 border border-white/10 rounded-full hidden lg:block"
          />

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.p
              variants={fadeUp}
              className="font-['Playfair_Display'] uppercase tracking-[6px] text-[#5EEAD4] font-bold mb-5"
            >
              Start Your Export Journey
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight"
            >
              Ready to Export From India
              <br />
              or Source Products From India?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-['Inter'] text-white/75 text-lg md:text-xl mt-8 leading-8 max-w-3xl mx-auto"
            >
              Whether you are an Indian MSME preparing to enter international
              markets or an overseas buyer sourcing products from India, we help
              with onboarding, documentation, logistics coordination, and
              shipment execution from start to finish.
            </motion.p>
          </div>

          <motion.div
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mt-14 relative z-10"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.03 }}
                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-5 flex items-center gap-3"
              >
                <FaCheckCircle className="text-[#5EEAD4] shrink-0" />
                <span className="text-white text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-5 mt-14 relative z-10"
          >
            <NavLink
              to="/contact"
              className="font-['Inter'] group bg-[#0F766E] hover:bg-white hover:text-[#0F172A] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300"
            >
              Discuss Your Requirements
              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </NavLink>

            <a
              href={`mailto:info@drutoindia.com?subject=Business Inquiry&body=Hello Druto India Team,%0D%0A%0D%0AI would like to discuss my sourcing/export requirements.%0D%0A%0D%0AName:%0D%0ACompany:%0D%0ACountry:%0D%0ARequirement:%0D%0A`}
              className="font-['Inter'] border border-white/20 hover:bg-white hover:text-[#0F172A] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center"
            >
              Send Inquiry
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-16 pt-8 border-t border-white/10 text-center relative z-10"
          >
            <p className="font-['Inter'] text-white/60 text-sm md:text-base max-w-4xl mx-auto leading-7">
              Helping Indian MSMEs, manufacturers, exporters, distributors, and
              overseas buyers navigate sourcing, export documentation, freight
              planning, customs coordination, and shipment execution with
              confidence.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
