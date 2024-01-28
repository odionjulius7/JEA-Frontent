import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Properties from "./Pages/Properties";
import Projects from "./Pages/Projects";
import Blogs from "./Pages/Blogs";
import AboutUs from "./Pages/AboutUs";
import PropertyRequested from "./Pages/PropertyRequested";
import PropertySelected from "./Pages/PropertySelected";
import SelectedProject from "./Pages/SelectedProject";
import SelectedBlog from "./Pages/SelectedBlog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/property-reqed" element={<PropertyRequested />} />
        <Route path="/property-selected" element={<PropertySelected />} />
        <Route path="/selected-project" element={<SelectedProject />} />
        <Route path="/selected-blog" element={<SelectedBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
