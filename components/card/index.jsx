"use client"
import { Button, Card } from "flowbite-react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

function CardComponent({ url, title }) {
    const router = useRouter()
    const locale = useLocale()
    const id = 1000;
    const hanldeClick = async(id)=>{
        router.push(`/${locale}/program/${id}`)
    }
    return (
        <Card
            className="max-w-sm"
            imgAlt={title}
            imgSrc={url}
        >
            <div>
                <span className="text-gray-500 text-start font-semibold capitalize">{new Date().toLocaleString()}</span>
                <p className="text-[#3c3744] font-medium capitalize text-justify">{title}</p>
            </div>
            <Button color="blue" onClick={hanldeClick}>
                Read more
            </Button>
        </Card>
    )
}

export default CardComponent;