"use client";

import * as React from "react";
import { NProgressOptions, AppProgressBar } from "next-nprogress-bar";

const options: Partial<NProgressOptions> = { showSpinner: false };

export function RootProviders({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <AppProgressBar height="4px" color="hsl(var(--primary))" shallowRouting options={options} />
      {children}
    </React.Fragment>
  );
}
