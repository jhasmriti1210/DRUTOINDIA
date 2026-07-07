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

      await createNews(formData);

      alert("News added successfully");

      setForm({
        title: "",
        category: "druto",
        shortDescription: "",
        content: "",
        author: "DRUTO INDIA",
      });

      setImage(null);
      e.target.reset();
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Failed to add news");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8">
      <h1 className="text-3xl sm:text-4xl font-black text-[#0F172A] mb-8">
        Add News
      </h1>

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
          rows="8"
          required
        />

        <input
          name="author"
          value={form.author}
          onChange={handleChange}
          placeholder="Author"
          className="w-full border border-[#E7DFD2] p-4 rounded-xl outline-none focus:border-[#0F766E]"
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full border border-[#E7DFD2] p-4 rounded-xl"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-[#0F766E] disabled:opacity-60 text-white px-8 py-4 rounded-full font-semibold"
        >
          {loading ? "Publishing..." : "Publish News"}
        </button>
      </form>
    </div>
  );
}
