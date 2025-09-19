import { type ClassValue, clsx } from "clsx";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getHostname(fullUrl: string) {
  const url = new URL(fullUrl);
  return url.hostname;
}

dayjs.extend(relativeTime);
export const getRelativeTime = (timestamp: number): string => {
  if (!timestamp) return "";
  const relative = dayjs.unix(timestamp).fromNow();
  return relative;
};
