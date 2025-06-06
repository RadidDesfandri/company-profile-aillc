"use client";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const testimoniItems = [
  {
    imageUrl: "/assets/profile-1.jpg",
    name: "Name user",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, facilis.",
  },
  {
    imageUrl: "/assets/profile-2.jpg",
    name: "Name user",
    text: "Lorem ipsum, dolor sit amet.",
  },
  {
    imageUrl: "/assets/profile-3.jpg",
    name: "Name user",
    text: "Lorem ipsum, dolor sit amet consectetur",
  },
  {
    imageUrl: "/assets/profile-4.jpg",
    name: "Name user",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    imageUrl: "/assets/profile-5.jpg",
    name: "Name user",
    text: "Lorem ipsum, dolor sit",
  },
  {
    imageUrl: "/assets/profile-6.jpg",
    name: "Name user",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione",
  },
];

const Testimonial = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 py-8 md:px-14 md:py-14 flex flex-col items-center gap-4">
      <h1 className="md:text-3xl text-lg font-poppins text-center font-semibold">
        Sukses <strong className="text-custom-secondary">Belajar</strong> Bahasa
        Inggris, Ini Kata Mereka
      </h1>
      <Carousel className="w-full md:max-w-2xl mt-4">
        <CarouselContent>
          {testimoniItems.map((item, index) => (
            <CarouselItem key={index} className="relative">
              <div className="absolute z-50 -top-2 left-[35%] md:-top-4 md:left-1/3 p-2 md:p-5 bg-white rounded-full">
                <FaQuoteLeft />
              </div>

              <div className="rounded-xl overflow-hidden border flex gap-4 md:gap-7 font-poppins">
                <Image
                  src={item.imageUrl}
                  alt="User"
                  width={300}
                  height={300}
                  className="w-32 min-w-32 h-36 md:min-w-60 md:max-w-60 md:w-60 md:h-60 object-cover"
                />
                <div className="py-4 md:py-8 pr-2 md:pr-5 flex flex-col justify-between">
                  <h2 className="text-sm md:text-lg font-semibold  text-wrap">
                    {item.text}
                  </h2>
                  <span className="text-xs text-neutral-500">
                    10/10 Rekomendasi
                  </span>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-xs md:text-base">
                      {item.name}
                    </p>

                    <div className="text-[10px] text-neutral-500 flex items-center gap-2">
                      {index + 1}{" "}
                      <span className="inline-block rounded-full h-[2px] md:h-[3px] w-5 bg-neutral-300" />
                      {testimoniItems.length}
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="hidden md:flex justify-center items-center gap-4 mt-6">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonial;
