import { GoTelescope } from "react-icons/go";
import { TbTargetArrow } from "react-icons/tb";

const items = [
  {
    icon: TbTargetArrow,
    label: "Vision",
    description:
      "Menjadi pusat pembelajaran bahasa Inggris terbaik di Indonesia yang menghasilkan pembelajar percaya diri, kompeten, dan siap bersaing secara global.",
  },
  {
    icon: GoTelescope,
    label: "Mission",
    description:
      "Kami menghadirkan pengajar berpengalaman yang siap membimbing peserta dengan metode komunikatif. Lingkungan belajar dirancang agar peserta aktif menggunakan bahasa Inggris dalam keseharian.",
  },
];

const VisiMisi = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-5 py-8 md:px-14 md:py-14">
        <p className="text-xs md:text-sm text-neutral-600 font-poppins">
          [ From Complexity to Clarity ]
        </p>
        <p className="text-start md:max-w-1/3 font-poppins font-medium">
          Kami Hadir dengan Tujuan yang Jelas untuk Membantu Kamu Menguasai
          Bahasa Inggris
        </p>
        <div className="flex flex-col md:flex-row md:justify-end mt-4 gap-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="p-5 hover:shadow-xl transition-all duration-300 rounded-xl flex flex-col gap-3 bg-custom-secondary"
            >
              <div className="p-2 w-fit rounded-full bg-white text-black">
                <item.icon />
              </div>

              <p className="text-lg font-medium text-white">{item.label}</p>
              <p className="line-clamp-4 text-white font-poppins max-w-80 text-xs md:text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisiMisi;
