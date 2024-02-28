import createNextIntlPlugin from "next-intl/plugin";

const withNextintl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextintl(nextConfig);
