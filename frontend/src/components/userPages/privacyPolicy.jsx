import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const PrivacyPolicy = () => {
  return (
    <main className="bg-[#FAF7F2] text-[#1F2937] min-h-screen overflow-hidden">
      {/* Hero */}
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
            Privacy Policy
          </h1>

          <p className="mt-6 text-lg text-[#1F2937]/75 max-w-3xl mx-auto">
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, store, and protect your information when you use our
            website and services.
          </p>
        </motion.div>
      </section>

      {/* Content */}
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
              <div>
                <h2 className="text-2xl font-black text-[#0F172A] mb-3">
                  1. Information We Collect
                </h2>

                <p className="text-[#1F2937]/75 leading-8">
                  We may collect information that you voluntarily provide,
                  including your name, company name, email address, phone
                  number, country, business details, and inquiry information
                  submitted through our contact forms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black text-[#0F172A] mb-3">
                  2. How We Use Your Information
                </h2>

                <p className="text-[#1F2937]/75 leading-8">
                  The information collected may be used to respond to inquiries,
                  provide export and sourcing support, improve our services,
                  communicate updates, and fulfill business-related requests.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black text-[#0F172A] mb-3">
                  3. Information Sharing
                </h2>

                <p className="text-[#1F2937]/75 leading-8">
                  We do not sell, rent, or trade personal information. Data may
                  be shared only when necessary to provide requested services,
                  comply with legal obligations, or work with trusted business
                  partners involved in service delivery.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black text-[#0F172A] mb-3">
                  4. Data Security
                </h2>

                <p className="text-[#1F2937]/75 leading-8">
                  We take reasonable technical and organizational measures to
                  protect your information from unauthorized access, disclosure,
                  alteration, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black text-[#0F172A] mb-3">
                  5. Cookies & Analytics
                </h2>

                <p className="text-[#1F2937]/75 leading-8">
                  Our website may use cookies and analytics tools to understand
                  visitor behavior, improve website performance, and enhance the
                  user experience.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black text-[#0F172A] mb-3">
                  6. Third-Party Services
                </h2>

                <p className="text-[#1F2937]/75 leading-8">
                  The website may contain links to third-party websites or
                  services. We are not responsible for the privacy practices of
                  external websites.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black text-[#0F172A] mb-3">
                  7. Your Rights
                </h2>

                <p className="text-[#1F2937]/75 leading-8">
                  You may request access, correction, or deletion of your
                  personal information by contacting us through the details
                  provided on our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black text-[#0F172A] mb-3">
                  8. Changes To This Policy
                </h2>

                <p className="text-[#1F2937]/75 leading-8">
                  We reserve the right to update this Privacy Policy at any
                  time. Changes will be reflected on this page with the updated
                  effective date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black text-[#0F172A] mb-3">
                  9. Contact Us
                </h2>

                <p className="text-[#1F2937]/75 leading-8">
                  If you have any questions regarding this Privacy Policy,
                  please contact us through the contact information provided on
                  our website.
                </p>
              </div>

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

export default PrivacyPolicy;
