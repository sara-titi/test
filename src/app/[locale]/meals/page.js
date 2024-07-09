import classes from "./page.module.css";
import { useTranslations } from "next-intl";

export default function MealsPage() {
  const t = useTranslations("First");

  return (
    <>
      <header className="flex flex-col gap-12 my-12 mx-auto mb-20 w-[90%] max-w-[75rem] text-[#ddd6cb] text-xl text-center">
        <h1> {t("title")} </h1>
        <p>{t("page_disc")}</p>
      </header>
    </>
  );
}
