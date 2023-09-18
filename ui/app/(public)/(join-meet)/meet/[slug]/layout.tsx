import * as React from "react";
import { Metadata } from "next";

import { Main } from "@/app/(public)/(join-meet)/meet/[slug]/_layout/main";

export const metadata: Metadata = {
  title: "Join Meet",
  description: "Cam Connect is a comprehensive video conferincing platform.",
};

export default function MeetLayout({ children }: { children: React.ReactNode }) {
  return <Main>{children}</Main>;
}
