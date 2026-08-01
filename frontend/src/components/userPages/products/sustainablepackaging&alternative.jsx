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
    name: "Areca Leaf Plates",
    image: "/sustainable/areca-plates.png",
    desc: "Biodegradable plates made from natural areca leaves.",
    fullDesc:
      "Our premium areca leaf plates are manufactured from naturally fallen areca palm leaves without chemicals or coatings. They are biodegradable, compostable, microwave-safe, and suitable for restaurants, catering businesses, hotels, food chains, and eco-conscious retailers worldwide.",
  },
  {
    name: "Areca Leaf Bowls",
    image: "/sustainable/areca-bowls.png",
    desc: "Eco-friendly disposable serving bowls.",
    fullDesc:
      "Export-quality areca leaf bowls manufactured using natural palm leaves. These bowls are ideal for serving hot and cold foods while providing an environmentally friendly alternative to plastic disposables for food service industries globally.",
  },
  {
    name: "Palm Leaf Plates",
    image: "/sustainable/palm-leaf-plates.png",
    desc: "Natural biodegradable dinner plates.",
    fullDesc:
      "Palm leaf plates are crafted from naturally shed palm leaves and designed for premium dining experiences. They are sturdy, leak-resistant, biodegradable, and widely used by hotels, catering companies, restaurants, and eco-friendly brands worldwide.",
  },
  {
    name: "Palm Leaf Bowls",
    image: "/sustainable/palm-leaf-bowls.png",
    desc: "Sustainable palm leaf serving bowls.",
    fullDesc:
      "Our palm leaf bowls provide an attractive and sustainable alternative to disposable plastic bowls. Available in multiple sizes and finishes, they are suitable for food packaging, takeaway businesses, catering, and retail markets.",
  },
  {
    name: "Jute Bags",
    image: "/sustainable/jute-bags.png",
    desc: "Reusable natural jute shopping bags.",
    fullDesc:
      "We manufacture premium-quality jute shopping bags, promotional bags, grocery bags, and customized printed bags for retailers, supermarkets, exhibitions, gifting companies, and sustainable packaging brands worldwide.",
  },
  {
    name: "Canvas Tote Bags",
    image: "/sustainable/canvas-tote-bags.png",
    desc: "Custom canvas tote bags for brands.",
    fullDesc:
      "Our export-quality canvas tote bags are manufactured using durable cotton canvas fabric and can be customized with logos, branding, colors, and sizes. Suitable for retail brands, promotional campaigns, shopping, and corporate gifting worldwide.",
  },
  {
    name: "Stationary and Paper Goods",
    image: "/sustainable/canvas-tote-bags.png",
    desc: "Eco-friendly notebooks, journals, and paper products.",
    fullDesc:
      "Our sustainable stationery and paper goods collection includes notebooks, journals, planners, greeting cards, gift wrapping papers, and office essentials crafted from high-quality and eco-friendly materials. Designed for businesses, retailers, educational institutions, and corporate gifting, these products can be customized with branding, logos, colors, and packaging to meet international export standards.",
  },
  {
    name: "Banana Fabrics",
    image: "/sustainable/canvas-tote-bags.png",
    desc: "Sustainable textiles made from natural banana fiber.",
    fullDesc:
      "Our premium banana fabric products are crafted from natural banana fibers, offering an eco-friendly and biodegradable alternative to conventional textiles. Known for their durability, unique texture, and sustainable appeal, banana fabrics are ideal for apparel, home furnishings, accessories, and lifestyle products. Available in customized designs, we cater to global brands and buyers seeking environmentally responsible textile solutions.",
  },
];

export default function SustainablePackagingAlternatives() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/sustainable-packaging.png')",
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
            Sustainable Packaging & Alternatives
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-3xl text-lg md:text-xl leading-8 text-white/85"
          >
            Supplying eco-friendly packaging solutions and sustainable
            alternatives from trusted Indian manufacturers for global
            businesses.
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
            Our Sustainable Packaging Range
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-[#4B5563] mt-6 max-w-3xl mx-auto leading-8"
          >
            Explore biodegradable tableware, reusable bags, and sustainable
            packaging products sourced from trusted Indian manufacturers for
            global markets.
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
              Looking for Sustainable Packaging Suppliers in India?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-white/75 mt-6 max-w-3xl mx-auto text-lg leading-8"
            >
              Partner with DRUTO INDIA to source eco-friendly packaging
              products, biodegradable tableware, and reusable bags from verified
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
