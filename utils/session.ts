"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export const session = async () => {
  const res = await getServerSession(authOptions);
  return res;
};
