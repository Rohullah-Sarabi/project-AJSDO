"use client"
import { ActivityContainer } from "@/components/Activity/ActivityCintainer";
import CarouselSilder from "@/components/Carousel/Carousel";
import ContextContainer from "@/components/contextContainer/container";
import Footer from "@/components/footer";
import Navbar from "@/components/layout/Navbar";
import { useLocale, useTranslations } from "next-intl";

import { useEffect, useState } from "react";
import { getImages, getLimitPrograms } from "@/backend/controller/operation";
import Loading from "./loading";
import CardComponent from "@/components/card";
import Link from "next/link";
import { toast } from "react-toastify";



export default function Home() {
  const t = useTranslations("home")

  const [data, setData] = useState([])
  const [programs, setProgram] = useState(null)


  const locale = useLocale()

  useEffect(() => {
    const getdata = async () => {
      const data = await getImages();
      setData(data)
    }
    getdata()
  }, [data])


  useEffect(() => {
    const fetchProgram = async () => {
      try {
        const fetchedPrograms = await getLimitPrograms();
        setProgram(fetchedPrograms);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchProgram();
  }, [programs]);

  return (
    <>
      <Navbar />
      <div className="w-full">
        {
          data?.length > 0 ?
            <CarouselSilder data={data} /> : <Loading />
        }
      </div>
      <div className="w-2/3 m-auto flex flex-col gap-5 justify-center mt-4 sm:p-5">
        <ContextContainer />
      </div>
      <div className="flex flex-col flex-1 gap-5 w-11/12 sm:w-full mx-auto">
        <h1 className="text-base sm:text-2xl font-medium sm:font-semibold text-center">{t("activity.title")}</h1>
        <ActivityContainer />
        <div className="flex flex-col gap-5">
          <div className="flex justify-center items-center bg-[#3066b2] p-1 sm:p-2 w-3/4 rounded-md mx-auto">
            <p className="uppercase text-xs sm:text-lg font-medium sm:font-bold text-[#fbfff1]">{t("recentActivity")}</p>
          </div>
          {/* <Events /> */}
          <div className="flex flex-row flex-wrap gap-2 justify-center">
            {
              programs==null&&<Loading/>
            }
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
            {
              Array.isArray(programs) && programs.length > 0 && <div className="w-full text-blue-700 text-sm sm:text-lg flex justify-center items-center">
                <Link href={`${process.env.API_URL}/${locale}/program`}>{t("allprograms")}</Link>
              </div>
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
