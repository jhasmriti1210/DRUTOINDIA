import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Footer from "../../app-layout/footer";

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
    name: "Semi-Precious Gemstones",
    image: "/jewellery/semi-precious-gemstones.png",
    desc: "Premium gemstones for jewellery manufacturing.",
    fullDesc:
      "We source a wide variety of premium semi-precious gemstones including amethyst, citrine, garnet, quartz, topaz, agate, and other natural stones from trusted Indian suppliers. These stones are suitable for jewellery manufacturers, wholesalers, designers, and international retailers seeking consistent quality and export-ready packaging.",
  },
  {
    name: "Fashion Jewellery",
    image: "/jewellery/fashion-jewellery.png",
    desc: "Contemporary jewellery for global fashion brands.",
    fullDesc:
      "Our fashion jewellery collection includes modern necklaces, earrings, bracelets, pendants, bangles, and rings manufactured with premium finishes. Products are available for private labeling, OEM manufacturing, and international retail supply.",
  },
  {
    name: "Imitation Jewellery",
    image: "/jewellery/imitation-jewellery.png",
    desc: "High-quality imitation jewellery collections.",
    fullDesc:
      "Export-quality imitation jewellery crafted with precision and premium plating finishes. Our range includes bridal jewellery, party wear, ethnic collections, western styles, and designer jewellery for wholesalers and global retailers.",
  },
  {
    name: "Beaded Jewellery",
    image: "/jewellery/beaded-jewellery.png",
    desc: "Handcrafted beaded jewellery accessories.",
    fullDesc:
      "Beautiful handcrafted beaded necklaces, bracelets, earrings, and fashion accessories created by skilled Indian artisans. These products combine traditional craftsmanship with contemporary designs suitable for international lifestyle markets.",
  },
  {
    name: "Silver-Plated Jewellery",
    image: "/jewellery/silver-plated-jewellery.png",
    desc: "Elegant silver-plated jewellery pieces.",
    fullDesc:
      "Premium silver-plated jewellery designed for fashion brands and retailers. The collection includes necklaces, rings, bracelets, earrings, pendants, and customized designs manufactured to international quality standards.",
  },
  {
    name: "Jewellery Components & Accessories",
    image: "/jewellery/jewellery-components.png",
    desc: "Components and findings for jewellery makers.",
    fullDesc:
      "We also supply jewellery findings, chains, clasps, hooks, connectors, beads, settings, and accessories for manufacturers, wholesalers, designers, and private label brands across international markets.",
  },
];

export default function JewelleryProducts() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/jewellery.png')",
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
            Semi-Precious Stones & Imitation Jewellery
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-3xl text-lg md:text-xl leading-8 text-white/85"
          >
            Supplying premium semi-precious gemstones and imitation jewellery
            from trusted Indian manufacturers to wholesalers, retailers, and
            global brands.
          </motion.p>
        </motion.div>
      </section>

      {/* INTRO */}
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
            Our Jewellery Export Range
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-[#4B5563] mt-6 max-w-3xl mx-auto leading-8"
          >
            Explore semi-precious gemstones, imitation jewellery, fashion
            accessories, and handcrafted jewellery sourced from trusted Indian
            manufacturers for global markets.
          </motion.p>
        </motion.div>
      </section>

      {/* PRODUCTS */}
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
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src={item.image}
                  alt={item.name}
                  className="w-full h-72 object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#0F172A]">
                    {item.name}
                  </h3>

                  <p className="mt-3 text-[#4B5563] leading-7">{item.desc}</p>

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

      {/* POPUP */}
      {selectedProduct && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#0F172A]/70 backdrop-blur-sm flex items-center justify-center px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedProduct(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#FAF7F2] rounded-[32px] max-w-3xl w-full overflow-hidden shadow-2xl"
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white text-[#0F172A] flex items-center justify-center shadow-md hover:bg-[#0F766E] hover:text-white transition"
            >
              ×
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
                {selectedProduct.fullDesc}
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

      {/* CTA */}
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
              Looking for Jewellery Suppliers in India?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-white/75 mt-6 max-w-3xl mx-auto text-lg leading-8"
            >
              Partner with DRUTO INDIA to source semi-precious stones, imitation
              jewellery, and fashion accessories from verified Indian
              manufacturers with complete export support.
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
