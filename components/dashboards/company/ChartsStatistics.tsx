"use client";

import { CalendarDays, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";

const StatisticsChart = dynamic(
  () => import("@/components/charts/dashboard/company/StatisticsChart"),
  {
    ssr: false,
    loading: () => (
      <div className="flex justify-between px-12">
        <div className="flex items-end space-x-3">
          <Skeleton className="w-3 h-[50px]" />
          <Skeleton className="w-3 h-[80px]" />
        </div>
        <div className="flex items-end space-x-3">
          <Skeleton className="w-3 h-[150px]" />
          <Skeleton className="w-3 h-[120px]" />
        </div>
        <div className="flex items-end space-x-3">
          <Skeleton className="w-3 h-[180px]" />
          <Skeleton className="w-3 h-[200px]" />
        </div>
        <div className="flex items-end space-x-3">
          <Skeleton className="w-3 h-[50px]" />
          <Skeleton className="w-3 h-[30px]" />
        </div>
        <div className="flex items-end space-x-3">
          <Skeleton className="w-3 h-[50px]" />
          <Skeleton className="w-3 h-[70px]" />
        </div>
      </div>
    ),
  }
);

const ChartsStatistics = () => {
  return (
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
      <div className="flex flex-col bg-muted rounded-lg px-4 py-6">
        <div className="h-[200px]">
          <StatisticsChart />
        </div>
        <div className="px-10">
          <Separator className="my-4 bg-muted-foreground opacity-20" />
          <div className="flex gap-8 pt-2">
            <div className="flex items-center gap-2">
              <span className="block bg-muted-foreground opacity-50 w-3 h-3 rounded-full" />
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
  );
};

export default ChartsStatistics;
