"use client";

import { useSearchParams } from "next/navigation";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { validateMeetCodeOrURLPattern } from "@/constants/patterns";
import { resolver } from "@/lib/form";
import { extractMeetingCode } from "@/lib/utils";
import { useRouter } from "@/hooks/use-router";

const schema = z.object({
  code: z
    .string()
    .nonempty({ message: "Meeting code is required" })
    .regex(validateMeetCodeOrURLPattern, { message: "Meeting code is invalid" }),
});

type Schema = z.infer<typeof schema>;

export function JoinAsUserForm() {
  const router = useRouter();
  const params = useSearchParams();

  const form = useForm<Schema>({
    resolver: resolver(schema),
    defaultValues: {
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
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Meeting Code or Link</FormLabel>
                <FormControl>
                  <Input type="code" placeholder="gfh-try-hgj" {...field} />
                </FormControl>
                <FormDescription>Provide your meeting code</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-5 space-y-5">
          <Button type="submit" className="w-full">
            Join Meet
          </Button>
        </div>
      </form>
    </Form>
  );
}
