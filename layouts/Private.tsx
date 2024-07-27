import Navbar from "@/components/utilities/navbar";
import type { PropsWithChildren } from "react";

const Private = ({ children }: PropsWithChildren) => (
  <>
    <Navbar />
    <div className="flex flex-1 flex-row">
      <div className="m-6 flex flex-1">{children}</div>
    </div>
  </>
);
export { Private };
