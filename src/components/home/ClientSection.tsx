import Image from "next/image";

const ClientSection = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-5 py-8 md:px-14 md:py-14">
        <h1 className="md:text-3xl text-lg font-poppins text-center font-semibold">
          Mitra luar biasa yang{" "}
          <strong className="text-custom-secondary">mendukung</strong> kami
        </h1>

        <div className="mt-5 flex items-center justify-center gap-6 md:gap-12 overflow-x-auto">
          {Array.from({ length: 5 }, (_, idx) => (
            <Image
              key={idx}
              alt={`Client-${idx + 1}`}
              src={`/assets/client-${idx + 1}.svg`}
              width={150}
              height={150}
              className="md:w-14 w-10"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
