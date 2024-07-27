import { ButtonLink } from "@/components/ui/button-link";
import { useTranslations } from "next-intl";
import React from "react";

const GetStarted = () => {
  const t = useTranslations("Shared");

  return (
    <ButtonLink size="lg" href="/sign-up">
      {t("get_started")}
    </ButtonLink>
  );
};

export { GetStarted };
