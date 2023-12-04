import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  CalendarDays,
  ChevronDown,
  ClipboardListIcon,
  FileDown,
  Home,
  Layers,
  MoreHorizontal,
  Plus,
  Radio,
  RadioTower,
  SeparatorHorizontal,
  SlidersHorizontal,
  Users,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

import { Button } from "../ui/button";
import type { Company } from "@prisma/client";
import CompanySidebar from "../sidebars/dashboard/company/CompanySidebar";
import { JSONTree } from "react-json-tree";
import JobsTable from "../tables/dashboard/company/JobsTable";
import React from "react";
import { Separator } from "../ui/separator";
import StatisticsCard from "../cards/StatisticsCard";
import StatisticsChart from "../charts/dashboard/company/StatisticsChart";
import { companyStore } from "@/stores/company.store";

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

interface CompanyDashboardProps {
  company: Company;
}

const CompanyDashboard: React.FC<CompanyDashboardProps> = ({ company }) => {
  return (
    <div className="flex">
      <CompanySidebar company={company} />
      <div className="flex w-full p-10 gap-10">
        {/* <JSONTree data={company} theme={theme} invertTheme={false} /> */}
        <div className="flex flex-col w-2/3 gap-10">
          <div className="flex w-full gap-6">
            <StatisticsCard
              type="applications"
              title="Job Applications"
              number={114}
              percentage={12}
            />
            <StatisticsCard
              type="posts"
              title="Job Posts"
              number={22}
              percentage={6}
            />
          </div>
          <div>
            <div className="flex items-center justify-between pb-2">
              <h3 className="text-2xl font-medium">Recent Jobs</h3>
              <div className="flex items-center justify-center gap-3">
                <button className="p-2 rounded-full bg-foreground text-background h-fit">
                  <Plus width={22} height={22} />
                </button>
                <button className="p-2 rounded-full bg-background border-border border h-fit">
                  <SlidersHorizontal width={22} height={22} />
                </button>
              </div>
            </div>
            <JobsTable />
          </div>
        </div>
        <div className="flex flex-col w-1/3 gap-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-medium">Statistics</h3>
            <div className="flex items-center ">
              <div className="pr-4 border-border border-r-2">
                <CalendarDays width={18} height={18} />
              </div>
              <div>
                <Button variant="link" className="p-0">
                  <span className="pl-4 pr-2">Last Year</span>
                  <ChevronDown width={18} height={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-muted rounded-lg px-4 py-8">
            <StatisticsChart />
            <div className="px-10">
              <Separator className="my-4" />
              <div className="flex gap-8 pt-2">
                <div className="flex items-center gap-2">
                  <span className="block bg-ring opacity-50 w-3 h-3 rounded-full" />
                  <p className="text-sm font-medium">Job Impressions</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="block bg-primary w-3 h-3 rounded-full" />
                  <p className="text-sm font-medium">Job Applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
