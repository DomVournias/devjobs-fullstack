"use server";

import { jobSchema, jobSchemaType } from "@/schemas/job";

import prisma from "@/lib/prisma";

export async function CreateJob(data: jobSchemaType) {
  const validation = jobSchema.safeParse(data);

  if (!validation.success) {
    throw new Error("form not valid");
  }

  const { title, description, location, industry, position, international } =
    data;

  const form = await prisma.job.create({
    data: {
      title,
      description,
      location: international ? "International" : location,
      industry,
      position,
      international,
    },
  });

  if (!form) {
    throw new Error("something went wrong");
  }

  return form.id;
}
