import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../app-layout/footer";
import { getSingleNews } from "../services/newsApi";

export default function NewsDetails() {
  const { slug } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getSingleNews(slug);
      setNews(data);
    };

    fetchNews();
  }, [slug]);

  if (!news) {
    return (
      <section className="pt-40 min-h-screen bg-[#FAF7F2] text-center">
        Loading...
      </section>
    );
  }

  return (
    <>
      <section className="pt-36 pb-24 bg-[#FAF7F2] min-h-screen">
        <div className="max-w-5xl mx-auto px-6">
          <img
            src={`http://localhost:5000${news.image}`}
            alt={news.title}
            className="w-full h-[480px] object-cover rounded-[32px] shadow-xl"
          />

          <p className="text-[#0F766E] font-bold uppercase tracking-[4px] mt-10">
            {news.category === "druto"
              ? "DRUTO INDIA News"
              : "Export / Import Industry News"}
          </p>

          <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl font-black text-[#0F172A] mt-5 leading-tight">
            {news.title}
          </h1>

          <p className="text-[#4B5563] mt-6">
            By {news.author} • {new Date(news.createdAt).toLocaleDateString()}
          </p>

          <div className="mt-10 text-lg text-[#374151] leading-9 whitespace-pre-line">
            {news.content}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
