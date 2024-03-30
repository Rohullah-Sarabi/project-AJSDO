import { useState } from "react"
import { InputComponent } from "../inputComponent"
import { useForm } from "react-hook-form"
import { Paragraph } from "../ParagraphContainer/PContainer"
import { useSession } from "next-auth/react"
import { toast } from "react-toastify"
import axios from "axios"

export function PasswordChange() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
    } = useForm()
    const { data } = useSession()

    const submitHandler = async (info) => {
        info.email = data?.user?.email
        if (info.newPassword != info.reEnterNewPassword) {
            toast.error("new password do not match with re-enter password")
            return;
        }

        try {
            const { data } = await axios.put(`${process.env.API_URL}/api/forgetPassword`, info)
            if (data.status == 400) {
                toast.error(data.response)
            }
            if (data.status == 200) {
                toast.success(data.response)
                reset()
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center p-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Paragraph style="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Change Password
                </Paragraph>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                <form
                    onSubmit={handleSubmit(submitHandler)}
                    className="w-full space-y-3">
                    <div className={"w-full"}>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Password</label>
                        <input {...register("currentPassword", {
                            required: "current password is required."

                        })}
                            type='password'
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Enter current password"
                        />
                        {errors["currentPassword"] && <span className="text-red-500 text-sm">{errors["currentPassword"].message}</span>}

                    </div>
                    <div className={"w-full"}>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                        <input {...register("newPassword", {
                            required: "new password is required.",
                            pattern: {
                                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/,
                                message: "Invalid password. Your password must meet the following criteria:At least one uppercase letter,lowercase,digit, and special character."
                            }
                        })}
                            type='password'
                            placeholder="Enter new password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        {errors["newPassword"] && <span className="text-red-500 text-sm">{errors["newPassword"].message}</span>}

                    </div>
                    <div className={"w-full"}>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Re-enter New Password</label>
                        <input
                            type='password'
                            placeholder="Re-enter new password"
                            {...register("reEnterNewPassword", {
                                required: "this field is required.",
                                pattern: {

                                    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/,
                                    message: "Invalid password. Your password must meet the following criteria:At least one uppercase letter,lowercase,digit, and special character."
                                }
                            })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        {errors["reEnterNewPassword"] && <span className="text-red-500 text-sm">{errors["reEnterNewPassword"].message}</span>}

                    </div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-[#3066b2] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Change
                    </button>
                </form>
            </div>
        </div>
    )
}