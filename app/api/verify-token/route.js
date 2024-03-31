import dbConnect from "@/backend/config/dbConnect";
import user from "@/backend/models/user";
import crypto from "crypto"
import { NextResponse } from "next/server";


export const POST = async(req,res)=>{
    const {token} = await req.json();
     
    dbConnect();

    const hashedToken = crypto.createHash("sha256").update(token).digest("hex")

    const applicant = await user.findOne({
        resetToken:hashedToken,
        resetTokenExpiry:{$gt:Date.now()}
    })

    if(!applicant){
        return NextResponse.json({message:"Invaild token or expired.",status:400})
    }

    return NextResponse.json({user:applicant,status:200})
}