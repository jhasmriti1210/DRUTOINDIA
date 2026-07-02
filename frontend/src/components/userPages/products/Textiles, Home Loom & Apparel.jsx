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
    image: "/products/textile/cotton-casual.jpg",
    desc: "Premium cotton apparel designed for global retail and fashion brands.",
  },
  {
    name: "Linen Clothing",
    image: "/products/textile/linen.jpg",
    desc: "High-quality breathable linen garments crafted for international markets.",
  },
  {
    name: "Sustainable Organic Clothing",
    image: "/products/textile/organic.jpg",
    desc: "Eco-friendly apparel manufactured using certified organic fabrics.",
  },
  {
    name: "Handloom Fabrics",
    image: "/products/textile/handloom.jpg",
    desc: "Authentic Indian handloom fabrics showcasing exceptional craftsmanship.",
  },
  {
    name: "Organic Cotton Blank T-Shirts",
    image: "/products/textile/tshirt.jpg",
    desc: "100% organic cotton blank t-shirts ideal for private labeling and exports.",
  },
  {
    name: "Cotton Terry Towels & Hotel Linen",
    image: "/products/textile/towels.jpg",
    desc: "Luxury towels and hotel linen manufactured to international hospitality standards.",
  },
];

export default function TextileProducts() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/textile.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0F172A]/65" />

        {/* Hero Content */}
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
            Textiles, Home Loom & Apparel
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-3xl text-lg md:text-xl leading-8 text-white/85"
          >
            Supplying premium Indian textiles, apparel, and home loom products
            to international buyers with quality assurance and global standards.
          </motion.p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="py-12 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-['Playfair_Display'] text-4xl font-black text-[#0F172A]">
            Our Textile Export Range
          </h2>

          <p className="text-lg text-[#4B5563] mt-6 max-w-3xl mx-auto leading-8">
            We connect international buyers with trusted Indian manufacturers
            producing premium textiles, sustainable apparel, handloom fabrics,
            hotel linen, and fashion products for global markets.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="pb-8 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#ECE6DA]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#0F172A]">
                    {item.name}
                  </h3>

                  <p className="mt-4 text-[#4B5563] leading-7">{item.desc}</p>

                  <NavLink
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-3 text-[#0F766E] font-semibold hover:gap-4 transition-all"
                  >
                    Enquire Now
                    <FaArrowRight />
                  </NavLink>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-10 bg-[#FAF7F2] ">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[40px] bg-[#10283E] py-20 px-10 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white font-['Playfair_Display']">
              Looking for Textile Suppliers in India?
            </h2>

            <p className="text-white/75 mt-6 max-w-3xl mx-auto text-lg leading-8">
              Partner with DRUTO INDIA to source premium textile and apparel
              products from verified Indian manufacturers with complete export
              support.
            </p>

            <NavLink
              to="/contact"
              className="inline-flex items-center gap-3 mt-10 bg-[#0F766E] hover:bg-white hover:text-[#0F172A] text-white px-8 py-4 rounded-full font-semibold transition"
            >
              Send Inquiry
              <FaArrowRight />
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}
