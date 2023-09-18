import * as React from "react";

export function MeetError({ description }: { description: string }) {
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="max-w-md">
        <img src="/images/common/server-down.svg" className="w-full h-auto" />
        <h1 className="text-center text-2xl text-muted-foreground font-semibold mt-12">Unable to join the conference.</h1>
        <p className="text-center mt-2 text-destructive">{description}</p>
      </div>
    </div>
  );
}
