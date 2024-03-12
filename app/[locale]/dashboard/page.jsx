const { default: SidebarComponent } = require("@/components/sidebar");

function DashboardPage(){
    return(
        <div className="flex flex-col sm:flex-row ">
            
                <SidebarComponent/>
            <div className="w-full bg-green-500"></div>
        </div>
    )
}

export default DashboardPage;