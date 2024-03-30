import dbConnect from "@/backend/config/dbConnect";
import user from "@/backend/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"

async function auth(req, res, locale) {
    return await NextAuth(req, res, {
        session: { strategy: "jwt" }, providers: [
            CredentialsProvider({
                async authorize(credentials, req) {
                    dbConnect();

                    const { email, password } = credentials

                    const userCheck = await user.findOne({ email }).select("+password")

                    if (!userCheck) {
                        throw new Error("Invalid Email or password")
                    }

                    const isPasswordMatched = await bcrypt.compare(password, userCheck.password)

                    if (!isPasswordMatched) {
                        throw new Error("Invalid Password")
                    }

                    return userCheck;
                }
            })
        ],
        callbacks: {
            jwt: async ({ token, user }) => {
                user && (token.user = user)
                return token;
            },
            session: async ({ session, token }) => {
                session.user = token.user;
                delete session?.user?.password;
                return session;
            }
        },
        pages: {
            signIn: `/${locale}/login`
        },
        secret: process.env.NEXTAUTH_SECRET
    })
}

export { auth as GET, auth as POST };
