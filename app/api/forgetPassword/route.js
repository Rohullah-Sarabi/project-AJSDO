import dbConnect from "@/backend/config/dbConnect";
import user from "@/backend/models/user";
import { NextResponse } from "next/server";
import crypto from "crypto"
import bcrypt from "bcryptjs"
import nodemailer from "nodemailer";


export async function POST(req, res) {
    const { email } = await req.json();

    dbConnect();
    const existingUser = await user.findOne({ email });
  
    if (!existingUser) {
      return new NextResponse({ message: "Email doesn't exist.", status: 400 });
    }
  
    const resetToken = crypto.randomBytes(20).toString("hex");
    const passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    const passwordResetExpires = Date.now() + 3600000;
  
    existingUser.resetToken = passwordResetToken;
    existingUser.resetTokenExpiry = passwordResetExpires;
    const resetUrl = `${process.env.API_URL}/reset-password/${resetToken}`;
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD
      }
    });
  
    const mailOptions = {
      from: `<${process.env.SMTP_EMAIL}>`,
      to: email,
      subject: 'Reset password',
      text: `Reset Password by Clicking on the following URL: ${resetUrl}`
    };
  
    transporter.sendMail(mailOptions, async (error) => {
      if (error) {
        existingUser.resetToken = undefined;
        existingUser.resetTokenExpiry = undefined;
        await existingUser.save();
  
        return NextResponse.json({ message: "Failed sending email. Please try again.", status: 400 });
      }
  
      try {
        await existingUser.save();
        return NextResponse.json({ message: "Email has been sent for resetting the password.", status: 200 });
      } catch (error) {
        return NextResponse.json({ error, status: 500 });
      }
    });
  
    // Add a default response in case the transporter.sendMail callback is not executed
    return NextResponse.json({ message: "Email sending process initiated.", status: 200 });
  }





// change user password
export async function PUT(req, res) {
    const data = await req.json();

    try {
        dbConnect();
        const existUser = await user.findOne({ email: data.email }).select("+password")
        if (existUser._id) {
            const passwordMatch = await bcrypt.compare(data.currentPassword, existUser.password)
            if (passwordMatch) {
                existUser.password = data.newPassword;
                await existUser.save();
                return NextResponse.json({ response: "password change successfully!", status: 200 })
            } else {
                return NextResponse.json({ response: "current password does not match with origin password!", status: 400 })
            }
        } else {
            return NextResponse.json({ response: "There is not register any user with this email!", status: 400 })
        }
    } catch (error) {
        return NextResponse.json({ response: error.message, status: 400 })
    }
}