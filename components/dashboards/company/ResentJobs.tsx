import { Plus, SlidersHorizontal } from "lucide-react";

import JobsTable from "@/components/tables/dashboard/company/JobsTable";
import React from "react";
import { fetchUser } from "@/actions/user";

const ResentJobs = () => {
  return (
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
  );
};

export default ResentJobs;
