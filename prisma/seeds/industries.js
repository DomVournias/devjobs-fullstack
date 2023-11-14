const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const industries = [
  "Aerospace",
  "Agriculture, Forestry, Fishing",
  "Automotive",
  "Banking",
  "Biotechnology",
  "Chemical",
  "Construction",
  "Consulting",
  "Consumer Goods",
  "Defense",
  "Education",
  "Energy",
  "Engineering",
  "Entertainment",
  "Environmental",
  "Fashion",
  "Finance",
  "Food and Beverage",
  "Government",
  "Healthcare",
  "Hospitality",
  "Insurance",
  "Information Technology",
  "Legal",
  "Manufacturing",
  "Media",
  "Mining",
  "Non-profit",
  "Pharmaceutical",
  "Real Estate",
  "Retail",
  "Telecommunications",
  "Transportation",
  "Utilities",
  "Accounting",
  "Advertising",
  "Agricultural Services",
  "Airline",
  "Apparel",
  "Architecture",
  "Automotive Sales and Services",
  "Beverages",
  "Biomedical",
  "Broadcasting",
  "Building Materials",
  "Chemical Engineering",
  "Civil Engineering",
  "Computer Hardware",
  "Computer Software",
  "Computer Networking",
  "Computer Services",
  "Computer Systems Design",
  "Consumer Electronics",
  "Defense Contracting",
  "Dentistry",
  "Electrical Engineering",
  "Electronic Components",
  "Employment Services",
  "Environmental Engineering",
  "Facilities Services",
  "Financial Services",
  "Fisheries",
  "Fitness",
  "Floriculture",
  "Food Services",
  "Footwear",
  "Furniture",
  "Gambling",
  "Gardening",
  "Genetics",
  "Geology",
  "Graphic Design",
  "Health and Wellness",
  "Health Insurance",
  "Home Improvement",
  "Human Resources",
  "Information Services",
  "Information Technology Management",
  "Insurance Brokerage",
  "Internet Services",
  "Investment Banking",
  "Jewelry",
  "Journalism",
  "Landscaping",
  "Law Enforcement",
  "Leisure",
  "Logistics",
  "Machinery",
  "Management Consulting",
  "Maritime",
  "Marketing and Advertising",
  "Medical Devices",
  "Medical Practice",
  "Metallurgy",
  "Meteorology",
  "Military",
  "Mining and Metals",
  "Museums and Institutions",
  "Music",
  "Nanotechnology",
  "Navigation",
  "Newspapers",
  "Nursing",
  "Nutrition",
  "Oil and Energy",
  "Packaging",
  "Paint",
  "Pharmaceuticals",
  "Photography",
  "Plastics",
  "Political Organization",
  "Printing",
  "Public Relations",
  "Publishing",
  "Real Estate Development",
  "Recreational",
  "Religious Institutions",
  "Renewable Energy",
  "Research",
  "Restaurants",
  "Retail and Fashion",
  "Robotics",
  "Security and Investigations",
  "Semiconductors",
  "Shipbuilding",
  "Sporting Goods",
  "Sports",
  "Staffing and Recruiting",
  "Supermarkets",
  "Telecommunications Equipment",
  "Television",
  "Textiles",
  "Tobacco",
  "Translation",
  "Transportation Services",
  "Utilities",
  "Venture Capital",
  "Veterinary",
  "Warehousing",
  "Waste Management",
  "Water",
  "Wine and Spirits",
  "Wireless",
  "Writing and Editing",
];

const load = async () => {
  try {
    const uniqueIndustries = [...new Set(industries)];

    // Check for existing industries in the database
    const existingIndustries = await prisma.position.findMany({
      where: {
        name: { in: uniqueIndustries },
      },
      select: {
        name: true,
      },
    });

    const existingIndustryNames = existingIndustries.map((p) => p.name);

    // Filter out industries that already exist
    const newIndustries = uniqueIndustries
      .filter((industry) => !existingIndustryNames.includes(industry))
      .map((industry) => ({ name: industry }));

    console.log("Existing industries:", existingIndustryNames);
    console.log("New industries to be created:", newIndustries);

    if (newIndustries.length > 0) {
      // Create new industries
      await prisma.industry.createMany({
        data: newIndustries,
      });
      console.log("New industries created successfully!");
    } else {
      console.log("No new industries to create.");
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
