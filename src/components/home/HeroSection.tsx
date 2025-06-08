import Image from "next/image";
import { GrFormNextLink } from "react-icons/gr";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="relative">
      <Image
        alt="Hero section"
        src="/assets/hero-section.jpg"
        width={800}
        height={800}
        priority
        className="w-full h-screen object-cover"
      />

      <div className="absolute bottom-20 md:bottom-12 z-10 transform px-5 text-white md:left-9 md:-translate-y-1/6">
        <h2 className="text-sm md:text-xl font-medium text-gray-200">
          [ Alexandria International Language Center ]
        </h2>
        <h1 className="max-w-[700px] text-2xl font-poppins font-semibold tracking-wide font- md:text-5xl">
          Belajar Bahasa Inggris{" "}
          <strong className="text-custom-secondary">Intensif</strong> di Kampung
          Inggris
        </h1>
        <p className="mt-3 font-poppins max-w-[480px] text-sm md:text-base text-neutral-100">
          Program intensif, tutor berpengalaman, dan suasana belajar yang
          mendukung.
        </p>
        <Button className="bg-custom-secondary hover:bg-custom-primary mt-4 cursor-pointer">
          Daftar Sekarang <GrFormNextLink />
        </Button>
      </div>

      <div className="absolute top-0 left-0 h-full w-full bg-[#2D2D2D]/35" />
    </div>
  );
};

export default HeroSection;
