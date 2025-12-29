import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function safeLink(path: string, availablePages: string[]): string {
  return availablePages.includes(path) ? path : "/coming-soon";
}
