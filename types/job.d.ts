export type JobDetailsTypes = Prisma.JobGetPayload<{
  include: {
    skills: true;
  };
}>;
