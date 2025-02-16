"use client"
import Image from "next/image";
import Logo from "@/public/assets/logo.png"
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
import LanguageChange from "./lang";
import { useTranslations } from "next-intl";
import { useSession } from "next-auth/react";


export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const t = useTranslations("navbar")
    const { data } = useSession()
    return (
        <nav className="w-full h-20 sm:h-[210px] bg-[#f7f9fb] shadow-md">
            <div className="flex flex-col w-full mx-auto lg:max-w-7xl sm:px-5 bg-[#f7f9fb]">
                <div className="flex flex-row px-2 py-1 sm:py-0 sm:px-5 items-center justify-between">
                    <Link href={"/"}>
                        <div className=" flex items-center justify-center gap-5 text-2xl text-black font-bold" title="Afghanistan Justice and Sustainable Development Organization">
                            <Image
                                alt={"logo"}
                                src={Logo}
                                height={500}
                                width={550}
                                className="h-16 w-16 sm:h-40 sm:w-40"
                            />
                            <div className="h-14 sm:h-28 bg-[#7ea7db] w-[1px] sm:w-[2px] rounded-full" />
                            <div className="flex flex-col gap-1 sm:gap-3">
                                <p className="text-lg sm:text-4xl uppercase">{t("title.abbreuiation")}</p>
                                <p title="Afghanistan Justice and Sustainable Development Organization" className="text-xs sm:text-lg">{t("title.name")}</p>
                            </div>
                        </div>
                    </Link>
                    <div className="sm:hidden">
                        <button
                            className="p-2 text-black rounded-md outline-none focus:border-gray-400 focus:border"
                            onClick={() => setNavbar(!navbar)}
                        >
                            {navbar ? (
                                <FaXmark className="text-black text-2xl" />
                            ) : (
                                <FiMenu className="text-black text-2xl" />
                            )}
                        </button>
                    </div>
                </div>
                <div className={`bg-[#f7f9fb] hidden w-full sm:flex justify-center`}>
                    <hr className="w-1/2 rounded-lg" />
                </div>
                <ul
                    className={`${navbar ? "block bg-[#f7f9fb]" : "hidden"} z-50 sm:flex flex-col sm:flex-row text-lg gap-4 items-center justify-center sm:justify-center`}
                >
                    <li className="border-t sm:border-none w-full sm:w-fit flex text-center hover:text-blue-500">
                        <Link href={t("home.url")} className="grow p-2 justify-center">
                            {t('home.title')}
                        </Link>
                    </li>
                    <li className="border-t sm:border-none text-center w-full sm:w-fit hover:text-blue-500 border">
                        <Link href={t("program.url")} prefetch={false} className="grow p-2 justify-center capitalize">{t('program.title')}</Link>
                    </li>
                    <li className="border-t sm:border-none w-full sm:w-fit flex text-center hover:text-blue-500">
                        <Link href={t("contact.url")} prefetch={false} className="grow p-2 justify-center capitalize">{t('contact.title')}</Link>
                    </li>
                    <li className="border-t sm:border-none w-full sm:w-fit flex text-center hover:text-blue-500">
                        <Link href={t("about.url")} prefetch={false} className="grow p-2 justify-center capitalize">{t('about.title')} </Link>
                    </li>
                    <li className="border-t sm:border-none w-full sm:w-fit flex text-center hover:text-blue-500">
                        <Link href={t("donate.url")} prefetch={false} className="grow p-2 justify-center capitalize">{t('donate.title')}</Link>
                    </li>
                    {
                        data?.user && (
                            <li className="border-t sm:border-none w-full sm:w-fit flex text-center hover:text-blue-500">
                                <Link href={t("dashboard.url")} prefetch={false} className="grow p-2 justify-center capitalize">{t('dashboard.title')}</Link>
                            </li>
                        )
                    }
                    <li className="border-t border sm:border-none flex justify-center w-full sm:w-fit text-center min-w-fit hover:text-blue-500">
                        <LanguageChange />
                    </li>
                </ul>
            </div>
        </nav>
    )
}