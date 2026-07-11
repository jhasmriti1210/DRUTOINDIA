import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEdit, FaTrash, FaCalendarAlt, FaTag, FaPlus } from "react-icons/fa";

import { getNews, deleteNews, BACKEND_URL } from "../services/newsApi";

export default function ManageNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const data = await getNews();
      setNews(data);
    } catch (err) {
      console.log(err);
      alert("Failed to fetch news");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this news?",
    );

    if (!confirmDelete) return;

    try {
      await deleteNews(id);
      alert("News deleted successfully");
      fetchNews();
    } catch (err) {
      console.log(err);
      alert("Unable to delete news");
    }
  };

  const categoryColor = (category) => {
    switch (category) {
      case "druto":
        return "bg-emerald-100 text-emerald-700";

      case "industry":
        return "bg-blue-100 text-blue-700";

      case "rules":
        return "bg-orange-100 text-orange-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const categoryLabel = (category) => {
    switch (category) {
      case "druto":
        return "DRUTO UPDATE";

      case "industry":
        return "INDUSTRY NEWS";

      case "rules":
        return "RULES & REGULATIONS";

      default:
        return category;
    }
  };

  return (
    <div className="bg-white rounded-[32px] shadow-xl p-6 lg:p-8">
      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">
        <div>
          <h1 className="text-4xl font-black text-[#0F172A]">Manage News</h1>

          <p className="text-gray-500 mt-2">Update or remove published news.</p>
        </div>

        <NavLink
          to="/admin/news/add"
          className="inline-flex items-center gap-3 bg-[#0F766E] text-white px-6 py-3 rounded-xl font-semibold"
        >
          <FaPlus />
          Add News
        </NavLink>
      </div>

      {loading ? (
        <div className="text-center py-20">Loading News...</div>
      ) : news.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          No news available.
        </div>
      ) : (
        <div className="space-y-7">
          {news.map((item) => (
            <motion.div
              key={item._id}
              whileHover={{
                y: -5,
              }}
              className="grid lg:grid-cols-[240px_1fr_auto] gap-8 bg-[#FAF7F2] border border-[#ECE6DA] rounded-[28px] overflow-hidden"
            >
              {/* Image */}

              <img
                src={`${BACKEND_URL}${item.image}`}
                alt={item.title}
                className="w-full h-64 lg:h-full object-cover"
              />

              {/* Content */}

              <div className="py-7 pr-7">
                <div className="flex flex-wrap gap-3 items-center mb-5">
                  <span
                    className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide ${categoryColor(
                      item.category,
                    )}`}
                  >
                    {categoryLabel(item.category)}
                  </span>

                  <span className="flex items-center gap-2 text-gray-500 text-sm">
                    <FaCalendarAlt />

                    {new Date(
                      item.publishDate || item.createdAt,
                    ).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h2 className="text-2xl font-black text-[#0F172A]">
                  {item.title}
                </h2>

                <p className="text-gray-600 leading-7 mt-4">
                  {item.shortDescription}
                </p>

                <div className="flex items-center gap-2 mt-5 text-sm text-gray-500">
                  <FaTag />

                  {item.author}
                </div>
              </div>

              {/* Actions */}

              <div className="flex lg:flex-col justify-center gap-4 p-7">
                <NavLink
                  to={`/admin/news/edit/${item._id}`}
                  className="flex items-center justify-center gap-2 bg-[#0F766E] text-white px-5 py-3 rounded-xl font-semibold hover:scale-105 transition"
                >
                  <FaEdit />
                  Edit
                </NavLink>

                <button
                  onClick={() => handleDelete(item._id)}
                  className="flex items-center justify-center gap-2 bg-red-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-red-700 transition"
                >
                  <FaTrash />
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
