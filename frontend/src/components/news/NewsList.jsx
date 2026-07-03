import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { getNews } from "../services/newsApi";

const categoryTitles = {
  druto: "DRUTO INDIA News",
  industry: "Export / Import Industry News",
};

export default function NewsList() {
  const { category } = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getNews(category);
      setNews(data);
    };

    fetchNews();
  }, [category]);

  return (
    <section className="pt-40 pb-24 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-[#0F766E] font-bold">
            News
          </p>

          <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl font-black text-[#0F172A] mt-4">
            {categoryTitles[category] || "Latest News"}
          </h1>
        </div>

        {news.length === 0 ? (
          <p className="text-center text-[#4B5563] text-lg">
            No news available yet.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <motion.div
                key={item._id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#ECE6DA]"
              >
                <img
                  src={`http://localhost:5000${item.image}`}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />

                <div className="p-8">
                  <p className="text-sm uppercase tracking-widest text-[#0F766E] font-bold">
                    {item.category === "druto"
                      ? "DRUTO INDIA"
                      : "Export / Import"}
                  </p>

                  <h2 className="text-2xl font-bold text-[#0F172A] mt-4">
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
