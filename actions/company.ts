import {
  JobsTableTypes,
  LimitedProfileJobsTypes,
  ProfileSidebarTypes,
} from "@/types/company";

import { Prisma } from "@prisma/client";
import { fetchUser } from "./user";
import prisma from "@/lib/prisma";

export const fetchJobs = async () => {
  const { companyId } = await fetchUser();

  const data = await prisma.company.findUnique({
    where: { id: companyId },
    select: {
      jobs: true,
    },
  });

  return data;
};

export const fetchJobsTable = async () => {
  const { companyId } = await fetchUser();

  const data: JobsTableTypes = await prisma.company.findUnique({
    where: { id: companyId },
    select: {
      jobs: {
        select: {
          title: true,
          applicants: true,
          status: true,
          createdAt: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  return data;
};

export const fetchProfileSidebarData = async (companyId: string) => {
  const data: ProfileSidebarTypes = await prisma.company.findUnique({
    where: { id: companyId },
    select: {
      name: true,
      tagline: true,
      industry: true,
      location: true,
      twitter: true,
      facebook: true,
      instagram: true,
      linkedin: true,
      size: true,
    },
  });

  return data;
};

export const fetchLimitedProfileJobs = async (companyId: string) => {
  const data: LimitedProfileJobsTypes = await prisma.company.findUnique({
    where: { id: companyId },
    select: {
      jobs: {
        take: 4,
        select: {
          id: true,
          title: true,
          remote: true,
          location: true,
          minSalary: true,
          maxSalary: true,
          rate: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  return data;
};
