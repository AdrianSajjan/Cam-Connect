import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cam Connect",
  description: "Cam Connect is a comprehensive video conferincing platform.",
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return children;
}
