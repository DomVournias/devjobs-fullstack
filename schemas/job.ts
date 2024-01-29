import { z } from "zod";

export const objectSchema = z.object({
  id: z.number(),
  name: z.string(),
  value: z.number().optional(),
  range: z.string().optional(),
});

export const arraySchema = z.array(objectSchema);

export const rateSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.string().optional(),
  fixed: z.number().optional(),
  from: z.number().optional(),
  to: z.number().optional(),
});

export const jobSchema = z
  .object({
    title: z.string().min(5, {
      message: "Title must be at least 5 characters.",
    }),
    description: z.string().min(10, {
      message: "Job description must at least 10 characters.",
    }),
    minSalary: objectSchema.optional(),
    maxSalary: objectSchema.optional(),
    rate: rateSchema.optional(),
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
      message: "Location is required.",
    }),
    budget: objectSchema.refine((val) => val.id > 0, {
      message: "You must select budget type.",
    }),
    hours: objectSchema.optional(),
    availability: objectSchema.optional(),
    employmentType: z.string().optional(),
    requirements: objectSchema.optional(),
    contactEmail: z.string().email().optional(),
    chatId: z.string().optional(),
    employer: z.string().optional(),
    published: z.boolean().optional(),
  })
  .superRefine(({ type, minSalary, maxSalary }, refinementContext) => {
    if (minSalary && minSalary.id === 0 && (type.id === 1 || type.id === 2)) {
      return refinementContext.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Minimum salary is required.",
        path: ["minSalary"],
      });
    }
    if (maxSalary && maxSalary.id === 0 && (type.id === 1 || type.id === 2)) {
      return refinementContext.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Maximum salary is required.",
        path: ["maxSalary"],
      });
    }
    if (
      minSalary &&
      maxSalary &&
      minSalary.value !== undefined &&
      maxSalary.value !== undefined
    ) {
      if (minSalary.value > maxSalary.value) {
        return refinementContext.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Maximum salary must be higher than the minimum salary.",
          path: ["maxSalary"],
        });
      }
    }
  });

export type objectSchemaType = z.infer<typeof objectSchema>;
export type jobSchemaType = z.infer<typeof jobSchema>;
