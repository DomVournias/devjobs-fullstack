import React, { ReactNode } from "react";

import ClientBody from "@/components/Body";
import CompanySidebar from "@/components/sidebars/dashboard/company/CompanySidebar";
import DeveloperSidebar from "@/components/sidebars/dashboard/developer/DeveloperSidebard";
import Header from "@/components/navigation/headers/Header";
import { Inter } from "next/font/google";
import { fetchUser } from "@/actions/user";

const inter = Inter({ subsets: ["latin"] });

const layout = async ({ children }: { children: ReactNode }) => {
  const { user } = await fetchUser();

  if (!user) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  //TODO: Create the dashboard header
  return (
    // <body className={`${inter.className} overflow-hidden`}>
    <>
      <Header />
      <ClientBody />
      <main>
        <div className="flex">
          {user.role === "company" && <CompanySidebar />}
          {user.role === "developer" && <DeveloperSidebar />}
          <div className="h-screen overflow-scroll flex w-full p-10 gap-10  scrollbar-thin scrollbar-thumb-500 scrollbar-track-slate-700">
            {children}
          </div>
        </div>
      </main>
    </>
    // </body>
  );
};

export default layout;
