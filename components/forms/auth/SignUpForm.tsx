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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { signUpCompanySchema, signUpDeveloperSchema } from "@/schemas/auth";

import { BsPersonWorkspace } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import CompanyForm from "./CompanyForm";
import DeveloperForm from "./DeveloperForm";
import { FaPersonChalkboard } from "react-icons/fa6";
import GoogleButton from "@/components/buttons/GoogleButton";
import Link from "next/link";
import LinkedInButton from "@/components/buttons/LinkedInButton";
import { SignUp } from "@/actions/auth";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUpForm = () => {
  const [roleChecked, setRoleChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userRole, setUserRole] = useState("");

  const router = useRouter();

  const formSchema =
    userRole === "developer" ? signUpDeveloperSchema : signUpCompanySchema;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      name: "",
      role: "",
    },
  });

  // const errors = form.formState.errors;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const data = await SignUp(values);

      if (data != undefined) {
        if (data.status === 201) {
          setLoading(false);
          SuccessToast(data.message);
          router.push("/sign-in");
        } else {
          setLoading(false);
          ErrorToast(data.message);
        }
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      ErrorToast("Something went wrong, please try again later");
    }
  }

  function buttonText() {
    if (userRole === "") {
      return "Create an Account";
    }
    if (userRole === "company") {
      return "Join as a Company";
    }
    if (userRole === "developer") {
      return "Join as a Developer";
    }
  }

  function titleText() {
    if (!roleChecked) {
      return "Join as a company or a developer";
    } else {
      if (userRole === "company") {
        return "Sign up to hire a developer";
      } else {
        return "Sign up to find a job";
      }
    }
  }

  // console.log(userRole);

  return (
    <Form {...form}>
      <h2 className="text-center font-normal text-3xl pb-12">{titleText()}</h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {!roleChecked ? (
          <div className="flex flex-col justify-center items-center">
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value) => {
                        field.onChange(value);
                        setUserRole(value);
                      }}
                      defaultValue={field.value}
                      className="flex gap-6 pb-10"
                    >
                      <FormItem
                        className={`relative border rounded-lg  cursor-pointer text-left ${
                          userRole === "company" ? "border-ring" : ""
                        }`}
                      >
                        <FormControl>
                          <RadioGroupItem
                            value="company"
                            className="absolute right-4 top-4"
                          />
                        </FormControl>
                        <FormLabel className="font-normal p-6 m-0 cursor-pointer flex flex-col">
                          <FaPersonChalkboard className="text-2xl" />
                          <h4 className="pt-4 text-xl">
                            I'm an company, hiring a developer
                          </h4>
                        </FormLabel>
                      </FormItem>
                      <FormItem
                        className={`relative border rounded-lg  cursor-pointer text-left ${
                          userRole === "developer" ? "border-ring" : ""
                        }`}
                      >
                        <FormControl>
                          <RadioGroupItem
                            value="developer"
                            className="absolute right-4 top-4"
                          />
                        </FormControl>
                        <FormLabel className="font-normal p-6 m-0 cursor-pointer flex flex-col">
                          <BsPersonWorkspace className="text-2xl" />
                          <h4 className="pt-4 text-xl">
                            I'm a developer, looking for a job
                          </h4>
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              disabled={userRole === ""}
              onClick={() => setRoleChecked(true)}
            >
              {buttonText()}
            </Button>
          </div>
        ) : (
          <>
            {userRole === "developer" ? (
              <DeveloperForm form={form} loading={loading} />
            ) : (
              <CompanyForm form={form} loading={loading} />
            )}
          </>
        )}

        <div className="flex items-center gap-2 justify-center pt-4 pb-2">
          <p className="font-light text-sm text-muted-foreground">
            Already have an account?
          </p>
          <Link href={"/sign-in"} className="text-sm">
            Sign in
          </Link>
        </div>
        {roleChecked && (
          <>
            <div className="mx-auto mt-4 mb-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400 text-sm">
              or
            </div>
            <GoogleButton>Sign up with Google</GoogleButton>
            <LinkedInButton>Sign up with LinkedIn</LinkedInButton>
          </>
        )}
      </form>
    </Form>
  );
};

export default SignUpForm;
