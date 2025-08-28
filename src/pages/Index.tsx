import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Tracks from "@/components/Tracks";
import Rewards from "@/components/Rewards";
import Sponsors from "@/components/Sponsors";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Tracks />
      <Rewards />
      <Sponsors />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;