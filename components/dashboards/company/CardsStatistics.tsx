import { Jobs } from "@/types/company";
import React from "react";
import StatisticsCard from "@/components/cards/StatisticsCard";
import { fetchJobs } from "@/actions/company";
import { fetchUser } from "@/actions/user";

const CardsStatistics = async () => {
  const { jobs }: Jobs = await fetchJobs();
  return (
    <div className="flex w-full gap-6">
      <StatisticsCard
        type="applications"
        title="Applications"
        number={0}
        percentage={12}
      />
      <StatisticsCard type="views" title="Views" number={125} percentage={15} />
      <StatisticsCard
        type="posts"
        title="Posts"
        number={jobs.length}
        percentage={6}
      />
    </div>
  );
};

export default CardsStatistics;
