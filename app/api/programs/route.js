import dbConnect from "@/backend/config/dbConnect";
import program from "@/backend/models/program";
import { NextResponse } from "next/server";



export async function POST(req, res) {
    const data = await req.json();
    try {
        dbConnect();
        const programResult = await program.create(data);
        return NextResponse.json({
            programResult
        })
    } catch (error) {
        return NextResponse.json({
            error
        })
    }
}
// get all programs
export async function GET(req,res){
    try {
        dbConnect();
        const programs = await program.find();
        const programsCount = await program.countDocuments()
        return NextResponse.json({programs,programsCount})
    } catch (error) {
    }
}

