import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import AboutPage from "@/pages/about";
import HeroSection from "@/pages/HeroSection";
import NotFoundPage from "@/pages/not-found";
import LoadingSpinner from "@/components/loading-spinner";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 detik loading

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

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
