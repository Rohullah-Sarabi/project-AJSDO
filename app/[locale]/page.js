
import CarouselSilder from "@/components/Carousel/Carousel";
import CardComponent from "@/components/card";
import Activies from "@/components/contextContainer/activies";
import ContextContainer from "@/components/contextContainer/container";
import { Button, Card } from "flowbite-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  const t = useTranslations("navbar");
  return (
    <>
      <div className="w-full">
        <CarouselSilder />
      </div>
      <div className="w-2/3 m-auto flex flex-col gap-5 justify-center mt-4 sm:p-5">
        <ContextContainer />
      </div>
      <div className="flex flex-col flex-1 gap-5 w-11/12 sm:w-3/4 mx-auto">
        <h1 className="text-base sm:text-2xl font-medium sm:font-semibold text-center">Area of Activity</h1>
        <div className="flex flex-row flex-wrap justify-center sm:justify-between flex-1 gap-2 sm:gap-0">
          <Activies image={"/assets/education.png"} href={"/"} content={"education"} />
          <Activies image={"/assets/social-services.png"} href={"/"} content={"social services"} />
          <Activies image={"/assets/medical-care.png"} href={"/"} content={"health care services"} />
          <Activies image={"/assets/agriculture.png"} href={"/"} content={"agriculture"} />
          <Activies image={"/assets/global-warming.png"} href={"/"} content={"global warming"} />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex justify-center items-center bg-[#3066b2] p-1 sm:p-2 w-11/12 mx-auto">
            <p className="uppercase text-xs sm:text-lg font-medium sm:font-bold text-[#fbfff1]">recent activity</p>
          </div>
          <div className="flex flex-col justify-center items-center flex-wrap sm:flex-row mb-5 gap-5 sm:gap-10">
            <CardComponent url={"/assets/Bamyan_WCSO_Sept_2023_2.jpg"} title={"The Women Civil Society Organization (WCSO) program, implements by UN-Women in Afghanistan, is a vital initiative that focuses on supporting women-led organizations in the country"} />
            <CardComponent url={"/assets/Bamyan_WCSO_Sept_2023_2.jpg"} title={"The Women Civil Society Organization (WCSO) program, implements by UN-Women in Afghanistan, is a vital initiative that focuses on supporting women-led organizations in the country"} />
            <CardComponent url={"/assets/Bamyan_WCSO_Sept_2023_2.jpg"} title={"The Women Civil Society Organization (WCSO) program, implements by UN-Women in Afghanistan, is a vital initiative that focuses on supporting women-led organizations in the country"} />
            <CardComponent url={"/assets/Bamyan_WCSO_Sept_2023_2.jpg"} title={"The Women Civil Society Organization (WCSO) program, implements by UN-Women in Afghanistan, is a vital initiative that focuses on supporting women-led organizations in the country"} />
          </div>
        </div>
      </div>
    </>
  );
}
