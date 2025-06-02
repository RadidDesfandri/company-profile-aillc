import Benefit from "@/components/home/Benefit";
import ClientSection from "@/components/home/ClientSection";
import HeroSection from "@/components/home/HeroSection";
import Testimonial from "@/components/home/Testimonial";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Benefit />
      <ClientSection />
      <Testimonial />
    </div>
  );
}
