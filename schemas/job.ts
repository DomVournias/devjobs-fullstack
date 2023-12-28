import { z } from "zod";

export const objectSchema = z.object({
  id: z.number(),
  name: z.string(),
  value: z.number().optional(),
});

export const arraySchema = z.array(objectSchema);

export const jobSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  description: z.string().min(10, {
    message: "Job description must at least 10 characters.",
  }),
  minSalary: objectSchema.refine((val) => val.id > 0, {
    message: "Minimum salary is required.",
  }),
  maxSalary: objectSchema.refine((val) => val.id > 0, {
    message: "Maximum salary is required.",
  }),
  type: objectSchema.refine((val) => val.id > 0, {
    message: "Type is required.",
  }),
  seniority: objectSchema.refine((val) => val.id > 0, {
    message: "Seniority is required.",
  }),
  worldwide: z.boolean(),
  skills: arraySchema.refine((val) => val.length > 0, {
    message: "You must select at least one skill.",
  }),
  position: objectSchema.refine((val) => val.id > 0, {
    message: "Position is required.",
  }),
  location: objectSchema.refine((val) => val.id > 0, {
    message: "Minimum salary is required.",
  }),
  employmentType: z.string().optional(),
  requirements: objectSchema.optional(),
  contactEmail: z.string().email().optional(),
  chatId: z.string().optional(),
  employer: z.string().optional(),
  published: z.boolean().optional(),
});

export type objectSchemaType = z.infer<typeof objectSchema>;
export type jobSchemaType = z.infer<typeof jobSchema>;
