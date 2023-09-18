import * as React from "react";

import { Button } from "@/components/ui/button";
import { brand } from "@/config/fonts";
import { cn } from "@/lib/utils";

export default function Landing() {
  return (
    <React.Fragment>
      <section id="hero" className="pt-20">
        <h1 className="text-center capitalize text-5xl font-semibold leading-[1.1]">
          Adding value
          <br />
          through video calls.
        </h1>
        <p className="text-center text-sm text-body leading-relaxed mt-4">
          No registration needed. To start chatting
          <br />
          with friends just send them the link and enjoy video call in browser.
        </p>
        <div className="flex items-center gap-4 justify-center mt-8">
          <Button>Get a Free Demo</Button>
          <Button variant="secondary">See Pricing</Button>
        </div>
        <img src="/images/landing/hero.webp" alt="product" className="w-full h-auto mt-20 rounded-xl" />
      </section>
      <section id="benefits" className="pt-20">
        <div className="flex text-primary text-xs justify-center">
          <span className="uppercase font-semibold mt-2">Why use</span>
          <span className={cn(brand.className, "ml-1.5 text-lg")}>CamConnect</span>
        </div>
        <h2 className="text-2xl font-semibold text-center mt-2">Easy, Simple and Affordable</h2>
        <p className="text-sm text-center mt-3 max-w-xl mx-auto">
          Our platform helps your business in managing expenses. These are some reasons why you should be using our platform for managing
          video conferences
        </p>
      </section>
      <section id="works" className="pt-20"></section>
    </React.Fragment>
  );
}
