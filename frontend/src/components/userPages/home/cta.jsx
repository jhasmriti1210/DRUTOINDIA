import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

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

const CTA = () => {
  return (
    <section className="py-16 bg-[#FAF7F2] overflow-hidden font-['Inter'] relative">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#0F766E]/10 rounded-full blur-[140px]"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0F172A]/10 rounded-full blur-[140px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative">

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative rounded-[40px] bg-[#0F172A] p-10 md:p-16 lg:p-20 overflow-hidden shadow-[0_30px_100px_rgba(15,23,42,0.25)]"
        >

          {/* Decorative Circle */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="absolute top-10 right-10 w-48 h-48 border border-white/10 rounded-full hidden lg:block"
          />

          {/* Heading */}
          <div className="max-w-5xl mx-auto text-center relative z-10">

            <motion.p
              variants={fadeUp}
              className="uppercase tracking-[6px] text-[#5EEAD4] font-bold mb-5"
            >
              Start Your Global Trade Journey
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
            >
              Ready to Export From India
              <br />
              or Source Products Globally?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-white/75 text-lg md:text-xl mt-8 leading-8 max-w-3xl mx-auto"
            >
              Whether you're an Indian manufacturer entering international
              markets or an overseas buyer sourcing from India, we simplify
              onboarding, documentation, logistics coordination, and shipment
              execution from start to finish.
            </motion.p>

          </div>

          {/* Service Highlights */}
          <motion.div
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mt-14 relative z-10"
          >
            {[
              "Exporter Onboarding",
              "Documentation Support",
              "Logistics Coordination",
              "Shipment Execution",
              "Buyer Assistance",
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                }}
                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-5 flex items-center gap-3"
              >
                <FaCheckCircle className="text-[#5EEAD4]" />

                <span className="text-white text-sm font-medium">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-5 mt-14 relative z-10"
          >
            <button className="group bg-[#0F766E] hover:bg-white hover:text-[#0F172A] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300">
              Request Consultation

              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </button>

            <button className="border border-white/20 hover:bg-white hover:text-[#0F172A] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
              Get a Quote
            </button>
          </motion.div>

          {/* Bottom Trust Line */}
          <motion.div
            variants={fadeUp}
            className="mt-16 pt-8 border-t border-white/10 text-center relative z-10"
          >
            <p className="text-white/60 text-sm md:text-base max-w-4xl mx-auto leading-7">
              Helping Indian manufacturers, exporters, MSMEs, distributors,
              and international buyers navigate sourcing, export documentation,
              freight planning, customs coordination, and shipment execution
              with confidence.
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default CTA;