"use client";
import type React from "react";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { IoLinkOutline } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { ProjectFormSchema } from "@/lib/schemaZod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Image from "next/image";
import { X } from "lucide-react";
import { IconPicker } from "./ui/IconPicker";
import { supabase } from "@/lib/supabase";

export default function FormAddProject() {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [imagePreviews, setImagePreviews] = useState<{
    thumbnail?: string;
    image1?: string;
    image2?: string;
    image3?: string;
  }>({});
  const [iconList, setIconList] = useState<string[]>([]);
  const [iconInput, setIconInput] = useState("");

  const form = useForm<z.infer<typeof ProjectFormSchema>>({
    resolver: zodResolver(ProjectFormSchema),
    defaultValues: {
      name: "",
      description: "",
      thumbnail: "",
      image1: "",
      image2: "",
      image3: "",
      githubRepoLink: "",
      liveDemoLink: "",
      iconLists: [],
    },
  });

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldName: "thumbnail" | "image1" | "image2" | "image3"
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImagePreviews((prev) => ({
          ...prev,
          [fieldName]: base64String,
        }));
        form.setValue(fieldName, base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (
    fieldName: "thumbnail" | "image1" | "image2" | "image3"
  ) => {
    setImagePreviews((prev) => ({
      ...prev,
      [fieldName]: undefined,
    }));
    form.setValue(fieldName, "");
  };

  const addIcon = () => {
    if (iconInput.trim()) {
      const newIconList = [...iconList, iconInput.trim()];
      setIconList(newIconList);
      form.setValue("iconLists", newIconList);
      setIconInput("");
    }
  };

  const removeIcon = (index: number) => {
    const newIconList = iconList.filter((_, i) => i !== index);
    setIconList(newIconList);
    form.setValue("iconLists", newIconList);
  };

  const onSubmit = async (values: z.infer<typeof ProjectFormSchema>) => {
    setLoading(true);
    setServerError(null);

    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      if (!res.ok) {
        setServerError(data.error || "Something went wrong");
        setLoading(false);
        return;
      }

      console.log("Project created:", values);
      form.reset();
      setImagePreviews({});
      setIconList([]);
    } catch (err) {
      setServerError("Server error, try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-10xl mx-auto p-4 md:p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {/* Project Name */}
            <div className="flex flex-col gap-6 h-full">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter project name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Description */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="flex flex-col flex-1">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter project description"
                        className="flex-1 resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 gap-6">
              {/* Icon Lists */}
              <FormField
                control={form.control}
                name="iconLists"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Technology Icons</FormLabel>

                    <FormControl>
                      <IconPicker
                        value={field.value ?? []}
                        onChange={field.onChange}
                      />
                    </FormControl>

                    {/* Selected preview */}
                    {(field.value?.length ?? 0) > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {field.value?.map((icon: string) => (
                          <div
                            key={icon}
                            className="flex items-center gap-1 rounded-md border px-2 py-1"
                          >
                            <img
                              src={
                                supabase.storage
                                  .from("icons")
                                  .getPublicUrl(icon).data.publicUrl
                              }
                              className="h-4 w-4"
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* GitHub Repo Link */}
              <FormField
                control={form.control}
                name="githubRepoLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>GitHub Repository Link (Optional)</FormLabel>
                    <FormControl>
                      <InputGroup>
                        <InputGroupAddon>
                          <IoLinkOutline />
                        </InputGroupAddon>
                        <InputGroupInput
                          type="url"
                          placeholder="https://github.com/username/repo"
                          {...field}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Live Demo Link */}
              <FormField
                control={form.control}
                name="liveDemoLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Live Demo Link (Optional)</FormLabel>
                    <FormControl>
                      <InputGroup>
                        <InputGroupAddon>
                          <IoLinkOutline />
                        </InputGroupAddon>
                        <InputGroupInput
                          type="url"
                          placeholder="https://example.com"
                          {...field}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {/* Images Section with Previews */}
            <div className="space-y-6">
              {/* Thumbnail */}
              <FormField
                control={form.control}
                name="thumbnail"
                render={() => (
                  <FormItem>
                    <FormLabel>Thumbnail</FormLabel>
                    <FormControl>
                      <div className="space-y-2">
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageUpload(e, "thumbnail")}
                        />
                        {imagePreviews.thumbnail && (
                          <div className="relative w-full h-48 border border-border rounded-lg overflow-hidden">
                            <Image
                              src={
                                imagePreviews.thumbnail || "/placeholder.svg"
                              }
                              alt="Thumbnail preview"
                              fill
                              className="object-cover"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage("thumbnail")}
                              className="absolute top-2 right-2 bg-destructive text-white p-1 rounded-full hover:bg-destructive/90"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Image Grid for Image 1, 2, 3 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {(["image1", "image2", "image3"] as const).map((imageName) => (
                  <FormField
                    key={imageName}
                    control={form.control}
                    name={imageName}
                    render={() => (
                      <FormItem>
                        <FormLabel className="capitalize">
                          {imageName.replace("image", "Image ")}
                        </FormLabel>
                        <FormControl>
                          <div className="space-y-2">
                            <Input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleImageUpload(e, imageName)}
                            />
                            {imagePreviews[imageName] && (
                              <div className="relative w-full h-32 border border-border rounded-lg overflow-hidden">
                                <Image
                                  src={
                                    imagePreviews[imageName]! ||
                                    "/placeholder.svg"
                                  }
                                  alt={`${imageName} preview`}
                                  fill
                                  className="object-cover"
                                />
                                <button
                                  type="button"
                                  onClick={() => removeImage(imageName)}
                                  className="absolute top-1 right-1 bg-destructive text-white p-1 rounded-full hover:bg-destructive/90"
                                >
                                  <X className="w-3 h-3" />
                                </button>
                              </div>
                            )}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Error Message */}
          {serverError && (
            <div className="text-destructive text-sm">{serverError}</div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full"
            variant="secondary"
          >
            {loading ? "Creating Project..." : "Create Project"}
            <FaLocationArrow className="ml-2 w-4 h-4" />
          </Button>
        </form>
      </Form>
    </div>
  );
}
