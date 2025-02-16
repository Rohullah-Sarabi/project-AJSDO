import bcrypt from "bcryptjs"
import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your name"]
    },
    email:{
        type:String,
        required:[true,"Please enter your email"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"Please enter your password"],
        minLength:[8,"Your password must be longer than 8 characters"],
        required:true
    },
    resetToken:{
        type:String,
        required:false
    },
    resetTokenExpiry:{
        type:Date,
        required:false
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password,10)
})

export default mongoose.models.User|| mongoose.model("User",userSchema)