import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaSearch, FaArrowRight } from "react-icons/fa";

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
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Process", path: "/process" },
    { name: "Export Market", path: "/export-market" },
    { name: "Product Catalogue", path: "/product-catalogue" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scroll
          ? "bg-[#FAF7F2]/95 backdrop-blur-lg shadow-md border-b border-[#E7DFD2]"
          : "bg-[#FAF7F2]"
      }`}
    >
      <div className="font-['Playfair_Display'] max-w-7xl mx-auto px-6">
        <div className="h-24 flex justify-between items-center">
          <NavLink to="/" className="cursor-pointer flex items-center">
            <img
              src="/logobg.png"
              alt="Druto Logo"
              className="h-20 md:h-24 w-auto object-contain"
            />
          </NavLink>

          <ul className="hidden lg:flex gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative group font-semibold transition ${
                      isActive
                        ? "text-[#0F766E]"
                        : "text-[#1F2937] hover:text-[#0F766E]"
                    }`
                  }
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#0F766E] transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-6">
            <NavLink
              to="/contact"
              className="group bg-[#0F172A] hover:bg-[#0F766E] text-white px-6 py-3 rounded-full flex items-center gap-3 font-semibold transition"
            >
              Request Consultation
              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </NavLink>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-[#0F172A] transition"
          >
            {open ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-[600px]" : "max-h-0"
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
                    `font-semibold transition ${
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

            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="block text-center w-full mt-4 bg-[#0F172A] hover:bg-[#0F766E] text-white py-3 rounded-full font-semibold transition"
            >
              Request Consultation
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
