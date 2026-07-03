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
    name: "Turmeric",
    image: "/spices/turmeric.png",
    desc: "Premium Indian turmeric for global markets.",
    fullDesc:
      "Our export-quality turmeric is sourced from trusted Indian farms and processed under strict quality standards. Available in whole fingers, powder, and customized packaging, it is widely used in food processing, wellness, nutraceutical, and retail markets worldwide.",
  },
  {
    name: "Cardamom",
    image: "/spices/cardamom.png",
    desc: "Premium green cardamom with rich aroma.",
    fullDesc:
      "We supply premium Indian green cardamom carefully graded for size, aroma, freshness, and export quality. It is suitable for spice brands, food manufacturers, wholesalers, retail packaging, and international distributors.",
  },
  {
    name: "Organic Tea",
    image: "/spices/organic-tea.png",
    desc: "Organic Indian tea for international buyers.",
    fullDesc:
      "Our organic tea range includes black tea, green tea, herbal infusions, and specialty blends sourced from trusted Indian tea producers. Products can be supplied in bulk, private label, and retail-ready packaging formats.",
  },
  {
    name: "Speciality Coffee",
    image: "/spices/speciality-coffee.png",
    desc: "Premium Indian speciality coffee.",
    fullDesc:
      "We source speciality Indian coffee from leading coffee-growing regions. Available as green beans, roasted beans, or ground coffee, it is suitable for cafés, premium retailers, distributors, and private-label brands.",
  },
  {
    name: "Packaged Traditional Foods",
    image: "/spices/traditional-foods.png",
    desc: "Authentic Indian packaged food products.",
    fullDesc:
      "Our packaged traditional food range includes snacks, spice mixes, ready-to-eat foods, pickles, sweets, instant foods, and regional Indian specialties manufactured for global retail and international food markets.",
  },
  {
    name: "Superfoods",
    image: "/spices/superfoods.png",
    desc: "Nutrient-rich Indian superfoods.",
    fullDesc:
      "We source Indian superfoods such as moringa, millet products, chia seeds, flax seeds, quinoa, amaranth, and other wellness-focused products suitable for health food brands, nutrition companies, and global retailers.",
  },
];

export default function SpicesSuperfoodsWellness() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/spices.png')",
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
            Spices, Superfoods & Wellness
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-3xl text-lg md:text-xl leading-8 text-white/85"
          >
            Supplying premium Indian spices, tea, coffee, superfoods, and
            packaged traditional foods to international buyers.
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
            Our Spices & Food Export Range
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-[#4B5563] mt-6 max-w-3xl mx-auto leading-8"
          >
            Explore turmeric, cardamom, organic tea, speciality coffee,
            superfoods, and packaged traditional foods sourced from trusted
            Indian suppliers for global markets.
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
              Looking for Spices & Food Suppliers in India?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-white/75 mt-6 max-w-3xl mx-auto text-lg leading-8"
            >
              Partner with DRUTO INDIA to source Indian spices, organic tea,
              speciality coffee, superfoods, and packaged traditional foods from
              verified suppliers with complete export support.
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
