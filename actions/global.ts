"use server";

import prisma from "@/lib/prisma";

export async function GetAllRecords() {
  try {
    const locations = await prisma.location.findMany();
    const industries = await prisma.industry.findMany();
    const positions = await prisma.position.findMany();

    const data = {
      locations,
      industries,
      positions,
    };

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function GetLocations() {
  try {
    const data = await prisma.location.findMany();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function GetIndustries() {
  try {
    const data = await prisma.industry.findMany();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function GetPositions() {
  try {
    const data = await prisma.position.findMany();
    return data;
  } catch (error) {
    console.log(error);
  }
}
