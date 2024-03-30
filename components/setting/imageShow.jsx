"use client"
import { useLocale } from "next-intl"
import { Paragraph } from "../ParagraphContainer/PContainer"
import { useEffect, useState } from "react"
import { getImages } from "@/backend/controller/operation"
import { PopUpّImage } from "../modal/popUp"

export function ImageShow() {
    const locale = useLocale()
    const [data, setData] = useState([])
    const [state,setState] = useState(false)

    useEffect(() => {
        const getdata = async () => {
            const data = await getImages();
            setData(data)
        }
        getdata()
    }, [data])

    const handleState = ()=>{
        setState(!setState)
    }
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center p-3 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Paragraph style="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Images
                </Paragraph>
            </div>
            <div className="mt-3 sm:mx-auto flex flex-col gap-3 w-full">
                {
                    data?.lenght == 0 && <div>Empty</div>


                }
                {
                    data?.map((item, index) => (
                        <div key={index} className={`bg-cover bg-left bg-no-repeat min-h-52 sm:min-h-96 w-auto relative`}
                            style={{ backgroundImage: `url(${item.image})` }}
                        >
                            <div className="absolute bottom-0 px-2 sm:px-4 py-1 sm:py-3 flex justify-start gap-5 bg-gray-500/50 w-full">
                                <Paragraph style={"text-white font-medium sm:font-semibold text-md sm:text-3xl"}>
                                    {item[locale].slogan}
                                </Paragraph>
                                <button className="bg-blue-700 p-1 rounded-sm text-white text-lg font-bold" onClick={() => setState(!state)}>Delete</button>
                                {
                                    state && <PopUpّImage state={state} data={item} changeState={handleState} />
                                }
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}