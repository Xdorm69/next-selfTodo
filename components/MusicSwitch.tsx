"use client";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useEffect, useRef, useState } from "react";

export function MusicToggle() {
  const [isMusicOn, setIsMusicOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element if it doesn't exist
    if (!audioRef.current) {
      audioRef.current = new Audio("/music.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }

    // Play or pause based on isMusicOn state
    if (isMusicOn) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
        setIsMusicOn(false);
      });
    } else {
      audioRef.current.pause();
    }

    // Cleanup function
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [isMusicOn]);

  return (
    <div className="flex items-center space-x-2">
      <Switch id="music" checked={isMusicOn} onCheckedChange={setIsMusicOn} />
      <Label htmlFor="music">{isMusicOn ? "Music On" : "Muted"}</Label>
    </div>
  );
}
