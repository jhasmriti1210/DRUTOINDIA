import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getNews, updateNews } from "../services/newsApi";

export default function EditNews() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    category: "druto",
    shortDescription: "",
    content: "",
    author: "DRUTO INDIA",
  });

  const [image, setImage] = useState(null);
  const [currentImage, setCurrentImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const fetchSingle = async () => {
      try {
        setPageLoading(true);

        const allNews = await getNews();
        const selected = allNews.find((item) => item._id === id);

        if (selected) {
          setForm({
            title: selected.title || "",
            category: selected.category || "druto",
            shortDescription: selected.shortDescription || "",
            content: selected.content || "",
            author: selected.author || "DRUTO INDIA",
          });

          setCurrentImage(selected.image || "");
        }
      } catch (error) {
        console.error(error);
        alert("Failed to load news");
      } finally {
        setPageLoading(false);
      }
    };

    fetchSingle();
  }, [id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      if (image) {
        formData.append("image", image);
      }

      await updateNews(id, formData);

      alert("News updated successfully");
      navigate("/admin/news/manage");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Failed to update news");
    } finally {
      setLoading(false);
    }
  };

  if (pageLoading) {
    return (
      <div className="bg-white rounded-[32px] shadow-xl p-10 text-center">
        Loading news...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[32px] shadow-xl p-6 sm:p-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-black text-[#0F172A]">
          Update News
        </h1>

        <p className="text-[#4B5563] mt-2">
          Edit news title, category, content, author, and image.
        </p>
      </div>

      <form onSubmit={submitHandler} className="space-y-6">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="News Title"
          className="w-full border border-[#E7DFD2] p-4 rounded-xl outline-none focus:border-[#0F766E]"
          required
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border border-[#E7DFD2] p-4 rounded-xl outline-none focus:border-[#0F766E]"
        >
          <option value="druto">DRUTO UPDATES</option>
          <option value="industry">INDUSTRY NEWS</option>
          <option value="rules">RULES & REGULATIONS</option>
        </select>

        <textarea
          name="shortDescription"
          value={form.shortDescription}
          onChange={handleChange}
          placeholder="Short Description"
          className="w-full border border-[#E7DFD2] p-4 rounded-xl outline-none focus:border-[#0F766E]"
          rows="3"
          required
        />

        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="Full News Content"
          className="w-full border border-[#E7DFD2] p-4 rounded-xl outline-none focus:border-[#0F766E]"
          rows="9"
          required
        />

        <input
          name="author"
          value={form.author}
          onChange={handleChange}
          placeholder="Author"
          className="w-full border border-[#E7DFD2] p-4 rounded-xl outline-none focus:border-[#0F766E]"
        />

        {currentImage && (
          <div>
            <p className="text-sm font-semibold text-[#0F172A] mb-3">
              Current Image
            </p>

            <img
              src={currentImage}
              alt={form.title}
              className="w-full max-h-72 object-cover rounded-2xl border border-[#E7DFD2]"
            />
          </div>
        )}

        <div>
          <p className="text-sm font-semibold text-[#0F172A] mb-3">
            Upload New Image
          </p>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full border border-[#E7DFD2] p-4 rounded-xl"
          />
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-[#0F766E] disabled:opacity-60 text-white px-8 py-4 rounded-full font-semibold"
          >
            {loading ? "Updating..." : "Update News"}
          </button>

          <button
            type="button"
            onClick={() => navigate("/admin/news/manage")}
            className="bg-[#0F172A] text-white px-8 py-4 rounded-full font-semibold"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
