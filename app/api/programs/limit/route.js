import dbConnect from "@/backend/config/dbConnect";
import program from "@/backend/models/program";
import { NextResponse } from "next/server";

export async function GET(req,res){
    try {
        dbConnect();
        const programs = await program.find({post:true}).limit(6).sort({ createdAt: -1 });
        const programsCount = await program.countDocuments()
        return NextResponse.json({programs,programsCount})
    } catch (error) {
        return NextResponse.json({error})
    }
}