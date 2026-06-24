import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const TermsConditions = () => {
  return (
    <main className="bg-[#FAF7F2] text-[#1F2937] min-h-screen overflow-hidden">
      <section className="pt-40 pb-16 relative">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#0F766E]/10 rounded-full blur-[140px]" />

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="max-w-5xl mx-auto px-6 text-center relative z-10"
        >
          <p className="uppercase tracking-[5px] text-[#0F766E] font-bold mb-4">
            Legal Information
          </p>

          <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-black text-[#0F172A] leading-tight">
            Terms & Conditions
          </h1>

          <p className="mt-6 text-lg text-[#1F2937]/75 max-w-3xl mx-auto">
            These Terms & Conditions explain the basic rules for using our
            website and engaging with our export support, sourcing, and business
            inquiry services.
          </p>
        </motion.div>
      </section>

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-[#F5F0E6] border border-[#E7DFD2] rounded-[2rem] p-8 md:p-12"
          >
            <div className="space-y-10">
              {[
                {
                  title: "1. Acceptance of Terms",
                  text: "By accessing or using this website, you agree to comply with these Terms & Conditions. If you do not agree, please avoid using the website.",
                },
                {
                  title: "2. Nature of Services",
                  text: "Druto provides export support, sourcing assistance, documentation coordination, logistics coordination, and shipment execution support for Indian MSMEs and overseas buyers.",
                },
                {
                  title: "3. No Guaranteed Business Outcome",
                  text: "Submitting an inquiry or using our services does not guarantee buyer conversion, supplier approval, export success, shipment completion, or any specific commercial result.",
                },
                {
                  title: "4. User Information",
                  text: "You agree to provide accurate, complete, and truthful information when submitting forms or business inquiries through the website.",
                },
                {
                  title: "5. Business Communication",
                  text: "By submitting an inquiry, you permit us to contact you through email, phone, WhatsApp, or other communication channels regarding your request.",
                },
                {
                  title: "6. Third-Party Services",
                  text: "Some services may involve third-party logistics providers, consultants, documentation partners, suppliers, or other business partners. We are not responsible for delays or failures caused by third parties.",
                },
                {
                  title: "7. Website Content",
                  text: "All website content, including text, images, layout, branding, and design, is for informational purposes and may be updated without prior notice.",
                },
                {
                  title: "8. Intellectual Property",
                  text: "All website materials, branding, graphics, and content belong to Druto unless otherwise stated. You may not copy, reproduce, or misuse them without permission.",
                },
                {
                  title: "9. Limitation of Liability",
                  text: "Druto shall not be liable for indirect, incidental, or consequential losses arising from use of the website, business inquiries, delays, third-party services, or external market conditions.",
                },
                {
                  title: "10. Changes to Terms",
                  text: "We may update these Terms & Conditions at any time. Updated terms will be posted on this page.",
                },
                {
                  title: "11. Contact",
                  text: "For questions about these Terms & Conditions, contact us through the details provided on our website.",
                },
              ].map((item, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-black text-[#0F172A] mb-3">
                    {item.title}
                  </h2>

                  <p className="text-[#1F2937]/75 leading-8">{item.text}</p>
                </div>
              ))}

              <div className="pt-6 border-t border-[#E7DFD2]">
                <p className="text-sm text-[#1F2937]/60">
                  Last Updated: July 2026
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default TermsConditions;
