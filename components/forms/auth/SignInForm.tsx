"use client";

import { ErrorToast, SuccessToast } from "@/lib/toasts";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { signInSchema, signInSchemaType } from "@/schemas/auth";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import GoogleButton from "@/components/buttons/GoogleButton";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import LinkedInButton from "@/components/buttons/LinkedInButton";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

const SignInForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<signInSchemaType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: signInSchemaType) {
    setLoading(true);
    try {
      const signInData = await signIn("credentials", {
        email: values.email,
        password: values.password,
      });

      if (signInData?.error) {
        console.log(signInData.error);
        ErrorToast(signInData.error);
      } else {
        SuccessToast("Logged in successfully!");
        setLoading(false);
        router.refresh();
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
      ErrorToast("Something went wrong, please try again later");
      setLoading(false);
    }
  }

  console.log(form.formState.errors);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          disabled={loading}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="mail@example.com" type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          disabled={loading}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter your password"
                  type="password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="pt-2">
          <Button type="submit" className="w-full" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Login
          </Button>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <p className="font-light text-sm text-muted-foreground">
            {"Don't have an account?"}
          </p>
          <Link href={"/sign-up"} className="text-sm">
            Sign up
          </Link>
        </div>
        <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400 text-sm">
          or
        </div>
        <GoogleButton>Sign in with Google</GoogleButton>
        <LinkedInButton>Sign in with LinkedIn</LinkedInButton>
      </form>
    </Form>
  );
};

export default SignInForm;
