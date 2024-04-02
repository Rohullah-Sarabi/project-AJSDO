import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
    const data = await request.json();
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD
        }
    });

    try {
        const mail = await transporter.sendMail({
            from:`"${data.name}" <${process.env.SMTP_EMAIL}>`,
            to: process.env.SMTP_EMAIL,
            replyTo: data.email,
            subject: data.subject,
            html: `
            <div className="m-5 p-5 flex justify-center items-center">
                <p className="text-lg font-semibold">Name: ${data.name} </p>
                <p>Email: ${data.email} </p>
                <p className="text-lg font-normal">${data.message} </p>
            </div>
            `
        })
        return NextResponse.json({ message: "Success: email was sent", status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: error.message ,status:400})
    }
}