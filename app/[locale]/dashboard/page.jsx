"use client"
import { EditeEvents } from "@/components/Events/events";
import { Paragraph } from "@/components/ParagraphContainer/PContainer";
import Register from "@/components/auth/register";
import Footer from "@/components/footer";
import LanguageForm from "@/components/posting/post";
import { Setting } from "@/components/setting";
import { Users } from "@/components/setting/users";
import { NavbarDashboard } from "@/components/sidebar";
import { useEffect, useState } from "react";

function DashboardPage() {
    const [menu, setMenu] = useState("events")
    
    const handleState = (value) => {
        setMenu(value)
    }
    return (
        <>
            <NavbarDashboard state={menu} changeState={handleState} />
            <section className="py-5 sm:py-7 bg-blue-100">
                <div className="container max-w-screen-xl mx-auto px-4 flex flex-row gap-3">
                    <Paragraph style={"text-bold text-normal sm:text-2xl"} content={"Dashboard"} />
                    <Paragraph style={"text-bold text-normal sm:text-2xl"} content={"/"} />
                    <Paragraph style={"text-bold text-normal sm:text-2xl capitalize"} content={menu} />
                </div>
            </section>
            <div className="">
                {
                    menu == "events" && <div className="py-5"><EditeEvents /></div>
                }
                {
                    menu == "register" && <Register />
                }
                {
                    menu == "postEvent" && <LanguageForm />
                }
                {
                    menu=="setting" && <Setting/>
                }
                {
                    menu=="users" && <Users/>
                }
            </div>
            <Footer />
        </>
    )
}

export default DashboardPage;