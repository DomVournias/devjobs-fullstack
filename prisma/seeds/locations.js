const { PrismaClient } = require("@prisma/client");

const { countries } = require("countries-list");

const prisma = new PrismaClient();

const load = async () => {
  try {
    const countryNames = Object.values(countries).map(
      (country) => country.name
    );

    const locations = countryNames.map((countryName) => ({
      name: countryName,
    }));

    await prisma.location.createMany({
      data: locations,
    });

    console.log(countryNames);
    console.log("Locations seeded successfully!");
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
