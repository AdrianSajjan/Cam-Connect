import Link from "next/link";

import { cn } from "@/lib/utils";
import { brand } from "@/config/fonts";
import { SignUpForm } from "@/app/(guest)/sign-up/_components/form";

export default function SignUp() {
  return (
    <div className="container max-w-xl pt-8 pb-6 min-h-screen flex flex-col items-stretch justify-between gap-8 relative">
      <span className={cn("text-xl", brand.className)}>CamConnect</span>
      <div>
        <h1 className="text-2xl font-medium">Join CamConnect</h1>
        <p className="text-sm text-muted-foreground mt-2">
          CamConnect is an innovative video conference product that revolutionizes virtual meetings.
        </p>
        <SignUpForm />
      </div>
      <div className="inline-flex text-sm space-x-1 mx-auto">
        <p className="text-foreground/80">Already have an account?</p>
        <Link className="underline font-semibold" href="/sign-in">
          Sign in
        </Link>
      </div>
    </div>
  );
}
