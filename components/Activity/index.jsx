import { useTranslations } from "next-intl";
import Image from "next/image";

function ActivityComponent({ type }) {
    const t = useTranslations(`activity.${type}`)
    return (
        <>
            <div className="w-full">
                <p className="font-black text-3xl sm:text-5xl text-white absolute top-1/4 left-1/4 sm:top-1/2 sm:left-1/3">{t("title")}</p>
                <Image src={t("image")} width={680} height={453} alt={`type background image`} className="w-full h-32 sm:h-52" />
            </div>
            <div className="w-4/5 sm:w-2/3 m-auto flex flex-col gap-5 justify-center mt-4 sm:p-5">
                <div className="flex flex-col justify-center gap-5">
                    <div className="flex flex-col justify-center items-start gap-5">
                        <ol className="list-disc px-5 sm:px-10 text-[#3c3744] text-sm sm:text-lg">
                            <li>{t("1")}</li>
                            <li>{t("2")}</li>
                            <li>{t("3")}</li>
                            {
                                type == "globalWarming" && <li>{t("4")}</li>
                            }
                            {
                                type == "education" && <li>{t("4")}</li>
                            }
                            {
                                type == "healt" && <li>{t("4")}</li>
                            }
                            {
                                type == "social" && <li>{t("4")}</li>
                            }
                            {type == "social" && <li>{t("5")}</li>}
                        </ol>

                    </div>
                    <div className="flex justify-center items-center">
                        <hr className="w-1/12 h-1 bg-blue-400 rounded-md" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActivityComponent;