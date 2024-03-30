import { NextResponse } from "next/server";
import path from "path";
import { join } from "path";
import { writeFile } from "fs/promises";
import images from "@/backend/models/images";
import dbConnect from "@/backend/config/dbConnect";
import fs from "fs"



export async function POST(req, res) {
    try {
        const data = await req.formData();
        const imageFile = data.get("image");
        const result = {

            en: {
                slogan: data.get("en.slogan")
            },
            fa: {
                slogan: data.get("fa.slogan")
            },
            ps: {
                slogan: data.get("ps.slogan")
            },
            image: ""
        }

        const ext = path.extname(imageFile.name);
        const dateNow = Math.round(Date.now());
        const uniqueId = Math.random().toString(36).substring(2, 7);
        const fileName = `${dateNow}_${uniqueId}${ext.toLowerCase()}`;


        const bytes = await imageFile.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const newPath = join(process.env.COMPLETE_IMAGE_LINK, fileName);

        await writeFile(newPath, buffer);
        const mypath = `${process.env.IMAGE_FILE}/${fileName}`
        result.image = mypath

        const r = await images.create(result)
        if (r._id) {
            return NextResponse.json({ result: "Recorde submited successfully!", status: 200 })
        } else {
            return NextResponse.json({ result: "Try, again!", status: 400 })
        }
    } catch (error) {
        return NextResponse.json({ result: error.message, status: 400 })
    }

}

export async function GET(req, res) {
    try {
        dbConnect();
        const results = await images.find()
        return NextResponse.json({ images: results, status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message, status: 400 })
    }
}

export async function DELETE(req, res) {
    const { id } = await req.json()

    try {
        dbConnect();
        const result = await images.findOneAndDelete({ _id: id })
        fs.unlinkSync(`${process.env.DELETE_IMAGE_LINK}/${result.image}`)

        return NextResponse.json({ id })
    } catch (error) {
        return NextResponse.json({ error })

    }
}