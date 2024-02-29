import Image from "next/image";
import Link from "next/link";

function Footer() {
    const date = new Date()
    return (
        <div className="w-full bg-[#b4c5e4] flex flex-col mt-2 border-t-8 border-white">
            <div className="flex flex-col sm:flex-row justify-between p-5 gap-10">
                <div className="w-full sm:w-1/3 flex flex-col justify-center items-center gap-1">
                    <Image src={"/assets/logo.png"} alt={"Afghanistan Justic and Sustainable Development Organization logo"} height={1024} width={1024} className="w-36 sm:w-44 h-36 sm:h-44" />
                    <p className="text-center text-base sm:text-lg">Afghanistan Justic and Sustainable Development Organization(AJSDO)</p>
                </div>
                <div className="w-full sm:w-2/3 flex flex-col justify-between">
                    <div className=" text-center sm:text-start">
                        <h1 className="text-base sm:text-lg font-semibold mb-2">Navigation</h1>
                        <div className="flex flex-col text-base sm:text-lg gap-2">
                            <Link href={"/"}>Home</Link>
                            <Link href={"/"}>Programs</Link>
                            <Link href={"/"}>Contact</Link>
                            <Link href={"/"}>About</Link>

                        </div>
                    </div>
                </div>

            </div>
            <div className="w-full bg-[#3066b2] flex flex-col justify-center items-center p-10 text-[#fbfff1]">
                <p className="text-xs sm:text-lg text-justify">©{date.getFullYear().toString()} Afghanistan Justic and Sustainable Development Organization (AJSDO)</p>
                <p className="text-xs sm:text-lg text-justify">Branding & Web Development by RSAA</p>
            </div>
        </div>
    )
}

export default Footer;