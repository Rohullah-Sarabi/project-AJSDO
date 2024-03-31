import dbConnect from "@/backend/config/dbConnect";
import user from "@/backend/models/user";
import crypto from "crypto"
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

export const POST = async (req, res) => {
    const { email, password } = await req.json();
    try {
        dbConnect();
        const existingUser = await user.findOne({ email })

        const hashedPassword = await bcrypt.hash(password, 10)

        existingUser.password = password
        existingUser.resetToken = undefined
        existingUser.resetTokenExpiry = undefined
        await existingUser.save()
        return NextResponse.json({ message: "user`s password updated successfully!.", status: 200 })

    } catch (error) {
        return NextResponse.json({ message: error.message, status: 400 })

    }
}