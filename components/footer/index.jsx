import Link from "next/link";
import { FaFacebookF, FaLinkedin } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi"
import { SiGmail } from "react-icons/si"
import {BsTwitterX} from "react-icons/bs"
import { useLocale, useTranslations } from "next-intl";

function Footer() {
    const date = new Date()
    const t = useTranslations("footer")
    const locale = useLocale()
    return (
        <div className="w-full bg-[#3066b2] flex flex-col mt-2 border-t-8 border-white">
                <div className="w-full flex flex-col sm:flex-row justify-around p-5 text-[#fbfff1] border border-green-600">
                    <div className=" text-center sm:text-start p-5">
                        <h1 className="text-base sm:text-lg font-semibold mb-2 uppercase">{t("title")}</h1>
                        <div className="flex flex-col text-base sm:text-lg gap-2 capitalize">
                            <Link href={t("home.url")}>{t("home.title")}</Link>
                            <Link href={t("program.url")}>{t("program.title")}</Link>
                            <Link href={t("donate.url")}>{t("donate.title")}</Link>
                            <Link href={t("contact.url")}>{t("contact.title")}</Link>
                            <Link href={t("about.url")}>{t("about.title")}</Link>
                        </div>
                    </div>
                    <div className=" text-center sm:text-start p-5">
                        <h1 className="text-base sm:text-lg font-semibold mb-2 uppercase">{t("activity.title")}</h1>
                        <div className="flex flex-col text-base sm:text-lg gap-2 capitalize">
                            <Link href={`/${locale}/activity/education`} className="capitalize">{t("activity.education")}</Link>
                            <Link href={`/${locale}/activity/social`} className="capitalize">{t("activity.social")}</Link>
                            <Link href={`/${locale}/activity/health`} className="capitalize">{t("activity.health")}</Link>
                            <Link href={`/${locale}/activity/agriculture`} className="capitalize">{t("activity.agriculture")}</Link>
                            <Link href={`/${locale}/activity/globalWarming`} className="capitalize">{t("activity.globalWarming")}</Link>

                        </div>
                    </div>
                    <div className="text-center sm:text-start p-5">
                        <h1 className="text-base sm:text-lg font-semibold mb-2 uppercase">{t("connect.title")}</h1>
                        <div className="flex flex-col text-base sm:text-lg gap-3">
                            <address className="text-sm text-wrap">{t("connect.address")}</address>
                            <div className="flex flex-col justify-center sm:justify-start">
                                <p className="font-semibold">{t("connect.tel")}:</p> 
                                <div className="flex flex-col gap-1">
                                    <Link href={`tel:${t("connect.phoneNumber1")}`} className="text-md">{t("connect.phoneNumber1")}</Link>
                                    <Link href={`tel:${t("connect.phoneNumber1")}`} className="text-md">{t("connect.phoneNumber2")}</Link>
                                </div>
                            </div>
                            <div className="flex flex-row gap-5 sm:justify-start justify-center">
                                <Link href="https://www.facebook.com/profile.php?id=61556935291565&mibextid=rS40aB7S9Ucbxw6v" >
                                    <FaFacebookF className="text-2xl"/>
                                </Link>
                                <Link href={""}>
                                    <BsTwitterX
                                     className="text-2xl"/>
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
            <div className="w-full bg-[#30668f] flex flex-col justify-start items-start sm:justify-center sm:items-center px-10 py-2 text-[#fbfff1]">
                <p className="text-xs sm:text-sm text-justify">©{date.getFullYear().toString()} Afghanistan Justice and Sustainable Development Organization (AJSDO)</p>
                <p className="text-xs sm:text-sm text-justify">Branding & Web Development by RSAA</p>
            </div>
        </div>
    )
}

export default Footer;