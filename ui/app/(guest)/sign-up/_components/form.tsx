"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { resolver } from "@/lib/form";

const schema = z
  .object({
    name: z.string().nonempty({ message: "Full name is required" }),
    password: z.string().nonempty({ message: "Password is required" }),
    confirmPassword: z.string().nonempty({ message: "Confirm password is required" }),
    email: z.string().email({ message: "Please enter a valid email address" }).nonempty({ message: "Email address is required" }),
  })
  .refine((values) => values.confirmPassword === values.password, {
    message: "Password and confirm password does not match",
    path: ["confirmPassword"],
  });

type Schema = z.infer<typeof schema>;

export function SignUpForm() {
  const form = useForm<Schema>({
    resolver: resolver(schema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
    },
  });

  function onSubmit(_: Schema) {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6">
        <div className="space-y-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>Provide your full name</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormDescription>Re-enter your password</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-5">
          <Button type="submit" className="w-full">
            Sign up
          </Button>
        </div>
      </form>
    </Form>
  );
}
