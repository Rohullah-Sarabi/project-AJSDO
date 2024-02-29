
import ContextContainer from "@/components/contextContainer/container";
import Footer from "@/components/footer";
import Navbar from "@/components/layout/Navbar";
import { useTranslations } from "next-intl";


export default function Home() {
  const t = useTranslations("navbar");
  return (
    <>
      <Navbar />
      <div className="w-2/3 m-auto flex flex-col gap-5 justify-center mt-4 sm:p-5">
        <ContextContainer/>
      </div>
      <Footer/>
    </>
  );
}
