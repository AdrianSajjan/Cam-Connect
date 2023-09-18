"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";

import { z } from "zod";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { resolver } from "@/lib/form";
import { useRouter } from "@/hooks/use-router";
import { extractMeetingCode } from "@/lib/utils";
import { validateMeetCodeOrURLPattern } from "@/constants/patterns";

const schema = z.object({
  username: z.string().nonempty({ message: "Username is required" }).min(5, { message: "Username should be atleast 5 characters long" }),
  code: z
    .string()
    .nonempty({ message: "Meeting code is required" })
    .regex(validateMeetCodeOrURLPattern, { message: "Meeting code is invalid" }),
});

type Schema = z.infer<typeof schema>;

export function JoinAsGuestForm() {
  const router = useRouter();
  const params = useSearchParams();

  const form = useForm<Schema>({
    resolver: resolver(schema),
    defaultValues: {
      username: "",
      code: params.get("code") ?? "",
    },
  });

  function onSubmit(values: Schema) {
    const code = extractMeetingCode(values.code);
    if (!code) return form.setError("code", { message: "Meeting code is invalid" }, { shouldFocus: true });
    router.push(`/meet/${code}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 w-full max-w-lg">
        <div className="space-y-3">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="John Smith" />
                </FormControl>
                <FormDescription>Pick any username</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Meeting Code or Link</FormLabel>
                <FormControl>
                  <Input type="code" {...field} placeholder="gfh-try-hgj" />
                </FormControl>
                <FormDescription>Provide your meeting code</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-5 space-y-5">
          <Button type="submit" className="w-full">
            Continue as guest
          </Button>
          <div className="flex items-center gap-4">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground">or</span>
            <Separator className="flex-1" />
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button type="button" className="w-full" variant="secondary">
              Sign in
            </Button>
            <Button type="button" className="w-full space-x-2 font-semibold bg-white text-black hover:bg-white/80 hover:text-black">
              <Image src="/images/socials/google.png" alt="Google" height={20} width={20} quality={100} />
              <span>Sign in with Google</span>
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
