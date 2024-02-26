"use client"
import Image from "next/image";
import Logo from "@/public/assets/logo.png"
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full shadow-md bg-white">
            <div
                className={`justify-around mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ${navbar ? "bg-[#f7f9fb]" : null
                    }`}
            >

                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    {/* <Logo /> */}
                    <Link href={"/link"}>
                        <div className="flex items-center justify-center gap-3 text-2xl text-black font-bold" title="Afghanistan Justic and Sustainable Development Organization">
                            <Image
                                alt={"logo"}
                                src={Logo}
                                height={1000}
                                width={1000}
                                className="h-14 w-14 sm:h-28 sm:w-28"
                            />
                            <p className="text-lg sm:text-4xl"><span className="text-blue-400 text-5xl">A</span>JSDO</p>
                        </div>
                    </Link>
                    <div className="md:hidden">
                        <button
                            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
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
                {/* menu list */}
                <div
                    className={`md:flex md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                        }`}
                >
                    <ul
                        className={`flex flex-col items-center justify-center w-full md:flex md:flex-row md:justify-center md:items-center md:space-x-6 md:space-y-0`}
                    >
                        <li className="border sm:border-none w-full py-2 text-center">
                            <Link href={"/"}>
                                Home
                            </Link>
                        </li>
                        <li className="border sm:border-none w-full py-2 text-center">
                            <Link href={"/"}>
                                Programs
                            </Link>
                        </li>
                        <li className="border sm:border-none w-full py-2 text-center">
                            <Link href={"/jobs/alljobs"}>Contact</Link>
                        </li>
                        <li className="border sm:border-none w-full py-2 text-center min-w-fit">
                            <Link href={"/company"}>About Us</Link>
                        </li>
                        <li className="border sm:border-none w-full py-2 text-center">
                            <Link href={"/contact"}>contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}