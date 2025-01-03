import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "./components/hero";
import { Logo } from "./components/logo";
import { Solutions } from "./components/solutions";
import { Layout } from "./components/features";
import { Stats } from "./components/stats";
import { Benefits } from "./components/benefits";
import { Layout486 } from "./components/howitworks";
import { Testimonials } from "./components/testimonials";
import { Faq } from "./components/faq";
import { Cta } from "./components/cta";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { GrainEffect } from "./components/ui/GrainEffect";
import { preloadImages } from "./utils/image";

// Preload critical images
const CRITICAL_IMAGES = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
];

export default function App() {
  const location = useLocation();

  useEffect(() => {
    // Preload critical images
    preloadImages(CRITICAL_IMAGES);

    // Handle scroll to section
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen text-foreground">
      <GrainEffect />
      <div className="relative">
        <Navbar />
        <Hero />
        <Logo />
        <Layout />
        <Solutions />
        <Stats />
        <Benefits />
        <Layout486 />
        <Testimonials />
        <Faq />
        <Cta />
        <Footer />
      </div>
    </div>
  );
}
