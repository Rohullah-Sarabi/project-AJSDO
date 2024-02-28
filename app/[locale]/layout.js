import { Inter } from "next/font/google";
import "./globals.css";
import useTextDirection from "@/context/useTextDirection";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AJSDO",
  description: "Developed By",
};

export default async function RootLayout({ children,params:{locale}}) {
  const direction = useTextDirection(locale);

  let messages;
  // get translection data
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    console.log(error.message)
    notFound();
  }

  return (
    <html lang={locale} dir={direction}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        </body>
    </html>
  );
}
