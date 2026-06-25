import { Routes, Route } from "react-router-dom";

import Navbar from "./components/app-layout/navbar";
import Footer from "./components/app-layout/footer";
import Home from "./components/userPages/home";
import About from "./components/userPages/about";
import Services from "./components/userPages/services";
import PrivacyPolicy from "./components/userPages/privacyPolicy";
import ExportMarket from "./components/userPages/exportsMarket";
import TermsAndConditions from "./components/userPages/TermsAndConditions";
import Contact from "./components/userPages/contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/export-market" element={<ExportMarket />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
