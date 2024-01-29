import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { LimitedProfileJobsTypes } from "@/types/company";
import Link from "next/link";
import ProfileSidebar from "@/components/sidebars/profile/CompanyProfileSidebar";
import React from "react";
import { fetchLimitedProfileJobs } from "@/actions/company";

interface CompanyProfileProps {
  id: string;
}

const CompanyProfile = async ({ id }: CompanyProfileProps) => {
  const data = await fetchLimitedProfileJobs(id);

  console.log(data);

  return (
    <div className="flex gap-40 ">
      <div className="w-2/3 space-y-20">
        <div className="space-y-8">
          <h3 className="text-xl font-semibold">About</h3>
          <p className="text-sm text-muted-foreground leading-6">
           {"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal  distribution of letters, as opposed to using 'Content here, content here',"}
          </p>
        </div>
        <div className="space-y-10">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Jobs</h3>
            <Button variant="ghost" className="text-xs font-medium">
              View all
            </Button>
          </div>
          <div>
            <ul className="flex flex-col gap-4">
              {data.jobs.map((job: LimitedProfileJobsTypes) => (
                <li
                  key={job.title}
                  className="hover:bg-accent  mx-[-2rem] rounded-3xl"
                >
                  <Link
                    href={`/job/${job.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center h-full w-full py-5 px-8"
                  >
                    <div className="block text-ellipsis overflow-hidden w-[80%]">
                      <h4 className="block text-sm pb-1 truncate ">
                        {job.title}
                      </h4>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <p>{job.remote ? "Worldwide" : job.location.name}</p>
                        <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
                        {job.minSalary && (
                          <p>
                            ${job.minSalary.value}k - ${job.maxSalary.value}k
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <Button variant="ghost" size="icon">
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-1/3 space-y-20">
        <div className="space-y-10">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Posts</h3>
            <Button variant="ghost" className="text-xs font-medium">
              View all
            </Button>
          </div>
          <div></div>
        </div>
        <div className="space-y-10">
          <h3 className="text-xl font-semibold">Founders</h3>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
