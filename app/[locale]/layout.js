import "./globals.css";
import useTextDirection from "@/context/useTextDirection";
import { NextIntlClientProvider } from "next-intl";
import localFont from 'next/font/local'
import GlobalProvider from "./globalContext";


const roboto = localFont({src:"/Roboto-Regular.ttf"})

const IranSans = localFont({src:"/FontsFree-Net-ir_sans.ttf"})

export const metadata = {
  title: "AJSDO",
  description: "Developed By Rohullah Sarabi & Asadullah Ahamdi",
};

export default async function RootLayout({ children,params:{locale}}) {
  const direction = useTextDirection(locale);

  let messages;
  // get translection data
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale} dir={direction}>
      <body className={`${direction=="rtl"? IranSans.className:roboto.className} bg-[#fbfff1]`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <GlobalProvider>
            {children}
          </GlobalProvider>
        </NextIntlClientProvider>
        </body>
    </html>
  );
}
