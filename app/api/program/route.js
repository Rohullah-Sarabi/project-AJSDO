import dbConnect from "@/backend/config/dbConnect";
import program from "@/backend/models/program";
import { NextResponse } from "next/server";


// get program by ID
export async function GET(req,res){
    try {
        dbConnect();
        const id = req.nextUrl.searchParams.get("id");
        const pro = await program.findById(id);
        return NextResponse.json({program:pro})
    } catch (error) {
        return NextResponse.json({error:error.message})
    }
}

