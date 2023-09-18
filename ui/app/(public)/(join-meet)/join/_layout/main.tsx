import * as React from "react";

export function Main({ children }: { children: React.ReactNode }) {
  return <main className="pt-16 container min-h-screen flex flex-col items-center justify-center">{children}</main>;
}
