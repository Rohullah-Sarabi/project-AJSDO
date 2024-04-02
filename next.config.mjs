
const withNextintl = createNextIntlPlugin();
/**
 *  @type {import('next').NextConfig} 
*/


const nextConfig = {
    env: {
        // DB_URL: "mongodb://127.0.0.1:27017/AJSDO",
        DB_URL:"mongodb+srv://rohullah:a7TnzBGJ48egow7f@cluster0.qlrcvq0.mongodb.net/AJSDO",
        API_URL: "http://localhost:3000",
        // COMPLETE_IMAGE_LINK address to move images there
        COMPLETE_IMAGE_LINK:`C:/Users/Sarabi/Desktop/projects/afghanistan-justic-and-sustainable-development-organization/public/images`,
        // DELETE_Image_link address to remove  image 
        DELETE_IMAGE_LINK:`C:/Users/Sarabi/Desktop/projects/afghanistan-justic-and-sustainable-development-organization/public`,
        // address to store in database when host it must be added in images.domains inder this code to be loadable.
        IMAGE_FILE: "/images",
        NEXTAUTH_URL:"http:localhost:3000",
        NEXTAUTH_SECRET: "AJSDO",
        SMTP_PASSWORD: "ruzz finy jrit wvzm",
        SMTP_EMAIL: "ajsdo.ngo@gmail.com"
    },
    images: {
        domains:["E:/AJASDO/public/images/"]
    }
};

import createNextIntlPlugin from "next-intl/plugin";
export default withNextintl({ ...nextConfig });
