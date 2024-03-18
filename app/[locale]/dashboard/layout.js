import Footer from "@/components/footer";
import { NavbarDashboard } from "@/components/sidebar";


export default function DashboardLayout({ children }) {
    return (
        <>
            <NavbarDashboard />
            {children}
            <Footer />
        </>
    )
}