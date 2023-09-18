"use client";

import Link from "next/link";

import { PopoverArrow } from "@radix-ui/react-popover";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { cn } from "@/lib/utils";
import { brand } from "@/config/fonts";
import { buttonVariants } from "@/components/ui/button";

export function Header() {
  const isAuthenticated = false;

  return (
    <header className="border-b border-b-gray-100/10 bg-background fixed z-10 top-0 left-0 w-full">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className={cn("text-2xl text-foreground-heading", brand.className)} aria-label="cam-connect">
          CamConnect
        </Link>
        {!isAuthenticated ? (
          <Link href="/sign-in" className={cn(buttonVariants({ variant: "primary", size: "sm", className: "w-24" }))}>
            Login
          </Link>
        ) : (
          <Popover>
            <PopoverTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-auto">
              <div>Your Profile</div>
              <PopoverArrow className="fill-foreground" />
            </PopoverContent>
          </Popover>
        )}
      </div>
    </header>
  );
}
