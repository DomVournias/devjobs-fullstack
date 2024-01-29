import CreateJobForm from "@/components/forms/jobs/CreateJobForm";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { getCreateJobFormFields } from "@/actions/job";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/sign-in");
  }

  const data = await getCreateJobFormFields();

  // console.log("fields", data);

  return (
    <div className="bg-muted pt-14 pb-20 ">
      <div className="flex flex-col m-auto max-w-3xl ">
        <h2 className="text-4xl font-semibold">Post a job</h2>
        <CreateJobForm data={data} />
      </div>
    </div>
  );
}
