"use client";

import Image from "next/image";

import * as React from "react";
import { AnimatePresence, MotionValue, motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";

import { authenticationCarousel } from "@/constants/carousel";
import { cn } from "@/lib/utils";

const carouselAutoChangeInterval = 5000;

export function AuthenticationCarousel() {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const time = useMotionValue(0);

  useAnimationFrame((delta) => {
    const clamped = delta % (carouselAutoChangeInterval * authenticationCarousel.length + 1);
    const activeSlide = Math.floor((delta / carouselAutoChangeInterval) % authenticationCarousel.length);
    setActiveSlide(activeSlide);
    time.set(clamped);
  });

  return (
    <div className="h-full w-full relative">
      <AnimatePresence>
        {authenticationCarousel.map((slide, index) => (
          <motion.div
            className={cn(
              "absolute inset-4 rounded-xl overflow-hidden flex flex-col p-8 pb-14",
              slide.position === "start" ? "justify-start" : "justify-end"
            )}
            animate={{ opacity: activeSlide === index ? 1 : 0, zIndex: activeSlide === index ? 1 : 0 }}
            key={index}
          >
            <Image src={slide.image} alt={slide.name} fill className="object-cover" />
            <div className="bg-black/40 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md p-6">
              <p className="text-sm">"{slide.description}"</p>
              <p className="text-sm font-semibold mt-2">
                {slide.name} - {slide.designation}
              </p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-10 z-10 flex space-x-2">
        <AnimatePresence>
          {authenticationCarousel.map((_, index) => (
            <CarouselIndicator key={index} slide={index} time={time} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

function CarouselIndicator({ slide, time }: { slide: number; time: MotionValue<number> }) {
  const width = useTransform(time, [slide * carouselAutoChangeInterval, (slide + 1) * carouselAutoChangeInterval], ["0%", "100%"]);
  return (
    <div className={cn("transition-colors h-1.5 w-20 rounded backdrop-filter backdrop-blur-md bg-black/30")}>
      <motion.div className="h-full bg-primary rounded" style={{ width }} />
    </div>
  );
}
