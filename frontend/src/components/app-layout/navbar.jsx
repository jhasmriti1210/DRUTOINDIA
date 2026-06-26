import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scroll
          ? "bg-[#FAF7F2]/95 backdrop-blur-lg shadow-md border-b border-[#E7DFD2]"
          : "bg-[#FAF7F2]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-24 flex justify-between items-center">
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

            {/* Search */}
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
          open ? "max-h-[520px]" : "max-h-0"
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
