import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ChevronDown,
  ClipboardListIcon,
  Home,
  Plus,
  Radio,
  RadioTower,
  SlidersHorizontal,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Company } from "@prisma/client";
import CompanyDashboard from "@/components/dashboards/CompanyDashboard";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { companyMenu } from "./company.menu";
import { companyStore } from "@/stores/company.store";

interface CompanySidebarProps {
  company: Company;
}

const CompanySidebar: React.FC<CompanySidebarProps> = ({ company }) => {
  console.log("sidebard", company);

  return (
    <aside className="h-[calc(100vh-4rem)] sticky  border-border border-b border-r max-w-screen-sm w-[320px] px-8 py-8 ">
      <div className="flex flex-col justify-between h-full">
        <nav>
          <ul className="flex flex-col gap-4">
            {companyMenu.map((item, i) => (
              <li key={i}>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 w-full justify-start p-0 hover:bg-transparent opacity-90 hover:opacity-100 transition-all"
                >
                  {item.icon}
                  <span className="text-base">{item.name}</span>
                </Button>
              </li>
            ))}
          </ul>
          <div className="mx-[-2rem] pt-10">
            <Separator className="my-2" />
            <div className="px-8">
              <Button
                variant="ghost"
                className="flex items-center w-full justify-between p-0 hover:bg-transparent opacity-90 hover:opacity-100 transition-all"
              >
                <div className="flex gap-2 items-center justify-start">
                  <RadioTower width={19} height={19} />
                  <span className="text-base">Channels</span>
                </div>

                <div className="p-2 rounded-full bg-accent">
                  <Plus width={17} height={17} />
                </div>
              </Button>
            </div>

            <Separator className="my-2" />
          </div>
        </nav>

        <div>
          <button className="p-0 flex justify-between items-center w-full">
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <h5 className="text-sm">{company.name}</h5>
                <p className="text-xs opacity-40">{company.email}</p>
              </div>
            </div>

            <div className="p-2 rounded-full ">
              <ChevronDown width={17} height={17} />
            </div>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default CompanySidebar;
