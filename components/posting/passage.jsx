"use client"
import { useState } from "react";
import { TextAreaValidation } from "../inputComponent";
import { FaMinusCircle, FaPlus } from "react-icons/fa";

export function Passage() {
    const [paragraphNumber, setParagraphNumber] = useState(1)

    const handleAddParagraph = () => {
        setParagraphNumber(paragraphNumber + 1);
    };
    const handleSubParagraph = () => {
        setParagraphNumber(paragraphNumber == 1 ? paragraphNumber : paragraphNumber - 1)
    };

    return (
        <>
            <div className="flex flex-col gap-5 w-full shadow-sm mb-3">
                {Array.from({ length: paragraphNumber }).map((_, index) => (
                    <div className="p-5" key={index}>
                        <TextAreaValidation
                            key={`en${index}`}
                            rows={"10"}
                            label={"paragrap"}
                            role={{
                                required: "paragraph is required",
                            }}
                            divStyle={"mb-6"}
                            placeholder={"Please Enter the Content"}
                            name={`en.summary[${index}].content`}
                        />
                        <TextAreaValidation
                            key={`fa${index}`}
                            rows={"10"}
                            label={"متن"}
                            role={{
                                required: " متن الزامی است",
                            }}
                            divStyle={"mb-6 text-end"}
                            dir={"rtl"}
                            placeholder={"لطفا متن را وارد نمایید"}
                            name={`fa.summary[${index}].content`}
                        />
                        <TextAreaValidation
                            key={`ps${index}`}
                            rows={"10"}
                            label={"متن"}
                            role={{
                                required: "د متن اړین دی",
                            }}
                            divStyle={"mb-6 text-end"}
                            dir={"rtl"}
                            placeholder={"مهرباني وکړئ د متن ولیکئ."}
                            name={`ps.summary[${index}].content`}
                        />
                    </div>
                ))}

            </div>
            <div className="flex justify-end gap-5">
                <button className="rounded-lg p-3 text-xl shadow-md bg-blue-500" onClick={handleAddParagraph} title="Add more content">
                    <FaPlus className="text-white" />
                </button>
                <button className="rounded-lg p-3 text-xl shadow-md bg-blue-500" onClick={handleSubParagraph} title="Add more content">
                    <FaMinusCircle className="text-white" />
                </button>
            </div>
        </>
    )
}