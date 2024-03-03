
import Activies from "@/components/contextContainer/activies";
import ContextContainer from "@/components/contextContainer/container";
import Footer from "@/components/footer";
import Navbar from "@/components/layout/Navbar";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  const t = useTranslations("navbar");
  return (
    <>
      <Navbar />
      <div className="w-2/3 m-auto flex flex-col gap-5 justify-center mt-4 sm:p-5">
        <ContextContainer />
      </div>
      <div className="flex flex-col flex-1 gap-5 w-3/4 mx-auto">
        <h1 className="text-base sm:text-2xl font-medium sm:font-semibold text-center">Area of Activity</h1>
        <div className="flex flex-row flex-1">
          <Activies image={"/assets/education.png"} href={"/"} content={"education"}/>
          <Activies image={"/assets/social-services.png"} href={"/"} content={"social services"}/>
          <Activies image={"/assets/medical-care.png"} href={"/"} content={"health care services"}/>
          <Activies image={"/assets/agriculture.png"} href={"/"} content={"agriculture"}/>
          <Activies image={"/assets/global-warming.png"} href={"/"} content={"global warming"}/>
        </div>

      </div>
      <Footer />
    </>
  );
}
