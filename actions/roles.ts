import type { Company, Developer } from "@prisma/client";

import { companyStore } from "@/stores/company.store";
import prisma from "@/lib/prisma";

export const getUserById = async (userRole: string, userId: string) => {
  switch (userRole) {
    case "developer":
      const developer = await prisma.developer.findUnique({
        where: { id: userId },
      });
      return developer as Developer;
    case "company":
      const companyData = (await prisma.company.findUnique({
        where: { id: userId },
      })) as Company;

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

export const findUserByUsername = async (
  userRole: string,
  userPassword: string
) => {
  switch (userRole) {
    case "developer":
      return await prisma.developer.findUnique({
        where: { username: userPassword },
      });
    case "company":
      return await prisma.company.findUnique({
        where: { username: userPassword },
      });
    case "both":
      const developer = await prisma.developer.findUnique({
        where: { username: userPassword },
      });
      const company = await prisma.company.findUnique({
        where: { username: userPassword },
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
