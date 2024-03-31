"use client"

import Loading from "@/app/[locale]/loading";
import { getProgram, getPrograms } from "@/backend/controller/operation";
import { UpdateProgramDetails } from "@/components/ProgramDetails/updateProgram";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "flowbite-react";
import { useEffect, useState } from "react";

function UpdateDetails({ params }) {
    const [program, setProgram] = useState(null);
    const [allPrograms, setPrograms] = useState(null);
    const [refresh,setRefresh] = useState(false)
    
    useEffect(() => {
        const fetchProgram = async (id) => {
            try {
                const fetchProgram = await getProgram(id)
                setProgram(fetchProgram);
                const fetchAllPrograms = await getPrograms();
                setPrograms(fetchAllPrograms)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchProgram(params.id);
    }, [refresh,params.id])
     const Refresh = ()=>{
        setRefresh(!refresh)
     }
    return (
        <>
            <Navbar />
            {
                program == null || allPrograms == null ? <Loading /> :
                    <UpdateProgramDetails data={program} allPrograms={allPrograms} refresh={refresh} Refresh={Refresh}/>
            }
            <Footer />
        </>

    )
}

export default UpdateDetails;