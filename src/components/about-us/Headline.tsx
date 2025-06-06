import Image from "next/image";

const Headline = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 py-8 pt-20 md:px-14 md:py-14 md:pt-28 flex flex-col gap-5">
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between ">
        <h1 className="max-w-96 text-xl md:text-2xl font-medium font-poppins tracking-wide md:text-start text-center">
          Menciptakan Generasi Unggul Lewat Penguasaan Bahasa Internasional
        </h1>
        <p className="text-neutral-700 md:text-start text-center text-xs md:text-sm max-w-96">
          Kami adalah lembaga pendidikan informal yang berlokasi di ... –
          dikenal luas sebagai Kampung Inggris. Sejak tahun 2025, kami telah
          membantu ribuan siswa dari seluruh Indonesia.
        </p>
        <button className="rounded-full hidden md:flex bg-custom-primary px-3 text-xs md:text-sm font-poppins md:px-4 py-2 text-white active:scale-95 transition-all duration-300">
          Kenal kami
        </button>
      </div>

      <Image
        src="/assets/about-headline.jpg"
        alt="About headline"
        priority
        width={3000}
        height={3000}
        className="w-full rounded-xl h-56 md:h-96 object-cover"
      />
    </div>
  );
};

export default Headline;
