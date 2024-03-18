"use client"
import { AuthProvider } from "@/context/authContext";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";





export default function GlobalProvider({ children }) {
    return (
        <>
            <ToastContainer position="bottom-right" />
            <AuthProvider>
                <SessionProvider>
                    {children}
                </SessionProvider>
            </AuthProvider>
        </>
    )
}