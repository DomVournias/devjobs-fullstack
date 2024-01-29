"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Overview",
    url: "",
    icon: false,
  },
  {
    name: "People",
    url: "/people",
    icon: false,
  },
  {
    name: "Jobs",
    url: "/jobs",
    icon: true,
  },
];

const CompanyProfileNav = ({ username }: { username: string }) => {
  const pathname = usePathname();

  return (
    <div className="border-b border-border px-8 h-[5rem] sticky">
      <div className="flex justify-between items-center m-auto h-full">
        <nav className="h-full">
          <ul className="flex h-full gap-10">
            {navLinks.map((item) => {
              const isActive = pathname === `/${username}${item.url}`;

              return (
                <li key={item.name} className="relative flex items-center">
                  <Link
                    href={`/${username}${item.url}`}
                    className={`flex items-center px-8 text-sm h-full  ${
                      isActive
                        ? "text-primary/90 font-bold"
                        : "text-muted-foreground font-medium hover:text-primary/70"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {isActive && (
                    <span className="absolute bottom-[-0.30rem] left-1/2 translate-x-[-50%] w-2 h-2 bg-foreground rounded-full" />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex justify-end items-center gap-4 pr-8">
          <Button variant="ghost" className="text-sm ">
            Share
          </Button>
          <Button className="text-sm font-bold ">Follow</Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfileNav;
