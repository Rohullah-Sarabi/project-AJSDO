"use client"
import { getProgram, getPrograms } from "@/backend/controller/operation";
import { ProgramDetails } from "@/components/ProgramDetails";
import Footer from "@/components/footer";
import Navbar from "@/components/layout/Navbar";
import { useEffect, useState } from "react";
import Loading from "../../loading";

function NewsDetails({ params }) {
    const [program, setProgram] = useState(null);
    const [allPrograms,setPrograms] = useState(null);
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
    }, [])

    return (
        <>
            <Navbar />
            {
                program == null || allPrograms==null ? <Loading /> :
                    <ProgramDetails data={program} allPrograms={allPrograms}/>
            }
            <Footer />
        </>

    )
}

export default NewsDetails;