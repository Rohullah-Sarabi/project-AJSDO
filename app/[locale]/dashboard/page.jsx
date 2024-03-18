import { Paragraph } from "@/components/ParagraphContainer/PContainer";

function DashboardPage(){
    return(
        <>
            <section className="py-5 sm:py-7 bg-blue-100">
                <div className="container max-w-screen-xl mx-auto px-4">
                    <Paragraph style={"text-bold text-2xl"} content={"Dashboard"}/>
                </div>
            </section>
            <div className="flex flex-row">
            </div>
        </>
    )
}

export default DashboardPage;