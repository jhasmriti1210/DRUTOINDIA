import { motion } from "framer-motion";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaNewspaper,
  FaPlusCircle,
  FaEdit,
  FaHome,
  FaChartLine,
} from "react-icons/fa";

const sidebarItems = [
  {
    title: "Add News",
    description: "Publish a new article",
    path: "/admin/news/add",
    icon: <FaPlusCircle />,
  },
  {
    title: "Manage News",
    description: "Edit or delete articles",
    path: "/admin/news/manage",
    icon: <FaEdit />,
  },
];

export default function NewsAdminLayout() {
  return (
    <section className="min-h-screen bg-[#FAF7F2] pt-28 pb-16 font-['Inter']">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-[320px_1fr] gap-8">
          {/* Sidebar */}

          <motion.aside
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden bg-[#0F172A] rounded-[34px] shadow-2xl text-white h-fit lg:sticky lg:top-28"
          >
            {/* Background */}

            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#0F766E]/30 blur-[120px]" />

            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 blur-[110px]" />

            <div className="relative z-10 p-8">
              {/* Logo */}

              <div className="w-20 h-20 rounded-3xl bg-[#0F766E] flex items-center justify-center shadow-xl mb-7">
                <FaNewspaper className="text-3xl" />
              </div>

              {/* Heading */}

              <h2 className="font-['Playfair_Display'] text-3xl font-black">
                News Admin
              </h2>

              <p className="mt-3 text-white/70 leading-7">
                Manage DRUTO INDIA news, export industry updates and rules &
                regulations from one place.
              </p>

              {/* Stats */}

              <div className="mt-8 bg-white/10 rounded-2xl p-5 border border-white/10">
                <div className="flex items-center gap-3">
                  <FaChartLine className="text-[#5EEAD4]" />

                  <span className="font-semibold">News Management Panel</span>
                </div>

                <p className="text-sm text-white/60 mt-3 leading-6">
                  Publish updates, edit existing articles, delete outdated news
                  and keep your website updated.
                </p>
              </div>

              {/* Navigation */}

              <div className="mt-10 space-y-4">
                {sidebarItems.map((item) => (
                  <NavLink
                    key={item.title}
                    to={item.path}
                    className={({ isActive }) =>
                      `group flex gap-4 items-start rounded-2xl p-5 transition-all duration-300 ${
                        isActive
                          ? "bg-[#0F766E] shadow-lg"
                          : "bg-white/10 hover:bg-white/20"
                      }`
                    }
                  >
                    <div className="text-2xl mt-1 group-hover:scale-110 transition">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>

                      <p className="text-sm text-white/65 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </NavLink>
                ))}
              </div>

              {/* Back */}

              <NavLink
                to="/"
                className="mt-10 flex items-center justify-center gap-3 bg-white text-[#0F172A] hover:bg-[#5EEAD4] rounded-2xl py-4 font-semibold transition-all"
              >
                <FaHome />
                Visit Website
              </NavLink>
            </div>
          </motion.aside>

          {/* Right Content */}

          <motion.main
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-w-0"
          >
            <Outlet />
          </motion.main>
        </div>
      </div>
    </section>
  );
}
