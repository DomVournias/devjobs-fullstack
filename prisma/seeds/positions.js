const { PrismaClient, Prisma } = require("@prisma/client");

const prisma = new PrismaClient();

const positions = [
  "Software Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Mobile App Developer",
  "Game Developer",
  "Web Developer",
  "Database Administrator",
  "System Administrator",
  "Network Administrator",
  "DevOps Engineer",
  "Cloud Architect",
  "Data Scientist",
  "Business Intelligence Analyst",
  "Machine Learning Engineer",
  "AI Engineer",
  "Quality Assurance Engineer",
  "IT Project Manager",
  "Product Manager",
  "UI/UX Designer",
  "Graphic Designer",
  "Technical Writer",
  "IT Consultant",
  "Systems Analyst",
  "Network Engineer",
  "Network Security Engineer",
  "Security Analyst",
  "Ethical Hacker",
  "IT Support Specialist",
  "Technical Support Specialist",
  "Help Desk Technician",
  "IT Recruiter",
  "IT Sales Representative",
  "IT Manager",
  "Chief Technology Officer (CTO)",
  "Chief Information Officer (CIO)",
  "Cybersecurity Analyst",
  "Cybersecurity Engineer",
  "Incident Responder",
  "Security Operations Center (SOC) Analyst",
  "Security Consultant",
  "Forensic Computer Analyst",
  "IT Auditor",
  "Systems Administrator",
  "ERP Administrator",
  "Network Security Administrator",
  "Desktop Support Technician",
  "IT Compliance Manager",
  "IT Risk Analyst",
  "Data Analyst",
  "Systems Engineer",
  "IT Trainer",
  "Computer Systems Analyst",
  "Hardware Engineer",
  "IT Asset Manager",
  "IT Procurement Specialist",
  "Scrum Master",
  "Agile Coach",
  "Blockchain Developer",
  "Smart Contract Developer",
];

const load = async () => {
  try {
    // Deduplicate the positions array
    const uniquePositions = [...new Set(positions)];

    // Check for existing positions in the database
    const existingPositions = await prisma.position.findMany({
      where: {
        name: { in: uniquePositions },
      },
      select: {
        name: true,
      },
    });

    const existingPositionNames = existingPositions.map((p) => p.name);

    // Filter out positions that already exist
    const newPositions = uniquePositions
      .filter((position) => !existingPositionNames.includes(position))
      .map((position) => ({ name: position }));

    console.log("Existing positions:", existingPositionNames);
    console.log("New positions to be created:", newPositions);

    if (newPositions.length > 0) {
      // Create new positions
      await prisma.position.createMany({
        data: newPositions,
      });
      console.log("New positions created successfully!");
    } else {
      console.log("No new positions to create.");
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
