
import { Carousel } from "flowbite-react";
import { Paragraph } from "../ParagraphContainer/PContainer";
import { useLocale } from "next-intl";



function CarouselSilder({data}) {
    const locale = useLocale()
    return (
        <div className="h-36 mt-3 sm:mt-0 sm:h-screen" dir="ltr">
            <Carousel pauseOnHover>
                {
                    data?.map((item, index) => (
                        <div key={index} className={`bg-cover bg-left bg-no-repeat h-full w-auto relative`}
                            style={{ backgroundImage: `url(${item.image})` }}
                        >
                            <div className="absolute bottom-0 px-2 sm:px-4 py-1 sm:py-3 flex justify-center items-center gap-5 bg-gray-500/50 h-1/5 w-full">
                                <Paragraph style={"text-white font-medium sm:font-semibold text-md sm:text-3xl"}>
                                    {item[locale].slogan}
                                </Paragraph>
                            </div>
                        </div>

                    ))
                }

            </Carousel>
        </div>
    )
}

export default CarouselSilder;