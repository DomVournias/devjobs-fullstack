import React, { ReactNode } from "react";

import CompanyProfileNav from "@/components/navigation/CompanyProfileNav";
import CompanyProfileSidebar from "@/components/sidebars/profile/CompanyProfileSidebar";
import Footer from "@/components/footer/Footer";
import Header from "@/components/navigation/headers/Header";
import { fetchUserIdByUsername } from "@/actions/roles";

const layout = async ({
  children,
  params,
}: {
  children: ReactNode;
  params: { username: string };
}) => {
  const username = params.username;

  const { developer, company } = await fetchUserIdByUsername(username);
  return (
    <>
      <Header />
      <main>
        <div className="flex">
          {company && <CompanyProfileSidebar id={company.id} />}
          <div className="w-3/4 h-[calc(100vh-4rem)] overflow-y-auto ">
            <CompanyProfileNav username={username} />
            <article className="pl-16 pt-16 pb-16 pr-8">{children}</article>
          </div>
        </div>
      </main>
    </>
  );
};

export default layout;
