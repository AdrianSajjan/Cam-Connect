import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";
import { extractMeetCodePattern } from "@/constants/patterns";
import { CSSProperties } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createInstance<T, R extends any[]>(_class: new (...args: R) => T, ...args: R): T {
  return new _class(...args);
}

export function extractMeetingCode(url: string) {
  return url.match(extractMeetCodePattern)?.at(0);
}

export function createStyles<T extends { [key: string]: CSSProperties }>(styles: T): T {
  return styles;
}
