import { useTranslations } from "next-intl";
import LikeButton from '../../../components/like-button';

export default function CommunityPage() {
  const t = useTranslations("Second");

  return (
    <>
      <header className="flex flex-col gap-12 my-12 mx-auto mb-20 w-[90%] max-w-[75rem] text-[#ddd6cb] text-xl text-center">
        <h1> {t("title")} </h1>
        <p>{t("page_disc")}</p>
      </header>
      <LikeButton />

    </>
  );
}
