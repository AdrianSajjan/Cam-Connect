import * as React from "react";

export function Main({ children }: { children: React.ReactNode }) {
  return <main className="container pt-16">{children}</main>;
}
