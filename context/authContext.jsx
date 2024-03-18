"use client"

import axios from "axios";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation"
import { useState } from "react";
import { createContext } from "react"

const AuthContext = createContext();

export const AuthProvider =({children})=>{
    const [user,setUser] = useState(null)
    const [error,setError] = useState(null)
    const locale = useLocale()

    const router = useRouter();

    const registerUser = async ({name,email,password})=>{
        try {
            const {data} = await axios.post(`${process.env.API_URL}/api/auth/register`,{
                name,email,password
            })

            if(data?.user){
                router.push(`/${locale}/dashboard`)
            }
        } catch (error) {
            setError(error?.response?.data?.message)
        }
    }

    const clearErrors = ()=>{
        setError(null)
    }

    return(
        <AuthContext.Provider value={{user,error,setUser,registerUser,clearErrors}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext