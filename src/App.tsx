import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Works from "./pages/wokrs/Works";
import WorkDetails from "./pages/wokrs/WorkDetails";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/works" element={<Works />} />
        <Route path="/workdetails" element={<WorkDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
