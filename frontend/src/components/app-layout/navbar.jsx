import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaInstagram,
  FaChevronDown,
  FaGlobe,
  FaFacebookF,
} from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);

  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);
  const [desktopNewsOpen, setDesktopNewsOpen] = useState(false);

  const [selectedLang, setSelectedLang] = useState("English");

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceItems = [
    { name: "MSME Process", path: "/msme-buyers" },
    { name: "Buyer Process", path: "/overseas-buyers" },
  ];

  const newsItems = [
    { name: "DRUTO INDIA", path: "/news/druto" },
    { name: "INDUSTRY", path: "/news/industry" },

    { name: "Rules & Regulations", path: "/news/rules" },
  ];

  const productItems = [
    {
      name: "Textiles, Handloom & Apparel",
      path: "/products/Textiles-handloom-Apparel",
    },
    {
      name: "Handicraft & Home Decor",
      path: "/products/Handcraft&homedecor",
    },
    {
      name: "Ayush Beauty & Personal Care",
      path: "/products/Ayush-beauty&personalcare",
    },
    {
      name: "Engineering Goods and Auto Parts",
      path: "/products/Engineeringgoods&autoparts",
    },
    {
      name: "Sustainable Packaging & Alternative",
      path: "/products/Sustainablepackaging&alternative",
    },
    {
      name: "Spices, Superfood & Wellness",
      path: "/products/Spices-Superfood&Wellness",
    },
    {
      name: "Leather & Light Engineering",
      path: "/products/Leather&LightEngineering",
    },
    {
      name: "Semi Precious & Imitation Jewellery",
      path: "/products/semiprecious&limitationjewellery",
    },
  ];

  const languages = [
    { label: "English", code: "en" },
    { label: "Hindi", code: "hi" },
    { label: "Odia", code: "or" },
    { label: "Telugu", code: "te" },
    { label: "Tamil", code: "ta" },
    { label: "Kannada", code: "kn" },
    { label: "Bengali", code: "bn" },
    { label: "Marathi", code: "mr" },
    { label: "Gujarati", code: "gu" },
    { label: "Spanish", code: "es" },
    { label: "Japanese", code: "ja" },
    { label: "Portuguese", code: "pt" },
    { label: "Arabic", code: "ar" },
    { label: "German", code: "de" },
    { label: "French", code: "fr" },
  ];

  const changeLanguage = (lang) => {
    setSelectedLang(lang.label);

    const interval = setInterval(() => {
      const select = document.querySelector(".goog-te-combo");

      if (select) {
        select.value = lang.code;
        select.dispatchEvent(new Event("change", { bubbles: true }));
        clearInterval(interval);
      }
    }, 300);

    setTimeout(() => clearInterval(interval), 5000);
  };

  const closeMobileMenu = () => {
    setOpen(false);
    setServicesOpen(false);
    setProductsOpen(false);
    setNewsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scroll
          ? "bg-[#FAF7F2]/95 backdrop-blur-lg shadow-md border-b border-[#E7DFD2]"
          : "bg-[#FAF7F2]"
      }`}
    >
      <div id="google_translate_element" />

      {/* Top Banner */}
      <div className="hidden md:block bg-[#0F172A] text-[#D8D8D8] text-sm">
        <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#1E6FA8] text-[13px]" />
              <span>+91 92204 75166</span>
            </div>

            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#1E6FA8] text-[13px]" />
              <span>New Delhi, India</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/share/195f5VEshx/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded bg-[#1877F2] text-white flex items-center justify-center hover:opacity-80 transition"
            >
              <FaFacebookF size={13} />
            </a>

            <a
              href="https://instagram.com/drutoindia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white flex items-center justify-center hover:opacity-80 transition"
            >
              <FaInstagram size={13} />
            </a>

            <a
              href="https://linkedin.com/company/drutoindia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded bg-[#0077B5] text-white flex items-center justify-center hover:opacity-80 transition"
            >
              <FaLinkedinIn size={13} />
            </a>

            {/* Language Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-2 bg-white text-[#0F172A] px-3 py-1.5 rounded-md text-sm font-semibold min-w-[130px] justify-between"
              >
                <span className="flex items-center gap-2">
                  <FaGlobe size={13} />
                  {selectedLang}
                </span>
                <FaChevronDown size={11} />
              </button>

              <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[9999]">
                <div className="w-52 max-h-80 overflow-y-auto bg-white rounded-xl shadow-xl border border-[#E7DFD2]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => changeLanguage(lang)}
                      className="w-full text-left px-4 py-2.5 text-sm text-[#1F2937] hover:bg-[#0F766E] hover:text-white transition"
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex justify-between items-center">
          <NavLink to="/" className="flex items-center select-none">
            <img
              src="/textlogo.png"
              alt="DRUTO INDIA"
              className="h-7 md:h-14 w-auto object-contain"
            />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `relative group text-[15px] font-semibold tracking-wide transition ${
                      isActive
                        ? "text-[#0F766E]"
                        : "text-[#1F2937] hover:text-[#0F766E]"
                    }`
                  }
                >
                  About Druto
                  <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#0F766E] transition-all duration-300 group-hover:w-full" />
                </NavLink>
              </li>

              {/* Services Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setDesktopServicesOpen(true)}
                onMouseLeave={() => setDesktopServicesOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setDesktopServicesOpen(!desktopServicesOpen)}
                  className="relative text-[15px] font-semibold tracking-wide text-[#1F2937] hover:text-[#0F766E] transition"
                >
                  Services
                  <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#0F766E] transition-all duration-300 hover:w-full" />
                </button>

                <div
                  className={`absolute left-0 top-full pt-5 transition-all duration-300 ${
                    desktopServicesOpen
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  <div className="w-56 bg-white rounded-2xl shadow-xl border border-[#E7DFD2] overflow-hidden">
                    {serviceItems.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.path}
                        onClick={() => setDesktopServicesOpen(false)}
                        className={({ isActive }) =>
                          `block px-5 py-4 text-sm font-semibold transition ${
                            isActive
                              ? "bg-[#0F766E] text-white"
                              : "text-[#1F2937] hover:bg-[#F5F0E6] hover:text-[#0F766E]"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </li>

              {/* Products Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setDesktopProductsOpen(true)}
                onMouseLeave={() => setDesktopProductsOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setDesktopProductsOpen(!desktopProductsOpen)}
                  className="relative text-[15px] font-semibold tracking-wide text-[#1F2937] hover:text-[#0F766E] transition"
                >
                  Products
                  <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#0F766E] transition-all duration-300 hover:w-full" />
                </button>

                <div
                  className={`absolute left-0 top-full pt-5 transition-all duration-300 ${
                    desktopProductsOpen
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  <div className="w-72 bg-white rounded-2xl shadow-xl border border-[#E7DFD2] overflow-hidden">
                    {productItems.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.path}
                        onClick={() => setDesktopProductsOpen(false)}
                        className={({ isActive }) =>
                          `block px-5 py-4 text-sm font-semibold transition ${
                            isActive
                              ? "bg-[#0F766E] text-white"
                              : "text-[#1F2937] hover:bg-[#F5F0E6] hover:text-[#0F766E]"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </li>

              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `relative group text-[15px] font-semibold tracking-wide transition ${
                      isActive
                        ? "text-[#0F766E]"
                        : "text-[#1F2937] hover:text-[#0F766E]"
                    }`
                  }
                >
                  Blog
                  <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#0F766E] transition-all duration-300 group-hover:w-full" />
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `relative group text-[15px] font-semibold tracking-wide transition ${
                      isActive
                        ? "text-[#0F766E]"
                        : "text-[#1F2937] hover:text-[#0F766E]"
                    }`
                  }
                >
                  Contact Us
                  <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#0F766E] transition-all duration-300 group-hover:w-full" />
                </NavLink>
              </li>
            </ul>

            <button className="w-11 h-11 rounded-full border border-[#D8D0C3] flex items-center justify-center text-[#0F172A] hover:bg-[#0F766E] hover:text-white transition">
              <FaSearch size={16} />
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-[#0F172A]"
            aria-label="Toggle Menu"
          >
            {open ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-[1200px]" : "max-h-0"
        }`}
      >
        <div className="bg-[#F5F0E6] border-t border-[#E7DFD2] shadow-xl">
          <ul className="p-6 space-y-5">
            <li>
              <NavLink
                to="/about"
                onClick={closeMobileMenu}
                className="block font-semibold text-[#1F2937]"
              >
                About Druto
              </NavLink>
            </li>

            {/* Mobile Services */}
            <li>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex items-center justify-between font-semibold text-[#1F2937]"
              >
                Services
                <FaChevronDown
                  size={12}
                  className={`transition ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  servicesOpen ? "max-h-40 mt-4" : "max-h-0"
                }`}
              >
                <div className="space-y-3 pl-4 border-l-2 border-[#0F766E]/30">
                  {serviceItems.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      onClick={closeMobileMenu}
                      className="block text-sm font-semibold text-[#4B5563]"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </li>

            {/* Mobile Products */}
            <li>
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="w-full flex items-center justify-between font-semibold text-[#1F2937]"
              >
                Products
                <FaChevronDown
                  size={12}
                  className={`transition ${productsOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  productsOpen ? "max-h-96 mt-4" : "max-h-0"
                }`}
              >
                <div className="space-y-3 pl-4 border-l-2 border-[#0F766E]/30">
                  {productItems.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      onClick={closeMobileMenu}
                      className="block text-sm font-semibold text-[#4B5563]"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </li>

            <li>
              <NavLink
                to="/blog"
                onClick={closeMobileMenu}
                className="block font-semibold text-[#1F2937]"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={closeMobileMenu}
                className="block font-semibold text-[#1F2937]"
              >
                Contact Us
              </NavLink>
            </li>

            <div className="pt-4 border-t border-[#DDD2C2]">
              <p className="font-bold mb-3 text-[#1F2937]">Language</p>
              <select
                value={selectedLang}
                onChange={(e) => {
                  const lang = languages.find(
                    (l) => l.label === e.target.value,
                  );
                  if (lang) changeLanguage(lang);
                }}
                className="w-full p-3 rounded-xl bg-white border border-[#E7DFD2]"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.label}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>

            <button className="w-full flex items-center justify-center gap-3 bg-[#0F172A] hover:bg-[#0F766E] text-white py-3 rounded-full font-semibold transition">
              <FaSearch size={15} />
              Search
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
