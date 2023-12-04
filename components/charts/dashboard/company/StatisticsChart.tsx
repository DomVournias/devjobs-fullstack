"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";

import React from "react";

const data = [
  { name: "Jan", applications: 200, impressions: 300 },
  { name: "Feb", applications: 300, impressions: 500 },
  { name: "Mar", applications: 400, impressions: 600 },
  { name: "Apr", applications: 100, impressions: 200 },
  { name: "May", applications: 100, impressions: 250 },
];

const StatisticsChart = () => {
  return (
    <BarChart width={540} height={220} data={data}>
      <Bar dataKey="impressions" barSize={8} className="fill-ring opacity-50" />
      <Bar dataKey="applications" barSize={8} className=" fill-foreground" />
      <XAxis dataKey="name" />
    </BarChart>
  );
};

export default StatisticsChart;
