import { useTranslations } from "next-intl";
import React from "react";

import { Icon } from "@/components/ui/icon";

type TFeature = {
  name: string;
  icon: string;
  description: string;
};
const Features: React.FC = () => {
  const t = useTranslations("Index");

  const features = t.raw("features.cards") as TFeature[];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
      <div className="mt-2 mb-12 flex justify-center">
        <h2>{t("features.title")}</h2>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.name} className="flex flex-1">
            <div className="flex flex-1 flex-col items-stretch rounded-lg bg-secondary px-6 pb-8 pt-6">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center rounded-md">
                  <Icon icon={feature.icon} />
                </div>
                <h3 className="flex-1 text-xl font-medium tracking-tight">
                  {feature.name}
                </h3>
              </div>
              <p className="mt-5">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
