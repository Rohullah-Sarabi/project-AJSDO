const { default: Loading } = require("@/app/[locale]/loading");
import { getLimitPrograms, getPrograms } from "@/backend/controller/operation";
import { useEffect, useState } from "react";
import CardComponent, { EditCardComponent } from "../card";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { toast } from "react-toastify";

export function Events() {
    const [programs, setProgram] = useState(null)
    const t = useTranslations("home")
    const locale = useLocale()

    useEffect(() => {
        const fetchProgram = async () => {
            try {
                const fetchedPrograms = await getLimitPrograms();
                setProgram(fetchedPrograms);
            } catch (error) {
                toast.error(error.message);
            }
        }
        fetchProgram();
    }, [programs]);

    if (programs === null) {
        return <Loading />
    }
    return (
        <div className="flex flex-row flex-wrap gap-2 justify-center">

            {
                Array.isArray(programs) && programs.length > 0 ? (

                    <div className="flex flex-row flex-wrap gap-2 justify-center">
                        {programs.map((program, index) => (
                            <CardComponent program={program} key={index} />
                        ))}
                    </div>

                ) : (
                    <p>No programs available.</p>
                )
            }
            {
                Array.isArray(programs) && programs.length > 0 && <div className="w-full text-blue-700 text-sm sm:text-lg flex justify-center items-center">
                    <Link href={`${process.env.API_URL}/${locale}/program`}>{t("allprograms")}</Link>
                </div>
            }
        </div>
    )
}

export function EditeEvents() {
    const [programs, setProgram] = useState(null)
    const [state, setState] = useState(false)
    useEffect(() => {
        const fetchProgram = async () => {
            try {
                const fetchedPrograms = await getPrograms();
                setProgram(fetchedPrograms);
            } catch (error) {
                toast.error(error)
            }
        }
        fetchProgram();
    }, [state]);

    const handleState = () => {
        setState(!state)
    }
    if (programs === null) {
        return <Loading />
    }
    return (
        <div className="flex flex-row flex-wrap gap-2 justify-center">

            {
                Array.isArray(programs) && programs.length > 0 ? (
                    <div className="flex flex-row flex-wrap gap-2 justify-center">
                        {programs.map((program, index) => (
                            <EditCardComponent program={program} key={index} changeState={handleState} />
                        ))}
                    </div>
                ) : (
                    <p>No programs available.</p>
                )
            }
        </div>
    )
}