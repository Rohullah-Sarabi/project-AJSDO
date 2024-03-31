import dbConnect from "@/backend/config/dbConnect";
import user from "@/backend/models/user";
import { NextResponse } from "next/server";


export async function POST(req, res) {
    try{
        dbConnect();
        const { name, email, password } = await req.json()
        const userInfo = await user.create({ name, email, password })
        return NextResponse.json({ user: userInfo })
    }catch(error){
        return NextResponse.json({error})
    }
}