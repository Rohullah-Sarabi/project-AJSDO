import { Button, Card } from "flowbite-react";

function CardComponent({ url, title }) {
    return (
        <Card
            className="max-w-sm gap-0"
            imgAlt={title}
            imgSrc={url}
        >
            <p className="text-gray-500 text-start font-semibold capitalize">{new Date().toLocaleString()}</p>
            <p className="text-[#3c3744] font-semibold capitalize text-start">{title}</p>
            <Button className="bg-[#3066b2]">
                Read more
            </Button>
        </Card>
    )
}

export default CardComponent;