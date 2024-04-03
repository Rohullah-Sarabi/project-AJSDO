import dbConnect from "@/backend/config/dbConnect";
import user from "@/backend/models/user";
import { NextResponse } from "next/server";


export async function GET(req,res){
    try {
        dbConnect();

        const applicants = await user.find();
        return NextResponse.json({user:applicants,status:200})
    } catch (error) {
        return NextResponse.json({error:error.message,status:400})
    }
}

export async function DELETE(req,res){
    const { id } = await req.json()
    console.log(id)

    try {
        dbConnect()
        const result = await user.findOneAndDelete({_id:id})
        return NextResponse.json({ id })
    } catch (error) {
        return NextResponse.json({error})
    }
}