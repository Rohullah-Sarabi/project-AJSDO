import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi"
import { SiGmail } from "react-icons/si"

function Footer() {
    const date = new Date()
    return (
        <div className="w-full bg-[#3066b2] flex flex-col mt-2 border-t-8 border-white">
            <div className="flex flex-col sm:flex-row justify-between p-5 gap-10 text-[#fbfff1]">
                <div className="w-full sm:w-1/3 flex flex-col justify-center items-center gap-1">
                    <Image src={"/assets/logo.png"} alt={"Afghanistan Justic and Sustainable Development Organization logo"} height={1024} width={1024} className="w-36 sm:w-44 h-36 sm:h-44" />
                    <p className="text-center text-base sm:text-lg">Afghanistan Justic and Sustainable Development Organization(AJSDO)</p>
                </div>
                <div className="w-full flex flex-col sm:flex-row justify-evenly">
                    <div className=" text-center sm:text-start">
                        <h1 className="text-base sm:text-lg font-semibold mb-2">Navigation</h1>
                        <div className="flex flex-col text-base sm:text-lg gap-2">
                            <Link href={"/"}>Home</Link>
                            <Link href={"/"}>Programs</Link>
                            <Link href={"/"}>Contact</Link>
                            <Link href={"/"}>About</Link>
                        </div>
                    </div>
                    <div className=" text-center sm:text-start">
                        <h1 className="text-base sm:text-lg font-semibold mb-2">Area of Activity</h1>
                        <div className="flex flex-col text-base sm:text-lg gap-2">
                            <Link href={"/"} className="capitalize">education</Link>
                            <Link href={"/"} className="capitalize">social services</Link>
                            <Link href={"/"} className="capitalize">health care services</Link>
                            <Link href={"/"} className="capitalize">agriculture</Link>
                            <Link href={"/"} className="capitalize">global warming</Link>

                        </div>
                    </div>
                    <div className=" text-center sm:text-start">
                        <h1 className="text-base sm:text-lg font-semibold mb-2">Connect</h1>
                        <div className="flex flex-col text-base sm:text-lg gap-2">
                            <address className="text-sm text-wrap">14th  Street, Behind the Bamyan  airport, Bamyan City, Afghanistan</address>
                            <div className="flex flex-row justify-center sm:justify-start">
                                <p className="font-semibold">tel:</p> 
                                <div className="flex flex-row gap-5">
                                    <Link href={"tel:+93779979286"} className="text-md">+93(0)779979286</Link>
                                    <Link href={"tel:+93773105552"} className="text-md">+93(0)773105552</Link>
                                </div>
                            </div>
                            <div className="flex flex-row gap-5 sm:justify-start justify-center">
                                <Link href="https://www.facebook.com/profile.php?id=61556935291565&mibextid=rS40aB7S9Ucbxw6v" >
                                    <FaFacebookF className="text-2xl"/>
                                </Link>
                                <Link href={""}>
                                    <FaTwitter
                                     className="text-2xl"/>
                                </Link>
                                <Link href={""}>
                                    <TfiYoutube className="text-2xl"/>
                                </Link>
                                <Link href={"https://www.linkedin.com/company/afghanistan-justice-and-sustainable-development-organization/"}>
                                    <FaLinkedin className="text-2xl"/>
                                </Link>
                                <Link href={"mailto:ajsdo.ngo@gmail.com"}>
                                    <SiGmail className="text-2xl"/>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className="w-full bg-[#30668f] flex flex-col justify-start items-start sm:justify-center sm:items-center px-10 py-2 text-[#fbfff1]">
                <p className="text-xs sm:text-sm text-justify">©{date.getFullYear().toString()} Afghanistan Justic and Sustainable Development Organization (AJSDO)</p>
                <p className="text-xs sm:text-sm text-justify">Branding & Web Development by RSAA</p>
            </div>
        </div>
    )
}

export default Footer;