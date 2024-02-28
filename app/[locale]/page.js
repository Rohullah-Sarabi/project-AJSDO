import Navbar from "@/components/layout/Navbar";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("navbar");
  return (
    <>
    <Navbar/>
    </>
  );
}
