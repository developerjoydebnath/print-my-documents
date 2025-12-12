"use client";

import disableDevtool from "disable-devtool";
import React, { useEffect } from "react";
import { appConfig } from "../configs/app.config";
import { ProgressProvider } from "./ProgressProvider";

export const AppProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  useEffect(() => {
    if (
      appConfig.DISABLE_DEVTOOL === "true" ||
      appConfig.DISABLE_DEVTOOL === true
    ) {
      disableDevtool({
        url: "/devtool-disabled",
      });
    }
  }, []);

  return <ProgressProvider>{children}</ProgressProvider>;
};
