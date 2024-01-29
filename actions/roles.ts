import type { Company, Developer, Prisma } from "@prisma/client";

import { companyStore } from "@/stores/company.store";
import prisma from "@/lib/prisma";

export const getUserById = async (
  userRole: string,
  userId: string
): Promise<Developer | Company | null> => {
  switch (userRole) {
    case "developer":
      const developer = await prisma.developer.findUnique({
        where: { id: userId },
      });
      return developer;
    case "company":
      const companyData = await prisma.company.findUnique({
        where: { id: userId },
      });

      return companyData;
    default:
      return null;
  }
};

export const findUserByEmail = async (userRole: string, userEmail: string) => {
  switch (userRole) {
    case "developer":
      return await prisma.developer.findUnique({
        where: { email: userEmail },
      });

    case "company":
      return await prisma.company.findUnique({
        where: { email: userEmail },
      });
    case "both":
      const developer = await prisma.developer.findUnique({
        where: { email: userEmail },
      });
      const company = await prisma.company.findUnique({
        where: { email: userEmail },
      });
      return developer || company;

    default:
      return {
        user: null,
        message: "Invalid user role!",
        status: 404,
      };
  }
};

export const fetchUserIdByUsername = async (userUsername: string) => {
  const developer = await prisma.developer.findUnique({
    where: { username: userUsername },
    select: {
      id: true,
    },
  });

  const company = await prisma.company.findUnique({
    where: { username: userUsername },
    select: {
      id: true,
    },
  });

  return { developer, company };
};

export const fetchUserByUsername = async (userUsername: string) => {
  const developer = await prisma.developer.findUnique({
    where: { username: userUsername },
  });

  const company = await prisma.company.findUnique({
    where: { username: userUsername },
  });

  return { developer, company };
};

export const findUserByUsername = async (
  userRole: string,
  userUsername: string
) => {
  switch (userRole) {
    case "developer":
      return await prisma.developer.findUnique({
        where: { username: userUsername },
      });
    case "company":
      return await prisma.company.findUnique({
        where: { username: userUsername },
      });
    case "both":
      const developer = await prisma.developer.findUnique({
        where: { username: userUsername },
      });
      const company = await prisma.company.findUnique({
        where: { username: userUsername },
      });
      return developer || company;
    default:
      return {
        message: "Invalid user role!",
        status: 408,
      };
  }
};

export const existsByEmailAndUsername = async (
  type: string,
  userEmail: string,
  userUsername: string
) => {
  if (type === "email") {
    return await findUserByEmail("both", userEmail);
  } else if (type === "username") {
    return await findUserByUsername("both", userUsername);
  } else {
    return {
      message: "Invalid user type!",
      status: 404,
    };
  }
};

export const createUserByRole = async (role: string, userData: any) => {
  let newUser;

  if (role === "developer") {
    newUser = await prisma.developer.create({
      data: userData,
    });
  } else if (role === "company") {
    newUser = await prisma.company.create({
      data: userData,
    });
  } else {
    return {
      message: "Error creating user!",
      status: 500,
    };
  }

  const { password: newUserPassword, ...rest } = newUser;

  return {
    user: rest,
    message: "Successful registration!",
    status: 201,
  };
};
