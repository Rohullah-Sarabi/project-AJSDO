"use client"
import { useForm } from "react-hook-form"
import { Paragraph } from "../ParagraphContainer/PContainer"
import { toast } from "react-toastify"
import axios from "axios"

export function SilderImages() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const submit = async (data) => {
        const info = new FormData();
        info.append("en.slogan", data["en"].slogan);
        info.append("fa.slogan", data["fa"].slogan);
        info.append("ps.slogan", data["ps"].slogan);
        info.append("image", data["image"][0]);

        try {
            const newdata = await axios.post(`${process.env.API_URL}/api/silderImages`, info)
            console.log(newdata.data)
            if (newdata.data.status == 400) {
                toast.error(newdata.data.result)
            }
            else if (newdata.data.status == 200) {
                toast.success(newdata.data.result)
                reset()
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center p-3 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Paragraph style="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Add Image
                </Paragraph>
            </div>
            <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit(submit)} className="w-full space-y-3">
                    <div className={"w-full"}>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">slogan</label>
                        <input {...register("en.slogan", { required: "slogan is required." })}
                            type='text'
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Enter slogan"
                        />
                        {errors["en.slogan"] && <span className="text-red-500 text-sm">{errors["en.slogan"].message}</span>}
                    </div>
                    <div className={"w-full"} dir="rtl">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">شعار</label>
                        <input {...register("fa.slogan", { required: "slogan is required." })}
                            type='text'
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="شعار را درج نماید"
                        />
                        {errors["fa.slogan"] && <span className="text-red-500 text-sm">{errors["fa.slogan"].message}</span>}
                    </div>
                    <div className={"w-full"} dir="rtl">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">شعار</label>
                        <input {...register("ps.slogan", { required: "slogan is required." })}
                            type='text'
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="شعار اضافه کړئ"
                        />
                        {errors["ps.slogan"] && <span className="text-red-500 text-sm">{errors["ps.slogan"].message}</span>}
                    </div>
                    <div className={"w-full"}>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Image</label>
                        <input
                            {...register("image", { required: "Image is required!" })}
                            className="block w-full text-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500" type="file" />
                        <p className="mt-1 text-sm text-gray-500">PNG or JPG.</p>
                        {errors.image && <span className="text-red-500 text-sm">{errors["image"].message}</span>}
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
                    >Submit
                    </button>
                </form>
            </div>
        </div>
    )
}