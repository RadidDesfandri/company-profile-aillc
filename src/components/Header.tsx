"use client";

import { useClickOutside } from "@/hooks/useClickOutside";
import { useRoutes } from "@/hooks/useRoutes";
import clsx from "clsx";
import Link from "next/link";
import { useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import SlideInAnimate from "./animations/SlideInAnimate";

const Header = () => {
  const routes = useRoutes();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside([ref], () => setIsOpenMenu(false), isOpenMenu);
  return (
    <header
      className={clsx(
        "absolute z-50 top-0 w-full transition-all duration-300 bg-transparent"
      )}
    >
      <div className="max-w-7xl px-5 py-4 md:px-14 mx-auto flex items-center justify-between">
        <p className="font-poppins">Logo</p>

        <nav className="hidden lg:flex items-center gap-10 font-poppins font-light">
          <ul className="flex items-center gap-10">
            {routes.map((item) => (
              <Link
                key={item.label}
                href={item.url}
                className={clsx(
                  "hover:scale-[102%] transition-all duration-300",
                  item.active && "font-semibold"
                )}
              >
                <li>{item.label}</li>
              </Link>
            ))}
          </ul>

          <ContactUs />
        </nav>

        <button
          onClick={() => setIsOpenMenu(true)}
          className="flex lg:hidden border p-1 rounded-md border-neutral-300"
        >
          <MdMenu size={25} />
        </button>
      </div>
      <SlideInAnimate
        ref={ref}
        width="large"
        className="p-5 py-24 lg:hidden block"
        isOpen={isOpenMenu}
      >
        <nav className="flex flex-col gap-10">
          <ul className="flex flex-col gap-10">
            {routes.map((item) => (
              <Link
                key={item.label}
                href={item.url}
                className={clsx(
                  "border-b border-b-neutral-300",
                  item.active && "font-semibold"
                )}
              >
                <li>{item.label}</li>
              </Link>
            ))}
          </ul>
          <ContactUs />
        </nav>

        <button
          onClick={() => setIsOpenMenu(false)}
          className="absolute top-5 right-5"
        >
          <IoClose size={25} />
        </button>
      </SlideInAnimate>
    </header>
  );
};

const ContactUs = () => (
  <Link
    href="#"
    className="px-4 py-1 h-fit w-fit bg-custom-secondary hover:bg-custom-primary transition-all duration-300 text-white"
  >
    Hubungi kami
  </Link>
);

export default Header;
