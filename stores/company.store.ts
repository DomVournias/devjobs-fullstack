import { Company } from "@prisma/client";
import { create } from "zustand";

type CompanyStoreState = {
  test: string
  company: Company | null;
};

export const companyStore = create<CompanyStoreState>((set) => ({
  test: "",
  company: null,
}));
