/* eslint-disable no-nested-ternary */

"use client";

import { useClerk, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import React from "react";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/utilities/theme-switcher";
import { ButtonLink } from "../ui/button-link";

const LogOutButton = () => {
  const router = useRouter();
  const { signOut } = useClerk();
  const t = useTranslations("DashboardLayout");

  return (
    <div className="shrink-0">
      <Button
        size="sm"
        variant="secondary"
        onClick={() => signOut(() => router.push("/"))}
      >
        {t("sign_out")}
      </Button>
    </div>
  );
};

const Navbar: React.FC = () => {
  const t = useTranslations("Navbar");
  const { isSignedIn, isLoaded } = useUser();

  return (
    <nav className="shadow-md" suppressHydrationWarning>
      <div className="mx-4 flex h-16 items-center justify-between">
        <div className="flex">
          <div className="shrink-0">
            <ButtonLink
              variant="link"
              className="inline-flex items-center text-xl font-bold text-alt hover:scale-105"
              href="/"
            >
              {t("app_name")}
            </ButtonLink>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {!isLoaded ? null : isSignedIn ? (
            <LogOutButton />
          ) : (
            <>
              <ButtonLink variant="outline" href="/sign-in" size="sm">
                Sign In
              </ButtonLink>
              <ButtonLink variant="link" href="/sign-up" size="sm">
                Sign up
              </ButtonLink>
            </>
          )}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
