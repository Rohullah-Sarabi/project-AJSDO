"use client"
import { Paragraph } from "@/components/ParagraphContainer/PContainer";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import Loading from "@/app/[locale]/loading";
import axios from "axios";
import { toast } from "react-toastify";

function ResetPassword({ params }) {

    const router = useRouter()
    const [password, setPassword] = useState("")
    const [Retypepassword, setRetypePasswod] = useState("")
    const [error, setError] = useState("")
    const [verified, setVerified] = useState(false)
    const [user, setUser] = useState(null)
    const { data: session, status: sessionStatus } = useSession()

    useEffect(() => {
        const verifyToken = async () => {
            try {
                const { data } = await axios.post(`${process.env.API_URL}/api/verify-token`, { token: params.token })
                if (data.status == 400) {
                    setError(data.message)
                    setVerified(false)
                }
                if (data.status == 200) {
                    setError("")
                    setVerified(true)
                    const userData = await data.user
                    setUser(userData)
                }
            } catch (error) {
                setError(error.message)
            }
        }
        verifyToken();
    }, [params.token])
    useEffect(() => {
        if (sessionStatus === "authenticated") {
            router.replace("/")
        }
    }, [sessionStatus, router])


    const submitHandler = async (e) => {
        e.preventDefault()

        if(password!==Retypepassword){
            toast.error("The entered password does not match with each other!")
            return;
        }else{

            try {
                const {data} = await axios.post(`${process.env.API_URL}/api/reset-password`,{password,email:user.email})
                console.log(data)
                if(data.status==400){
                    toast.error(data.message)
                }        
                if(data.status==200){
                    toast.success(data.message)
                    router.push(`${process.env.API_URL}/login`)
                }
            } catch (error) {
                toast.error(error.message)
            }
        }

    }
    if (sessionStatus === "loading"||!verified) {
        return <Loading />
    }
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto w-20 "
                    src={"/assets/logo.png"}
                    alt="AJSDO logo"
                />
                <Paragraph style="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Reset Password
                </Paragraph>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={submitHandler}>
                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                            New Password
                        </label>
                        <div className="mt-2">
                            <input
                                name="password"
                                type="password"
                                placeholder="Enter your new password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                            Retype Password
                        </label>
                        <div className="mt-2">
                            <input
                                name="retypepassword"
                                type="password"
                                placeholder="Enter your new password"
                                value={Retypepassword}
                                onChange={(e) => setRetypePasswod(e.target.value)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <div className="w-full justify-center text-red-500 text-base">
                            {error && <span>{error}</span>}
                        </div>
                    </div>
                    <div>
                        <button
                            disabled={error.length > 0}
                            type="submit"
                            className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ${error.length>0?" cursor-not-allowed":"hover:bg-indigo-500"}  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                        >
                            Reset Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword;