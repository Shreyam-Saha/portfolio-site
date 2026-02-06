import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Certifications from "./components/certifications/Certifications";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import PageTransition from "./components/PageTransition";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
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
          path="/certifications"
          element={
            <PageTransition>
              <Certifications />
            </PageTransition>
          }
        />
        <Route
          path="/work"
          element={
            <PageTransition>
              <Work />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
