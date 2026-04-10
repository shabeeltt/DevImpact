"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "../components/language-provider";
import { ThemeProvider } from "../components/theme-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
        <TooltipProvider>
          {children}
        </TooltipProvider>
  );
}
