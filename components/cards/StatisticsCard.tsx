import { FileDown, Layers, MoreHorizontal, WalletCards } from "lucide-react";

import { Button } from "../ui/button";
import React from "react";

interface StatisticsCardProps {
  type: string;
  title: string;
  number: number;
  percentage: number;
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({
  type,
  title,
  number,
  percentage,
}) => {
  //TODO: calculate the percentage and display it
  return (
    <div className="bg-muted w-full pt-6 pb-6 px-5 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="p-2 rounded-full bg-accent-foreground">
          {type === "applications" ? (
            <Layers width={22} height={22} className="text-accent" />
          ) : (
            <WalletCards width={22} height={22} className="text-accent" />
          )}
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 bg-background rounded-full opacity-80 hover:opacity-100 transition-all">
            <FileDown width={17} height={17} />
          </button>
          <button className="p-2 bg-background rounded-full opacity-80 hover:opacity-100 transition-all">
            <MoreHorizontal width={17} height={17} />
          </button>
        </div>
      </div>
      <div className="pt-4">
        <div>
          <h4 className="text-lg pb-1">{title}</h4>
        </div>
        <div className="flex justify-between items-end">
          <span className="text-6xl">{number}</span>
          <span className=" text-green-500">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
