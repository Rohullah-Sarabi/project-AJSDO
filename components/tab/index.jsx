"use client"
import { Tabs } from 'flowbite-react';
import { GiDuration } from "react-icons/gi"
import { GrOrganization } from "react-icons/gr"
import { MdDashboard } from 'react-icons/md';
import { FaMoneyBill } from "react-icons/fa"
import { IoIosPeople } from "react-icons/io"
import { FaMapLocationDot } from 'react-icons/fa6';
import {BiSolidCategoryAlt} from "react-icons/bi"
import {RiTeamFill} from "react-icons/ri"
import {TbStatusChange} from "react-icons/tb"
import { useTranslations } from 'next-intl';
import local from 'next/font/local';

function TabComponent({ data }) {
    const t = useTranslations("program")
    return (

        <Tabs aria-label="Default tabs" style="default" className='text-sm sm:text-lg text-[#3c3744]'>

            <Tabs.Item title={t("projectOwner")} icon={MdDashboard}>
                {data.projectOwner}
            </Tabs.Item>
            <Tabs.Item title={t("projectDuation")} icon={GiDuration}>
                {data.ProjectDuration}
            </Tabs.Item>
            <Tabs.Item title={t("implemented")} icon={GrOrganization}>
                {data.ProjectImplemented}
            </Tabs.Item>
            <Tabs.Item title={t("projectBudget")} icon={FaMoneyBill}>
                {data.ProjectBudget}
            </Tabs.Item>
            <Tabs.Item title={t("projectBeneficiaries")} icon={IoIosPeople}>
                {data.ProjectBeneficiaries}
            </Tabs.Item>
        </Tabs>

    );
}

export function Tab({data,status,locale}){
    const t = useTranslations("program")
    let projectStatus ;
    if(locale=="en"){
        projectStatus = status.projectState
    }else if(locale=="fa"){
        if(status.projectState=="completed"){
            projectStatus="تکمیل شده"
        }else if(status.projectState=="inprogress"){
            projectStatus="جریان دارد"
        }else if(status.projectState=="onplan"){
            projectStatus="پلان شده"
        }
    }else{
        if(status.projectState=="completed"){
            projectStatus="بشپړ شوی"
        }else if(status.projectState=="inprogress"){
            projectStatus="دوران لری"
        }else if(status.projectState=="onplan"){
            projectStatus="پلان شوی"
        }
    }
    return(
        <Tabs aria-label="Default tabs" style="default" className='text-sm sm:text-lg text-[#3c3744]'>

        <Tabs.Item title={t("location")} icon={FaMapLocationDot}>
            {data.location}
        </Tabs.Item>
        <Tabs.Item title={t("projectType")} icon={BiSolidCategoryAlt}>
            {data.projectType}
        </Tabs.Item>
        <Tabs.Item title={t("staffs")} icon={RiTeamFill}>
            {data.ProjectStaff}
        </Tabs.Item>
        <Tabs.Item title={t("status")} icon={TbStatusChange}>
            {projectStatus}
        </Tabs.Item>
    </Tabs>
    )
}

export default TabComponent;