import Image from "next/image";
import CardComponent from "../card";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";


function ProgramContainer({ programs }) {
    const [category, setCategory] = useState("all");
    const [filteredPrograms, setFilteredPrograms] = useState([]);
    const t = useTranslations("programs")
    useEffect(() => {
        const filterPrograms = () => {
            let filteredPrograms = [];
    
            if (category === "all") {
                filteredPrograms = programs;
            } else if (category === "progress") {
                filteredPrograms = programs?.filter(
                    (program) => program.projectState === "inprogress"
                );
            } else if (category === "completed") {
                filteredPrograms = programs?.filter(
                    (program) => program.projectState === "completed"
                );
            } else if (category === "onplan") {
                filteredPrograms = programs?.filter(
                    (program) => program.projectState === "onplan"
                );
            }
    
            setFilteredPrograms(filteredPrograms);
        };
        filterPrograms();
    }, [category,programs]);


    return (
        <div className="flex flex-col p-5 gap-5 justify-center">
            <div className="w-full text-center">
                <div className="inline-flex rounded-md shadow-sm">
                    <button type="button" onClick={() => setCategory("all")} className={`${category=="all"?"text-blue-700":"text-gray-900"} inline-flex items-center px-1 py-1 sm:px-4 sm:py-2 text-sm font-light sm:font-medium bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700`}>
                        {t("all programs")}
                    </button>
                    <button type="button" onClick={() => setCategory("progress")} className={`${category=="progress"?"text-blue-700":"text-gray-900"} inline-flex items-center  px-1 py-1 sm:px-4 sm:py-2 text-sm font-light sm:font-medium bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700`}>
                        {t("in progress")}
                    </button>
                    <button type="button" onClick={() => setCategory("completed")} className={`${category=="completed"?"text-blue-700":"text-gray-900"} inline-flex items-center  px-1 py-1 sm:px-4 sm:py-2 text-sm font-light sm:font-medium bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700`}>
                        {t("completed")}
                    </button>
                    <button type="button" onClick={() => setCategory("onplan")} className={`${category=="onplan"?"text-blue-700":"text-gray-900"} inline-flex items-center  px-1 py-1 sm:px-4 sm:py-2 text-sm font-light sm:font-medium bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700`}>
                        {t("on plan")}
                    </button>
                </div>
            </div>
            <div className="flex flex-row flex-wrap gap-2 justify-center">
                {filteredPrograms.length > 0 ? (
                    filteredPrograms.map((program) => (
                        <CardComponent program={program} key={program._id} />
                    ))
                ) : (
                    <div className="flex flex-col gap-3 w-1/2 items-center">
                        <Image
                            src={"/assets/noResults.png"}
                            width={500}
                            height={500}
                            alt="no result image"
                            className="w-1/3"
                        />
                        <p className="text-lg sm:text-3xl">{t("empty")}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProgramContainer;
