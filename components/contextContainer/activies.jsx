import Link from "next/link";
import Image from "next/image";

function Activies({ href, content,image }) {
    return (
        <Link href={href} className="shadow-md sm:shadow-none flex flex-col justify-center items-center gap-2 w-2/5 sm:w-1/5 py-3 transition hover:scale-105 hover:delay-150 hover:text-blue-500" >
            <div className="flex flex-col justify-center items-center gap-2 w-full">
                <Image src={image} alt={content} width={500} height={500} className="w-16 sm:w-24 text-blue-500" />
                <p className="w-full text-xs sm:text-base font-medium sm:font-semibold text-center capitalize sm:uppercase">{content}</p>
            </div>
            <div className="w-full flex justify-center">
                <hr className="w-1/5 h-1 bg-blue-500 rounded-full" />
            </div>
        </Link>
    )
}

export default Activies;