import { useTranslations } from "next-intl";
import React from "react";

import { GetStarted } from "@/components/utilities/buttons/get-started";
import { formatTranslations } from "@/lib/utils";

const Hero: React.FC = () => {
  const t = useTranslations("Index");

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-24">
        <h1>{t("hero.title")}</h1>
        <p className="mx-auto mt-4 text-lg sm:mt-6 sm:text-xl">
          {formatTranslations.renderTextWithLineBreaks(t("hero.caption"))}
        </p>
        <div className="mt-8 flex justify-center">
          <GetStarted />
        </div>
      </div>
    </section>
  );
};

export default Hero;
