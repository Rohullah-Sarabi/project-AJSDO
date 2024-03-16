import Image from "next/image";
import CardComponent from "../card";
import { Pagination } from "../pagination";
import { useEffect, useState } from "react";


function ProgramContainer({ programs }) {
    const [category, setCategory] = useState("all");
    const [filteredPrograms, setFilteredPrograms] = useState([]);

    useEffect(() => {
        filterPrograms();
    }, []);

    useEffect(() => {
        filterPrograms();
    }, [category]);

    const filterPrograms = () => {
        let filteredPrograms = [];

        if (category === "all") {
            filteredPrograms = programs;
        } else if (category === "progress") {
            filteredPrograms = programs.filter(
                (program) => program.projectState === "inprogress"
            );
        } else if (category === "acomplated") {
            filteredPrograms = programs.filter(
                (program) => program.projectState === "acomplated"
            );
        } else if (category === "onplan") {
            filteredPrograms = programs.filter(
                (program) => program.projectState === "onplan"
            );
        }

        setFilteredPrograms(filteredPrograms);
    };
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
                {filteredPrograms.length > 0 ? (
                    filteredPrograms.map((program, index) => (
                        <CardComponent program={program} key={index} />
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
                        <p className="text-lg sm:text-3xl">Empty</p>
                    </div>
                )}
            </div>
            <div className="w-full text-center">
                <Pagination />
            </div>
        </div>
    )
}

export default ProgramContainer;
