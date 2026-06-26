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
} from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "News", path: "/news" },
    { name: "Contact Us", path: "/contact" },
  ];

  const [selectedLang, setSelectedLang] = useState("🇺🇸 English");

  const languages = [
    { label: "🇺🇸 English", code: "en" },
    { label: "🇮🇳 Hindi", code: "hi" },
    { label: "🇪🇸 Español", code: "es" },
    { label: "🇫🇷 Français", code: "fr" },
    { label: "🇩🇪 Deutsch", code: "de" },
    { label: "🇮🇹 Italiano", code: "it" },
    { label: "🇸🇦 العربية", code: "ar" },
    { label: "🇨🇳 中文", code: "zh-CN" },
    { label: "🇯🇵 日本語", code: "ja" },
    { label: "🇰🇷 한국어", code: "ko" },
  ];

  const changeLanguage = (lang) => {
    setSelectedLang(lang.label);

    const tryTranslate = () => {
      const select = document.querySelector(".goog-te-combo");

      if (!select) {
        console.log("Google Translate select not found");
        return;
      }

      select.value = lang.code;

      select.dispatchEvent(new Event("change", { bubbles: true }));
      select.dispatchEvent(new Event("input", { bubbles: true }));
    };

    setTimeout(tryTranslate, 500);
  };
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scroll
          ? "bg-[#FAF7F2]/95 backdrop-blur-lg shadow-md border-b border-[#E7DFD2]"
          : "bg-[#FAF7F2]"
      }`}
    >
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

          <div className="flex items-center gap-2">
            <a
              href="https://instagram.com/drutoindia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white flex items-center justify-center hover:opacity-80 transition"
            >
              <FaInstagram size={13} />
            </a>

            <a
              href="https://linkedin.com/company/drutoindia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded bg-[#0077B5] text-white flex items-center justify-center hover:opacity-80 transition"
            >
              <FaLinkedinIn size={13} />
            </a>

            <div className="relative group">
              <div id="google_translate_element" className="hidden" />
              {/* <div
                id="google_translate_element"
                style={{ position: "absolute", left: "-9999px", top: "0" }}
              />

              {/* <button
                type="button"
                className="flex items-center gap-2 bg-white text-[#111827] px-3 py-1.5 rounded text-sm min-w-[140px] justify-between"
              >
                <span>{selectedLang}</span>
                <span className="text-gray-500">▼</span>
              </button> */}

              {/* <div className="absolute right-0 top-full mt-1 w-[190px] bg-white rounded shadow-xl border border-gray-200 hidden group-hover:block z-[9999] overflow-hidden">
                {languages.map((lang) => (
                  <button
                    type="button"
                    key={lang.code}
                    onClick={() => changeLanguage(lang)}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#0F766E] hover:text-white transition"
                  >
                    {lang.label}
                  </button>
                ))}
              </div> */}
            </div>

            {/* <span className="hidden lg:inline text-[#BDBDBD] ml-2">
              Translations by Google™
            </span> */}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 select-none">
            <img
              src="/logobg.png"
              alt="Druto Logo"
              className="h-14 md:h-16 w-auto object-contain"
            />

            <img
              src="/text.png"
              alt="DRUTO"
              className="h-7 md:h-8 w-auto object-contain"
            />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `font-['Inter'] relative group text-[15px] font-semibold tracking-wide transition ${
                        isActive
                          ? "text-[#0F766E]"
                          : "text-[#1F2937] hover:text-[#0F766E]"
                      }`
                    }
                  >
                    {item.name}

                    <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#0F766E] transition-all duration-300 group-hover:w-full"></span>
                  </NavLink>
                </li>
              ))}
            </ul>

            <button
              aria-label="Search"
              className="w-11 h-11 rounded-full border border-[#D8D0C3] flex items-center justify-center text-[#0F172A] hover:bg-[#0F766E] hover:text-white hover:border-[#0F766E] transition-all duration-300"
            >
              <FaSearch size={16} />
            </button>
          </div>

          {/* Mobile Icon */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-[#0F172A] transition"
            aria-label="Toggle Menu"
          >
            {open ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-[560px]" : "max-h-0"
        }`}
      >
        <div className="bg-[#F5F0E6] border-t border-[#E7DFD2] shadow-xl">
          <ul className="p-6 space-y-5">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block font-semibold transition ${
                      isActive
                        ? "text-[#0F766E]"
                        : "text-[#1F2937] hover:text-[#0F766E]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            <div className="pt-4 border-t border-[#DDD2C2] space-y-3 text-sm text-[#4B5563]">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#0F766E]" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#0F766E]" />
                <span>New Delhi, India</span>
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-3 mt-4 bg-[#0F172A] hover:bg-[#0F766E] text-white py-3 rounded-full font-semibold transition">
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
