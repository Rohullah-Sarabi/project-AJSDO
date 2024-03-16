import Image from "next/image";
import CardComponent from "../card";
import { Pagination } from "../pagination";
import { useEffect, useState } from "react";


function ProgramContainer({ programs }) {
    const [category, setCategory] = useState("all");
    let programsInProgress,programsOnPlan,AcomplatedPrograms;
    useEffect(()=>{
        const ArrangeData = ()=>{
            programsInProgress = programs?.map((pro) => {if(pro.projectState == "inprogress")return pro})
            programsOnPlan = programs?.map((pro) => {if(pro.projectState == "onplan")return pro})
            AcomplatedPrograms = programs?.map((pro) => { if(pro.projectState == "acomplated") return pro})
        }
        ArrangeData()
    },[])

    return (
        <div className="flex flex-col p-5 gap-5 justify-center">
            <div className="w-full text-center">
                <div className="inline-flex rounded-md shadow-sm">
                    <button type="button" onClick={() => setCategory("all")} className="inline-flex items-center px-1 py-1 sm:px-4 sm:py-2 text-sm font-light sm:font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                        All Progrom
                    </button>
                    <button type="button" onClick={() => setCategory("progress")} className="inline-flex items-center  px-1 py-1 sm:px-4 sm:py-2 text-sm font-light sm:font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                        In Progress
                    </button>
                    <button type="button" onClick={() => setCategory("acomplated")} className="inline-flex items-center  px-1 py-1 sm:px-4 sm:py-2 text-sm font-light sm:font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                        Acomplated
                    </button>
                    <button type="button" onClick={() => setCategory("onplan")} className="inline-flex items-center  px-1 py-1 sm:px-4 sm:py-2 text-sm font-light sm:font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 ">
                        on Plan
                    </button>
                </div>
            </div>
            <div className="flex flex-row flex-wrap gap-2 justify-center">
                {
                    programs.length > 0 ? category == "all" && programs?.map((program, index) =>
                        <CardComponent program={program} key={index} />
                    ) : (
                        <div className="flex flex-col">
                            <Image src={"/assets/noResults.png"} width={500} height={500} alt="no result image" />
                        </div>
                    )
                }
                {

                    category == "progress" && programsInProgress?.map((program, index) => <CardComponent program={program} key={index} />)

                }
                {
                    category == "acomplated" && AcomplatedPrograms?.map((program, index) => <CardComponent program={program} key={index} />)
                }
                {


                    category == "onplan" && programsOnPlan?.map((program, index) => <CardComponent program={program} key={index} />)
                }
            </div>
            <div className="w-full text-center">
                <Pagination />
            </div>
        </div>
    )
}

export default ProgramContainer;


// return (
//     <div className="flex flex-col">
//         <Image src={"/assets/noResults.png"} width={500} height={500} alt="no result image" />
//     </div>
// )