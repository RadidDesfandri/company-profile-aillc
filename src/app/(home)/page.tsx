import Mentor from "@/components/about-us/Mentor";
import Benefit from "@/components/home/Benefit";
import ClientSection from "@/components/home/ClientSection";
import HeroSection from "@/components/home/HeroSection";
import Maps from "@/components/home/Maps";
import OverviewProgram from "@/components/home/OverviewProgram";
import Qna from "@/components/home/Qna";
import Testimonial from "@/components/home/Testimonial";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <OverviewProgram />
      <Benefit />
      <ClientSection />
      <Testimonial />
      <Mentor showMentor={3}/>
      <Qna />
      <Maps />
    </div>
  );
}
