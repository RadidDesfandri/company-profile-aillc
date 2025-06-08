import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const Headline = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 py-8 pt-20 md:px-14 md:py-14 md:pt-28 flex flex-col md:flex-row-reverse md:justify-between gap-4">
      <Image
        alt="Hero program"
        src="/assets/hero-program.jpg"
        width={500}
        height={500}
        className="rounded-xl"
      />
      <div className="flex flex-col justify-center gap-3">
        <h1 className="text-2xl md:text-4xl font-medium font-poppins md:max-w-[480px]">
          Pilih Program Belajar Sesuai Targetmu
        </h1>
        <p className="text-neutral-700 text-xs md:text-sm">
          Mulai dari pemula hingga siap TOEFL – semua bisa kamu temukan di sini.
        </p>
        <Button className="w-fit bg-custom-secondary hover:bg-custom-primary cursor-pointer">
          <Link href="#programs">Lihat semua program</Link>
        </Button>
      </div>
    </div>
  );
};

export default Headline;
