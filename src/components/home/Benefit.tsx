import Image from "next/image";

const benefitItems = [
  {
    imgUrl: "/assets/benefit-2.jpg",
    title: "Full english",
    benefit:
      "Berlatih bahasa Inggris setiap hari di lingkungan yang mendukung!",
  },
  {
    imgUrl: "/assets/benefit-1.jpg",
    title: "Intensif",
    benefit: "Belajar dari dasar hingga mahir dengan kurikulum yang terarah.",
  },
  {
    imgUrl: "/assets/benefit-3.jpg",
    title: "Terjangkau",
    benefit: "Banyak pilihan paket belajar + kos/English camp.",
  },
];

const Benefit = () => {
  return (
    <div className="max-w-5xl mx-auto px-5 md:px-14 py-14">
      <h2 className="md:text-3xl text-xl font-poppins text-center font-semibold">
        <strong className="text-custom-secondary">Kenapa</strong> Harus Memilih
        AI Language Center?
      </h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
        {benefitItems.map((item, idx) => (
          <div key={item.benefit} className="relative group">
            <Image
              src={item.imgUrl}
              alt={`Benefit-${idx + 1}`}
              width={500}
              height={500}
              className="h-44 object-cover shadow"
            />
            <div className="absolute w-full h-full top-0 left-0 bg-gray-950/70 group-hover:bg-amber-200/10 transition-all duration-300" />
            <div className="absolute bottom-3 left-2 font-poppins">
              <p className="font-semibold text-lg text-white group-hover:text-black transition-all duration-300">
                {item.title}
              </p>
              <p className="mt-2 text-white text-sm font-medium group-hover:text-black transition-all duration-300">
                {item.benefit}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefit;
