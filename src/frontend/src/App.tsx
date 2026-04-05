import { Toaster } from "@/components/ui/sonner";
import CollectionsSection from "./components/CollectionsSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeritageSection from "./components/HeritageSection";
import HeroSection from "./components/HeroSection";
import MovementSection from "./components/MovementSection";
import NewsletterSection from "./components/NewsletterSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "oklch(0.135 0.008 240)",
            border: "1px solid oklch(0.23 0.012 240)",
            color: "oklch(0.952 0.006 80)",
          },
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <MovementSection />
        <CollectionsSection />
        <HeritageSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
