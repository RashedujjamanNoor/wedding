import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import StickyCTA from "./components/StickyCTA";
import Booking from "./components/Booking";
import Cursor from "./components/Cursor";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import ServicesPage from "./pages/ServicePage";
import Loader from "./components/Loader";

export default function App() {
  return (
    <>
      <Loader />
      <div className="bg-black min-h-screen overflow-x-hidden">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <WhatsAppButton />
        <StickyCTA />
        <Footer />
        <Cursor />
      </div>
    </>
  );
}
