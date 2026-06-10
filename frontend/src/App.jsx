import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/app-layout/navbar";
import Footer from "./components/app-layout/footer";
import Home from "./components/userPages/home";
import About from "./components/userPages/about";
import Services from "./components/userPages/services";
import Process from "./components/userPages/process";
import ExportMarket from "./components/userPages/exportsMarket";
import ProductCatalogue from "./components/userPages/productCatalogue";
import Contact from "./components/userPages/contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/process" element={<Process />} />
        <Route path="/export-market" element={<ExportMarket />} />
        <Route path="/product-catalogue" element={<ProductCatalogue />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
