import { useLocale, useTranslations } from "next-intl"
import Activies from "../contextContainer/activies";

export function ActivityContainer() {
    const locale = useLocale()
    const t = useTranslations("activity");
    return (
        <div className="w-full sm:w-3/4 mx-auto flex flex-row flex-wrap justify-center sm:justify-between flex-1 gap-2 sm:gap-0">
            <Activies image={"/assets/education.png"} href={`/${locale}/activity/education`} content={"education"} />
            <Activies image={"/assets/social-services.png"} href={`/${locale}/activity/social`} content={"social services"} />
            <Activies image={"/assets/medical-care.png"} href={`/${locale}/activity/health`} content={"health care services"} />
            <Activies image={"/assets/agriculture.png"} href={`/${locale}/activity/agriculture`} content={"agriculture"} />
            <Activies image={"/assets/global-warming.png"} href={`/${locale}/activity/globalWarming`} content={"global warming"} />
        </div>
    )
}