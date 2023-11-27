import React from "react";
import SignInForm from "@/components/forms/auth/SignInForm";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col justify-center">
      <h2 className=" text-center font-normal text-3xl pb-6">Sign in</h2>
      <SignInForm />
    </div>
  );
}
