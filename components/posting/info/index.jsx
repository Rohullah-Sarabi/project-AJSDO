import axios from "axios";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { BreifContent, FinalContent } from "../breifContent";

export function Info() {
    const methods = useForm()
    const [formData, setFormData] = useState({
        en: {
            name: "",
            projectOwner: "",
            location: "",
            projectType: "",
            ProjectDuration: "",
            ProjectBudget: "",
            ProjectStaff: "",
            ProjectBeneficiaries: "",
        },
        fa: {
            name: "",
            projectOwner: "",
            location: "",
            projectType: "",
            ProjectDuration: "",
            ProjectBudget: "",
            ProjectStaff: "",
            ProjectBeneficiaries: "",
        },
        ps: {
            name: "",
            projectOwner: "",
            location: "",
            projectType: "",
            ProjectDuration: "",
            ProjectBudget: "",
            ProjectStaff: "",
            ProjectBeneficiaries: "",
        },
        ProjectImplemented: "",
        projectState: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        const [lang, field] = name.split(".");

        setFormData((prevData) => ({
            ...prevData,
            [lang]: {
                ...prevData[lang],
                [field]: value,
            },
        }));
    }

    const handleFirstPartSubmit = (data) => {
        console.log("First Part Submit: ", data);
        // Update the form data with the first part fields
        setFormData((prevData) => ({
            ...prevData,
            en: {
                ...prevData.en,
                ...data.en,
            },
            fa: {
                ...prevData.fa,
                ...data.fa,
            },
            ps: {
                ...prevData.ps,
                ...data.ps,
            },
        }));
    };

    const handleSecondPartSubmit = async (data) => {
        console.log("Second Part Submit: ", data);
        // Update the form data with the second part fields
        setFormData((prevData) => ({
            ...prevData,
            ProjectImplemented: data.ProjectImplemented,
            projectState: data.projectState,
        }));
    }

        const handleSubmit = async (data) => {
            console.log("handleSubmit: ", data)
            console.log("handleSubmit:", formData);
            const info = await axios.post(`${process.env.API_URL}/api/programs`, { data })
            console.log("Post:", info)
            // Reset the form data
            setFormData({
                en: '',
                fa: '',
                ps: ''
            });
        };

        return (
            <div className="flex sm:flex-row flex-col h-fit sm:mix-h-screen w-11/12 mx-auto pt-5" dir='ltr'>
                <FormProvider {...methods}>
                    <form
                        onSubmit={methods.handleSubmit(handleSubmit)}
                        className="w-full">
                        <BreifContent />
                        <FinalContent />
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
                        >
                            Submit
                        </button>
                    </form>
                </FormProvider>
            </div>
        )
    }