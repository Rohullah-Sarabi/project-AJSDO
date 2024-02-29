"use client"
import Image from "next/image";
import Logo from "@/public/assets/logo.png"
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
import LanguageChange from "./lang";
import { useTranslations } from "next-intl";

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const t = useTranslations("navbar")
    // backdrop-brightness-50
    // bg-[url(/assets/bg_1.jpg)] bg-cover bg-center
    return (
        <nav className="w-full shadow-md bg-[#f7f9fb]">
            <div
                className={`md:flex md:justify-between md:h-20 mx-auto lg:max-w-5xl md:items-center  md:px-6 bg-[#f7f9fb]`}
            >

                <div className="flex flex-row  items-center justify-between">
                    {/* <Logo /> */}
                    <Link href={"/link"}>
                        <div className="flex items-center justify-center gap-3 text-2xl text-black font-bold" title="Afghanistan Justic and Sustainable Development Organization">
                            <Image
                                alt={"logo"}
                                src={Logo}
                                height={1000}
                                width={1000}
                                className="h-12 w-12 sm:h-16 sm:w-16"
                            />
                            <p className="text-lg"><span className="text-[#7ea7db] sm:text-4xl">A</span><span className="sm:text-4xl">JSDO</span></p>
                        </div>
                    </Link>
                    <div className="md:hidden">
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
                    className={`${navbar ? "block bg-[#f7f9fb]" : "hidden"} md:flex flex-col md:flex-row text-lg items-center justify-center`}
                >
                    <li className="border-t sm:border-none w-full flex text-center hover:text-blue-500">
                        <Link href={"/"} className="grow p-2 justify-center">
                            {t('home')}
                        </Link>
                    </li>
                    <li className="border-t sm:border-none w-full hover:text-blue-500">
                        <Link href={"/"} className="flex grow p-2 justify-center">
                            {t('program')}
                        </Link>
                    </li>
                    <li className="border-t sm:border-none w-full flex text-center hover:text-blue-500">
                        <Link href={"/"} className="grow p-2 justify-center">{t('contact')}</Link>
                    </li>
                    <li className="border-t sm:border-none w-full text-center min-w-fit hover:text-blue-500">
                        <Link href={"/company"} className="grow p-2 justify-center">{t('about')} </Link>
                    </li>
                    <li className="border-t sm:border-none flex justify-center w-full text-center min-w-fit hover:text-blue-500">
                        <LanguageChange />
                    </li>
                </ul>
                {/* </div> */}
            </div>
        </nav>
    )
}