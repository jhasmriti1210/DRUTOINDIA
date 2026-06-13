import { motion } from "framer-motion";
import { FaBoxOpen, FaCheckCircle, FaArrowRight } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const products = [
  {
    image: "/products/product1.jpg",
    name: "Agricultural Products",
    specification: "Fresh produce, grains, spices, and processed foods.",
    packaging: "Export-grade packaging available.",
    compliance: "International quality standards supported.",
  },
  {
    image: "/products/product2.jpg",
    name: "Textiles & Garments",
    specification: "Fabrics, apparel, home textiles, and fashion products.",
    packaging: "Custom packaging solutions.",
    compliance: "Buyer-specific compliance support.",
  },
  {
    image: "/products/product3.jpg",
    name: "Industrial Components",
    specification: "Engineering parts and manufacturing components.",
    packaging: "Industrial export packaging.",
    compliance: "Technical documentation support.",
  },
  {
    image: "/products/product4.jpg",
    name: "Consumer Goods",
    specification: "Household products and retail-ready goods.",
    packaging: "Retail and wholesale packaging.",
    compliance: "Market-specific requirements supported.",
  },
  {
    image: "/products/product5.jpg",
    name: "Handicrafts & Lifestyle",
    specification: "Decorative, handmade, and artisan products.",
    packaging: "Secure export packaging.",
    compliance: "Country-specific export guidance.",
  },
  {
    image: "/products/product6.jpg",
    name: "Custom Product Sourcing",
    specification: "Products sourced according to buyer requirements.",
    packaging: "Customized packaging options.",
    compliance: "Documentation and sourcing assistance.",
  },
];

const supportItems = [
  "Product Sourcing",
  "Technical Specifications",
  "Packaging Coordination",
  "Export Documentation",
];

const ProductCatalogue = () => {
  return (
    <main className="bg-[#FAF7F2] text-[#1F2937] font-['Inter'] overflow-hidden">
      {/* Hero */}
      <section className="pt-40 pb-24 relative">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#0F766E]/10 rounded-full blur-[130px]"></div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-7xl mx-auto px-6 relative"
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              variants={fadeUp}
              className="font-['Playfair_Display'] text-5xl md:text-7xl font-black text-[#0F172A] leading-tight"
            >
              Products Ready For
              <br />
              Global Markets
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-['Playfair_Display'] text-lg text-[#1F2937]/75 mt-8 max-w-3xl mx-auto leading-8"
            >
              Explore product categories supported through our sourcing,
              documentation, packaging, logistics, and export execution
              services.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section className="pb-28 relative">
        <div className="absolute left-0 bottom-20 w-96 h-96 bg-[#0F172A]/5 rounded-full blur-[140px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  scale: 1.015,
                  boxShadow: "0 30px 80px rgba(15, 23, 42, 0.12)",
                }}
                transition={{ duration: 0.3 }}
                className="group bg-[#F5F0E6] border border-[#E7DFD2] rounded-3xl overflow-hidden shadow-sm"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-64 object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/45 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

                  <div className="font-['Playfair_Display'] absolute top-5 left-5 bg-[#FAF7F2]/90 backdrop-blur-md text-[#0F172A] px-4 py-2 rounded-full text-sm font-bold">
                    Export Ready
                  </div>
                </div>

                <div className="p-8">
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.08 }}
                    className="w-14 h-14 rounded-2xl bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center text-2xl mb-5"
                  >
                    <FaBoxOpen />
                  </motion.div>

                  <h3 className="font-['Playfair_Display'] text-2xl font-black text-[#0F172A] mb-5">
                    {product.name}
                  </h3>

                  <div className="space-y-4">
                    <div className="border-l-2 border-[#0F766E] pl-4">
                      <p className="font-['Playfair_Display'] font-bold text-[#0F172A]">
                        Specification
                      </p>

                      <p className="font-['Playfair_Display'] text-[#1F2937]/75 text-sm mt-1 leading-6">
                        {product.specification}
                      </p>
                    </div>

                    <div className="border-l-2 border-[#0F766E]/50 pl-4">
                      <p className="font-['Playfair_Display'] font-bold text-[#0F172A]">
                        Packaging
                      </p>

                      <p className="font-['Playfair_Display'] text-[#1F2937]/75 text-sm mt-1 leading-6">
                        {product.packaging}
                      </p>
                    </div>

                    <div className="border-l-2 border-[#0F172A]/20 pl-4">
                      <p className="font-['Playfair_Display'] font-bold text-[#0F172A]">
                        Compliance
                      </p>

                      <p className="font-['Playfair_Display'] text-[#1F2937]/75 text-sm mt-1 leading-6">
                        {product.compliance}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Support */}
      <section className="py-24 bg-[#F5F0E6] relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-4xl mx-auto text-center mb-14"
          >
            <motion.p
              variants={fadeUp}
              className="font-['Playfair_Display'] uppercase tracking-[6px] text-[#0F766E] font-bold mb-5"
            >
              Product Support
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-['Playfair_Display'] text-4xl md:text-6xl font-black text-[#0F172A] leading-tight"
            >
              More Than Product Listings
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="font-['Playfair_Display'] text-[#1F2937]/75 text-lg mt-6 leading-8"
            >
              We help buyers and exporters with real product details, supplier
              coordination, packaging planning, documentation, and shipment
              execution.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {supportItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  boxShadow: "0 24px 70px rgba(15, 23, 42, 0.1)",
                }}
                className="bg-[#FAF7F2] border border-[#E7DFD2] rounded-3xl p-7"
              >
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.08 }}
                  className="w-14 h-14 rounded-2xl bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center mb-5"
                >
                  <FaCheckCircle className="text-2xl" />
                </motion.div>

                <h3 className="font-['Playfair_Display'] text-xl font-black text-[#0F172A]">
                  {item}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0F766E]/20 rounded-full blur-[140px]"></div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 text-center relative"
        >
          <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl font-black text-white leading-tight">
            Looking For A Specific Product?
          </h2>

          <p className="font-['Playfair_Display'] text-white/75 text-lg mt-6 max-w-3xl mx-auto leading-8">
            Share your sourcing requirements and our team will help identify
            suitable suppliers, coordinate documentation, and support shipment
            execution.
          </p>

          <motion.button
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="font-['Playfair_Display'] mt-10 bg-[#0F766E] hover:bg-white hover:text-[#0F172A] text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-3 transition"
          >
            Send Product Inquiry
            <FaArrowRight />
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
};

export default ProductCatalogue;
