import { Carousel } from "flowbite-react";
import Image from "next/image";


function CarouselSilder() {
    return (
        <div className="h-36 mt-3 sm:mt-0 sm:h-screen">
        {/* // <div className="h-56 sm:h-screen xl:h-80 2xl:h-96"> */}
            <Carousel pauseOnHover>
                <div>
                    <Image src="/assets/IMG-20231106-WA0015.jpg" alt="..." width={1500} height={1500} className="z-10"/>
                    <p className="text-4xl text-white font-black relative left-48 -top-36 z-50 ">Empowering communities, and Bulding a better future</p>
                </div>
                <Image src="/assets/IMG-20231106-WA0016.jpg" alt="..." width={1500} height={1500} />
            </Carousel>
        </div>
    )
}

export default CarouselSilder;