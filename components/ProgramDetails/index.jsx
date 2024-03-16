import Image from "next/image";
import { Paragraph } from "../ParagraphContainer/PContainer";
import TabComponent, { Tab } from "../tab";
import { useLocale } from "next-intl";
import Link from "next/link";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";


export function ProgramDetails({ data, allPrograms }) {
    const locale = useLocale();
    let programIndex;
    allPrograms.map((info, index) => {
        if (data._id == info._id) {
            console.log(info._id)
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
                <Link href={`/${locale}/program`} className="flex flex-row gap-2 items-center">
                    {
                        locale=="en"?
                        <IoMdArrowRoundBack />:<IoMdArrowRoundForward />
                    }
                    Back
                </Link>
            </div>
            <div className="flex flex-row gap-2 justify-between w-full">
                <Paragraph style={"text-sm sm:text-lg font-medium sm:font-semibold"} content={data[locale].name} />
                <Paragraph style={"text-sm sm:text-lg font-medium sm:font-semibold text-[#b4c5e4]"} content={`${new Date(data.createdAt).toLocaleDateString()}`} />
            </div>
            <div className="w-full">
            <TabComponent data={data[locale]} />
            </div>
            {
                data[locale]?.summary.map((content, index) => (
                    <>
                        <Image src={data?.images ? data.images[index].url : "/assets/3.jpg"} width={500} height={500} className="w-full sm:w-3/4 sm:h-96" />
                        <Paragraph style={"text-sm sm:text-lg  text-justify p-2 text-[#3c3744]"}>
                            {content.content}
                        </Paragraph>
                    </>
                ))
            }
            <div className="w-full">
                <Tab data={data[locale]} />
            </div>
            {
                data[locale].projectState =="inprogress" || data[locale].projectState=="onplan" &&(<div className="flex justify-center items-center">
                    <Link href={`/${locale}/donate`} className="p-5 bg-[#090c9b] text-[#fbfff1] rounded-md">
                        Donate Now
                    </Link>
                </div>)
            }
            <div className="max-w-full flex-col sm:flex-row  py-5 mt-5 container flex justify-between mx-auto">
                <Link href={`${isFirst ? "" : prev._id}`} className={`${isFirst ? "hidden" : "block"} py-2  hover:text-[#3066b2] px-3`}>
                    <div className="flex flex-row align-middle">
                        {
                            locale == "en" ?
                                <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                                </svg>
                                :
                                <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                        }
                        <p className="ml-2 text-sm sm:text-lg">{isFirst ? "" : prev[locale].name}</p>
                    </div>
                </Link>
                <Link type="button" href={`${isLast ? "" : next._id}`} className={`${isLast ? "hidden" : "block"} py-2  hover:text-[#3066b2] px-3`}>
                    <div className="flex flex-row align-middle">
                        <span className="mr-2 text-sm sm:text-lg">{isLast ? "" : next[locale].name}</span>
                        {
                            locale != "en" ?
                                <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                                </svg>
                                :
                                <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                        }
                    </div>
                </Link>
            </div>
        </div>
    )
}