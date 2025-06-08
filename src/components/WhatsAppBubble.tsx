import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppBubble = () => {
  return (
    <Link
      target="_blank"
      href="https://api.whatsapp.com/send/?phone=6281394876096&text&type=phone_number&app_absent=0"
      className="p-3 z-50 rounded-full bg-green-700 fixed bottom-6 right-6 text-white cursor-pointer"
    >
      <FaWhatsapp size={30} />
    </Link>
  );
};

export default WhatsAppBubble;
