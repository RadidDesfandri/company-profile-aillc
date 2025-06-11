"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const mentorItems = [
  { name: "Alexander", imageUrl: "/assets/mentor-1.jpg" },
  { name: "Steven", imageUrl: "/assets/mentor-2.jpg" },
  { name: "Fransisca", imageUrl: "/assets/mentor-4.jpg" },
  { name: "Lamine", imageUrl: "/assets/mentor-3.jpg" },
  { name: "Kevin", imageUrl: "/assets/mentor-5.jpg" },
];

interface MentorProps {
  showMentor?: number;
}

const Mentor = ({ showMentor = 5 }: MentorProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const middleItemRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (scrollContainerRef.current && middleItemRef.current) {
      const container = scrollContainerRef.current;
      const middle = middleItemRef.current;

      const containerCenter = container.offsetWidth / 2;
      const middleCenter = middle.offsetLeft + middle.offsetWidth / 2;

      container.scrollLeft = middleCenter - containerCenter;
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-5 py-8 md:px-14 md:py-14 flex flex-col gap-5 items-center">
      <h1 className="text-center text-xl md:text-2xl font-poppins font-semibold">
        Belajar Langsung dari yang Sudah Terbukti Jago
      </h1>
      <div
        id="mentor"
        ref={scrollContainerRef}
        className="flex items-center my-3 gap-4 overflow-x-auto whitespace-nowrap scroll-smooth snap-x snap-mandatory"
      >
        {mentorItems.slice(0, showMentor).map((item, idx) => {
          const middleIndex = Math.floor(
            mentorItems.slice(0, showMentor).length / 2
          );
          const isMiddle = middleIndex === idx;

          return (
            <div
              key={item.name}
              className="flex-shrink-0 snap-center relative"
              ref={isMiddle ? middleItemRef : null}
            >
              <Image
                alt="Mentor"
                src={item.imageUrl}
                width={200}
                height={200}
                className={cn(
                  "w-32 h-44 md:w-52 md:h-60 object-cover rounded-xl",
                  isMiddle && "w-44 h-52 md:h-72 md:w-64"
                )}
              />
              <div className="absolute bottom-3 right-3 flex items-center gap-4 border rounded-full bg-white px-3 py-[2px] text-xs font-semibold">
                <span>•</span> <p>{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-center text-neutral-700 font-poppins text-sm">
        Berkomitmen untuk menjadikan belajar bahasa Inggris lebih mudah dan
        menyenangkan.
      </p>
      {showMentor <= 3 && (
        <Button
          onClick={() => router.push("/about-us#mentor")}
          className="bg-custom-secondary hover:bg-custom-primary rounded-full w-fit"
        >
          Lihat seluruh mentor
        </Button>
      )}
    </div>
  );
};

export default Mentor;
