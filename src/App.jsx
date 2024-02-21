import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import NavBar from "./components/NavBar";
import About from "./views/About";
import Services from "./views/Services";
import Blog from "./views/Blog";
import Footer from "./components/Footer";
export default function App() {
  return (
    <main>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
