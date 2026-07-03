import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const products = [
  {
    name: "Essential Oils",
    image: "/BEAUTY/essential-oils.png",
    oneLine: "Natural oils for wellness, aromatherapy, and personal care.",
    desc: "Natural essential oils suitable for wellness, aromatherapy, cosmetic formulations, and personal care applications. These oils are sourced from trusted Indian manufacturers with focus on purity, consistency, and export-ready quality.",
  },
  {
    name: "Herbal Supplements",
    image: "/BEAUTY/herbal-supplements.png",
    oneLine: "Herbal wellness products from trusted Indian manufacturers.",
    desc: "Herbal supplements and wellness products made using plant-based ingredients and traditional Indian knowledge. These products are suitable for global wellness brands, distributors, and retail markets.",
  },
  {
    name: "Ayurvedic Formulations",
    image: "/BEAUTY/ayurvedic-formulations.png",
    oneLine: "Traditional Ayurvedic wellness formulations for global buyers.",
    desc: "Traditional Ayurvedic formulations prepared for wellness, healthcare, and global retail markets. DRUTO INDIA helps buyers source these products from verified Indian manufacturers with documentation and export support.",
  },
  {
    name: "Natural Cosmetics",
    image: "/BEAUTY/natural-cosmetics.png",
    oneLine: "Plant-based cosmetic products for beauty markets.",
    desc: "Natural cosmetic products crafted with plant-based ingredients for international beauty and personal care markets. Suitable for brands looking for clean, herbal, and nature-inspired product lines.",
  },
  {
    name: "Personal Care Products",
    image: "/BEAUTY/personal-care.png",
    oneLine: "Export-ready personal care products for global demand.",
    desc: "Personal care products designed for quality, safety, and global consumer demand. These may include skincare, hygiene, grooming, and wellness-focused care products from Indian manufacturers.",
  },
  {
    name: "Ayush Beauty Products",
    image: "/BEAUTY/ayush-beauty.png",
    oneLine: "Ayush-based beauty products with modern packaging.",
    desc: "Ayush-based beauty and personal care products combining Indian wellness traditions with modern packaging and export-ready presentation for global buyers.",
  },
];

export default function AyushBeautyPersonalCare() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/ayush.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0F172A]/65" />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col items-center justify-center h-full w-full max-w-5xl px-6 text-center text-white"
        >
          <motion.h1
            variants={fadeUp}
            className="font-['Playfair_Display'] text-4xl md:text-6xl lg:text-7xl font-black leading-tight mt-28"
          >
            Ayush, Beauty & Personal Care
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-3xl text-lg md:text-xl leading-8 text-white/85"
          >
            Supplying Indian Ayush, beauty, wellness, and personal care products
            to international buyers with quality assurance and export support.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-12 bg-[#FAF7F2]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-['Playfair_Display'] text-4xl font-black text-[#0F172A]"
          >
            Our Ayush & Personal Care Export Range
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-[#4B5563] mt-6 max-w-3xl mx-auto leading-8"
          >
            Explore export-ready Ayush, beauty, wellness, and personal care
            products sourced from verified Indian manufacturers.
          </motion.p>
        </motion.div>
      </section>

      <section className="pb-8 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {products.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#ECE6DA]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-72 object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#0F172A]">
                    {item.name}
                  </h3>

                  <p className="mt-3 text-[#4B5563] leading-7">
                    {item.oneLine}
                  </p>

                  <button
                    onClick={() => setSelectedProduct(item)}
                    className="mt-8 inline-flex items-center gap-3 text-[#0F766E] font-semibold hover:gap-4 transition-all"
                  >
                    Read Description
                    <FaArrowRight />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-[#0F172A]/70 backdrop-blur-sm flex items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[#FAF7F2] rounded-[32px] max-w-3xl w-full overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white text-[#0F172A] flex items-center justify-center shadow-md hover:bg-[#0F766E] hover:text-white transition"
              >
                <FaTimes />
              </button>

              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-8 md:p-10">
                <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl font-black text-[#0F172A]">
                  {selectedProduct.name}
                </h3>

                <p className="mt-5 text-[#4B5563] text-lg leading-8">
                  {selectedProduct.desc}
                </p>

                <NavLink
                  to="/contact"
                  onClick={() => setSelectedProduct(null)}
                  className="mt-8 inline-flex items-center gap-3 bg-[#0F766E] hover:bg-[#0F172A] text-white px-7 py-4 rounded-full font-semibold transition"
                >
                  Enquire Now
                  <FaArrowRight />
                </NavLink>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-10 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-[40px] bg-[#10283E] py-20 px-10 text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-black text-white font-['Playfair_Display']"
            >
              Looking for Ayush & Personal Care Suppliers in India?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-white/75 mt-6 max-w-3xl mx-auto text-lg leading-8"
            >
              Partner with DRUTO INDIA to source Ayush, beauty, wellness, and
              personal care products from verified Indian manufacturers with
              complete export support.
            </motion.p>

            <motion.div variants={fadeUp}>
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-3 mt-10 bg-[#0F766E] hover:bg-white hover:text-[#0F172A] text-white px-8 py-4 rounded-full font-semibold transition"
              >
                Send Inquiry
                <FaArrowRight />
              </NavLink>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
