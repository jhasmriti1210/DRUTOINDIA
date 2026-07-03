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
    name: "Cotton Casual Wear",
    image: "/textile/cotton-casual.png",
    desc: "Premium cotton apparel for global fashion brands.",
    fullDesc:
      "Premium cotton casual wear sourced from trusted Indian manufacturers for international fashion brands, retailers, and private labels. These products are suitable for everyday fashion, lifestyle collections, and export retail markets.",
  },
  {
    name: "Linen Clothing",
    image: "/textile/linen.png",
    desc: "Breathable linen garments for global markets.",
    fullDesc:
      "High-quality linen clothing crafted for international buyers seeking breathable, premium, and naturally comfortable garments. Suitable for summer collections, resort wear, casual fashion, and lifestyle apparel brands.",
  },
  {
    name: "Sustainable Organic Clothing",
    image: "/textile/organic.png",
    desc: "Eco-friendly apparel made with organic fabrics.",
    fullDesc:
      "Sustainable organic clothing manufactured using eco-conscious materials and responsible production practices. Ideal for ethical fashion brands, sustainable retailers, and buyers focused on environmentally responsible apparel sourcing.",
  },
  {
    name: "Handloom Fabrics",
    image: "/textile/handloom.png",
    desc: "Authentic Indian handloom fabrics.",
    fullDesc:
      "Authentic Indian handloom fabrics showcasing traditional weaving skills and rich craftsmanship. These fabrics are suitable for fashion designers, textile brands, boutique labels, and global buyers looking for handcrafted textile products.",
  },
  {
    name: "Organic Cotton Blank T-Shirts",
    image: "/textile/tshirt.png",
    desc: "100% organic cotton blank t-shirts.",
    fullDesc:
      "100% organic cotton blank t-shirts suitable for private labeling, custom branding, printing, and retail distribution. Available for fashion brands, promotional businesses, and sustainable apparel buyers.",
  },
  {
    name: "Cotton Terry Towels & Hotel Linen",
    image: "/textile/towels.png",
    desc: "Premium towels and hotel linen.",
    fullDesc:
      "Luxury cotton terry towels and hotel linen manufactured for hospitality, resorts, hotels, spas, and international home textile buyers. Products are designed for comfort, durability, and export-quality finishing.",
  },
];

export default function TextileProducts() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/textile.png')",
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
            Textiles, Hand Loom & Apparel
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-3xl text-lg md:text-xl leading-8 text-white/85"
          >
            Supplying premium Indian textiles, apparel, and hand loom products
            to international buyers with quality assurance and global standards.
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
            Our Textile Export Range
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-[#4B5563] mt-6 max-w-3xl mx-auto leading-8"
          >
            Explore premium textiles, sustainable apparel, handloom fabrics,
            cotton garments, and hotel linen sourced from trusted Indian
            manufacturers for global markets.
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
              Looking for Textile Suppliers in India?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-white/75 mt-6 max-w-3xl mx-auto text-lg leading-8"
            >
              Partner with DRUTO INDIA to source premium textile and apparel
              products from verified Indian manufacturers with complete export
              support.
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
