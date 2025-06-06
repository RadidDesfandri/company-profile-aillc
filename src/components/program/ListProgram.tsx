import Image from "next/image";
import { Button } from "../ui/button";

const programs = [
  {
    name: "Speaking Basic",
    level: "Pemula",
    duration: "2 Minggu",
    description:
      "Program dasar untuk meningkatkan keberanian dan kefasihan berbicara dalam bahasa Inggris.",
    image: "/assets/program-1.jpg",
    popular: true,
  },
  {
    name: "TOEFL Preparation",
    level: "Menengah – Lanjutan",
    duration: "1 Bulan",
    description:
      "Persiapan intensif untuk menghadapi tes TOEFL dengan strategi dan latihan soal.",
    image: "/assets/program-2.jpg",
    popular: false,
  },
  {
    name: "English for Job Interview",
    level: "Menengah",
    duration: "2 Minggu",
    description:
      "Latihan intensif untuk menghadapi wawancara kerja dalam bahasa Inggris dengan percaya diri.",
    image: "/assets/program-3.jpg",
    popular: false,
  },
  {
    name: "Grammar Mastery",
    level: "Semua Level",
    duration: "3 Minggu",
    description:
      "Mendalami tata bahasa Inggris secara menyeluruh untuk meningkatkan keakuratan saat menulis dan berbicara.",
    image: "/assets/program-4.jpg",
    popular: false,
  },
  {
    name: "Speaking Intensive",
    level: "Menengah",
    duration: "1 Bulan",
    description:
      "Program full practice untuk meningkatkan kepercayaan diri dalam speaking melalui diskusi, debat, dan presentasi.",
    image: "/assets/program-5.jpg",
    popular: true,
  },
  {
    name: "English Camp Full Package",
    level: "Pemula – Menengah",
    duration: "1 Bulan",
    description:
      "Paket lengkap belajar, tinggal di camp English Area, dan aktivitas harian berbahasa Inggris.",
    image: "/assets/program-6.jpg",
    popular: true,
  },
];

const ListProgram = () => {
  return (
    <div id="programs" className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-5 py-8 md:px-14 md:py-14">
        <h1 className="text-center text-2xl md:text-3xl font-medium">
          Program kami
        </h1>
        <p className="text-center text-xs md:text-sm text-neutral-700">
          Pilih program yang sesuai dengan tujuan belajarmu
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-3 gap-4">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={program.image}
                  alt={program.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
                {program.popular && (
                  <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
                    Populer
                  </span>
                )}
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-xl font-semibold">{program.name}</h3>
                <p className="text-sm text-gray-500">
                  {program.level} &bull; {program.duration}
                </p>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {program.description}
                </p>
                <Button className="mt-3 rounded-lg bg-custom-primary hover:bg-custom-secondary">
                  Daftar Sekarang
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListProgram;
