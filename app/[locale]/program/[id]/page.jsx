import { Paragraph } from "@/components/ParagraphContainer/PContainer";
import { BreadCrumb } from "@/components/breadcrumb";
import Image from "next/image";

function NewsDetails() {
    return (<div className="w-full p-3 sm:w-3/5 flex flex-col gap-5 justify-center items-center mx-auto my-5 text-[#3c3744]">
        <div className="flex flex-col gap-2 justify-start w-full">
            <Paragraph style={"text-sm sm:text-lg font-medium sm:font-semibold"} content={"Women Civil Society Organization (WCSO) Program"} />
            <Paragraph style={"text-sm sm:text-lg font-medium sm:font-semibold text-[#b4c5e4]"} content={`${new Date().toLocaleDateString()}`} />
        </div>
        <Image src={"/assets/3.jpg"} width={500} height={500} className="w-full sm:h-96" />
        <Paragraph style={"text-sm sm:text-lg  text-justify p-2 text-[#3c3744]"}>
            The Women Civil Society Organization (WCSO) program, implements by UN-Women in Afghanistan, is a vital initiative that focuses on supporting women-led organizations in the country. Afghanistan has long faced significant challenges in terms of gender equality, women's empowerment, and the overall socio-political environment for women. The WCSO program aims to address these challenges by providing training and financial support to women-led organizations, enabling them to effectively manage their organizations and navigate the difficult conditions in the country.
            The Women Civil Society Organization (WCSO) program, implements by UN-Women, plays a crucial role in supporting women-led organizations in Afghanistan. Operating within a challenging socio-political environment, the program aims to enhance the capacity of these organizations in managing their operations and empowering women.
            Through a series of workshops and trainings, the WCSO program equips women-led organizations with essential skills and knowledge in organization management. Workshops cover various topics, including strategic planning, financial management, human resources, advocacy, and leadership development. These capacity-building initiatives are tailored to the unique needs and challenges faced by women-led organizations operating in Afghanistan.
            Recognizing the financial constraints faced by women-led organizations, the program provides vital support by allocating 15000.00 USD to each organization. This funding is specifically designated for operational costs, allowing organizations to sustain their activities and effectively implement programs that support women in Afghanistan. The financial support provided by UN-Women is aimed at strengthening the organizational infrastructure of women-led organizations, enabling them to reach a wider audience and make a greater impact.

        </Paragraph>
    </div>

    )
}

export default NewsDetails;