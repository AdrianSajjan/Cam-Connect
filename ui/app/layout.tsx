import "@/styles/globals.css";

import type { Metadata } from "next";

import { inter } from "@/config/fonts";
import { RootProviders } from "@/components/providers/root";

export const metadata: Metadata = {
  title: "Cam Connect",
  description:
    "Cam Connect: Your Gateway to Seamless Video Communication. Join, chat, and collaborate effortlessly with friends, family, and colleagues through our intuitive video calling platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
