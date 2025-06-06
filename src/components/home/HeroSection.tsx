import Image from "next/image";
import { GrFormNextLink } from "react-icons/gr";

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
        <h1 className="max-w-[700px] text-2xl font-poppins font-semibold tracking-wide font- md:text-5xl">
          Belajar Bahasa Inggris{" "}
          <strong className="text-custom-secondary">Intensif</strong> di Kampung
          Inggris
        </h1>
        <p className="mt-3 font-poppins max-w-[480px] text-sm md:text-base text-neutral-100">
          Program intensif, tutor berpengalaman, dan suasana belajar yang
          mendukung.
        </p>

        <button className="mt-4 px-3 py-2  bg-custom-primary text-white font-poppins font-medium rounded-xl cursor-pointer flex items-center gap-2 active:scale-95 transition-all duration-300">
          Daftar sekarang <GrFormNextLink />
        </button>
      </div>

      <div className="absolute top-0 left-0 h-full w-full bg-[#2D2D2D]/35" />
    </div>
  );
};

export default HeroSection;
