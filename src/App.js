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
import PageTransition from "./PageTransition";
import SearchResult from "./Pages/SearchResult";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/properties"
          element={
            <PageTransition>
              <Properties />
            </PageTransition>
          }
        />
        <Route
          path="/projects"
          element={
            <PageTransition>
              <Projects />
            </PageTransition>
          }
        />
        <Route
          path="/blogs"
          element={
            <PageTransition>
              <Blogs />
            </PageTransition>
          }
        />
        <Route
          path="/about-us"
          element={
            <PageTransition>
              <AboutUs />
            </PageTransition>
          }
        />
        <Route
          path="/property-reqed"
          element={
            <PageTransition>
              <PropertyRequested />
            </PageTransition>
          }
        />
        <Route
          path="/property-selected/:id"
          element={
            <PageTransition>
              <PropertySelected />
            </PageTransition>
          }
        />
        <Route
          path="/selected-project/:id"
          element={
            <PageTransition>
              <SelectedProject />
            </PageTransition>
          }
        />
        <Route
          path="/selected-blog"
          element={
            <PageTransition>
              <SelectedBlog />
            </PageTransition>
          }
        />
        <Route
          path="/search"
          element={
            <PageTransition>
              <SearchResult />
            </PageTransition>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
