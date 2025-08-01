import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ModeCards from "@/components/ModeCards";
import Features from "@/components/Features";
import QuickStart from "@/components/QuickStart";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ModeCards />
        <Features />
        <QuickStart />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
