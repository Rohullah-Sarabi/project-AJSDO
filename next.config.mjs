import createNextIntlPlugin from "next-intl/plugin";

const withNextintl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        // DB_URL:"mongodb://127.0.0.1:27017/AJSDO",
        DB_URL:"mongodb+srv://rohullah:a7TnzBGJ48egow7f@cluster0.qlrcvq0.mongodb.net/AJSDO",
        API_URL:"http://localhost:3000",
        NEXTAUTH_SECRET:"AJSDO"
    }
};

export default withNextintl(nextConfig);
