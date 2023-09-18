import * as React from "react";

import { Main } from "@/app/(public)/(landing-page)/_layout/main";
import { Header } from "@/app/(public)/(landing-page)/_layout/header";
import { Footer } from "@/app/(public)/(landing-page)/_layout/footer";

export default function GuestLayout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </React.Fragment>
  );
}
