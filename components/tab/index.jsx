"use client"
import { Tabs } from 'flowbite-react';
import { GiDuration } from "react-icons/gi"
import { GrOrganization } from "react-icons/gr"
import { MdDashboard } from 'react-icons/md';
import { FaMoneyBill } from "react-icons/fa"
import { IoIosPeople } from "react-icons/io"

function TabComponent({ data }) {
    return (

        <Tabs aria-label="Default tabs" style="default">

            <Tabs.Item title="Project owner" icon={MdDashboard}>
                {data.projectOwner}
            </Tabs.Item>
            <Tabs.Item title="Project duration" icon={GiDuration}>
                {data.ProjectDuration}
            </Tabs.Item>
            <Tabs.Item title="implemented" icon={GrOrganization}>
                {data.ProjectImplemented}
            </Tabs.Item>
            <Tabs.Item title="Project budget" icon={FaMoneyBill}>
                {data.ProjectBudget}
            </Tabs.Item>
            <Tabs.Item title="Project beneficiaries" icon={IoIosPeople}>
                {data.ProjectBeneficiaries}
            </Tabs.Item>
        </Tabs>

    );
}

export default TabComponent;