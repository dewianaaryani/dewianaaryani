"use client";
import { supabase } from "@/lib/supabase";
import React from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./dialog";
import { Button } from "./button";
import { cn } from "@/lib/utils";

type IconPickerProps = {
  value: string[];
  onChange: (value: string[]) => void;
};
const getIconUrl = (path: string) =>
  supabase.storage.from("icons").getPublicUrl(path).data.publicUrl;

export function IconPicker({ value = [], onChange }: IconPickerProps) {
  const [icons, setIcons] = React.useState<string[]>([]);

  React.useEffect(() => {
    console.log("supabase URL", process.env.NEXT_PUBLIC_SUPABASE_URL);

    loadIcons();
  }, []);

  const loadIcons = async () => {
    const { data, error } = await supabase.storage.from("icons").list("", {
      limit: 100,
      offset: 0,
    });

    console.log("Raw data:", data);
    console.log("Error:", error);
    console.log("Data length:", data?.length);

    if (error) {
      console.error("Error loading icons:", error);
      return;
    }

    if (data) {
      // Log each file
      data.forEach((file) => {
        console.log("File found:", file.name, file);
      });

      const iconFiles = data
        .filter(
          (file) =>
            file.name !== ".emptyFolderPlaceholder" &&
            !file.name.startsWith(".")
        )
        .map((file) => file.name);

      console.log("Filtered icon files:", iconFiles);
      setIcons(iconFiles);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Select Icons ({value.length})</Button>
      </DialogTrigger>

      <DialogContent
        className="max-w-lg rounded-2xl border border-white/10 backdrop-blur-xl bg-linear-to-b from-[#0f0f1b] via-[#0c0c18]/90 to-[#1a1a2e]/80
  shadow-[0_0_40px_rgba(0,0,0,0.6)]"
      >
        <DialogTitle>Select Icons</DialogTitle>

        {icons.length === 0 && (
          <p className="text-sm text-muted-foreground">
            No icons found in bucket
          </p>
        )}

        <div className="grid grid-cols-5 gap-3 mt-4">
          {icons.map((icon) => (
            <button
              key={icon}
              onClick={() =>
                onChange(
                  value.includes(icon)
                    ? value.filter((i) => i !== icon)
                    : [...value, icon]
                )
              }
              className={cn(
                "rounded-xl p-3 transition-all duration-300 flex items-center justify-center",
                "bg-white/5 backdrop-blur-sm border border-white/10",
                "hover:bg-white/10 hover:border-white/20 hover:scale-[1.03]",
                value.includes(icon) &&
                  "bg-white/10 border border-blue-400/60 shadow-[0_0_10px_rgba(0,149,255,0.3)]"
              )}
            >
              <img
                src={getIconUrl(icon)}
                alt={icon}
                className="h-7 w-7 opacity-90"
                onError={() => console.error("FAILED TO LOAD ICON:", icon)}
              />
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
