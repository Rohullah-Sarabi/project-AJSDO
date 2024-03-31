import Image from "next/image";
import { Paragraph } from "../ParagraphContainer/PContainer";
import TabComponent, { Tab, TabComponentUpate, Tabpdate } from "../tab";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { useState } from "react";
import { Modal, ParagrapModal } from "../modal";


export function UpdateProgramDetails({ data, allPrograms, refresh, Refresh }) {
    const locale = useLocale();
    const t = useTranslations("program")

    const [title, setTitle] = useState(false)


    const handleChange = () => {
        setTitle(!title)
        Refresh(!refresh)
    }

    let programIndex;
    allPrograms.map((info, index) => {
        if (data._id == info._id) {
            programIndex = index;
        }
    })
    const isLast = programIndex == allPrograms.length - 1;
    const isFirst = programIndex == 0
    const prev = allPrograms[programIndex - 1]
    const next = allPrograms[programIndex + 1]
    return (
        <div className="w-full p-3 sm:w-3/4 flex flex-col gap-5 justify-center items-center mx-auto my-5 text-[#3c3744]">
            <div className="p-2 w-full flex justify-start">
                <Link href={`/${locale}/dashboard`} className="flex flex-row gap-2 items-center">
                    {
                        locale == "en" ?
                            <IoMdArrowRoundBack /> : <IoMdArrowRoundForward />
                    }
                    {t("back")}
                </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 justify-between w-full">
                <Paragraph style={"text-sm sm:text-lg font-medium sm:font-semibold"} content={data[locale].name} />
                <Paragraph style={"text-sm sm:text-lg font-medium sm:font-semibold text-[#b4c5e4]"} content={`${new Date(data.createdAt).toLocaleDateString()}`} />
                <button className="text-blue-700 capitalize" onClick={() => setTitle(!title)}>update</button>
                {
                    title &&
                    <Modal state={title} changeState={handleChange} name={"name"} data={data} />
                }
            </div>
            <div className="w-full">
                <TabComponentUpate data={data[locale]} info={data} Refresh={Refresh} />
            </div>
            {
                data[locale]?.summary.map((content, index) => (
                    <div key={index}>
                        <Image key={index + 1} src={data?.images ? data.images[index].url : "/assets/3.jpg"} alt={content?.name+" image"}
                         width={500} height={500} className="w-full sm:h-auto" />
                        <Paragraph style={"text-sm sm:text-lg text-[#3c3744] text-justify p-2 w-full"}>
                            {content.content}
                        </Paragraph>
                    </div>
                ))
            }
            <div className="w-full">
                <Tabpdate data={data[locale]} status={data} locale={locale} Refresh={Refresh} />
            </div>
            {
                (data?.projectState == "inprogress" || data[locale].projectState == "onplan") && (<div className="flex justify-center items-center">
                    <Link href={`/${locale}/donate`} className="py-3 px-5 bg-[#3066be] text-[#fbfff1] rounded-md text-sm sm:text-lg uppercase">
                        {t("donate")}
                    </Link>
                </div>)
            }
            <div className={`max-w-full flex-col sm:flex-row  py-5 mt-5 container flex ${(!isFirst && !isLast) && "justify-between"} ${isLast && "justify-start"} ${isFirst && "justify-end"} mx-auto`}>
                <Link href={`${isFirst ? "" : prev._id}`} className={`${isFirst ? "hidden" : "block"} py-2  hover:text-[#3066b2] px-3`}>
                    <div className="flex flex-row items-center align-middle">
                        {
                            locale == "en" ?
                                <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                                </svg>
                                :
                                <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                        }
                        <p className="ml-2 text-xs sm:text-lg">{isFirst ? "" : prev[locale].name}</p>
                    </div>
                </Link>
                <Link type="button" href={`${isLast ? "" : next._id}`} className={`${isLast ? "hidden" : "block"} py-2  hover:text-[#3066b2] px-3`}>
                    <div className="flex flex-row align-middle items-center">
                        <span className="mr-2 text-xs sm:text-lg">{isLast ? "" : next[locale].name}</span>
                        {
                            locale != "en" ?
                                <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                                </svg>
                                :
                                <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                        }
                    </div>
                </Link>
            </div>
        </div>
    )
}