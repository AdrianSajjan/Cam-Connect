"use client";

import * as React from "react";

import { validateMeetCodePattern } from "@/constants/patterns";

import { MeetError } from "@/app/(public)/(join-meet)/meet/[slug]/_views/error";
import { Conference } from "@/app/(public)/(join-meet)/meet/[slug]/_views/conference";
import { ConferenceProvider } from "@/app/(public)/(join-meet)/meet/[slug]/_context/conference";

interface Status {
  type: "uninitialized" | "loading" | "error" | "initialized";
  message: string;
}

export default function VideoConference({ params }: { params: { slug: string } }) {
  const [status, setStatus] = React.useState<Status>({ type: "uninitialized", message: "" });

  React.useEffect(() => {
    if (!validateMeetCodePattern.test(params.slug)) {
      return setStatus({
        type: "error",
        message: "The provided meeting code is not valid. Please provide a valid meeting code to continue.",
      });
    }
    setStatus({
      type: "initialized",
      message: "Your video conference is initialized",
    });
  }, [params.slug]);

  switch (status.type) {
    case "uninitialized":
      return null;
    case "loading":
      return null;
    case "error":
      return <MeetError description={status.message} />;
    case "initialized":
      const values = { code: params.slug };
      return (
        <ConferenceProvider value={values}>
          <Conference />
        </ConferenceProvider>
      );
  }
}
