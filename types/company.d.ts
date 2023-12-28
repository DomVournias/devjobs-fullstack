export type CompanyWithJobs = Prisma.CompanyGetPayload<{
  include: {
    jobs: {
      include: {
        applicants: true;
      };
    };
  };
}>;

export type Jobs = Prisma.JobGetPayload<{
  select: {
    jobs: {
      include: {
        applicants: true;
        status: true;
      };
    };
  };
}>;

export type JobsTableTypes = Prisma.JobGetPayload<{
  select: {
    jobs: {
      select: {
        title: true;
        applicants: true;
        status: true;
        createdAt: true;
      };
      orderBy: {
        createdAt: "desc";
      };
    };
  };
}>;

export type ProfileSidebarTypes = Prisma.CompanyGetPayload<{
  select: {
    name: true;
    tagline: true;
    industry: true;
    location: true;
    twitter: true;
    facebook: true;
    instagram: true;
    linkedin: true;
    size: true;
  };
}>;

export type LimitedProfileJobs = Prisma.CompanyGetPayload<{
  select: {
    jobs: {
      select: {
        title: true;
        location: true;
        minSalary: true;
        maxSalary: true;
      };
      orderBy: {
        createdAt: "desc";
      };
    };
  };
}>;
