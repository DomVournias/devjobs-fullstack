import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProfileSidebarTypes } from "@/types/company";
import React from "react";
import { fetchProfileSidebarData } from "@/actions/company";

interface CompanyProfileSidebarProps {
  id: string;
}

const CompanyProfileSidebar = async ({ id }: CompanyProfileSidebarProps) => {
  const data = await fetchProfileSidebarData(id);

  // console.log(data);

  return (
    <aside className="h-[calc(100vh-4rem)] sticky border-border border-b border-r max-w-screen-sm w-[480px] px-[7.5rem] py-[3.5rem] bg-muted flex flex-col gap-16 items-center">
      <div className="flex flex-col items-center gap-8">
        <Avatar className="w-20 h-20">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h3 className="text-center text-2xl font-semibold">{data.name}</h3>
        {data.tagline && (
          <p className="text-center text-md text-muted-foreground">
            {data.tagline}
          </p>
        )}
        <div className="flex">
          <div className="pr-3 text-sm">
            <span className="inline pr-1 font-semibold ">3</span>
            <p className="inline">jobs</p>
          </div>
          <div className="pr-3 text-sm">
            <span className="inline pr-1 font-semibold">25</span>
            <p className="inline">followers</p>
          </div>
          <div className="text-sm">
            <span className="inline pr-1 font-semibold">320</span>
            <p className="inline">following</p>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        {data.twitter && (
          <Button
            variant="outline"
            size="icon"
            className="bg-muted-foreground/20 text-muted-foreground"
            asChild
          >
            <Link href={data.twitter}>
              <Twitter className="w-6 h-6" />
            </Link>
          </Button>
        )}

        {data.facebook && (
          <Button
            variant="outline"
            size="icon"
            className="bg-muted-foreground/20 text-muted-foreground"
            asChild
          >
            <Link href={data.facebook}>
              <Facebook className="w-6 h-6" />
            </Link>
          </Button>
        )}
        {data.instagram && (
          <Button
            variant="outline"
            size="icon"
            className="bg-muted-foreground/20 text-muted-foreground"
            asChild
          >
            <Link href={data.instagram}>
              <Instagram className="w-6 h-6" />
            </Link>
          </Button>
        )}
        {data.linkedin && (
          <Button
            variant="outline"
            size="icon"
            className="bg-muted-foreground/20 text-muted-foreground"
            asChild
          >
            <Link href={data.linkedin}>
              <Linkedin className="w-6 h-6" />
            </Link>
          </Button>
        )}
      </div>
      <div>
        {data.industry && (
          <div className="mb-4 text-center">
            <span className="text-sm text-muted-foreground ">Industry</span>
            <p className="text-sm pt-1">{data.industry.name}</p>
          </div>
        )}
        {data.location && (
          <div className="mb-4 text-center">
            <span className="text-sm text-muted-foreground ">Location</span>
            <p className="text-sm pt-1">{data.location.name}</p>
          </div>
        )}

        {data.size && (
          <div className="mb-4 text-center">
            <span className="text-sm text-muted-foreground ">Company size</span>
            <p className="text-sm pt-1">{data.size.name} employees</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default CompanyProfileSidebar;
