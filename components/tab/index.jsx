"use client"
import { Tabs } from 'flowbite-react';
import { GiDuration } from "react-icons/gi"
import { GrOrganization } from "react-icons/gr"
import { MdDashboard } from 'react-icons/md';
import { FaMoneyBill } from "react-icons/fa"
import { IoIosPeople } from "react-icons/io"
import { FaMapLocationDot } from 'react-icons/fa6';
import { BiSolidCategoryAlt } from "react-icons/bi"
import { RiTeamFill } from "react-icons/ri"
import { TbStatusChange } from "react-icons/tb"
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Modal, ModalImplementedBy, ModalProjectState } from '../modal';

function TabComponent({ data, info }) {
    const t = useTranslations("program")
    return (

        <Tabs aria-label="Default tabs" style="default" className='text-sm sm:text-lg text-[#3c3744]'>

            <Tabs.Item title={t("projectOwner")} icon={MdDashboard}>
                {data.projectOwner}
            </Tabs.Item>
            <Tabs.Item title={t("projectDuation")} icon={GiDuration}>
                {data.projectDuration}
            </Tabs.Item>
            <Tabs.Item title={t("implemented")} icon={GrOrganization}>
                {info.projectImplemented}
            </Tabs.Item>
            <Tabs.Item title={t("projectBudget")} icon={FaMoneyBill}>
                {data.projectBudget}
            </Tabs.Item>
            <Tabs.Item title={t("projectBeneficiaries")} icon={IoIosPeople}>
                {data.projectBeneficiaries}
            </Tabs.Item>
        </Tabs>

    );
}
export function TabComponentUpate({ data, info, Refresh }) {
    const t = useTranslations("program")
    const [option, setOption] = useState(null)
    const [state, setState] = useState(false)

    const handleState = () => {
        Refresh();
        setState(!state)
    }
    return (

        <Tabs aria-label="Default tabs" style="default" className='text-sm sm:text-lg text-[#3c3744]'>

            <Tabs.Item title={t("projectOwner")} icon={MdDashboard} className='flex flex-row gap-2'>
                {data.projectOwner}
                <button className='text-blue-700 text-xs sm:text-lg' onClick={() => { setOption("owner"); setState(!state) }}>update</button>
                {
                    option == "owner" && <Modal state={state} changeState={handleState} name={"projectOwner"} data={info} />
                }
            </Tabs.Item>
            <Tabs.Item title={t("projectDuation")} icon={GiDuration} className='flex flex-row gap-2'>
                {data.projectDuration}
                <button className='text-blue-700 text-xs sm:text-lg mx-3 ' onClick={() => { setOption("projectDuation"); setState(!state) }}>update</button>
                {
                    option == "projectDuation" && <Modal state={state} changeState={handleState} name={"projectDuration"} data={info} />
                }

            </Tabs.Item>
            <Tabs.Item title={t("implemented")} icon={GrOrganization} className='flex flex-row gap-2' >
                {info.projectImplemented}
                <button className='text-blue-700 text-xs sm:text-lg mx-3'
                    onClick={() => { setOption("implemented"); setState(!state) }}
                >update</button>
                {
                    option == "implemented" && <ModalImplementedBy state={state} changeState={handleState} name={"projectImplemented"} data={info} />
                }

            </Tabs.Item>
            <Tabs.Item title={t("projectBudget")} icon={FaMoneyBill} className='flex flex-row gap-2' >
                {data.projectBudget}
                <button className='text-blue-700 text-xs sm:text-lg mx-3' onClick={() => { setOption("projectBudget"); setState(!state) }}>update</button>
                {
                    option == "projectBudget" && <Modal state={state} changeState={handleState} name={"projectBudget"} data={info} />
                }

            </Tabs.Item>
            <Tabs.Item title={t("projectBeneficiaries")} icon={IoIosPeople} className='flex flex-row gap-2' >
                {data.projectBeneficiaries}
                <button className='text-blue-700 text-xs sm:text-lg mx-3' onClick={() => { setOption("projectBeneficiaries"); setState(!state) }}>update</button>

                {
                    option == "projectBeneficiaries" && <Modal state={state} changeState={handleState} name={"projectBeneficiaries"} data={info} />
                }
            </Tabs.Item>
        </Tabs>

    );
}

export function Tab({ data, status, locale }) {
    const t = useTranslations("program")
    let projectStatus;
    if (locale == "en") {
        projectStatus = status.projectState
    } else if (locale == "fa") {
        if (status.projectState == "completed") {
            projectStatus = "تکمیل شده"
        } else if (status.projectState == "inprogress") {
            projectStatus = "جریان دارد"
        } else if (status.projectState == "onplan") {
            projectStatus = "پلان شده"
        }
    } else {
        if (status.projectState == "completed") {
            projectStatus = "بشپړ شوی"
        } else if (status.projectState == "inprogress") {
            projectStatus = "دوران لری"
        } else if (status.projectState == "onplan") {
            projectStatus = "پلان شوی"
        }
    }
    return (
        <Tabs aria-label="Default tabs" style="default" className='text-sm sm:text-lg text-[#3c3744]'>

            <Tabs.Item title={t("location")} icon={FaMapLocationDot}>
                {data.location}
            </Tabs.Item>
            <Tabs.Item title={t("projectType")} icon={BiSolidCategoryAlt}>
                {data.projectType}
            </Tabs.Item>
            <Tabs.Item title={t("staffs")} icon={RiTeamFill}>
                {data.projectStaff}
            </Tabs.Item>
            <Tabs.Item title={t("status")} icon={TbStatusChange}>
                {projectStatus}
            </Tabs.Item>
        </Tabs>
    )
}

export function Tabpdate({ data, status, Refresh }) {
    const t = useTranslations("program")
    const [option, setOption] = useState(null)
    const [state, setState] = useState(false)

    const handleState = () => {
        Refresh()
        setState(!state);
    }

    return (
        <Tabs aria-label="Default tabs" style="default" className='text-sm sm:text-lg text-[#3c3744]'>

            <Tabs.Item title={t("location")} icon={FaMapLocationDot} className='flex flex-row gap-2'>
                {data.location}
                <button className='text-blue-700 text-xs sm:text-lg mx-3' onClick={() => { setOption("location"); setState(!state) }}>update</button>

                {
                    option == "location" && <Modal state={state} changeState={handleState} name={"location"} data={status} />
                }
            </Tabs.Item>
            <Tabs.Item title={t("projectType")} icon={BiSolidCategoryAlt} className='flex flex-row gap-2'>
                {data.projectType}
            </Tabs.Item>
            <Tabs.Item title={t("staffs")} icon={RiTeamFill} className='flex flex-row gap-2'>
                {data.projectStaff}
                <button className='text-blue-700 text-xs sm:text-lg mx-3' onClick={() => { setOption("projectStaff"); setState(!state) }}>update</button>

                {
                    option == "projectStaff" && <Modal state={state} changeState={handleState} name={"projectStaff"} data={status} />
                }
            </Tabs.Item>
            <Tabs.Item title={t("status")} icon={TbStatusChange} className='flex flex-row gap-2'>
                {status.projectState}
                <button className='text-blue-700 text-xs sm:text-lg mx-3' onClick={() => { setOption("projectState"); setState(!state) }}>update</button>
                {
                    option == "projectState" && <ModalProjectState state={state} changeState={handleState} name={"projectState"} data={status} />
                }
            </Tabs.Item>
        </Tabs>
    )
}
export default TabComponent;