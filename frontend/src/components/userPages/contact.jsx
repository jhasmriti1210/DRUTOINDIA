import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaIndustry,
  FaHandshake,
  FaUsers,
  FaUpload,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const tabs = [
  {
    id: "msme",
    title: "Indian MSME / Manufacturer Contact Form",
    shortTitle: "Indian MSME",
    icon: <FaIndustry />,
    intro:
      "For Indian MSMEs, manufacturers, exporters, and product brands who want to start or grow their export journey.",
  },
  {
    id: "buyer",
    title: "Overseas Buyer Contact Form",
    shortTitle: "Overseas Buyer",
    icon: <FaHandshake />,
    intro:
      "For overseas buyers, importers, distributors, retailers, and sourcing teams looking to source products from India.",
  },
  {
    id: "employee",
    title: "Prospective Employee Contact Form",
    shortTitle: "Prospective Employee",
    icon: <FaUsers />,
    intro:
      "For logistics partners, sourcing partners, consultants, distributors, and professionals interested in working with Druto.",
  },
];

const countries = [
  "India",
  "United States",
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Oman",
  "Kuwait",
  "Germany",
  "United Kingdom",
  "France",
  "Canada",
  "Australia",
  "Singapore",
  "Malaysia",
  "South Africa",
  "Kenya",
  "Nigeria",
  "Other",
];

const formFields = {
  msme: [
    { label: "Company Name", type: "text", required: true },
    { label: "First Name", type: "text", required: true },
    { label: "Last Name", type: "text", required: true },
    { label: "Title / Designation", type: "text" },
    { label: "Email", type: "email", required: true },
    { label: "Work Phone", type: "tel", required: true },
    { label: "Mobile / WhatsApp", type: "tel" },
    { label: "Fax", type: "text" },
    { label: "Address", type: "text" },
    { label: "Address 2", type: "text" },
    { label: "City", type: "text", required: true },
    { label: "State", type: "text", required: true },
    { label: "Zip / Post Code", type: "text" },
    { label: "Country", type: "select", required: true, options: countries },
    { label: "Website", type: "text" },
    { label: "Social Media / LinkedIn", type: "text" },
    { label: "GST Number", type: "text" },
    { label: "IEC Number", type: "text" },
    { label: "Annual Turnover", type: "text" },
    { label: "Number of Employees", type: "text" },
    {
      label: "Export Experience",
      type: "select",
      required: true,
      options: ["New Exporter", "Existing Exporter", "Occasional Exporter"],
    },
    {
      label: "We are a",
      type: "select",
      required: true,
      options: [
        "Manufacturer",
        "MSME",
        "Exporter",
        "Product Brand",
        "Trader",
        "Other",
      ],
    },
    { label: "About Your Company", type: "text", required: true },
    {
      label: "Territories / Countries Interested in Exporting To",
      type: "text",
      required: true,
    },
    {
      label: "Types of Products Your Company Manufactures",
      type: "text",
      required: true,
    },
    { label: "Production Capacity", type: "text" },
    { label: "Packaging Capability", type: "text" },
  ],

  buyer: [
    { label: "Company Name", type: "text", required: true },
    { label: "First Name", type: "text", required: true },
    { label: "Last Name", type: "text", required: true },
    { label: "Title / Designation", type: "text" },
    { label: "Email", type: "email", required: true },
    { label: "Work Phone", type: "tel", required: true },
    { label: "Mobile / WhatsApp", type: "tel" },
    { label: "Address", type: "text" },
    { label: "Address 2", type: "text" },
    { label: "City", type: "text", required: true },
    { label: "State / Province", type: "text" },
    { label: "Postal / Zip Code", type: "text" },
    { label: "Country", type: "select", required: true, options: countries },
    { label: "Website", type: "text" },
    { label: "Social Media / LinkedIn", type: "text" },
    { label: "Number of Customers", type: "text" },
    { label: "Number of Salespeople on Staff", type: "text" },
    {
      label: "We are a",
      type: "select",
      required: true,
      options: [
        "Importer",
        "Distributor",
        "Retail Buyer",
        "Wholesaler",
        "Sourcing Company",
        "Trading Company",
        "Other",
      ],
    },
    { label: "Annual Turnover", type: "text" },
    {
      label: "Information Required",
      type: "select",
      required: true,
      options: [
        "Receive a Quote",
        "Product Catalogue",
        "Supplier Information",
        "Sourcing Support",
        "Shipment Support",
        "Other",
      ],
    },
    { label: "Manufacturer or Brand Names of Interest", type: "text" },
    {
      label: "Product Category / Products Required",
      type: "text",
      required: true,
    },
    { label: "Expected Quantity", type: "text" },
    {
      label: "Purchase Frequency",
      type: "select",
      options: ["One-time", "Monthly", "Quarterly", "Yearly", "As Needed"],
    },
    { label: "Target Delivery Country", type: "text" },
    { label: "Target Delivery City / Warehouse", type: "text" },
  ],

  employee: [
    { label: "First Name", type: "text", required: true },
    { label: "Last Name", type: "text", required: true },
    { label: "Title / Designation", type: "text" },
    { label: "Email", type: "email", required: true },
    { label: "Phone", type: "tel" },
    {
      label: "Resume / Profile Upload",
      type: "file",
      required: true,
    },
  ],
};

const textAreas = {
  msme: [
    {
      label: "Comments / Special Requests",
      placeholder:
        "Share your export goals, product details, target countries, documentation status, challenges, or support required...",
      required: true,
    },
    {
      label: "Request for Quotation Details",
      placeholder:
        "Mention product details, packaging, shipment size, existing buyer inquiry, or target export plan...",
    },
  ],

  buyer: [
    {
      label: "Request for Quotation Details / Special Request",
      placeholder:
        "Mention product name, brand preference, quantity, destination, packaging requirements, target price, and delivery expectations...",
      required: true,
    },
    {
      label: "Products / Brands Your Company Currently Represents",
      placeholder:
        "Share current product lines, represented brands, importing categories, or supplier network...",
    },
  ],

  employee: [],
};

const supportPoints = [
  "Exporter onboarding",
  "Documentation support",
  "India sourcing support",
  "Shipment execution",
];

const howFoundOptions = [
  "Google",
  "LinkedIn",
  "Instagram",
  "Referral",
  "Website",
  "Other",
];

const Contact = () => {
  const [activeTab, setActiveTab] = useState("msme");
  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <main className="bg-[#FAF7F2] text-[#1F2937] font-['Inter'] overflow-hidden">
      <section className="pt-32 pb-16 relative">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#0F766E]/10 rounded-full blur-[130px]" />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-7xl mx-auto px-6 relative"
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              variants={fadeUp}
              className="font-['Playfair_Display'] text-3xl md:text-5xl font-black text-[#0F172A] leading-tight"
            >
              Choose the Right Inquiry
              <br />
              for Your Requirement
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-[#1F2937]/75 mt-8 max-w-3xl mx-auto leading-8"
            >
              Whether you are an Indian MSME starting exports, an overseas buyer
              sourcing from India, or a prospective employee, share your details
              and our team will get back with the next steps.
            </motion.p>
          </div>
        </motion.div>
      </section>

      <section className="pb-28 relative">
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#0F172A]/5 rounded-full blur-[140px]" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-[340px_1fr] gap-10 items-start">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:sticky lg:top-28 bg-[#F5F0E6] border border-[#E7DFD2] rounded-[2rem] p-5 shadow-sm"
            >
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  variants={fadeUp}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-4 p-5 rounded-2xl text-left transition mb-3 ${
                    activeTab === tab.id
                      ? "bg-[#0F172A] text-white shadow-lg"
                      : "bg-[#FAF7F2] text-[#1F2937] hover:bg-white"
                  }`}
                >
                  <span
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 ${
                      activeTab === tab.id
                        ? "bg-[#0F766E] text-white"
                        : "bg-[#0F766E]/10 text-[#0F766E]"
                    }`}
                  >
                    {tab.icon}
                  </span>

                  <span>
                    <span className="block font-bold">{tab.shortTitle}</span>
                    <span
                      className={`block text-xs mt-1 ${
                        activeTab === tab.id
                          ? "text-white/65"
                          : "text-[#1F2937]/55"
                      }`}
                    >
                      {tab.title}
                    </span>
                  </span>
                </motion.button>
              ))}

              <div className="mt-8 bg-[#0F172A] text-white rounded-3xl p-6">
                <p className="font-['Playfair_Display'] text-xl font-black mb-4">
                  We Help With
                </p>

                <div className="space-y-3">
                  {supportPoints.map((point, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <FaCheckCircle className="text-[#5EEAD4] shrink-0" />
                      <span className="text-white/80 text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="bg-[#F5F0E6] border border-[#E7DFD2] rounded-[2rem] p-8 md:p-10 shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
              >
                <div className="mb-8">
                  <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-black text-[#0F172A] mb-3">
                    {activeTabData?.title}
                  </h2>

                  <p className="text-[#1F2937]/70 leading-7">
                    {activeTabData?.intro}
                  </p>

                  <p className="text-sm text-[#1F2937]/60 mt-5">
                    Fields marked with{" "}
                    <span className="text-[#0F766E] font-bold">*</span> are
                    required.
                  </p>
                </div>

                <form className="grid md:grid-cols-2 gap-5">
                  {formFields[activeTab].map((field, index) => (
                    <div key={index}>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                        {field.label}
                        {field.required && (
                          <span className="text-[#0F766E]"> *</span>
                        )}
                      </label>

                      {field.type === "select" ? (
                        <select className="w-full p-4 rounded-xl border border-[#E7DFD2] bg-[#FAF7F2] outline-none focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10 transition">
                          <option value="">Select option</option>
                          {field.options.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      ) : field.type === "file" ? (
                        <label className="w-full p-4 rounded-xl border border-dashed border-[#0F766E]/50 bg-[#FAF7F2] outline-none flex items-center gap-3 cursor-pointer hover:bg-white transition">
                          <FaUpload className="text-[#0F766E]" />
                          <span className="text-[#1F2937]/70">Upload file</span>
                          <input type="file" className="hidden" />
                        </label>
                      ) : (
                        <input
                          type={field.type}
                          placeholder={field.label}
                          className="w-full p-4 rounded-xl border border-[#E7DFD2] bg-[#FAF7F2] outline-none focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10 transition"
                        />
                      )}
                    </div>
                  ))}

                  {textAreas[activeTab].map((area, index) => (
                    <div key={index} className="md:col-span-2">
                      <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                        {area.label}
                        {area.required && (
                          <span className="text-[#0F766E]"> *</span>
                        )}
                      </label>

                      <textarea
                        rows={index === 0 ? 7 : 6}
                        placeholder={area.placeholder}
                        className="w-full p-4 rounded-xl border border-[#E7DFD2] bg-[#FAF7F2] outline-none focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10 transition"
                      />
                    </div>
                  ))}

                  <div className="md:col-span-2 bg-[#FAF7F2] border border-[#E7DFD2] rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <p className="font-semibold text-[#0F172A]">
                        Confirm that you are not a bot{" "}
                        <span className="text-[#0F766E]">*</span>
                      </p>
                    </div>

                    <label className="flex items-center gap-3 bg-white border border-[#E7DFD2] rounded-xl px-5 py-4 cursor-pointer">
                      <input type="checkbox" className="w-5 h-5" />
                      <span className="text-sm font-medium">I'm not a bot</span>
                    </label>
                  </div>

                  <div className="md:col-span-2 flex flex-wrap gap-4 items-center justify-between pt-3">
                    <p className="text-sm text-[#1F2937]/60">
                      Our team will review your inquiry and respond with the
                      next steps.
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      className="group bg-[#0F172A] hover:bg-[#0F766E] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition"
                    >
                      Submit Inquiry
                      <FaArrowRight className="group-hover:translate-x-1 transition" />
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
