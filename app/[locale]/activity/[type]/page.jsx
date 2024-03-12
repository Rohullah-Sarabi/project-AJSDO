"use client"
import ActivityComponent from "@/components/Activity";
import Footer from "@/components/footer";
import Navbar from "@/components/layout/Navbar";
import { useRouter } from "next/navigation";

function Activity({ params }) {
    const { type } = params;
    const activities = ["health","social", "education", "agriculture", "globalWarming"]
    const router = useRouter();
    if (!activities.includes(type)) {
        router.replace("/en")
    }
    return (
        <>
            <Navbar />
            <ActivityComponent type={type} />
            <Footer />
        </>
    )

}

export default Activity;