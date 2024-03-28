import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";



export function Modal({ state, changeState, name, data }) {
    const { register, handleSubmit } = useForm()

    const handle = async (updatedData) => {
        updatedData._id = data._id
        const { data: resultOfData } = await axios.put(`${process.env.API_URL}/api/update`, updatedData)
        if (resultOfData.result.acknowledged) {
            toast.success("Record updated successfully!")
            changeState()
        } else {
            toast.error("Record did not update, try again!")
        }
    }

    const getDefaultValue = (fieldName) => {
        const languageCode = fieldName.slice(0, 2);
        const field = fieldName.slice(3);
        return data[languageCode][field];
    };

    return (
        <div className={`${state ? "block" : "hidden"} overflow-y-auto overflow-x-hidden fixed flex top-20 right-0 left-0 z-50 justify-center items-center w-full sm:inset-0 h-[calc(100%-1rem)] max-h-full`}>
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow ">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Update
                        </h3>
                        <button type="button" onClick={() => changeState()} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center ">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* Modal body */}
                    <form className="p-4 md:p-5 flex flex-col justify-center items-center gap-2" onSubmit={handleSubmit(handle)}>

                        <div className="flex flex-col gap-4 w-full">
                            <div className={"w-full"}>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{name}</label>
                                <input {...register(`en.${name}`, { required: "Pro" })} defaultValue={getDefaultValue(`en.${name}`)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 w-full">
                            <div className={"w-full"} dir="rtl">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{name}</label>
                                <input {...register(`fa.${name}`, { required: "Pro" })} defaultValue={getDefaultValue(`fa.${name}`)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 w-full">
                            <div className={"w-full"} dir="rtl">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{name}</label>
                                <input {...register(`ps.${name}`, { required: "Pro" })} defaultValue={getDefaultValue(`ps.${name}`)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                            </div>
                        </div>

                        <button type="submit" className="text-white inline-flex text-center items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export function ModalImplementedBy({ state, changeState, name, data }) {
    const { register, handleSubmit } = useForm()

    const handle = async (updatedData) => {
        updatedData._id = data._id
        const { data: resultOfData } = await axios.post(`${process.env.API_URL}/api/update`, updatedData)
        if (resultOfData.result.acknowledged) {
            toast.success("Record updated successfully!")
            changeState()
        } else {
            toast.error("Record did not update, try again!")
        }
    }

    return (
        <div className={`${state ? "block" : "hidden"} overflow-y-auto overflow-x-hidden fixed flex top-0 right-0 left-0 z-50 justify-center items-center w-full sm:inset-0 h-[calc(100%-1rem)] max-h-full`}>
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow ">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Update
                        </h3>
                        <button type="button" onClick={() => changeState(!state)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center ">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* Modal body */}
                    <form className="p-4 md:p-5 flex flex-col justify-center items-center gap-2" onSubmit={handleSubmit(handle)}>

                        <div className="flex flex-col gap-4 w-full">
                            <div className={"w-full"}>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{name}</label>
                                <input {...register(`${name}`, { required: "Pro" })} defaultValue={data.projectImplemented} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                            </div>
                        </div>
                        <button type="submit" className="text-white inline-flex text-center items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}




export function ModalProjectState({ state, changeState, name, data }) {
    const { register, handleSubmit } = useForm()


    const handle = async (updatedData) => {
        updatedData._id = data._id
        const { data: resultOfData } = await axios.post(`${process.env.API_URL}/api/update`, updatedData)
        if (resultOfData.result.acknowledged) {
            toast.success("Record updated successfully!")
            changeState()
        } else {
            toast.error("Record did not update, try again!")
        }
    }

    return (
        <div className={`${state ? "block" : "hidden"} overflow-y-auto overflow-x-hidden fixed flex top-0 right-0 left-0 z-50 justify-center items-center w-full sm:inset-0 h-[calc(100%-1rem)] max-h-full`}>
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow ">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Update
                        </h3>
                        <button type="button" onClick={() => changeState(!state)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center ">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* Modal body */}
                    <form className="p-4 md:p-5 flex flex-col justify-center items-center gap-2" onSubmit={handleSubmit(handle)}>

                        <div className={"w-full"}>
                            <label className="block mb-2 text-sm font-medium text-gray-900">{name}</label>
                            <select {...register(name, { required: "program state is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">


                                <option value={data.projectState}>{data.projectState}</option>
                                <option value={"inprogress"}>inprogress</option>
                                <option value="onplan">onplan</option>
                                <option value="completed">completed</option>


                            </select>
                        </div>
                        <button type="submit" className="text-white inline-flex text-center items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

