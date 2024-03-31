import { DropDown, InputComponent } from "../inputComponent";

export function BreifContent() {
    return (
        <div className='flex flex-col gap-5 p-5 w-full'>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
                <InputComponent label={"project Name"} name={"en.name"}
                    role={{
                        required: "project name is required"
                    }}
                    divStyle={"w-full"} placeholder={"Please enter project name."} type={"text"}
                />
                <InputComponent label={"نام پروژه"} name={"fa.name"}
                    role={{
                        required: "نام پروژه الزامی است"
                    }}
                    divStyle={"w-full text-end"} dir="rtl" placeholder={"لطفا نام پروژه را درج نماید."} type={"text"}
                />
                <InputComponent label={"د پروژې نوم"} name={"ps.name"}
                    role={{
                        required: "د پروژې نوم اړین دی",
                    }} divStyle={"w-full text-end"} dir={"rtl"} placeholder={"مهرباني وکړئ د پروژې نوم ولیکئ."} type={"text"}
                />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
                <InputComponent label={"project owner"} name={"en.projectOwner"}
                    role={{
                        required: "project owner is required"
                    }} divStyle={"w-full"} placeholder={"Please enter project owner"} type={"text"}
                />
                <InputComponent label={"تمویل کننده پروژه"} name={"fa.projectOwner"}
                    role={{
                        required: " نام تمویل کننده پروژه الزامی می باشد",

                    }} divStyle={"w-full text-end"} dir={"rtl"} placeholder={"لطفا نام تمویل کننده پروژه را درج نماید"} type={"text"}
                />
                <InputComponent label={"د پروژې سپانسر نوم"} name={"ps.projectOwner"}
                    role={{
                        required: "د پروژې سپانسر نوم اړین دی",
                    }} divStyle={"w-full text-end"} dir={"rtl"} placeholder={"مهرباني وکړئ د پروژې سپانسر نوم دننه کړئ"} type={"text"}
                />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
                <InputComponent label={"location"} name={"en.location"}
                    role={{
                        required: "project location is required",
                    }} divStyle={"w-full"} placeholder={"please enter the location of project implemented."} type={"text"}
                />
                <InputComponent label={"موقعیت"} name={"fa.location"}
                    role={{
                        required: "د پروژې موقعیت ته اړتیا ده",
                    }} divStyle={"w-full text-end"} dir={"rtl"} placeholder={"لطفا محل اجرای پروژه را وارد کنید"} type={"text"}
                />
                <InputComponent label={"ځای"} name={"ps.location"}
                    role={{
                        required: "محل پروژه مورد نیاز است",
                    }} divStyle={"w-full text-end"} dir={"rtl"} placeholder={"مهرباني وکړئ د پروژې ځای ولیکئ"} type={"text"}
                />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
                <InputComponent label={"project Duration"} name={"en.projectDuration"}
                    role={{
                        required: "project Duration is required",
                    }} divStyle={"w-full"} placeholder={"please enter project Duration"} type={"text"}
                />
                <InputComponent label={"مدت زمان پروژه"} name={"fa.projectDuration"}
                    role={{
                        required: "مدت زمان پروژه مورد نیاز است",
                    }} divStyle={"w-full text-end"} dir={"rtl"} placeholder={"لطفا مدت زمان پروژه را وارد کنید"} type={"text"}
                />
                <InputComponent label={"د پروژې موده"} name={"ps.projectDuration"}
                    role={{
                        required: "د پروژې موده اړینه ده",
                    }} divStyle={"w-full text-end"} dir={"rtl"} placeholder={"مهرباني وکړئ د پروژې موده ولیکئ"} type={"text"}
                />
            </div>
        </div>
    )
}

export function FinalContent() {
    return (
        <div className='flex flex-col gap-5 p-5 w-full'>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
                <DropDown label={"project catgory"} name={"en.projectType"}
                    role={{
                        required: "project Catgory is required",
                    }}
                    divStyle={"w-full"}
                    values={["Education",
                        "Healthcare",
                        "Social Services",
                        "Agriculture",
                        "Global Warming"]}
                />
                <DropDown label={"نوعیت پروژه"} name={"fa.projectType"}
                    role={{
                        required: "نوعیت پروژه الزامی است",
                    }}
                    divStyle={"w-full"}

                    values={[
                        "تحصیلات",
                        "بهداشت و درمان",
                        "خدمات اجتماعی",
                        "کشاورزی",
                        "گرمایش جهانی",
                    ]}
                />
                <DropDown label={"د پروژې نوع"} name={"ps.projectType"}
                    role={{
                        required: "نوعیت پروژه الزامی است",
                    }}
                    divStyle={"w-full"}

                    values={[
                        "زده کړه",
                        "روغتیای",
                        "ټولنیز خدمتونه",
                        "کرنه",
                        "نړیواله تودوخه"
                    ]}
                />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
                <InputComponent label={"Project Budget"} name={"en.projectBudget"}
                    role={{
                        required: "project owner is required",
                    }} divStyle={"w-full"} placeholder={"Please enter project owner"} type={"text"}
                />
                <InputComponent label={"بودجه پروژه"} name={"fa.projectBudget"}
                    role={{
                        required: " بودجه پروژه الزامی می باشد",

                    }} divStyle={"w-full text-end"} dir={"rtl"} placeholder={"لطفا نام بودجه پروژه را درج نماید"} type={"text"}
                />
                <InputComponent label={"د پروژې بودجه"} name={"ps.projectBudget"}
                    role={{
                        required: "د پروژې بودجه اړین دی",
                    }} divStyle={"w-full text-end"} dir={"rtl"} placeholder={"مهرباني وکړئ د پروژې سپانسر نوم دننه کړئ"} type={"text"}
                />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
                <InputComponent label={"Project Staff"} name={"en.projectStaff"}
                    role={{
                        required: "Project Staffs are required",
                    }} divStyle={"w-full"} placeholder={"please enter the Project Staffs."} type={"text"}
                />
                <InputComponent label={"کارمند های پروژه"} name={"fa.projectStaff"}
                    role={{
                        required: "د پروژې موقعیت ته اړتیا ده",
                    }} divStyle={"w-full text-end"} dir={"rtl"} placeholder={"لطفا محل اجرای پروژه را وارد کنید"} type={"text"}
                />
                <InputComponent label={"ځای"} name={"ps.projectStaff"}
                    role={{
                        required: "محل پروژه مورد نیاز است",
                    }} divStyle={"w-full text-end"} dir={"rtl"} placeholder={"مهرباني وکړئ د پروژې ځای ولیکئ"} type={"text"}
                />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
                <InputComponent label={"Project Beneficiaries"} name={"en.projectBeneficiaries"}
                    role={{
                        required: "project Duration is required",
                    }} divStyle={"w-full"} placeholder={"please enter project Duration"} type={"text"}
                />
                <InputComponent label={"ذینفعان پروژه"} name={"fa.projectBeneficiaries"}
                    role={{
                        required: "مدت زمان پروژه مورد نیاز است",
                    }} divStyle={"w-full text-end"} dir={"rtl"} placeholder={"لطفا مدت زمان پروژه را وارد کنید"} type={"text"}
                />
                <InputComponent label={"د پروژې ګټه اخیستونکي"} name={"ps.projectBeneficiaries"}
                    role={{
                        required: "د پروژې موده اړینه ده",
                    }} divStyle={"w-full text-end"} dir={"rtl"} placeholder={"مهرباني وکړئ د پروژې موده ولیکئ"} type={"text"}
                />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
                <InputComponent label={"ProjectImplemented"} name={"projectImplemented"}
                    role={{
                        required: "project Duration is required",
                    }} divStyle={"w-full"} placeholder={"please enter project Duration"} type={"text"}
                />
                <DropDown label={"project State"} name={"projectState"}
                    role={{
                        required: "project State is required",
                    }}
                    divStyle={"w-full"}
                    values={[
                        "inprogress",
                        "onplan",
                        "completed"
                    ]}
                />
            </div>
        </div>
    )
}