import Footer from "@/components/footer";
import Navbar from "@/components/layout/Navbar";
import { Badge, List } from "flowbite-react";
import { useTranslations } from "next-intl";
import { HiCheck } from "react-icons/hi"

function AboutPage() {
    const t = useTranslations("about")
    return (
        <>
            <Navbar />
            <div className="w-4/5 sm:w-2/3 m-auto flex flex-col gap-5 justify-center mt-4 sm:p-5">
                <div className="flex flex-col justify-center gap-5">
                    <div className="flex flex-col justify-center items-center gap-5">
                        <h1 className="text-lg mt-3 sm:text-2xl font-semibold text-start">{t("title")}</h1>
                        <div className="flex flex-col justify-start text-justify">
                            <p className="text-sm sm:text-lg font-medium sm:font-semibold text-[#3c3744]">{t("name")}</p>
                            <p className="text-sm sm:text-lg text-[#3c3744]">{t("content")}</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <hr className="w-1/12 h-1 bg-blue-400 rounded-md" />
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-5">
                    <div className="flex flex-col justify-center items-start gap-5">
                        <div className="flex flex-col justify-start">
                            <p className="text-sm sm:text-lg font-bold text-[#3c3744]">{t("activies.title")}:</p>
                            <ol className="list-disc px-5 sm:px-10 text-[#3c3744] text-sm sm:text-lg">
                                <li>{t("activies.1")}</li>
                                <li>{t("activies.2")}</li>
                                <li>{t("activies.3")}</li>
                                <li>{t("activies.4")}</li>
                                <li>{t("activies.5")}</li>
                            </ol>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <hr className="w-1/12 h-1 bg-blue-400 rounded-md" />
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-5">
                    <div className="flex flex-col justify-center items-center gap-5">
                        <h1 className="text-base sm:text-2xl font-medium sm:font-semibold text-start">{t("values.title")}</h1>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center text-justify">
                        <Badge icon={HiCheck} size="md" className="px-3 py-2">{t("values.equity")}</Badge>
                        <Badge icon={HiCheck} size={"md"} className="px-3 py-2">{t("values.socialJustice")}</Badge>
                        <Badge size="md" icon={HiCheck} className="px-3 py-2">{t("values.accountability")}</Badge>
                        <Badge size="md" icon={HiCheck} className="px-3 py-2">{t("values.sustainability")}</Badge>
                        <Badge size="md" icon={HiCheck} className="px-3 py-2">{t("values.collaboration")}</Badge>
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-5">
                    <div className="flex flex-col justify-center items-center gap-5">
                        <h1 className="text-base sm:text-2xl font-medium sm:font-semibold text-start">{t("objective.title")}</h1>
                        <div className="flex flex-col justify-start text-justify">
                            <p className="text-sm sm:text-lg font-medium sm:font-semibold text-[#3c3744]">{t("objective.education.title")}:</p>
                            <List className="px-5 sm:px-10">
                                <List.Item>{t("objective.education.1")}</List.Item>
                                <List.Item>{t("objective.education.2")}</List.Item>
                                <List.Item>{t("objective.education.3")}</List.Item>
                            </List>
                            <p className="text-sm sm:text-lg font-medium sm:font-semibold text-[#3c3744]">{t("objective.healthcare.title")}:</p>
                            <List className="px-5 sm:px-10">
                                <List.Item>{t("objective.healthcare.1")}</List.Item>
                                <List.Item>{t("objective.healthcare.2")}</List.Item>
                                <List.Item>{t("objective.healthcare.3")}</List.Item>
                            </List>
                            <p className="text-sm sm:text-lg font-medium sm:font-semibold text-[#3c3744]">{t("objective.socialServices.title")}:</p>
                            <List className="px-5 sm:px-10">
                                <List.Item>{t("objective.socialServices.1")}</List.Item>
                                <List.Item>{t("objective.socialServices.2")}</List.Item>
                                <List.Item>{t("objective.socialServices.3")}</List.Item>
                            </List>
                            <p className="text-sm sm:text-lg font-medium sm:font-semibold text-[#3c3744]">{t("objective.povertyAlleviation.title")}:</p>
                            <List className="px-5 sm:px-10">
                                <List.Item>{t("objective.povertyAlleviation.1")}</List.Item>
                                <List.Item>{t("objective.povertyAlleviation.2")}</List.Item>
                                <List.Item>{t("objective.povertyAlleviation.3")}</List.Item>
                            </List>
                            <p className="text-sm sm:text-lg font-medium sm:font-semibold text-[#3c3744]">{t("objective.advocacyAndAwareness.title")}:</p>
                            <List className="px-5 sm:px-10">
                                <List.Item>
                                    {t("objective.advocacyAndAwareness.1")}
                                </List.Item>
                                <List.Item>{t("objective.advocacyAndAwareness.2")}
                                </List.Item>
                                <List.Item>{t("objective.advocacyAndAwareness.3")}
                                </List.Item>
                            </List>
                            <p className="text-sm sm:text-lg font-medium sm:font-semibold text-[#3c3744]">{t("objective.partnershipandCollaboration.title")}:</p>
                            <List className="px-5 sm:px-10">
                                <List.Item>{t("objective.partnershipandCollaboration.1")}
                                </List.Item>
                                <List.Item>{t("objective.partnershipandCollaboration.2")}
                                </List.Item>
                                <List.Item>{t("objective.partnershipandCollaboration.3")}
                                </List.Item>
                            </List>
                            <p className="text-sm sm:text-lg font-medium sm:font-semibold text-[#3c3744]">{t("objective.monitoringAndEvaluation.title")}:</p>
                            <List className="px-5 sm:px-10">
                                <List.Item>{t("objective.monitoringAndEvaluation.1")}
                                </List.Item>
                                <List.Item>{t("objective.monitoringAndEvaluation.2")}
                                </List.Item>
                                <List.Item>{t("objective.monitoringAndEvaluation.3")}
                                </List.Item>
                            </List>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <hr className="w-1/12 h-1 bg-blue-400 rounded-md" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutPage;