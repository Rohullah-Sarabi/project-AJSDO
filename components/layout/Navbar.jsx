"use client"
import Image from "next/image";
import Logo from "@/public/assets/logo.png"
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
import LanguageChange from "./lang";
import { useTranslations } from "next-intl";
import { Dropdown } from "flowbite-react";


export default function Navbar() {
    const [navbar, setNavbar] = useState(false);

    const t = useTranslations("navbar")
    return (
        <nav className="w-full h-20 sm:h-52 bg-[#f7f9fb]">
            <div className="flex flex-col w-full lg:max-w-5xl sm:px-5 bg-[#f7f9fb]">
                <div className="flex flex-row px-2 py-2 sm:py-0 sm:px-5 items-center justify-between">
                    <Link href={"/"}>
                        <div className=" flex items-center justify-center gap-5 text-2xl text-black font-bold" title="Afghanistan Justic and Sustainable Development Organization">
                            <Image
                                alt={"logo"}
                                src={Logo}
                                height={500}
                                width={500}
                                className="h-16 w-16 sm:h-40 sm:w-40"
                            />
                            <div className="h-14 sm:h-28 bg-[#7ea7db] w-[1px] sm:w-[2px] rounded-full" />
                            <div className="flex flex-col gap-1 sm:gap-3">
                                <p className="text-lg sm:text-4xl">AJSDO</p>
                                <p title="Afghanistan Justic and Sustainable Development Organization" className="text-xs sm:text-lg">Afghanistan Justic and Sustainable Development Organization</p>
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
                <ul
                    className={`${navbar ? "block bg-[#f7f9fb]" : "hidden"} z-50 sm:flex flex-col sm:flex-row text-lg items-center justify-center sm:justify-start`}
                >
                    <li className="border-t sm:border-none w-full sm:w-fit flex text-center hover:text-blue-500">
                        <Link href={"/"} className="grow p-2 justify-center">
                            {t('home')}
                        </Link>
                    </li>
                    <li className="border-t sm:border-none text-center w-full sm:w-fit hover:text-blue-500 border">
                        <Dropdown label={t('program')} inline>
                            <Dropdown.Item as={Link} href="/en/program/progress">In Progress</Dropdown.Item>
                            <Dropdown.Item as={Link} href={"/en/program/acomplated"}>Acomplated</Dropdown.Item>
                            <Dropdown.Item as={Link} href={"/en/program/planline"} className="capitalize">on planline</Dropdown.Item>
                        </Dropdown>
                    </li>
                    <li className="border-t sm:border-none w-full sm:w-fit flex text-center hover:text-blue-500">
                        <Link href={"/"} className="grow p-2 justify-center">{t('contact')}</Link>
                    </li>
                    <li className="border-t sm:border-none w-full sm:w-fit flex text-center hover:text-blue-500">
                        <Link href={"/en/about"} className="grow p-2 justify-center">{t('about')} </Link>
                    </li>
                    <li className="border-t sm:border-none w-full sm:w-fit flex text-center hover:text-blue-500">
                        <Link href={"/en/donate"} className="grow p-2 justify-center">{t('donate')}</Link>
                    </li>
                    <li className="border-t border sm:border-none flex justify-center w-full sm:w-fit text-center min-w-fit hover:text-blue-500">
                        <LanguageChange />
                    </li>
                </ul>
            </div>
        </nav>
    )
}