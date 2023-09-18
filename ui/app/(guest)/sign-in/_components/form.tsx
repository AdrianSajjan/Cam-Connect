"use client";

import Image from "next/image";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button, buttonVariants } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { resolver } from "@/lib/form";
import { cn } from "@/lib/utils";

const schema = z.object({
  email: z.string().nonempty({ message: "Please enter your email address" }).email({ message: "Please enter a valid email address" }),
  password: z.string().nonempty({ message: "Please enter your password" }),
  remember: z.boolean().optional(),
});

type Schema = z.infer<typeof schema>;

export function SignInForm() {
  const form = useForm<Schema>({
    resolver: resolver(schema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  function onSubmit(_: Schema) {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6">
        <div className="space-y-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>Provide a valid email address</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormDescription>Provide your password</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-5 space-y-3">
          <Button type="submit" className="w-full">
            Sign in
          </Button>
          <Button type="button" className="w-full space-x-2 font-semibold bg-white text-black hover:bg-white/80 hover:text-black">
            <Image src="/images/socials/google.png" alt="Google" height={20} width={20} quality={100} />
            <span>Sign in with Google</span>
          </Button>
        </div>
        <div className="flex items-center mt-4 justify-between text-sm">
          <FormField
            control={form.control}
            name="remember"
            render={({ field }) => (
              <FormItem className="flex flex-row space-y-0 space-x-2 items-center">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="font-normal">Remember for 30 days</FormLabel>
              </FormItem>
            )}
          />
          <Link href="/forgot-password" className={cn(buttonVariants({ variant: "link" }), "text-primary px-0 py-0 h-auto")}>
            Forgot password?
          </Link>
        </div>
      </form>
    </Form>
  );
}
