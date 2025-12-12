"use client";

import { AppProgressProvider } from "@bprogress/next";
import { ReactNode } from "react";

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AppProgressProvider
      height="2px"
      color="var(--primary-500)"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </AppProgressProvider>
  );
};
