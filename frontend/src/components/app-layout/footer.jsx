import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaMapMarkerAlt />,
    text: "JAITPUR, DELHI, INDIA",
    clickable: false,
  },
  {
    icon: <FaPhoneAlt />,
    text: "+91 9220475166",
    link: "tel:+919220475166",
    clickable: true,
  },
  {
    icon: <FaWhatsapp />,
    text: "+91 9220475166",
    link: "https://wa.me/919220475166",
    clickable: true,
  },
  {
    icon: <FaEnvelope />,
    text: "info@drutoindia.com",
    link: "mailto:info@drutoindia.com",
    clickable: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/services" },

  { name: "News", path: "/export-market" },

  { name: "Contact Us", path: "/contact" },
];

const services = [
  "Exporter Onboarding",
  "Documentation Support",
  "Logistics Coordination",
  "Shipment Execution",
  "Buyer Sourcing Support",
];

const socialLinks = [
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/drutoindia",
    className:
      "bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/company/drutoindia",
    className: "bg-gradient-to-br from-[#0A66C2] to-[#004182] text-white",
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relative bg-[#0F172A] text-white font-['Inter'] overflow-hidden">
      <div className="absolute -top-20 left-0 w-96 h-96 bg-[#0F766E]/20 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FAF7F2]/5 rounded-full blur-[150px]"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Company */}
          <motion.div variants={fadeUp}>
            <Link to="/" className="inline-block">
              <motion.img
                whileHover={{ scale: 1.04 }}
                src="/logobg.png"
                alt="Druto Logo"
                className="h-16 w-auto object-contain mb-6 bg-[#FAF7F2] rounded-xl p-2"
              />
            </Link>

            <p className="font-['Playfair_Display'] text-white/70 leading-7 mb-6">
              Helping Indian MSMEs export globally and supporting overseas
              buyers to source from India through one reliable execution
              partner.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-11 h-11 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 ${item.className}`}
                >
                  <span className="text-xl">{item.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp}>
            <h3 className="font-['Playfair_Display'] text-2xl font-black mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-white/70">
              {quickLinks.map((item) => (
                <motion.li key={item.name} whileHover={{ x: 6 }}>
                  <Link
                    to={item.path}
                    className="hover:text-[#5EEAD4] transition inline-flex items-center gap-2"
                  >
                    <FaArrowRight className="text-xs text-[#0F766E]" />
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp}>
            <h3 className="font-['Playfair_Display'] text-2xl font-black mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-white/70">
              {services.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-2"
                >
                  <FaArrowRight className="text-xs text-[#0F766E]" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="font-['Playfair_Display'] text-2xl font-black mb-6">
              Contact Us
            </h3>

            <div className="space-y-5">
              {contactInfo.map((item, index) =>
                item.clickable ? (
                  <motion.a
                    key={index}
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    whileHover={{ x: 6 }}
                    className="flex gap-3 group cursor-pointer"
                  >
                    <span className="text-[#5EEAD4] mt-1 shrink-0 group-hover:scale-110 transition">
                      {item.icon}
                    </span>

                    <p className="text-white/70 group-hover:text-white transition">
                      {item.text}
                    </p>
                  </motion.a>
                ) : (
                  <motion.div
                    key={index}
                    whileHover={{ x: 6 }}
                    className="flex gap-3"
                  >
                    <span className="text-[#5EEAD4] mt-1 shrink-0">
                      {item.icon}
                    </span>

                    <p className="text-white/70">{item.text}</p>
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            Copyright © {currentYear} DRUTO INDIA. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 text-white/50 text-sm">
            <motion.div whileHover={{ y: -2 }}>
              <Link
                to="/privacy-policy"
                className="hover:text-[#5EEAD4] transition-colors"
              >
                Privacy Policy
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }}>
              <Link
                to="/terms-and-conditions"
                className="hover:text-[#5EEAD4] transition-colors"
              >
                Terms & Conditions
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
