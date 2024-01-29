"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const data = [
  { name: "Jan", applications: 200, impressions: 300 },
  { name: "Feb", applications: 300, impressions: 500 },
  { name: "Mar", applications: 400, impressions: 600 },
  { name: "Apr", applications: 100, impressions: 200 },
  { name: "May", applications: 100, impressions: 250 },
];

const StatisticsChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={540} height={200} data={data}>
        <Bar
          dataKey="impressions"
          barSize={8}
          yAxisId="left"
          className="fill-muted-foreground opacity-50"
        />
        <Bar
          dataKey="applications"
          barSize={8}
          yAxisId="right"
          className="fill-foreground"
        />
        <XAxis dataKey="name" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StatisticsChart;
