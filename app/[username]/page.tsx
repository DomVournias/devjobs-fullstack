import { Company, Developer } from "@prisma/client";
import { fetchUserByUsername, fetchUserIdByUsername } from "@/actions/roles";

import CompanyProfile from "@/components/profiles/company/CompanyProfile";
import DeveloperProfile from "@/components/profiles/developer/DeveloperProfile";
import React from "react";
import prisma from "@/lib/prisma";

const page = async ({ params }: { params: { username: string } }) => {
  const username = params.username;

  const { developer, company } = await fetchUserIdByUsername(username);

  // console.log("DEVELOPER:", developer);
  // console.log("COMPANY:", company);

  if (developer) {
    return <DeveloperProfile />;
  } else if (company) {
    return <CompanyProfile id={company.id} />;
  } else {
    return (
      <div>
        <h2>{"Sorry, there's nothing here!"}</h2>
      </div>
    );
  }
};

export default page;
