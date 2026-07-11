import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { FaArrowLeft, FaCalendarAlt, FaUser } from "react-icons/fa";
import { getSingleNews } from "../services/newsApi";
import Footer from "../app-layout/footer";

const categoryLabels = {
  druto: "DRUTO UPDATES",
  industry: "INDUSTRY NEWS",
  rules: "RULES & REGULATIONS",
};

export default function NewsDetails() {
  const { slug } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const data = await getSingleNews(slug);
        setNews(data);
      } catch (error) {
        console.error(error);
        setNews(null);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [slug]);

  if (loading) {
    return (
      <section className="pt-40 min-h-screen bg-[#FAF7F2] text-center text-[#4B5563]">
        Loading news...
      </section>
    );
  }

  if (!news) {
    return (
      <section className="pt-40 min-h-screen bg-[#FAF7F2] text-center">
        <h1 className="text-3xl font-black text-[#0F172A]">News not found</h1>

        <NavLink
          to="/blog"
          className="inline-flex items-center gap-3 mt-6 text-[#0F766E] font-semibold"
        >
          <FaArrowLeft />
          Back to Blog
        </NavLink>
      </section>
    );
  }

  return (
    <>
      <section className="pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 bg-[#FAF7F2] min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <NavLink
            to="/blog"
            state={{ selectedCategory: news.category }}
            className="inline-flex items-center gap-3 text-[#0F766E] font-semibold mb-8 hover:gap-4 transition-all"
          >
            <FaArrowLeft />
            Back to {categoryLabels[news.category] || "Blog"}
          </NavLink>

          {news.image && (
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-[260px] sm:h-[360px] md:h-[460px] lg:h-[520px] object-cover rounded-[28px] sm:rounded-[32px] shadow-xl border border-[#E7DFD2]"
            />
          )}

          <div className="mt-10">
            <p className="text-[#0F766E] font-bold uppercase tracking-[4px] text-sm">
              {categoryLabels[news.category] || news.category}
            </p>

            <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] mt-5 leading-tight">
              {news.title}
            </h1>

            <div className="flex flex-wrap gap-5 mt-6 text-[#6B7280]">
              <span className="inline-flex items-center gap-2">
                <FaUser />
                {news.author}
              </span>

              <span className="inline-flex items-center gap-2">
                <FaCalendarAlt />
                {new Date(
                  news.publishDate || news.createdAt,
                ).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>

            <div className="mt-10 bg-white rounded-[28px] sm:rounded-[32px] border border-[#E7DFD2] shadow-sm p-6 sm:p-8 md:p-10">
              <div className="text-base sm:text-lg text-[#374151] leading-8 sm:leading-9 whitespace-pre-line">
                {news.content}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
