import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import {
  NavigationListItem,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuClassName,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { brand } from "@/config/fonts";

export function Header() {
  return (
    <header className="border-b border-b-gray-100/10 bg-background fixed top-0 left-0 w-full">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className={cn("text-2xl text-foreground-heading", brand.className)} aria-label="cam-connect">
          CamConnect
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                  <NavigationListItem href="/" title="Cam Connect">
                    Your Gateway to Seamless Video Communication. Join, chat, and collaborate effortlessly with friends, family, and
                    colleagues through our intuitive video calling platform.
                  </NavigationListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuClassName}>Benefits</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuClassName}>How it works?</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuClassName}>Pricing</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center space-x-4">
          <Link href="/sign-in" className={cn(buttonVariants({ variant: "link", size: "sm", className: "text-foreground-heading" }))}>
            Login
          </Link>
          <Link href="/" className={cn(buttonVariants({ variant: "primary", size: "sm", className: "px-4" }))}>
            See Demo
          </Link>
        </div>
      </div>
    </header>
  );
}
