"use client";

import * as React from "react";
import { SendIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { createStyles } from "@/lib/utils";

import { Toolbar } from "@/app/(public)/(join-meet)/meet/[slug]/_components/toolbar";

export function Conference() {
  React.useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then((stream) => {
      const video = document.getElementById("me") as HTMLVideoElement;
      video.srcObject = stream;
      const track = stream.getAudioTracks().at(0);
    });
  }, []);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-8 flex h-screen overflow-hidden flex-col relative p-4 gap-4">
        <div className="rounded-md bg-red-200 flex-1"></div>
        <div className="grid grid-cols-4 gap-4">
          <div className="rounded-md bg-red-200 aspect-square"></div>
          <div className="rounded-md bg-red-200 aspect-square"></div>
          <div className="rounded-md bg-red-200 aspect-square"></div>
          <video id="me" className="rounded-md aspect-square object-cover" autoPlay muted></video>
        </div>
        <Toolbar />
      </div>
      <div className="col-span-4 flex flex-col border-l h-screen gap-8">
        <div className="flex flex-col overflow-hidden">
          <div className="h-14 flex items-center">
            <h4 className="text-lg font-semibold mx-6">Messages</h4>
          </div>
          <div>
            <ScrollArea style={styles.scrollArea}></ScrollArea>
            <div className="bg-gray-900 h-14 px-4 flex items-center gap-4">
              <input placeholder="Enter your message" className="bg-gray-900 outline-none flex-1 h-full" />
              <Button size="icon" variant="ghost">
                <SendIcon size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = createStyles({
  scrollArea: {
    height: "calc(100vh - 112px)",
  },
});
