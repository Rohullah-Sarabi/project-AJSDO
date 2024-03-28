"use client"
import { FileInput, TextAreaValidation } from "@/components/inputComponent";
import axios from "axios";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaMinusCircle, FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";


export default function ContextPage({ params }) {
    const { id } = params;
    const methods = useForm()
    const route = useRouter()
    const locale = useLocale()

    const [file, setFiles] = useState([])
    const [state, setState] = useState(null)

    const handleSubmit = async () => {
        const data = new FormData();
        data.set("_id", id)
        data.set("length", file.length)
        for (let x = 0; x < file.length; x++) {
            data.set(`file${x}`, file[x])
        }
        try {
            const newdata = await axios.post(`${process.env.API_URL}/api/program`, data)
            console.log(newdata.data)
            if(newdata.error){
                toast.error(newdata.error)
            }
            setState(newdata.data?.result)
        } catch (error) {
            toast.error(error.message)
        }

    }

    useEffect(() => {
        if (state?.modifiedCount) {
            route.push(`${process.env.API_URL}/${locale}/dashboard`)
        }
    }, [route, state])
    const [paragraphNumber, setParagraphNumber] = useState(1)

    const handleAddParagraph = () => {
        setParagraphNumber(paragraphNumber + 1);
    };
    const handleSubParagraph = () => {
        setParagraphNumber(paragraphNumber == 1 ? paragraphNumber : paragraphNumber - 1)
    };
    const handleChange = (e) => {
        const str = e.target.name
        const regex = /\[(.*?)\]/;
        const match = str.match(regex);
        const index = match ? match[1] : null;

        setFiles((prevFile) => {
            const updatedFile = [...prevFile];
            if (updatedFile[index] !== undefined) {
                // Value already exists, update it with new data
                updatedFile[index] = e.target.files?.[0];
            } else {
                // Value doesn't exist, add new value at the specified index
                updatedFile[index] = e.target.files?.[0];
            }
            return updatedFile;
        });

    }
    return (
        <div className="flex sm:flex-row flex-col h-fit sm:mix-h-screen w-11/12 mx-auto pt-5" dir='ltr'>
            <form
                action={handleSubmit}
                className="w-full">
                <>
                    <div className="flex flex-col gap-5 w-full shadow-sm mb-3">
                        {Array.from({ length: paragraphNumber }).map((_, index) => (
                            <div className="p-5" key={index}>
                                <div className={""}>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">Images</label>
                                    <input
                                        name={`images[${index}].url`}
                                        onChange={handleChange}
                                        className="block w-full text-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500" type="file" />
                                    <p className="mt-1 text-sm text-gray-500">PNG or JPG.</p>

                                </div>
                            </div>
                        ))}

                    </div>
                    <div className="flex justify-end gap-5">
                        <button type="button" className="rounded-lg p-3 text-xl shadow-md bg-blue-500" onClick={handleAddParagraph} title="Add more content">
                            <FaPlus className="text-white" />
                        </button>
                        <button type="button" className="rounded-lg p-3 text-xl shadow-md bg-blue-500" onClick={handleSubParagraph} title="Add more content">
                            <FaMinusCircle className="text-white" />
                        </button>
                    </div>
                </>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}