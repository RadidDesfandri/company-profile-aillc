import { Button } from "../ui/button";

const Cta = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 py-8 md:px-14 md:py-14 ">
      <div className="bg-custom-secondary p-8 rounded-3xl text-white flex items-center justify-center flex-col gap-5">
        <h1 className="md:text-3xl text-xl md:max-w-[550px] font-medium text-center tracking-wider font-poppins">
          Gabung Bersama Kami Sekarang Juga, dan Dapatkan Promo
        </h1>
        <p className="text-sm text-neutral-200 text-center">
          Dapat diskon 50% dengan klik tombol dibawah ini
        </p>

        <Button variant="outline" className="text-black">
          Daftar sekarang
        </Button>
      </div>
    </div>
  );
};

export default Cta;
