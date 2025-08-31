import { BrowserRouter, Route, Routes } from "react-router-dom";
import Animations from "./pages/Animations";
import Blogging from "./pages/Blogging";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blogging />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/animations" element={<Animations />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
