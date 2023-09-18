"use client";

import Link from "next/link";

import { z } from "zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { brand } from "@/config/fonts";
import { resolver } from "@/lib/form";
import { cn } from "@/lib/utils";

const schema = z.object({
  email: z.string().nonempty({ message: "Please enter your email address" }).email({ message: "Please enter a valid email address" }),
});

type Schema = z.infer<typeof schema>;

export default function ForgotPassword() {
  const form = useForm<Schema>({
    resolver: resolver(schema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(_: Schema) {}

  return (
    <div className="container max-w-xl py-8 min-h-screen flex flex-col items-stretch justify-between relative">
      <span className={cn("text-xl", brand.className)}>CamConnect</span>
      <div>
        <h1 className="text-2xl font-medium">Forgot your password?</h1>
        <p className="text-sm text-muted-foreground mt-2">
          Recover it with just two simple clicks. Always use a strong password and change it often to keep your account secured.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6">
            <div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>Provide your registered email address</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-5">
              <Button type="submit" className="w-full">
                Send verification email
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <div className="inline-flex text-sm space-x-1 mx-auto">
        <p className="text-foreground/80">Already have your password?</p>
        <Link className="underline font-semibold" href="/sign-in">
          Sign in
        </Link>
      </div>
    </div>
  );
}
