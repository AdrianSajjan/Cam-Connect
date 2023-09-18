"use client";

import { motion, useAnimationControls } from "framer-motion";
import { CopyIcon, MicOffIcon, MoreHorizontal, PhoneIcon, VideoOffIcon, VideotapeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useConferenceState } from "@/app/(public)/(join-meet)/meet/[slug]/_context/conference";

const variants = {
  hide: {
    y: 64,
  },
  show: {
    y: 0,
  },
};

export function Toolbar() {
  const conference = useConferenceState();
  const controls = useAnimationControls();

  function onMouseEnter() {
    controls.start({ ...variants.show, transition: { duration: 0.25 } });
  }

  function onMouseLeave() {
    controls.start({ ...variants.hide, transition: { duration: 0.25 } });
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 h-24 flex items-end justify-center" {...{ onMouseEnter, onMouseLeave }}>
      <motion.div
        animate={controls}
        initial={variants.hide}
        className="flex items-center justify-between w-full max-w-screen-md rounded-t-lg h-20 px-6 pt-1.5 bg-background/70 backdrop-blur-lg"
      >
        <div className="flex items-center rounded-md border px-4 h-10 bg-gray-900">
          <span className="border-r border-r-gray-700 text-sm pr-4 mr-4">{conference.code}</span>
          <button>
            <CopyIcon size={18} />
          </button>
        </div>
        <div className="flex items-center gap-4 mx-12">
          <Button size="icon" variant="outline" className="bg-gray-900">
            <VideoOffIcon size={18} />
          </Button>
          <Button size="icon" variant="outline" className="bg-gray-900">
            <MicOffIcon size={18} />
          </Button>
          <Button size="icon" variant="outline" className="bg-gray-900">
            <VideotapeIcon size={18} />
          </Button>
          <Button size="icon" variant="outline" className="bg-gray-900">
            <MoreHorizontal size={18} />
          </Button>
        </div>
        <Button variant="destructive" className="gap-3 pr-5" size="sm">
          <PhoneIcon size={18} />
          <span>Leave meet</span>
        </Button>
      </motion.div>
    </div>
  );
}
