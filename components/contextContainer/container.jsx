import { useTranslations } from "next-intl";

function ContextContainer() {
  const t = useTranslations("home")
    return (
        <>
            <div className="flex flex-col justify-center gap-5">
                <div className="flex flex-col justify-center items-center gap-5">
                    <h1 className="text-base sm:text-2xl font-medium sm:font-semibold text-center">{t("vision.title")}</h1>
                    {/* <p className="text-sm sm:text-lg text-[#3c3744]">Providing Social Welfare</p> */}
                    <p className="text-sm sm:text-lg text-[#3c3744]">{t("vision.content")}</p>
                </div>
                <div className="flex justify-center items-center">
                    <hr className="w-1/12 h-1 bg-blue-400 rounded-md" />
                </div>
            </div>
            <div className="flex flex-col justify-center gap-5 sm:p-5">
                <h1 className="text-base sm:text-2xl text-center font-medium sm:font-semibold ">{t("mission.title")}</h1>
                <div className="flex flex-col gap-1">
                    <p className="text-base sm:text-lg text-[#3c3744] text-justify">{t("mission.content")}</p>
                </div>
                <div className="flex justify-center items-center">
                    <hr className="w-1/12 h-1 bg-blue-400 rounded-md" />
                </div>
            </div>
        </>
    )
}

export default ContextContainer;