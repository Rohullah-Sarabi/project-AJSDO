import Image from "next/image";

export default function Loading() {
    return <div className="w-screen h-screen flex justify-center items-center">
        <Image src={"/loading.svg"} width={500} height={500} alt="loading " className="w-16"/>
    </div>
}