import CardsStatistics from "@/components/dashboards/company/CardsStatistics";
import ChartsStatistics from "@/components/dashboards/company/ChartsStatistics";
import type { Company } from "@prisma/client";
import CompanyDashboard from "@/components/dashboards/company/CompanyDashboard";
import type { Developer } from "@prisma/client";
import DeveloperDashboard from "@/components/dashboards/developer/DeveloperDashboard";
import React from "react";
import ResentJobs from "@/components/dashboards/company/ResentJobs";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { companyStore } from "@/stores/company.store";
import { fetchUser } from "@/actions/user";
import { getServerSession } from "next-auth";
import { getUserById } from "@/actions/roles";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const { user } = await fetchUser();

  if (!user) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      {user.role === "developer" && <DeveloperDashboard />}
      {user.role === "company" && <CompanyDashboard />}
    </>
  );
}
