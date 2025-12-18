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

      <DialogContent className="max-w-lg">
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
                "rounded-md border p-2",
                value.includes(icon)
                  ? "border-primary bg-white"
                  : "border-border"
              )}
            >
              <img
                src={getIconUrl(icon)}
                alt={icon}
                className="h-6 w-6 mx-auto"
                onError={() => console.error("FAILED TO LOAD ICON:", icon)}
              />
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
