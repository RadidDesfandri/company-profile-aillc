"use client";

import { useRouter } from "next/navigation";
import { programs } from "../program/ListProgram";
import { Button } from "../ui/button";
import CardProgram from "../program/CardProgram";

const OverviewProgram = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-5 py-8 md:px-14 md:py-14">
        <h1 className="text-center md:text-3xl text-xl font-poppins font-semibold">
          Program Unggulan Buat Kamu yang Ingin{" "}
          <strong className="text-custom-secondary">Cepat Bisa</strong>
        </h1>
        <p className="text-center text-sm text-neutral-700 mt-2">
          Dirancang untuk pemula hingga lanjutan, kamu bisa mulai dari mana
          saja.
        </p>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.slice(0, 3).map((program, idx) => (
            <CardProgram
              key={idx}
              imageUrl={program.image}
              isPopular={program.popular}
              slug={program.slug}
              name={program.name}
            />
          ))}
        </div>

        <div className="flex items-center justify-center mt-5">
          <Button
            onClick={() => router.push("/program#programs")}
            className="bg-custom-secondary hover:bg-custom-primary cursor-pointer"
          >
            Lihat Semua Program
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OverviewProgram;
