import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
