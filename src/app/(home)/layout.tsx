import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppBubble from "@/components/WhatsAppBubble";
import { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <WhatsAppBubble />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
