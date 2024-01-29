import CardsStatistics from "./CardsStatistics";
import ChartsStatistics from "./ChartsStatistics";
import type { Company } from "@prisma/client";
import CompanySidebar from "../../sidebars/dashboard/company/CompanySidebar";
import { CompanyWithJobs } from "@/types/company";
import JobsStatistics from "./ChartsStatistics";
import React from "react";
import ResentJobs from "./ResentJobs";

// const theme = {
//   scheme: "monokai",
//   author: "wimer hazenberg (http://www.monokai.nl)",
//   base00: "#272822",
//   base01: "#383830",
//   base02: "#49483e",
//   base03: "#75715e",
//   base04: "#a59f85",
//   base05: "#f8f8f2",
//   base06: "#f5f4f1",
//   base07: "#f9f8f5",
//   base08: "#f92672",
//   base09: "#fd971f",
//   base0A: "#f4bf75",
//   base0B: "#a6e22e",
//   base0C: "#a1efe4",
//   base0D: "#66d9ef",
//   base0E: "#ae81ff",
//   base0F: "#cc6633",
// };

const CompanyDashboard = () => {
  // console.log("jobs=>", jobs);

  return (
    <>
      <div className="flex flex-col w-2/3 gap-8">
        <CardsStatistics />
        <ResentJobs />
      </div>
      <ChartsStatistics />
    </>
  );
};

export default CompanyDashboard;
