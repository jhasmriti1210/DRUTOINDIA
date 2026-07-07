import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import { getNews } from "../services/newsApi";

const categoryTitles = {
  druto: "DRUTO UPDATES",
  industry: "INDUSTRY NEWS",
  rules: "RULES & REGULATIONS",
};

const categoryLabels = {
  druto: "DRUTO INDIA",
  industry: "EXPORT / IMPORT",
  rules: "RULES & REGULATIONS",
};

export default function NewsList() {
  const { category } = useParams();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const data = await getNews(category);
        setNews(data);
      } catch (error) {
        console.error(error);
        setNews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <section className="pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <p className="uppercase tracking-[4px] sm:tracking-[5px] text-[#0F766E] font-bold text-sm sm:text-base">
            News
          </p>

          <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] mt-4">
            {categoryTitles[category] || "LATEST NEWS"}
          </h1>

          <p className="text-[#4B5563] mt-5 max-w-3xl mx-auto leading-7">
            Stay updated with DRUTO INDIA announcements, export-import industry
            news, trade policies, rules, and regulatory updates.
          </p>
        </div>

        {loading ? (
          <p className="text-center text-[#4B5563] text-lg">Loading news...</p>
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
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 sm:h-60 lg:h-64 object-cover"
                />

                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-xs uppercase tracking-widest text-[#0F766E] font-bold">
                      {categoryLabels[item.category] || item.category}
                    </p>

                    <span className="flex items-center gap-2 text-xs text-[#6B7280]">
                      <FaCalendarAlt />
                      {new Date(item.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] mt-4 leading-snug">
                    {item.title}
                  </h2>

                  <p className="text-[#4B5563] mt-4 leading-7">
                    {item.shortDescription}
                  </p>

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
  );
}
