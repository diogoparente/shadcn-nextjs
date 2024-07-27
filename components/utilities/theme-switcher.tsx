"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "../ui/icon";

export function ModeToggle() {
  const [rotate, setRotated] = useState(false);

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <Button
      variant="outline"
      size="icon"
      onMouseEnter={() => setRotated(true)}
      onMouseLeave={() => setRotated(false)}
      onClick={toggleTheme}
    >
      <div className={`${rotate && "rotate-12"}`}>
        <Icon size={24} icon={theme === "light" ? "coffee" : "beer"} />
        <span className="sr-only">Toggle theme</span>
      </div>
    </Button>
  );
}
