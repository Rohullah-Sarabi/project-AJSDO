import {  useEffect, useState } from "react"
import { PasswordChange } from "../passwordChange"
import { SilderImages } from "../SilderImages"
import { ImageShow } from "./imageShow"

export function Setting() {
    const [state, setState] = useState("passwordChange")
    

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="inline-flex rounded-md shadow-sm m-1">
                <button type="button" onClick={() => setState("passwordChange")} className={`${state == "passwordChange" ? "text-blue-700" : "text-gray-900"} inline-flex items-center px-1 py-1 sm:px-4 sm:py-2 text-sm font-light sm:font-medium bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700`}>
                    Change password
                </button>
                <button type="button" onClick={() => setState("images")} className={`${state == "images" ? "text-blue-700" : "text-gray-900"} inline-flex items-center  px-1 py-1 sm:px-4 sm:py-2 text-sm font-light sm:font-medium bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700`}>
                    Images
                </button>
                <button type="button" onClick={() => setState("addImage")} className={`${state == "addImages" ? "text-blue-700" : "text-gray-900"} inline-flex items-center  px-1 py-1 sm:px-4 sm:py-2 text-sm font-light sm:font-medium bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700`}>
                    Add silder images
                </button>
            </div>
            <div className="w-full">
                {
                    state == "passwordChange" && <PasswordChange />
                }
                {
                    state == "addImage" && <SilderImages />
                }
                {
                    state == "images" && <ImageShow/>
                }

            </div>
        </div>
    )
}