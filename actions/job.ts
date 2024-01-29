"use server";

import { jobSchema, jobSchemaType } from "@/schemas/job";

import { JobDetailsTypes } from "@/types/job";
import { fetchUser } from "@/actions/user";
import prisma from "@/lib/prisma";

export const fetchJobById = async (jobId: string) => {
  try {
    const data: JobDetailsTypes = await prisma.job.findUnique({
      where: { id: jobId },
      include: {
        skills: true,
      },
    });

    return data;
  } catch (error) {
    throw new Error(`Error fetching job: ${error}`);
  }
};

export async function getCreateJobFormFields() {
  try {
    const [
      locations,
      positions,
      salaries,
      types,
      skills,
      seniorities,
      hours,
      availability,
      budget,
    ] = await Promise.all([
      prisma.location.findMany(),
      prisma.position.findMany(),
      prisma.minSalary.findMany(),
      prisma.type.findMany(),
      prisma.skill.findMany(),
      prisma.seniority.findMany(),
      prisma.hours.findMany(),
      prisma.availability.findMany(),
      prisma.budget.findMany(),
    ]);

    const data = {
      locations,
      positions,
      salaries,
      types,
      skills,
      seniorities,
      hours,
      availability,
      budget,
    };

    return data;
  } catch (error) {
    throw new Error(`Error in GetAllRecords: ${error}`);
  } finally {
    await prisma.$disconnect();
  }
}

export async function CreateJob(data: jobSchemaType) {
  const { userId } = await fetchUser();

  const validation = jobSchema.safeParse(data);

  if (!validation.success) {
    throw new Error("form not valid");
  }

  const {
    title,
    description,
    location,
    position,
    minSalary,
    maxSalary,
    type,
    skills,
    seniority,
    worldwide,
  } = data;

  const skillIds = skills.map((skill) => skill.id);

  const form = await prisma.job.create({
    data: {
      title,
      description,
      positionId: position.id,
      locationId: location.id,
      minSalaryId: minSalary && minSalary.id > 0 ? minSalary.id : null,
      maxSalaryId: maxSalary && maxSalary.id > 0 ? maxSalary.id : null,
      typeId: type.id,
      seniorityId: seniority.id,
      companyId: userId,
      international: worldwide,
      skills: {
        connect: skillIds.map((id) => ({ id })),
      },
    },
  });

  if (!form) {
    throw new Error("something went wrong");
  }

  return form.id;
}
