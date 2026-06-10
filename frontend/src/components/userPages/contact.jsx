import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  show: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const contactCards = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "info@yourcompany.com",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+91 XXXXX XXXXX",
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    value: "+91 XXXXX XXXXX",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Office Location",
    value: "Hyderabad, Telangana, India",
  },
];

const supportPoints = [
  "Exporter onboarding",
  "Documentation support",
  "Logistics coordination",
  "Shipment execution",
];

const Contact = () => {
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
          <motion.div
            variants={fadeUp}
            className="max-w-5xl mx-auto text-center"
          >

            <h1 className="text-5xl md:text-7xl font-black text-[#0F172A] leading-tight">
              Let's Discuss Your Export
              <br />
              Requirements
            </h1>

            <p className="text-lg text-[#1F2937]/75 mt-8 max-w-3xl mx-auto leading-8">
              Whether you're an Indian exporter looking to enter international
              markets or a global buyer sourcing products from India, our team
              is ready to assist.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="pb-28 relative">
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#0F172A]/5 rounded-full blur-[140px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Contact Form */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.25 }}
              className="bg-[#F5F0E6] border border-[#E7DFD2] rounded-[2rem] p-8 md:p-10 shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
            >
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.h2
                  variants={fadeUp}
                  className="text-3xl md:text-4xl font-black text-[#0F172A] mb-3"
                >
                  Send an Inquiry
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  className="text-[#1F2937]/70 mb-8 leading-7"
                >
                  Share your export, sourcing, or logistics requirement and our
                  team will get back with the next steps.
                </motion.p>

                <form className="space-y-5">
                  {[
                    { type: "text", placeholder: "Full Name" },
                    { type: "text", placeholder: "Company Name" },
                    { type: "email", placeholder: "Email Address" },
                    { type: "tel", placeholder: "Phone Number" },
                    { type: "text", placeholder: "Country" },
                  ].map((field, index) => (
                    <motion.input
                      key={index}
                      variants={fadeUp}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full p-4 rounded-xl border border-[#E7DFD2] bg-[#FAF7F2] outline-none focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10 transition"
                    />
                  ))}

                  <motion.textarea
                    variants={fadeUp}
                    rows="5"
                    placeholder="Tell us about your export or sourcing requirement..."
                    className="w-full p-4 rounded-xl border border-[#E7DFD2] bg-[#FAF7F2] outline-none focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10 transition"
                  ></motion.textarea>

                  <motion.button
                    variants={fadeUp}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="group bg-[#0F172A] hover:bg-[#0F766E] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition"
                  >
                    Submit Inquiry
                    <FaArrowRight className="group-hover:translate-x-1 transition" />
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.h2
                  variants={fadeUp}
                  className="text-3xl md:text-4xl font-black text-[#0F172A] mb-8"
                >
                  Get In Touch
                </motion.h2>

                <div className="space-y-5">
                  {contactCards.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeUp}
                      whileHover={{
                        x: 8,
                        boxShadow: "0 20px 60px rgba(15, 23, 42, 0.08)",
                      }}
                      className="bg-[#F5F0E6] border border-[#E7DFD2] rounded-2xl p-6 flex gap-5"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-[#0F766E]/10 text-[#0F766E] flex items-center justify-center text-2xl shrink-0">
                        {item.icon}
                      </div>

                      <div>
                        <h3 className="font-black text-xl text-[#0F172A]">
                          {item.title}
                        </h3>

                        <p className="text-[#1F2937]/75 mt-2">
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Business Note */}
                <motion.div
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="mt-8 bg-[#0F172A] text-white rounded-[2rem] p-8 shadow-[0_24px_70px_rgba(15,23,42,0.16)]"
                >
                  <p className="uppercase tracking-[4px] text-[#5EEAD4] font-bold mb-4">
                    Business Support
                  </p>

                  <h3 className="text-2xl md:text-3xl font-black mb-4">
                    Supporting Exporters & Global Buyers
                  </h3>

                  <p className="text-white/75 leading-8 mb-6">
                    We assist businesses with exporter onboarding,
                    documentation support, logistics coordination, shipment
                    execution, and India sourcing assistance.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {supportPoints.map((point, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 text-white/85"
                      >
                        <FaCheckCircle className="text-[#5EEAD4]" />
                        <span className="font-medium">{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;