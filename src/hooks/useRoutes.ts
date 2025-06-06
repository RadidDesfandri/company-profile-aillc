import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const useRoutes = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      { url: "/", label: "Beranda", active: pathname === "/" },
      {
        url: "/about-us",
        label: "Tentang Kami",
        active: pathname === "/about-us",
      },
      { url: "/program", label: "Program", active: pathname === "/program" },
      // { url: "/gallery", label: "Galeri", active: pathname === "/gallery" },
      {
        url: "/registration",
        label: "Pendaftaran",
        active: pathname === "/registration",
      },
    ],
    [pathname]
  );

  return routes;
};
