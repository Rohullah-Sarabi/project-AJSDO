"use client"
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PopUp } from "../modal/popUp";

function CardComponent({ program }) {
    const locale = useLocale()
    return (
        <div className="flex flex-col gap-1 max-w-sm rounded-md shadow-lg">
            <Image width={500} height={500} alt={program[locale].name} src={program?.images ? program.images[0].url : "/assets/Bamyan_WCSO_Sept_2023_2.jpg"} className="rounded-tl-md rounded-tr-md w-full h-52 sm:h-60" />
            <div className="px-5 py-2">
                <div className="flex flex-col gap-1">
                    <span className="text-gray-500 text-start capitalize">{new Date(program?.createdAt).toLocaleDateString()}</span>
                    <p className="text-black capitalize text-base">{program[locale].name}</p>
                    <p className="text-[#3c3744] text-sm text-justify">{program[locale]?.summary[0].content.substring(0, 150)}...</p>
                </div>
                <div className="flex justify-end">
                    <Link href={`/${locale}/program/${program?._id}`} prefetch={false} className="text-blue-700">Read more</Link>
                </div>
            </div>
        </div>
    )
}

export function EditCardComponent({ program,changeState }) {
    const locale = useLocale()
    const [state,setState] = useState(false)

    const handleState = ()=>{
        setState(!setState)
        changeState()
    }
    return (
        <div className="flex flex-col gap-1 max-w-sm rounded-md shadow-lg">
            <Image width={500} height={500} alt={program[locale].name} src={program?.images ? program.images[0].url : "/assets/Bamyan_WCSO_Sept_2023_2.jpg"} className="rounded-tl-md rounded-tr-md w-full h-52 sm:h-60" />
            <div className="px-5 py-2">
                <div className="flex flex-col gap-1">
                    <span className="text-gray-500 text-start capitalize">{new Date(program?.createdAt).toLocaleDateString()}</span>
                    <p className="text-black capitalize text-base">{program[locale].name}</p>
                    <p className="text-[#3c3744] text-sm text-justify">{program[locale]?.summary[0].content.substring(0, 150)}...</p>
                </div>
                <div className="flex flex-row justify-between">
                    <Link href={`/${locale}/dashboard/update/${program?._id}`} prefetch={false} className="text-blue-700">Update</Link>
                    <button className="text-blue-700" onClick={()=>setState(!state)}>Delete</button>
                    {
                        state&&<PopUp state={state} data={program} changeState={handleState}/>
                    }
                </div>
            </div>
        </div>
    )
}
export default CardComponent;