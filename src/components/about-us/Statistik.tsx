const items = [
  { number: "10.000+", text: "Peserta Telah Belajar Bersama Kami" },
  { number: "97%", text: "Peserta Puas serta Merekomendasikan" },
  { number: "15+", text: "Jenis Program Belajar" },
  { number: "20+", text: "Mentor Berpengelaman" },
];

const Statistik = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-5 py-8 md:px-14 md:py-14 flex flex-col gap-5">
        <div className="flex flex-col items-center md:items-end">
          <h1 className="md:text-2xl text-xl font-poppins font-medium md:max-w-96 text-center md:text-end">
            Sudah Banyak yang Percaya dan Merasakan Manfaatnya
          </h1>
          <p className="text-neutral-700 text-xs md:text-sm text-center md:text-end font-poppins md:max-w-[380px]">
            Statistik yang mencerminkan dedikasi kami dalam membimbing ribuan
            peserta dari seluruh Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:max-w-[600px]">
          {/* Card */}

          {items.map((item) => (
            <div
              key={item.number}
              className="p-5 rounded-xl bg-custom-secondary text-white"
            >
              <h1 className="text-4xl font-medium font-poppins">
                {item.number}
              </h1>
              <p className="mt-3 text-gray-300 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistik;
