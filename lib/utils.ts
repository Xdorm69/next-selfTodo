import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const GetRandomEmoji = (mood: "pending" | "completed"): string => {
  const AngryEmoji: string[] = [
    "😡",
    "😫",
    "😒",
    "😣",
    "😫",
    "😓",
    "😭",
    "🥵",
    "😨",
    "😩",
    "🤬",
    "🤒",
    "🤢",
    "👿",
    "☠️",
    "💀",
  ];

  const HappyEmoji: string[] = [
    "🤑",
    "📈",
    "😁",
    "😀",
    "😃",
    "😄",
    "😆",
    "😊",
    "😋",
    "😎",
    "😍",
    "🥰",
    "🫡",
    "🤗",
    "😛",
    "😜",
    "😝",
    "🤤",
    "🤑",
    "🤠",
    "🤭",
    "🤓",
  ];

  const lenAngryEmoji = AngryEmoji.length;
  const lenHappyEmoji = HappyEmoji.length;

  if (mood === "pending") {
    const rIdx = Math.floor(Math.random() * lenAngryEmoji);
    return AngryEmoji[rIdx];
  }
  const rIdx = Math.floor(Math.random() * lenHappyEmoji);
  return HappyEmoji[rIdx];
};

