import mongoose from "mongoose";


const imageSchema = new mongoose.Schema({
    fa: {
        slogan: String,

    },
    en: {
        slogan: String,
    },
    ps: {
        slogan: String,

    },
    image: String
    ,
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.models.Images || mongoose.model("Images", imageSchema)