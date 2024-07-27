import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const renderTextWithLineBreaks = (text: string) => {
  return text.split("\n").map((line, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <span key={index}>
      {line}
      <br />
    </span>
  ));
};

export const formatTranslations = {
  renderTextWithLineBreaks,
};
