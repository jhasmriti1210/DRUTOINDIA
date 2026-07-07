import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  FaArrowRight,
  FaBuilding,
  FaGlobe,
  FaScaleBalanced,
} from "react-icons/fa6";

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  show: { opacity: 1, y: 0 },
};

const categories = [
  {
    title: "DRUTO Updates",
    desc: "Latest announcements, company updates, and official DRUTO INDIA news.",
    path: "/news/druto",
    icon: <FaBuilding />,
  },
  {
    title: "Industry News",
    desc: "Export-import business updates, trade trends, logistics, and market insights.",
    path: "/news/industry",
    icon: <FaGlobe />,
  },
  {
    title: "Rules & Regulations",
    desc: "Export policies, import rules, compliance updates, and trade regulations.",
    path: "/news/rules",
    icon: <FaScaleBalanced />,
  },
];

export default function Blog() {
  return (
    <main className="bg-[#FAF7F2] min-h-screen font-['Inter']">
      <section
        className="relative min-h-[75vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/blog-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0F172A]/70" />

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white pt-24"
        >
          <motion.p
            variants={fadeUp}
            className="uppercase tracking-[6px] text-[#5EEAD4] font-bold mb-5"
          >
            Blog & News
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
          >
            Insights, Updates & Trade Knowledge
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 text-white/80 text-base sm:text-lg md:text-xl leading-8 max-w-3xl mx-auto"
          >
            Explore DRUTO INDIA updates, export-import industry news, and
            important rules & regulations for global trade.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="uppercase tracking-[5px] text-[#0F766E] font-bold">
              Choose Category
            </p>

            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] mt-4">
              What Would You Like to Read?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <NavLink
                  to={item.path}
                  className="group block h-full bg-white border border-[#E7DFD2] rounded-[32px] p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center text-3xl mb-7 group-hover:bg-[#0F766E] group-hover:text-white transition">
                    {item.icon}
                  </div>

                  <h3 className="font-['Playfair_Display'] text-2xl font-black text-[#0F172A]">
                    {item.title}
                  </h3>

                  <p className="text-[#4B5563] mt-4 leading-7">{item.desc}</p>

                  <span className="mt-8 inline-flex items-center gap-3 text-[#0F766E] font-semibold group-hover:gap-5 transition-all">
                    View News
                    <FaArrowRight />
                  </span>
                </NavLink>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
