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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

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
  };

  return (
    <section className="pt-32 pb-20 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-black text-[#0F172A] mb-10">Add News</h1>

        <form
          onSubmit={submitHandler}
          className="bg-white rounded-3xl shadow-xl p-8 space-y-6"
        >
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="News Title"
            className="w-full border p-4 rounded-xl"
            required
          />

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border p-4 rounded-xl"
          >
            <option value="druto">DRUTO INDIA News</option>
            <option value="industry">Export / Import Industry News</option>
          </select>

          <textarea
            name="shortDescription"
            value={form.shortDescription}
            onChange={handleChange}
            placeholder="Short Description"
            className="w-full border p-4 rounded-xl"
            rows="3"
            required
          />

          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Full News Content"
            className="w-full border p-4 rounded-xl"
            rows="8"
            required
          />

          <input
            name="author"
            value={form.author}
            onChange={handleChange}
            placeholder="Author"
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full border p-4 rounded-xl"
          />

          <button
            type="submit"
            className="bg-[#0F766E] text-white px-8 py-4 rounded-full font-semibold"
          >
            Publish News
          </button>
        </form>
      </div>
    </section>
  );
}
