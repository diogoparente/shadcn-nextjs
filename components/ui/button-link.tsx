import { type VariantProps } from "class-variance-authority";
import type { LinkProps } from "next/link";
import Link from "next/link";
import type { PropsWithChildren } from "react";

import { Button, buttonVariants } from "./button";
import { cn } from "@/lib/utils";

interface ButtonLinkProps
  extends LinkProps,
    VariantProps<typeof buttonVariants> {
  disabled?: boolean;
  className?: string;
}

const ButtonLink = ({
  variant = "link",
  size = "default",
  className,
  children,
  disabled,
  ...props
}: PropsWithChildren<ButtonLinkProps>) => {
  return (
    <Link
      className={cn(
        buttonVariants({ variant, size, className }),
        disabled && "pointer-events-none opacity-50"
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
ButtonLink.displayName = "ButtonLink";

interface ButtonNavLinkProps
  extends LinkProps,
    VariantProps<typeof buttonVariants> {
  className?: string;
}

const ButtonNavLink = ({
  variant = "link",
  size = "default",
  className,
  children,
  ...props
}: PropsWithChildren<ButtonNavLinkProps>) => {
  return (
    <Link
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </Link>
  );
};
ButtonNavLink.displayName = "ButtonNavLink";

interface ButtonLinkIconProps
  extends LinkProps,
    VariantProps<typeof buttonVariants> {}

function ButtonChildLink({ ...props }: ButtonLinkIconProps) {
  return (
    <Button asChild>
      <Link {...props}>Back to Home</Link>
    </Button>
  );
}

export { ButtonChildLink, ButtonLink, ButtonNavLink };
