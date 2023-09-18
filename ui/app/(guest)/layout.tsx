import type { Metadata } from "next";

import { AuthenticationCarousel } from "@/app/(guest)/_components/carousel";

export const metadata: Metadata = {
  title: "Getting Started",
  description: "Sign in or Sign up to use our product",
};

export default function AuthenticationLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid grid-cols-11">
      <div className="col-span-6">{children}</div>
      <div className="col-span-5">
        <AuthenticationCarousel />
      </div>
    </main>
  );
}
