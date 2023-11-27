import CompanyDashboard from "@/components/dashboards/CompanyDashboard";
import DeveloperDashboard from "@/components/dashboards/DeveloperDashboard";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/sign-in");
  }

  // console.log(session.user.role);

  return (
    <div>
      {session.user.role === "developer" ? (
        <DeveloperDashboard />
      ) : (
        <CompanyDashboard />
      )}
    </div>
  );
}
