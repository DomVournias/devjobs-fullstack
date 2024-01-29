import { Company, Developer, Job, Prisma } from "@prisma/client";

import { CompanyWithJobs } from "@/types/company";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { getUserById } from "@/actions/roles";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export const fetchUser = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/sign-in");
  }

  const userRole = session.user.role;
  const userId = session.user.id;

  const user = await getUserById(userRole, userId);

  const developer = user as Developer;
  const company = user as Company;

  const developerId = developer.id;
  const companyId = company.id;

  return {
    userRole,
    userId,
    developerId,
    companyId,
    user,
    developer,
    company,
  };
};
