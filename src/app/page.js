import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Header from "@/components/Header";
import OurProducts from "@/components/OurProducts";
import Roadmap from "@/components/Roadmap";
import ServiceProvide from "@/components/ServiceProvide";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceProvide />
      <Features />
      <OurProducts />
      <Roadmap />
      <Faq />
    </main>
  );
}
