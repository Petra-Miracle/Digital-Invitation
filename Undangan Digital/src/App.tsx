import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import AboutPage from "@/pages/about";
import HeroSection from "@/pages/HeroSection";
import NotFoundPage from "@/pages/not-found";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<HeroSection />} path="/hero" />
      <Route element={<NotFoundPage />} path="*" />
    </Routes>
  );
}

export default App;
