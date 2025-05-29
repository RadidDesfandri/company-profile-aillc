import Image from "next/image";

const benefitItems = [
  "Berlatih bahasa Inggris setiap hari di lingkungan yang mendukung!",
  "Belajar dari dasar hingga mahir dengan kurikulum yang terarah.",
  "Banyak pilihan paket belajar + kos/English camp.",
];

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

      <div className="absolute bottom-8 z-10 transform px-5 text-white md:left-9 md:-translate-y-1/6">
        <h1 className="max-w-[700px] text-xl font-poppins font-medium tracking-wide font- md:text-4xl">
          Pelopor Pendongkrak PD Ngomong Inggris di Kampung Inggris Pare
        </h1>
        <p className="mt-3 font-poppins max-w-[480px] text-sm md:text-base text-neutral-200">
          Bersama ribuan alumni lainnya, tingkatkan Skill Ngomong Inggris
          terbaikmu di Mr Bob Kampung Inggris!
        </p>

        <div className="mt-5 flex items-start gap-5 md:flex-row flex-col">
          {benefitItems.map((item, idx) => (
            <div key={item} className="flex flex-col gap-3">
              <div className="h-1 w-72 border-b-2" />
              <div className="flex items-center gap-5">
                <div className="w-5 h-5 border rotate-45 flex items-center justify-center">
                  <p className="-rotate-45 text-center text-sm">{idx + 1}</p>
                </div>
                <p className="text-sm max-w-72 font-poppins">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-0 h-full w-full bg-[#2D2D2D]/35" />
    </div>
  );
};

export default HeroSection;
