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
    name: "Handmade Carpets",
    image: "/handicrafts/carpets.png",
    desc: "Premium handmade carpets for interiors.",
    fullDesc:
      "Premium handmade carpets crafted by skilled Indian artisans for residential, hospitality, and commercial interiors worldwide. These carpets combine traditional weaving techniques with export-ready finishing and quality standards.",
  },
  {
    name: "Handcrafted Rugs",
    image: "/handicrafts/rugs.png",
    desc: "Traditional and contemporary handcrafted rugs.",
    fullDesc:
      "Elegant handcrafted rugs featuring traditional Indian weaving techniques and contemporary designs for global markets. Suitable for home décor brands, retailers, interior studios, and hospitality buyers.",
  },
  {
    name: "Wooden Handicrafts",
    image: "/handicrafts/wooden-handicrafts.png",
    desc: "Handcrafted wooden décor and utility products.",
    fullDesc:
      "Beautiful handcrafted wooden décor, gift items, and utility products showcasing India's rich craftsmanship. These products are ideal for lifestyle stores, gifting brands, and global home décor buyers.",
  },
  {
    name: "Brassware",
    image: "/handicrafts/brassware.png",
    desc: "Decorative brassware and handcrafted artifacts.",
    fullDesc:
      "High-quality brass decorative items, home accessories, and handcrafted artifacts manufactured for international buyers. This range includes premium décor pieces, traditional brass items, and artisan-made home accessories.",
  },
  {
    name: "Religious Artifacts",
    image: "/handicrafts/religious-artifacts.png",
    desc: "Traditional spiritual and cultural artifacts.",
    fullDesc:
      "Traditional handcrafted idols, temple décor, and spiritual artifacts reflecting India's cultural heritage. These products are suitable for religious stores, cultural gifting, and Indian diaspora markets.",
  },
  {
    name: "Festive Décor & Artifacts",
    image: "/handicrafts/festive-artifacts.png",
    desc: "Handcrafted festive and cultural décor items.",
    fullDesc:
      "Handcrafted festive decorations and cultural décor items designed for global retail and gifting markets. These products bring Indian craftsmanship, tradition, and celebration-focused design to international buyers.",
  },
  {
    name: "Ceramic & Pottery",
    image: "/handicrafts/festive-artifacts.png",
    desc: "Handcrafted ceramic and pottery products with artistic designs.",
    fullDesc:
      "Our handcrafted ceramic and pottery collection showcases traditional Indian artistry combined with contemporary designs. From decorative vases and tableware to customized pottery pieces, these products are crafted with quality materials and skilled craftsmanship. Ideal for home décor, hospitality, gifting, and global retail markets.",
  },
  {
    name: "Decorative Lighting",
    image: "/handicrafts/festive-artifacts.png",
    desc: "Artistic handcrafted lighting for elegant spaces.",
    fullDesc:
      "Our decorative lighting range features handcrafted lamps, lanterns, and artistic light fixtures designed to enhance residential and commercial spaces. Combining traditional craftsmanship with modern aesthetics, these sustainable and stylish lighting solutions are suitable for interior designers, retailers, hospitality projects, and export markets worldwide.",
  },
  {
    name: "Soft Furnishing",
    image: "/handicrafts/festive-artifacts.png",
    desc: "Premium handcrafted textiles for home interiors.",
    fullDesc:
      "Our soft furnishing collection includes handcrafted cushions, throws, curtains, rugs, and textile décor products made with quality fabrics and traditional techniques. Designed for comfort, elegance, and durability, these products can be customized for global home décor brands, hotels, retailers, and lifestyle markets.",
  },
];

export default function HandicraftsHomeDecor() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/handicrafts.png')",
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
            Handicrafts & Home Décor
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-3xl text-lg md:text-xl leading-8 text-white/85"
          >
            Showcasing India's finest handcrafted products, home décor, carpets,
            rugs, brassware, and cultural artifacts for international buyers
            through trusted sourcing and export support.
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
            Our Handicrafts & Home Décor Export Range
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-[#4B5563] mt-6 max-w-3xl mx-auto leading-8"
          >
            Explore export-ready carpets, rugs, wooden handicrafts, brassware,
            religious artifacts, and festive décor sourced from trusted Indian
            manufacturers and artisan communities.
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
              Looking for Handicrafts & Home Décor Suppliers in India?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-white/75 mt-6 max-w-3xl mx-auto text-lg leading-8"
            >
              Partner with DRUTO INDIA to source premium handcrafted products,
              home décor, rugs, carpets, and artisan collections from verified
              Indian manufacturers with complete export support.
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
