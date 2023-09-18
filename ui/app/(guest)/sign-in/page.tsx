import Link from "next/link";

import { brand } from "@/config/fonts";
import { cn } from "@/lib/utils";
import { SignInForm } from "@/app/(guest)/sign-in/_components/form";

export default function SignIn() {
  return (
    <div className="container max-w-xl pt-8 pb-6 min-h-screen flex flex-col items-stretch gap-8 justify-between relative">
      <span className={cn("text-xl", brand.className)}>CamConnect</span>
      <div>
        <h1 className="text-2xl font-medium">Welcome back to CamConnect</h1>
        <p className="text-sm text-muted-foreground mt-2">
          CamConnect is an innovative video conference product that revolutionizes virtual meetings.
        </p>
        <SignInForm />
      </div>
      <div className="inline-flex text-sm space-x-1 mx-auto">
        <p className="text-foreground/80">Don't have an account?</p>
        <Link className="underline font-semibold" href="/sign-up">
          Sign up
        </Link>
      </div>
    </div>
  );
}
