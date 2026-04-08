import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import WhyTenax from "@/components/WhyTenax";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Approach />
        <WhyTenax />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
