"use client"
import { Paragraph } from "@/components/ParagraphContainer/PContainer";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import Loading from "@/app/[locale]/loading";
import axios from "axios";
import { toast } from "react-toastify";
import Image from "next/image";

function ForGotPassword() {
    const [email, setEmail] = useState("")
    const router = useRouter()
    // const locale = useLocale()
    const [error,setError] = useState("")

    const {data:session,status:sessionStatus} = useSession()

    useEffect(()=>{
        if(sessionStatus==="authenticated"){
            router.replace("/")
        }
    },[sessionStatus,router])

    const isValidEmail = (email)=>{
        const emailRegex = /^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{2,}$/i;
        return emailRegex.test(email)
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        
        const email = e.target[0].value;
        console.log(email)

        if(!isValidEmail(email)){
            setError("email is invalid")
            return;
        }
        try {
            const {data} = await axios.post(`${process.env.API_URL}/api/forgetPassword`,{email})
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
    if(sessionStatus==="loading"){
        return <Loading/>
    }
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <Image
                    className="mx-auto w-20 "
                    src={"/assets/logo.png"}
                    alt="AJSDO logo"
                    width={50}
                    height={50}
                />
                <Paragraph style="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Forget Password
                </Paragraph>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={submitHandler}>
                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForGotPassword;