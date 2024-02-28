import { notFound } from "next/navigation"
import {getRequestConfig} from "next-intl/server"



const locales = ['en','fa','ps']


export default getRequestConfig(async({locale})=>{
    // validate that the incoming 'locale' parameter is valid
    if(!locales.includes(locale)) notFound();
    
    return{
        messages:(await import(`@/messages/${locale}.json`)).default
    }
})