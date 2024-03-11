"use client"
import { TbTargetArrow } from "react-icons/tb"
import { IoCheckmarkDoneCircle } from "react-icons/io"
import CardComponent from "@/components/card";
import { Pagination } from "@/components/pagination";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/footer";

function ProgramPage() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col p-5 gap-5 justify-center">
                <div className="w-full text-center">
                    <div className="inline-flex rounded-md shadow-sm">
                        <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                            All Progresses
                        </button>
                        <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                            In Progress
                        </button>
                        <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                            Acomplated
                        </button>
                        <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ">
                            on Plan
                        </button>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap gap-5 justify-center">
                    <CardComponent url={"/assets/Bamyan_WCSO_Sept_2023_2.jpg"} title={"The Women Civil Society Organization (WCSO) program, implements by UN-Women in Afghanistan, is a vital initiative that focuses on supporting women-led organizations in the country"} />
                    <CardComponent url={"/assets/Bamyan_WCSO_Sept_2023_2.jpg"} title={"The Women Civil Society Organization (WCSO) program, implements by UN-Women in Afghanistan, is a vital initiative that focuses on supporting women-led organizations in the country"} />
                    <CardComponent url={"/assets/Bamyan_WCSO_Sept_2023_2.jpg"} title={"The Women Civil Society Organization (WCSO) program, implements by UN-Women in Afghanistan, is a vital initiative that focuses on supporting women-led organizations in the country"} />
                    <CardComponent url={"/assets/Bamyan_WCSO_Sept_2023_2.jpg"} title={"The Women Civil Society Organization (WCSO) program, implements by UN-Women in Afghanistan, is a vital initiative that focuses on supporting women-led organizations in the country"} />
                </div>
                <div className="w-full text-center">
                    <Pagination />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProgramPage;