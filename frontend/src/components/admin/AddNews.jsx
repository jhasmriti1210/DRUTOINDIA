import { useState } from "react";
import { createNews } from "../services/newsApi";

export default function AddNews() {
  const [form, setForm] = useState({
    title: "",
    category: "druto",
    shortDescription: "",
    content: "",
    author: "DRUTO INDIA",
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const [useCurrentDate, setUseCurrentDate] = useState(true);
  const [publishDate, setPublishDate] = useState("");

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

      if (!useCurrentDate && publishDate) {
        formData.append("publishDate", publishDate);
      }

      if (image) {
        formData.append("image", image);
      }

      await createNews(formData);

      alert("News published successfully.");

      setForm({
        title: "",
        category: "druto",
        shortDescription: "",
        content: "",
        author: "DRUTO INDIA",
      });

      setImage(null);
      setUseCurrentDate(true);
      setPublishDate("");

      e.target.reset();
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Failed to publish news");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-[32px] shadow-xl border border-[#E7DFD2] p-6 sm:p-8 lg:p-10">
      <div className="mb-8">
        <p className="uppercase tracking-[4px] text-[#0F766E] font-bold text-sm">
          Admin Panel
        </p>

        <h1 className="text-3xl md:text-4xl font-black text-[#0F172A] mt-2">
          Publish News
        </h1>

        <p className="text-[#6B7280] mt-3">
          Create a new article for the DRUTO INDIA website.
        </p>
      </div>

      <form onSubmit={submitHandler} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block font-semibold mb-2 text-[#0F172A]">
            News Title
          </label>

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter news title"
            className="w-full border border-[#E7DFD2] p-4 rounded-xl outline-none focus:border-[#0F766E]"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold mb-2 text-[#0F172A]">
            Category
          </label>

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border border-[#E7DFD2] p-4 rounded-xl outline-none focus:border-[#0F766E]"
          >
            <option value="druto">DRUTO Updates</option>
            <option value="industry">Industry News</option>
            <option value="rules">Rules & Regulations</option>
          </select>
        </div>

        {/* Publish Date */}
        <div className="border border-[#E7DFD2] rounded-2xl p-5 bg-[#FAF7F2]">
          <h3 className="font-semibold text-[#0F172A] mb-4">Publish Date</h3>

          <div className="flex flex-col sm:flex-row gap-5">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                checked={useCurrentDate}
                onChange={() => setUseCurrentDate(true)}
                className="accent-[#0F766E]"
              />

              <span>Use Current Date</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                checked={!useCurrentDate}
                onChange={() => setUseCurrentDate(false)}
                className="accent-[#0F766E]"
              />

              <span>Select Custom Date</span>
            </label>
          </div>

          <input
            type="date"
            value={publishDate}
            onChange={(e) => setPublishDate(e.target.value)}
            disabled={useCurrentDate}
            className={`mt-5 w-full sm:w-72 border p-4 rounded-xl outline-none transition ${
              useCurrentDate
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "border-[#E7DFD2] focus:border-[#0F766E]"
            }`}
          />
        </div>

        {/* Short Description */}
        <div>
          <label className="block font-semibold mb-2 text-[#0F172A]">
            Short Description
          </label>

          <textarea
            name="shortDescription"
            value={form.shortDescription}
            onChange={handleChange}
            rows={3}
            placeholder="Short description shown on cards..."
            className="w-full border border-[#E7DFD2] p-4 rounded-xl outline-none focus:border-[#0F766E]"
            required
          />
        </div>

        {/* Content */}
        <div>
          <label className="block font-semibold mb-2 text-[#0F172A]">
            Full Content
          </label>

          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            rows={12}
            placeholder="Write complete article..."
            className="w-full border border-[#E7DFD2] p-4 rounded-xl outline-none focus:border-[#0F766E]"
            required
          />
        </div>

        {/* Author */}
        <div>
          <label className="block font-semibold mb-2 text-[#0F172A]">
            Author
          </label>

          <input
            name="author"
            value={form.author}
            onChange={handleChange}
            className="w-full border border-[#E7DFD2] p-4 rounded-xl outline-none focus:border-[#0F766E]"
          />
        </div>

        {/* Featured Image */}
        <div>
          <label className="block font-semibold mb-2 text-[#0F172A]">
            Featured Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full border border-[#E7DFD2] p-4 rounded-xl"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-[#0F766E] hover:bg-[#0d665f] disabled:opacity-60 text-white px-8 py-4 rounded-full font-semibold transition"
        >
          {loading ? "Publishing..." : "Publish News"}
        </button>
      </form>
    </div>
  );
}
