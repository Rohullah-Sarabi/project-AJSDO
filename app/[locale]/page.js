"use client"
import { getPrograms } from "@/backend/controller/operation";
import { ActivityContainer } from "@/components/Activity/ActivityCintainer";
import CarouselSilder from "@/components/Carousel/Carousel";
import CardComponent from "@/components/card";
import ContextContainer from "@/components/contextContainer/container";
import Footer from "@/components/footer";
import Navbar from "@/components/layout/Navbar";
import { useEffect, useState } from "react";
import Loading from "./loading";
import { useTranslations } from "next-intl";



export default function Home() {
  const [programs, setProgram] = useState(null)
  const t = useTranslations("home")

  useEffect(() => {
    const fetchProgram = async () => {
      try {
        const fetchedPrograms = await getPrograms();
        setProgram(fetchedPrograms);
      } catch (error) {
        console.error('Failed to fetch programs:', error);
      }
    }
    fetchProgram();
  }, []);
  if (programs === null) {
    return <Loading />
  }
  return (
    <>
      <Navbar />
      <div className="w-full">
        <CarouselSilder />
      </div>
      <div className="w-2/3 m-auto flex flex-col gap-5 justify-center mt-4 sm:p-5">
        <ContextContainer />
      </div>
      <div className="flex flex-col flex-1 gap-5 w-11/12 sm:w-full mx-auto">
        <h1 className="text-base sm:text-2xl font-medium sm:font-semibold text-center">{t("activity.title")}</h1>
        <ActivityContainer />
        <div className="flex flex-col gap-5">
          <div className="flex justify-center items-center bg-[#3066b2] p-1 sm:p-2 w-11/12 mx-auto">
            <p className="uppercase text-xs sm:text-lg font-medium sm:font-bold text-[#fbfff1]">{t("recentActivity")}</p>
          </div>
          <div className="flex flex-row flex-wrap gap-2 justify-center">
            
            {
              Array.isArray(programs) && programs.length > 0 ? (
                <div className="flex flex-row flex-wrap gap-2 justify-center">
                  {programs.map((program, index) => (
                    <CardComponent program={program} key={index} />
                  ))}
                </div>
              ) : (
                <p>No programs available.</p>
              )
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
