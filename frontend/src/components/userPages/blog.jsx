import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  FaArrowRight,
  FaBuilding,
  FaGlobe,
  FaScaleBalanced,
  FaCalendar,
} from "react-icons/fa6";
import { getNews } from "../services/newsApi";
import NewsletterSubscribe from "./NewsletterSubscribe";

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  show: { opacity: 1, y: 0 },
};

const categories = [
  {
    key: "industry",
    title: "Industry News",
    icon: <FaGlobe />,
  },
  {
    key: "druto",
    title: "DRUTO Updates",
    icon: <FaBuilding />,
  },

  {
    key: "rules",
    title: "Rules & Regulations",
    icon: <FaScaleBalanced />,
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("druto");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const selectedTitle =
    categories.find((item) => item.key === selectedCategory)?.title ||
    "Latest News";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const data = await getNews(selectedCategory);
        setNews(data);
      } catch (error) {
        console.error(error);
        setNews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [selectedCategory]);

  return (
    <main className="bg-[#FAF7F2] min-h-screen font-['Inter']">
      {/* HERO */}
      <section
        className="relative min-h-[75vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/blog.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0F172A]/70" />

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white pt-24"
        >
          <motion.p
            variants={fadeUp}
            className="uppercase tracking-[6px] text-[#5EEAD4] font-bold mb-5"
          >
            Blog & News
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
          >
            Insights, Updates & Trade Knowledge
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 text-white/80 text-base sm:text-lg md:text-xl leading-8 max-w-3xl mx-auto"
          >
            Explore DRUTO INDIA updates, export-import industry news, and
            important rules & regulations for global trade.
          </motion.p>
        </motion.div>
      </section>

      {/* BLOG SECTION */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* CATEGORY TABS */}
          <div className="mb-14">
            <div className="flex flex-wrap justify-center gap-8 sm:gap-10 border-b border-[#E5E0D6] pb-5">
              {categories.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setSelectedCategory(item.key)}
                  className={`relative flex items-center gap-2 text-sm sm:text-base md:text-lg transition-all duration-300 ${
                    selectedCategory === item.key
                      ? "text-[#0F766E] font-semibold"
                      : "text-[#6B7280] hover:text-[#0F766E]"
                  }`}
                >
                  <span className="text-base sm:text-lg">{item.icon}</span>
                  {item.title}

                  {selectedCategory === item.key && (
                    <span className="absolute left-0 -bottom-[21px] w-full h-[3px] bg-[#0F766E] rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* TITLE */}
          <div className="text-center mb-12">
            <p className="uppercase tracking-[5px] text-[#0F766E] font-bold">
              Latest Articles
            </p>

            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] mt-4">
              {selectedTitle}
            </h2>
          </div>

          {/* NEWS */}
          {loading ? (
            <p className="text-center text-[#4B5563] text-lg">
              Loading news...
            </p>
          ) : news.length === 0 ? (
            <p className="text-center text-[#4B5563] text-lg">
              No news available yet.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {news.map((item) => (
                <motion.div
                  key={item._id}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#ECE6DA]"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-56 sm:h-60 lg:h-64 object-cover"
                    />
                  )}

                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-xs uppercase tracking-widest text-[#0F766E] font-bold">
                        {selectedTitle}
                      </p>

                      <span className="flex items-center gap-2 text-xs text-[#6B7280]">
                        <FaCalendar />
                        {new Date(
                          item.publishDate || item.createdAt,
                        ).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mt-4 leading-snug">
                      {item.title}
                    </h3>

                    {/* <p className="text-[#4B5563] mt-4 leading-7">
                      {item.shortDescription}
                    </p> */}

                    <NavLink
                      to={`/news/details/${item.slug}`}
                      className="mt-8 inline-flex items-center gap-3 text-[#0F766E] font-semibold hover:gap-4 transition-all"
                    >
                      Read More
                      <FaArrowRight />
                    </NavLink>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
      <NewsletterSubscribe />
    </main>
  );
}
