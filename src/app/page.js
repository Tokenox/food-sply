import Features from "@/components/Features";
import Header from "@/components/Header";
import ServiceProvide from "@/components/ServiceProvide";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceProvide />
      <Features />
    </main>
  );
}
