import * as React from "react";

import { JoinAsUserForm } from "@/app/(public)/(join-meet)/join/_components/user-form";
import { JoinAsGuestForm } from "@/app/(public)/(join-meet)/join/_components/guest-form";

export default function Meet() {
  const isAuthenticated = false;

  const description = isAuthenticated
    ? "Enter the meeting code and join the conference"
    : "Pick an username, enter the meeting code in below and join as guest";

  return (
    <React.Fragment>
      <h1 className="text-2xl font-medium">Join a video conference</h1>
      <p className="text-sm text-muted-foreground mt-2 max-w-lg text-center">{description}</p>
      {isAuthenticated ? <JoinAsUserForm /> : <JoinAsGuestForm />}
    </React.Fragment>
  );
}
