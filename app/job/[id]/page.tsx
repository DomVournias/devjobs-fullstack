import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import Content from "@/components/content/Content";
import { Job } from "@prisma/client";
import { ObjectDataType } from "@/types/global";
import React from "react";
import { calculateDays } from "@/utils/dates";
import { fetchJobById } from "@/actions/job";

const page = async ({ params }: { params: { id: string } }) => {
  const job = await fetchJobById(params.id);

  // console.log("job", job);
  const daysAgo = calculateDays(job.createdAt);
  return (
    <div className="max-w-7xl m-auto flex gap-6 pt-20 pb-20 ">
      <div className="w-2/3 flex flex-col gap-6">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">{job.title}</h2>

          <div className="flex gap-3 ">
            {job.skills.map((job: ObjectDataType) => (
              <span
                key={job.id}
                className="block border border-border w-fit px-3 py-1 rounded-md text-sm"
              >
                {job.name}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center">
              <div className="mr-3">
                <Avatar className="cursor-pointer w-12 h-12">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <span className="block text-sm pb-1 text-muted-foreground">
                  Company
                </span>
                <span className="block text-base font-medium">
                  InSite Health
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-3">
                <Avatar className="cursor-pointer w-12 h-12">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <span className="block text-sm pb-1 text-muted-foreground">
                  Posted by
                </span>
                <span className="block text-base font-medium">
                  Dom Vournias
                </span>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              <span>Posted </span>
              <span>{daysAgo}</span>
            </div>
          </div>
        </div>
        <div className="border border-border rounded-lg p-8 relative">
          <Content content={job.description} />
        </div>
      </div>
      <div className="w-1/3">
        <div className="border border-border rounded-lg p-8 space-y-4">
          <div>
            <span className="text-2xl font-semibold">$40-$80</span>
            <span> / hr</span>
          </div>
          <div>
            <span>1-3 months • 10 hrs/week</span>
          </div>
          <div>Remote Position</div>
          <div className="pt-4">
            <Button className="w-full">Apply</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

// job {
//   id: 'clq8ei3dh0001epm4dhuyn4yu',
//   title: 'Remote Lead WordPress Developer for Fast Growing Pet Company',
//   description: '<p>This iis the descr</p>',
//   employmentType: null,
//   international: true,
//   remote: null,
//   requirements: [],
//   contactEmail: null,
//   companyId: 'clpke58qj0004epdclfaf4dli',
//   managerId: null,
//   typeId: 1,
//   rateId: null,
//   minSalaryId: 9,
//   maxSalaryId: 19,
//   shiftId: null,
//   positionId: 8,
//   locationId: 7,
//   timezoneId: null,
//   hoursId: null,
//   seniorityId: 4,
//   industryId: null,
//   statusId: 4,
//   published: false,
//   createdAt: 2023-12-16T18:37:54.959Z,
//   updatedAt: 2023-12-20T21:28:57.689Z
// }
