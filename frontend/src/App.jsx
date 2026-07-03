import { Routes, Route } from "react-router-dom";
import Navbar from "./components/app-layout/navbar";
import Footer from "./components/app-layout/footer";
import Home from "./components/userPages/home";
import About from "./components/userPages/about";
import Services from "./components/userPages/services";
import PrivacyPolicy from "./components/userPages/privacyPolicy";
import MSMEBuyers from "./components/userPages/msme_buyer";
import OverseasBuyers from "./components/userPages/overseas_buyer";
import TermsAndConditions from "./components/userPages/TermsAndConditions";
import Contact from "./components/userPages/contact";
import ScrollToTop from "./components/app-layout/ScrollToTop";
import TextileProducts from "./components/userPages/products/Textiles, Home Loom & Apparel";
import BeautyProducts from "./components/userPages/products/Ayush-beauty&personalcare";
import HandcraftProducts from "./components/userPages/products/Handcraft&homedecor";
import EngineeringgoodsProducts from "./components/userPages/products/Engineeringgoods&autoparts";
import LeatherProducts from "./components/userPages/products/leather&lightengineering";
import JewelleryProducts from "./components/userPages/products/semiprecious&limitationjewellery";
import SpicesProducts from "./components/userPages/products/spices,superfood&wellness";
import SustainableProducts from "./components/userPages/products/sustainablepackaging&alternative";

import NewsList from "./components/news/NewsList";
import NewsDetails from "./components/news/NewsDetails";
import AddNews from "./components/admin/AddNews";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/msme-buyers" element={<MSMEBuyers />} />
        <Route path="/overseas-buyers" element={<OverseasBuyers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/products/Textiles-handloom-Apparel"
          element={<TextileProducts />}
        />
        <Route
          path="/products/Ayush-beauty&personalcare"
          element={<BeautyProducts />}
        />
        <Route
          path="/products/Handcraft&homedecor"
          element={<HandcraftProducts />}
        />
        <Route
          path="/products/Engineeringgoods&autoparts"
          element={<EngineeringgoodsProducts />}
        />
        <Route
          path="/products/leather&lightengineering"
          element={<LeatherProducts />}
        />
        <Route
          path="/products/semiprecious&limitationjewellery"
          element={<JewelleryProducts />}
        />
        <Route
          path="/products/Spices-Superfood&Wellness"
          element={<SpicesProducts />}
        />
        <Route
          path="/products/SustainablePackaging&Alternative"
          element={<SustainableProducts />}
        />

        <Route path="/news/:category" element={<NewsList />} />
        <Route path="/news/details/:slug" element={<NewsDetails />} />
        <Route path="/admin/add-news" element={<AddNews />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
