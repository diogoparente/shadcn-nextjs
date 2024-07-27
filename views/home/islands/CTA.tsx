import { useTranslations } from "next-intl";
import React from "react";

import { GetStarted } from "@/components/utilities/buttons/get-started";
import { formatTranslations } from "@/lib/utils";

const CTA: React.FC = () => {
  const t = useTranslations("Index.cta");
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-main">
          {formatTranslations.renderTextWithLineBreaks(t("title"))}
        </h2>
        <div className="mt-8 flex justify-center">
          <GetStarted />
        </div>
      </div>
    </section>
  );
};

export default CTA;
