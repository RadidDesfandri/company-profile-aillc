import CardProgram from "./CardProgram";

export const programs = [
  {
    name: "Speaking Basic",
    level: "Pemula",
    slug: "speaking-basic",
    duration: "2 Minggu",
    description:
      "Program dasar untuk meningkatkan keberanian dan kefasihan berbicara dalam bahasa Inggris.",
    image: "/assets/program-1.jpg",
    popular: true,
  },
  {
    name: "TOEFL Preparation",
    level: "Menengah – Lanjutan",
    slug: "toefl-preparation",
    duration: "1 Bulan",
    description:
      "Persiapan intensif untuk menghadapi tes TOEFL dengan strategi dan latihan soal.",
    image: "/assets/program-2.jpg",
    popular: false,
  },
  {
    name: "English for Job Interview",
    level: "Menengah",
    slug: "english-for-job-interview",
    duration: "2 Minggu",
    description:
      "Latihan intensif untuk menghadapi wawancara kerja dalam bahasa Inggris dengan percaya diri.",
    image: "/assets/program-3.jpg",
    popular: false,
  },
  {
    name: "Grammar Mastery",
    level: "Semua Level",
    slug: "grammer-mastery",
    duration: "3 Minggu",
    description:
      "Mendalami tata bahasa Inggris secara menyeluruh untuk meningkatkan keakuratan saat menulis dan berbicara.",
    image: "/assets/program-4.jpg",
    popular: false,
  },
  {
    name: "Speaking Intensive",
    level: "Menengah",
    slug: "speaking-intensive",
    duration: "1 Bulan",
    description:
      "Program full practice untuk meningkatkan kepercayaan diri dalam speaking melalui diskusi, debat, dan presentasi.",
    image: "/assets/program-5.jpg",
    popular: true,
  },
  {
    name: "English Camp Full Package",
    level: "Pemula – Menengah",
    slug: "english-camp-full-package",
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
          {programs.map((program, idx) => (
            <CardProgram
              key={idx}
              imageUrl={program.image}
              isPopular={program.popular}
              slug={program.slug}
              name={program.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListProgram;
