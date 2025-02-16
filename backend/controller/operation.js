import axios from "axios";

export const getPrograms = async () => {
    try {
        const { data } = await axios.get(`${process.env.API_URL}/api/programs`)
        return data.programs;
    } catch (error) {
        return error.message;
    }
}

export const getProgram = async(id)=>{
    try{
        const {data} = await axios.get(`${process.env.API_URL}/api/program?id=${id}`)
        return data.program
    }catch(error){
        return error.message
    }
}


export const getLimitPrograms = async ()=>{
    try {
        const { data } = await axios.get(`${process.env.API_URL}/api/programs/limit`)
        return data.programs;
    } catch (error) {
        return error.message;
    }
}


export const getImages = async ()=>{
    try {
        const {data} = await axios.get(`${process.env.API_URL}/api/silderImages`)
        return data.images;
    } catch (error) {
        return error.message;
    }
}