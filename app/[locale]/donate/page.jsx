
import { PContainer, Paragraph } from "@/components/ParagraphContainer/PContainer";
import Footer from "@/components/footer";
import Navbar from "@/components/layout/Navbar";
import { useTranslations } from "next-intl";

function Donate() {
    const t = useTranslations("about")
    return (
        <>
            <Navbar/>
            <div className="w-full sm:w-2/3 mx-auto flex flex-col p-5">
                <Paragraph style={"text-justify sm:px-5 text-sm sm:text-lg"} content={t("about")} />
                <div className="flex flex-col mt-5 sm:px-5 text-[#3c3744]">
                    <Paragraph style={"text-base sm:text-2xl font-extrabold capitalize"} content={t("bank details")} />
                    <PContainer title={t("Beneficiary name.title")} content={t('Beneficiary name.content')} />
                    <PContainer title={t("Account number.title")} content={t('Account number.content')} />
                    <PContainer title={t("Bank.title")} content={t('Bank.content')} />
                    <PContainer title={t("Bank Address.title")} content={t('Bank Address.content')} />
                    <PContainer title={t("Bank Swift Code.title")} content={t('Bank Swift Code.content')} />
                    <PContainer title={t("Correspondent Bank.title")} content={t('Correspondent Bank.content')} />
                    <PContainer title={t("Bank Account Number.title")} content={t('Bank Account Number.content')} />
                    <PContainer title={t("Correspondent Bank SWIFT code.title")} content={t('Correspondent Bank SWIFT code.content')} />
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Donate;