"use client"
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { GiDuration } from "react-icons/gi"
import { GrOrganization } from "react-icons/gr"
import { MdDashboard } from 'react-icons/md';
import { FaMoneyBill } from "react-icons/fa"
import { IoIosPeople } from "react-icons/io"
function TabComponent() {
    return (
        <Tabs aria-label="Default tabs" style="default">

            <Tabs.Item title="Project owner" icon={MdDashboard}>
                Afghanistan Justice and Sustainable Development Organization (AJSDO)
            </Tabs.Item>
            <Tabs.Item title="Project duration" icon={GiDuration}>
                6 months from (October 2023-March 2024)
            </Tabs.Item>
            <Tabs.Item title="implemented" icon={GrOrganization}>
                Afghanistan Justice and Sustainable Development Organization (AJSDO)
            </Tabs.Item>
            <Tabs.Item title="Project budget" icon={FaMoneyBill}>
                The project is implementing voluntary and only AJSDO provides administrative costs.
            </Tabs.Item>
            <Tabs.Item title="Project beneficiaries" icon={IoIosPeople}>
                Total number of direct beneficiaries: 350 women
            </Tabs.Item>
        </Tabs>
    );
}

export default TabComponent;