"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface CardProgramProps {
  imageUrl: string;
  isPopular: boolean;
  slug: string;
  name: string;
}

const CardProgram = ({ imageUrl, isPopular, slug, name }: CardProgramProps) => {
  const router = useRouter();

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden">
      <div className="relative h-96 w-full">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
        />
        {isPopular && (
          <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
            Populer
          </span>
        )}
      </div>

      <div className="p-5 space-y-3 flex flex-col">
        <Button
          onClick={() => router.push(`/program/${slug}`)}
          className="bg-custom-secondary hover:bg-custom-primary cursor-pointer"
        >
          Lihat Selengkapnya
        </Button>
        <Button
          variant="outline"
          className=" border-custom-secondary cursor-pointer"
        >
          Konsultasi Program
        </Button>
      </div>
    </div>
  );
};

export default CardProgram;
