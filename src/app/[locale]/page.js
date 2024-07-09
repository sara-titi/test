import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <>
      <header>
        <h1 className=" text-white font-bold ml-5">{t("title")}</h1>;
      </header>
    </>
  );
}
