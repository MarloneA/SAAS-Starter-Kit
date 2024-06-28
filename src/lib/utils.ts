import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// import { env } from "@/env.mjs"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXTAUTH_URL}/${path}`
}

export function getEmailInitials(email: string) {
  // Extract the part before the '@' symbol
  let localPart = email.split('@')[0];

  // Split the local part by any non-alphabetic characters
  let nameParts = localPart.split(/[^a-zA-Z]/);

  // If the local part contains only one section, use the first two characters
  if (nameParts.length === 1) {
    return nameParts[0].substring(0, 2).toUpperCase();
  }

  // Otherwise, take the first letter of the first two parts
  let initials = '';
  for (let i = 0; i < Math.min(2, nameParts.length); i++) {
    initials += nameParts[i][0].toUpperCase();
  }
  return initials;
}