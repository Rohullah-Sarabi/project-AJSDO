import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
    const data = await request.json();
    console.log(data)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD
        }
    });

    try {
        const mail = await transporter.sendMail({
            from: process.env.SMTP_EMAIL,
            to: process.env.SMTP_EMAIL,
            replyTo: data.email,
            subject: data.subject,
            html: `
            <p>Name: ${data.name} </p>
            <p>Email: ${data.email} </p>
            <p>${data.message} </p>
            `
        })
        console.log("mail:", mail)
        return NextResponse.json({ message: "Success: email was sent", status: 200 })
    } catch (error) {
        NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
    }
}