import React, { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "./ui/input-group";
import {
  IoEyeOffOutline,
  IoEyeOutline,
  IoKeyOutline,
  IoLogoGoogle,
  IoMailOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { zodResolver } from "@hookform/resolvers/zod";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { useForm } from "react-hook-form";
import { SignUpSchema } from "@/lib/schemaZod";
import z from "zod";
import { signIn } from "next-auth/react";

export default function SignUpWithCredentials({
  onSuccess,
}: {
  onSuccess?: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [serverError, setServerError] = React.useState<string | null>(null);

  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof SignUpSchema>) => {
    setLoading(true);
    setServerError(null);

    try {
      // 1️⃣ REGISTER USER
      const res = await fetch("/api/auth/register", {
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
      console.log(values);

      // 2️⃣ AUTO LOGIN
      const loginRes = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
      });
      console.log(loginRes);

      if (!loginRes?.ok) {
        setServerError("Login failed, but account was created.");
        setLoading(false);
        return;
      }

      // 3️⃣ Success — trigger animation from parent
      onSuccess?.();
    } catch (err) {
      setServerError("Server error, try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="grid w-full max-w-sm gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputGroup>
                      <InputGroupInput
                        type="text"
                        placeholder="Enter your name"
                        {...field}
                      />
                      <InputGroupAddon>
                        <IoPersonOutline />
                      </InputGroupAddon>
                    </InputGroup>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputGroup>
                      <InputGroupInput
                        type="email"
                        placeholder="Enter your email"
                        {...field}
                      />
                      <InputGroupAddon>
                        <IoMailOutline />
                      </InputGroupAddon>
                    </InputGroup>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputGroup>
                      {/* LEFT ICON (KEY) */}
                      <InputGroupAddon>
                        <IoKeyOutline className="text-neutral-500" />
                      </InputGroupAddon>

                      {/* INPUT */}
                      <InputGroupInput
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        {...field}
                      />

                      <InputGroupAddon align="inline-end">
                        <InputGroupButton
                          aria-label="Copy"
                          title="Copy"
                          size="icon-xs"
                          onClick={() => {
                            setShowPassword(!showPassword);
                          }}
                        >
                          {showPassword ? (
                            <IoEyeOffOutline />
                          ) : (
                            <IoEyeOutline />
                          )}
                        </InputGroupButton>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputGroup>
                      <InputGroupAddon>
                        <IoKeyOutline />
                      </InputGroupAddon>
                      <InputGroupInput
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Re-enter your password"
                        {...field}
                      />
                      <InputGroupAddon align="inline-end">
                        <InputGroupButton
                          aria-label="Copy"
                          title="Copy"
                          size="icon-xs"
                          onClick={() => {
                            setShowConfirmPassword(!showConfirmPassword);
                          }}
                        >
                          {showConfirmPassword ? (
                            <IoEyeOffOutline />
                          ) : (
                            <IoEyeOutline />
                          )}
                        </InputGroupButton>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <MagicButton
              title={loading ? "Processing..." : "Continue"}
              icon={<FaLocationArrow />}
              position="right"
              fullWidth={true}
              handleClick={() => form.handleSubmit(onSubmit)}
              disabled={loading}
            />
          </form>
        </Form>
      </div>
      {/* make or with line */}
      <div className="flex items-center my-4">
        <hr className="grow border-t border-gray-200" />
        <span className="mx-2 text-gray-500">or</span>
        <hr className="grow border-t border-gray-200" />
      </div>
      <MagicButton
        title="Sign Up with Google"
        icon={<IoLogoGoogle />}
        position="left"
        fullWidth={true}
        handleClick={() => signIn("google")}
      />
    </div>
  );
}
