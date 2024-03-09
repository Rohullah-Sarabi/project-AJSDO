import { Carousel } from "flowbite-react";
import { useLocale } from "next-intl";
import Image from "next/image";


function CarouselSilder() {
    const locale = useLocale()
    return (
        <div className="h-36 mt-3 sm:mt-0 sm:h-screen">
        {/* // <div className="h-56 sm:h-screen xl:h-80 2xl:h-96"> */}
            <Carousel pauseOnHover>
                {/* <Image src="/assets/IMG-20231203-WA0006(1).jpg" alt="..." width={500} height={500} /> */}
                <Image src="/assets/IMG-20231106-WA0015.jpg" alt="..." width={1500} height={1500} />
                <Image src="/assets/IMG-20231106-WA0016.jpg" alt="..." width={1500} height={1500} />
            </Carousel>
        </div>
    )
}

export default CarouselSilder;