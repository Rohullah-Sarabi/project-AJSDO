"use client"

import axios from "axios";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation"
import { useState } from "react";
import { createContext } from "react"
import { toast } from "react-toastify";

const AuthContext = createContext();
export const AuthProvider =({children})=>{
    const [user,setUser] = useState(null)
    const [error,setError] = useState(null)
  

    const registerUser = async ({name,email,password})=>{
        try {
            const {data} = await axios.post(`${process.env.API_URL}/api/auth/register`,{
                name,email,password
            })
            if(data?.user){
                return {data:data?.user,status:200}
            }
            if(data.error){
                return {data:"Email address is duplicate!",status:400}
            }
        } catch (error) {
            return {data:error.message,status:400}
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