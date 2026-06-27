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
            This Privacy Policy explains how Druto India collects, uses, shares,
            and safeguards information when you visit our website and use our
            export management and sourcing services.
          </p>

          <p className="mt-5 text-sm font-semibold text-[#0F766E]">
            Effective Date: June 2026
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
                  1. Introduction
                </h2>

                <p className="text-[#1F2937]/75 leading-8">
                  Druto India {'("we," "our," or "us")'} is committed to
                  protecting your privacy. This Privacy Policy explains how we
                  collect, use, and safeguard your information when you visit
                  www.drutoindia.com and use our export management and sourcing
                  services. We comply with applicable data protection
                  regulations, including the Digital Personal Data Protection
                  {" (DPDP)"} Act, 2023.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black text-[#0F172A] mb-3">
                  2. Information We Collect
                </h2>

                <p className="text-[#1F2937]/75 leading-8 mb-5">
                  We may collect the following data when you use our website:
                </p>

                <div className="space-y-4">
                  <p className="text-[#1F2937]/75 leading-8">
                    <span className="font-bold text-[#0F172A]">
                      Business Contact Information:
                    </span>{" "}
                    Name, job title, company name, email address, and phone
                    number when you submit an inquiry.
                  </p>

                  <p className="text-[#1F2937]/75 leading-8">
                    <span className="font-bold text-[#0F172A]">
                      Commercial Data:
                    </span>{" "}
                    Product catalogs, manufacturing capabilities, sourcing
                    requirements, and business credentials.
                  </p>

                  <p className="text-[#1F2937]/75 leading-8">
                    <span className="font-bold text-[#0F172A]">
                      Technical Data:
                    </span>{" "}
                    IP addresses, browser types, and usage data collected
                    through cookies to improve website functionality.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black text-[#0F172A] mb-3">
                  3. How We Use Your Information
                </h2>

                <p className="text-[#1F2937]/75 leading-8 mb-5">
                  We use the collected data exclusively to:
                </p>

                <ul className="space-y-3 text-[#1F2937]/75 leading-8 list-disc pl-6">
                  <li>
                    Facilitate international trade connections between buyers
                    and suppliers.
                  </li>
                  <li>Manage our sales and sourcing pipelines effectively.</li>
                  <li>
                    Communicate updates regarding your shipments, audits, or
                    negotiations.
                  </li>
                  <li>Improve our website and operational workflows.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-black text-[#0F172A] mb-3">
                  4. Data Sharing
                </h2>

                <p className="text-[#1F2937]/75 leading-8">
                  We do not sell your personal or business data. We may share
                  necessary information strictly with authorized third parties,
                  such as freight forwarders, customs brokers, and inspection
                  agencies, solely to fulfill our contractual obligations to
                  you.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black text-[#0F172A] mb-3">
                  5. Data Security
                </h2>

                <p className="text-[#1F2937]/75 leading-8">
                  We implement robust, industry-standard security measures
                  within our customer relationship management {"(CRM)"} systems
                  and digital infrastructure to prevent unauthorized access,
                  alteration, or disclosure of your data.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black text-[#0F172A] mb-3">
                  6. Your Rights
                </h2>

                <p className="text-[#1F2937]/75 leading-8">
                  You have the right to request access to the data we hold about
                  you, request corrections to inaccurate information, or request
                  the deletion of your data once its commercial purpose has
                  concluded. To exercise these rights, contact us at{" "}
                  <a
                    href="mailto:Info@drutoindia.com"
                    className="font-semibold text-[#0F766E] hover:underline"
                  >
                    Info@drutoindia.com
                  </a>
                  .
                </p>
              </div>

              <div className="pt-6 border-t border-[#E7DFD2]">
                <p className="text-sm text-[#1F2937]/60">
                  Effective Date: June 2026
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
