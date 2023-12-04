import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

const jobs = [
  {
    id: "1",
    title: "Software Engineer",
    author: "Company A",
    date: "2023-12-15",
    applicants: "23",
    status: "Open",
  },
  {
    id: "2",
    title: "Data Scientist",
    author: "Company B",
    date: "2023-12-16",
    applicants: "250",
    status: "Open",
  },
  {
    id: "3",
    title: "Product Manager",
    author: "Company C",
    date: "2023-12-17",
    applicants: "1200",
    status: "Open",
  },
  {
    id: "4",
    title: "UX/UI Designer",
    author: "Company D",
    date: "2023-12-18",
    applicants: "3",
    status: "Closed",
  },
  {
    id: "5",
    title: "Front-end Developer",
    author: "Company E",
    date: "2023-12-19",
    applicants: "15",
    status: "Open",
  },
  {
    id: "6",
    title: "Marketing Specialist",
    author: "Company F",
    date: "2023-12-20",
    applicants: "23",
    status: "Closed",
  },
  {
    id: "7",
    title: "Financial Analyst",
    author: "Company G",
    date: "2023-12-21",
    applicants: "299",
    status: "Closed",
  },
];

const JobsTable = () => {
  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] px-0">Job Title</TableHead>
          <TableHead className="text-center px-0">Posted By</TableHead>
          <TableHead className="text-center px-0">Date</TableHead>
          <TableHead className="text-center px-0">Applicants</TableHead>
          <TableHead className="text-right px-0">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {jobs.map((job) => (
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
                <span>Kyriakos V.</span>
              </div>
            </TableCell>
            <TableCell className="text-center w-2/12 px-0">
              {job.date}
            </TableCell>
            <TableCell className="text-center w-2/12 px-0">
              {job.applicants}
            </TableCell>
            <TableCell className="text-right w-1/12 px-0">
              <Badge variant="outline">{job.status}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default JobsTable;
