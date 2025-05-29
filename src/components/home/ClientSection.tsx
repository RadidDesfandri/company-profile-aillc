import Image from "next/image";

const ClientSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 md:px-14 py-14">
      <h1 className="text-center font-poppins">
        Our Amazing partner that support us
      </h1>

      <div className="mt-5 flex items-center justify-center gap-12 overflow-x-auto">
        {Array.from({ length: 5 }, (_, idx) => (
          <Image
            key={idx}
            alt={`Client-${idx + 1}`}
            src={`/assets/client-${idx + 1}.svg`}
            width={150}
            height={150}
            className="w-14"
          />
        ))}
      </div>
    </div>
  );
};

export default ClientSection;
