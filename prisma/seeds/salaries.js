const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const salaries = [
  { name: "NotSpecified", min: 0, max: 0 },
  { name: "Lowest", min: 12000, max: 35000 },
  { name: "EntryLevel", min: 35000, max: 55000 },
  { name: "Junior", min: 55000, max: 75000 },
  { name: "MidLevel", min: 75000, max: 90000 },
  { name: "Senior", min: 90000, max: 120000 },
  { name: "Lead", min: 65000, max: 75000 },
  { name: "Director", min: 100000, max: 119999 },
  { name: "Executive", min: 120000, max: 149999 },
  { name: "Highest", min: 150000, max: 250000 },
];

const load = async () => {
  try {
    // Deduplicate the salaries array
    const uniqueSalaries = [...new Set(salaries)];

    // Check for existing salaries in the database
    const existingSalaries = await prisma.salary.findMany({
      where: {
        name: {
          in: uniqueSalaries.map((salary) => salary.name),
        },
      },
      select: {
        name: true,
      },
    });

    const existingSalaryNames = existingSalaries.map((p) => p.name);

    // Filter out salaries that already exist
    const newSalaries = uniqueSalaries
      .filter((salary) => !existingSalaryNames.includes(salary.name))
      .map((salary) => ({
        name: salary.name,
        min: salary.min,
        max: salary.max,
      }));

    console.log("Existing salaries:", existingSalaryNames);
    console.log("New salaries to be created:", newSalaries);

    if (newSalaries.length > 0) {
      // Create new salaries
      await prisma.salary.createMany({
        data: newSalaries,
      });
      console.log("New salaries created successfully!");
    } else {
      console.log("No new salaries to create.");
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
