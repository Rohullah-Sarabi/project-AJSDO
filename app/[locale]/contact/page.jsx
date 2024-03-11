"use client"
import { Paragraph } from "@/components/ParagraphContainer/PContainer";
import Footer from "@/components/footer";
import { InputComponent, TextAreaValidation } from "@/components/inputComponent";
import Navbar from "@/components/layout/Navbar";
import { useLocale, useTranslations } from "next-intl";
import { FormProvider, useForm } from "react-hook-form";

function ContantPage() {
    const t = useTranslations("contact")
    const locale = useLocale()
    const methods = useForm()
    // handle submit
    const handleSubmit = async (data) => {
        console.log(data);
    }
    return (
        <>
            <Navbar />
            <div className="flex sm:flex-row flex-col h-fit sm:h-screen w-11/12 mx-auto pt-5">
                <div className="flex flex-col gap-1 sm:gap-3 w-full sm:w-1/2 mx-3 sm:mx-0">
                    <Paragraph style={"text-base sm:text-2xl font-bold capitalize"} content={t('contact')} />
                    <Paragraph style={"text-sm sm:text-lg font-normal justify-start"} content={t('message')} />
                </div>
                <FormProvider {...methods}>
                    <form
                        onSubmit={methods.handleSubmit(handleSubmit)}
                        className="w-full sm:w-1/2 p-5">
                        <div className="grid gap-6 mb-6 md:grid-cols-2">

                            <InputComponent label={t('name.label')} name={"firstName"}
                                role={{
                                    required: t("name.required"),
                                    pattern: {
                                        value: locale == "en" ? /^[A-Za-z]{3,}(?:\\s[A-Za-z]+)*$/ : /^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]{3,}(?:\s[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+)*$/,
                                        message: t("name.roleMessage"),
                                    }
                                }} divStyle={""} placeholder={t("name.placeholder")} type={"text"} />

                            <InputComponent label={t("lastName.label")} name={"lastName"}
                                role={{
                                    pattern: {
                                        value: locale == "en" ? /^[A-Za-z]{3,}(?:\s[A-Za-z]+)*$/ : /^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]{3,}(?:\s[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+)*$/,
                                        message: t("lastName.roleMessage")
                                    }
                                }}
                                divStyle={""} placeholder={t("lastName.placeholder")} type={"text"} />
                        </div>
                        <InputComponent label={t("email.label")} name={"email"}
                            role={{
                                required: t("email.required"),
                                pattern: {
                                    value: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
                                    message: t("email.roleMessage")
                                }
                            }}
                            divStyle={"mb-6"} placeholder={t("email.placeholder")} type={"email"} />
                        <TextAreaValidation rows={"8"} label={t("content.label")} role={{
                            required: t("content.required")
                        }} divStyle={"mb-6"} placeholder={t("content.placeholder")} name={"message"} />
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
                    </form>
                </FormProvider>
            </div>
            <Footer />
        </>
    )
}

export default ContantPage;