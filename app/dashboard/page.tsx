import type { Company } from "@prisma/client";
import CompanyDashboard from "@/components/dashboards/CompanyDashboard";
import type { Developer } from "@prisma/client";
import DeveloperDashboard from "@/components/dashboards/DeveloperDashboard";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { companyStore } from "@/stores/company.store";
import { getServerSession } from "next-auth";
import { getUserById } from "@/actions/roles";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/sign-in");
  }

  const userRole = session.user.role;
  const userId = session.user.id;

  const user = await getUserById(userRole, userId);

  // companyStore.setState({ company: user as Company });

  // const developer = user as Developer;
  const company = user as Company;

  if (!user) {
    console.log(user);
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  // console.log(companyStore.getState().company);

  return (
    <>
      {user.role === "developer" && <DeveloperDashboard />}
      {user.role === "company" && <CompanyDashboard company={company} />}
    </>
  );
}
