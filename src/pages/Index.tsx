import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PracticeAreasSection from "@/components/PracticeAreasSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <section id="quem-somos">
        <AboutSection />
      </section>
      <section id="atuacao">
        <PracticeAreasSection />
      </section>
      <DifferentialsSection />
      <section id="faq">
        <FAQSection />
      </section>
      <FooterSection />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
