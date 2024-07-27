import Navbar from "@/components/utilities/navbar";
import type { PropsWithChildren } from "react";

const Public = ({ children }: PropsWithChildren) => (
  <>
    <Navbar />
    <div id="public">{children}</div>
  </>
);
export { Public };
