import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Jobs, JobsTableTypes } from "@/types/company";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { fetchJobsTable } from "@/actions/company";
import { fetchUser } from "@/actions/user";
import { formatDate } from "@/utils/dates";

const JobsTable = async () => {
  //TODO: INSTEAD OF COMPANY DETAILS ATTACH PUBLISHER / AUTHOR ID TO JOB
  const { company } = await fetchUser();
  const { jobs } = await fetchJobsTable();

  // console.log("JOBSTABLE", jobs);

  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] px-0">Job Title</TableHead>
          <TableHead className="text-center px-0">Managed By</TableHead>
          <TableHead className="text-center px-0">Date</TableHead>
          <TableHead className="text-center px-0">Applicants</TableHead>
          <TableHead className="text-right px-0">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {jobs.map((job: any) => (
          <TableRow key={job.id}>
            <TableCell className="font-medium w-4/12 px-0">
              {job.title}
            </TableCell>
            <TableCell className="text-center w-3/12 px-0">
              <div className="flex items-center justify-center gap-2">
                <Avatar className="w-6 h-6">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span>{company.name}</span>
              </div>
            </TableCell>
            <TableCell className="text-center w-2/12 px-0">
              {formatDate(job.createdAt)}
            </TableCell>
            <TableCell className="text-center w-2/12 px-0">
              {job.applicants.length}
            </TableCell>
            <TableCell className="text-right w-1/12 px-0">
              <Badge variant="outline">{job?.status?.name}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default JobsTable;
