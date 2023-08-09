import Clients from "@/components/Clients";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileApp from "@/components/MobileApp";
import OurProducts from "@/components/OurProducts";
import Roadmap from "@/components/Roadmap";
import ServiceProvide from "@/components/ServiceProvide";
import Team from "@/components/Team";
import Tokenomics from "@/components/Tokenomics";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceProvide />
      <Features />
      <OurProducts />
      <Roadmap />
      <Tokenomics />
      <Team />
      <Faq />
      <MobileApp />
      <Clients />
      <Footer />
    </main>
  );
}
