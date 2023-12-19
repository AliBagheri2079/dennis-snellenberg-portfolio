import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** @param {...ClassValue} inputs */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
