import { Accordion } from "@radix-ui/react-accordion";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const qnaItems = [
  {
    question: "Apa itu Kampung Inggris?",
    answer:
      "Kampung Inggris adalah sebuah kawasan edukasi di ..., yang terkenal sebagai tempat belajar bahasa Inggris secara intensif. Di sini, peserta bisa belajar dari nol hingga mahir dengan metode pengajaran yang komunikatif dan lingkungan yang mendukung praktik langsung.",
  },
  {
    question:
      "Apakah saya harus bisa bahasa Inggris dulu sebelum ke Kampung Inggris?",
    answer:
      "Tidak perlu! Banyak peserta datang dengan kemampuan bahasa Inggris yang sangat dasar, bahkan dari nol. Program-program kami dirancang untuk semua level, mulai dari pemula hingga tingkat lanjutan.",
  },
  {
    question: "Berapa lama program belajar biasanya berlangsung?",
    answer:
      "Program belajar di Kampung Inggris bervariasi, mulai dari 1 minggu, 2 minggu, 1 bulan, hingga 3 bulan atau lebih, tergantung kebutuhan dan target belajar peserta. Ada juga program intensif dan persiapan TOEFL/IELT.",
  },
  {
    question: "Bagaimana dengan tempat tinggal selama di Kampung Inggris?",
    answer:
      "Kami menyediakan pilihan tempat tinggal berupa camp (asrama dengan aturan English area) maupun kos biasa. Camp sangat disarankan karena membantu peserta terbiasa berbicara bahasa Inggris dalam kehidupan sehari-hari.",
  },
  {
    question: "Bagaimana cara mendaftar ke Kampung Inggris?",
    answer:
      "Pendaftaran bisa dilakukan secara online melalui website kami. Pilih program yang sesuai, isi formulir pendaftaran, lalu lakukan pembayaran untuk mengamankan tempat. Tim kami juga siap membantu melalui WhatsApp jika ada pertanyaan lebih lanjut.",
  },
];

const Qna = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-5 py-8 md:px-14 md:py-14">
        <h1 className="md:text-3xl text-lg font-poppins text-center font-semibold">
          Masih Bingung? Kami Punya{" "}
          <strong className="text-amber-300">Jawabannya</strong>
        </h1>
        <p className="text-center mt-2 text-neutral-700 text-sm">
          Jawaban atas pertanyaan-pertanyaan yang sering diajukan oleh calon
          peserta.
        </p>

        <Accordion type="single" className="w-full mt-4">
          {qnaItems.map((item) => (
            <AccordionItem key={item.question} value={item.answer}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent className="text-balance">
                <p className="text-xs md:text-sm">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Qna;
