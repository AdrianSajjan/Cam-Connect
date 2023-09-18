import * as React from "react";
import { Metadata } from "next";

import { Main } from "@/app/(public)/(join-meet)/join/_layout/main";
import { Header } from "@/app/(public)/(join-meet)/join/_layout/header";

export const metadata: Metadata = {
  title: "Join Meet",
  description: "Cam Connect is a comprehensive video conferincing platform.",
};

export default function MeetLayout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <Header />
      <Main>{children}</Main>
    </React.Fragment>
  );
}
