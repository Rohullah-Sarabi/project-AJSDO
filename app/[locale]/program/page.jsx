"use client"
import { getPrograms } from "@/backend/controller/operation";
import Footer from "@/components/footer";
import Navbar from "@/components/layout/Navbar";
import ProgramContainer from "@/components/program";
import { useEffect, useState } from "react";
import Loading from "../loading";


function ProgramPage() {
    const [programs, setProgram] = useState(null);
    useEffect(() => {
        const fetchProgram = async () => {
            try {
                const fetchProgram = await getPrograms();
                setProgram(fetchProgram)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchProgram();
    }, [programs])
    if (programs == null) {
        return <Loading />
    }
    return (
        <>
            <Navbar />
            <ProgramContainer programs={programs} />
            <Footer />
        </>
    )
}

export default ProgramPage;