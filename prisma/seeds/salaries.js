const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const salaries = [
  { name: "USD 0 per year", value: 0 },
  { name: "USD 5K per year", value: 5 },
  { name: "USD 10K per year", value: 10 },
  { name: "USD 15K per year", value: 15 },
  { name: "USD 20K per year", value: 20 },
  { name: "USD 25K per year", value: 25 },
  { name: "USD 30K per year", value: 30 },
  { name: "USD 35K per year", value: 35 },
  { name: "USD 40K per year", value: 40 },
  { name: "USD 45K per year", value: 45 },
  { name: "USD 50K per year", value: 50 },
  { name: "USD 55K per year", value: 55 },
  { name: "USD 60K per year", value: 60 },
  { name: "USD 65K per year", value: 65 },
  { name: "USD 70K per year", value: 70 },
  { name: "USD 75K per year", value: 75 },
  { name: "USD 80K per year", value: 80 },
  { name: "USD 85K per year", value: 85 },
  { name: "USD 90K per year", value: 90 },
  { name: "USD 95K per year", value: 95 },
  { name: "USD 100K per year", value: 100 },
  { name: "USD 105K per year", value: 105 },
  { name: "USD 110K per year", value: 110 },
  { name: "USD 115K per year", value: 115 },
  { name: "USD 120K per year", value: 120 },
  { name: "USD 125K per year", value: 125 },
  { name: "USD 130K per year", value: 130 },
  { name: "USD 135K per year", value: 135 },
  { name: "USD 140K per year", value: 140 },
  { name: "USD 145K per year", value: 145 },
  { name: "USD 150K per year", value: 150 },
  { name: "USD 160K per year", value: 160 },
  { name: "USD 170K per year", value: 170 },
  { name: "USD 180K per year", value: 180 },
  { name: "USD 190K per year", value: 190 },
  { name: "USD 200K per year", value: 200 },
  { name: "USD 210K per year", value: 210 },
  { name: "USD 220K per year", value: 220 },
  { name: "USD 230K per year", value: 230 },
  { name: "USD 240K per year", value: 240 },
  { name: "USD 250K per year", value: 250 },
  { name: "USD 260K per year", value: 260 },
  { name: "USD 270K per year", value: 270 },
  { name: "USD 280K per year", value: 280 },
  { name: "USD 290K per year", value: 290 },
  { name: "USD 300K per year", value: 300 },
  { name: "USD 310K per year", value: 310 },
  { name: "USD 320K per year", value: 320 },
  { name: "USD 330K per year", value: 330 },
  { name: "USD 340K per year", value: 340 },
  { name: "USD 350K per year", value: 350 },
];

const seedSalaries = async () => {
  //! NOTE change the prisma.minSalary to max or min
  try {
    for (const salary of salaries) {
      await prisma.maxSalary.create({
        data: salary,
      });
    }

    console.log("Salaries seeded successfully!");
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
};

seedSalaries();
