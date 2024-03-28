import dbConnect from "@/backend/config/dbConnect";
import program from "@/backend/models/program";
import { NextResponse } from "next/server";
import path from "path";
import { join } from "path";
import { writeFile } from "fs/promises";


// get program by ID
export async function GET(req, res) {
  try {
    dbConnect();
    const id = req.nextUrl.searchParams.get("id");
    const pro = await program.findById(id);
    return NextResponse.json({ program: pro })
  } catch (error) {
    return NextResponse.json({ error: error.message })
  }
}


// post program summary and images;

export async function POST(req, res) {
  try {
    const data = await req.formData();
    const Id = data.get("_id");
    const length = data.get("length")
    const allFiles = []
    for (let x = 0; x < length; x++) {
      const d = data.get(`file${x}`)
      allFiles.push(d)
    }


    const final = await Promise.all(
      allFiles.map(async (item) => {
        const ext = path.extname(item.name);
        const dateNow = Math.round(Date.now());
        const uniqueId = Math.random().toString(36).substring(2, 7);
        const fileName = `${dateNow}_${uniqueId}${ext.toLowerCase()}`;

        const bytes = await item.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const newPath = join(process.env.COMPLETE_IMAGE_LINK, fileName);
        const mypath = `${process.env.IMAGE_FILE}/${fileName}`

        await writeFile(newPath, buffer);

        return { url: mypath };
      })
    );
    dbConnect()
    const r = await program.updateOne({ _id: Id }, { images: final, post: true });
    return NextResponse.json({ result: r })
  } catch (error) {
    return NextResponse.json({ error: error.message })
  }
}
