import { z } from "zod";

export const jobSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  description: z.string().min(10, {
    message: "Job description must at least 10 characters",
  }),
  salary: z.string().optional(),
  employmentType: z.string().optional(),
  international: z.boolean().optional(),
  requirements: z.array(z.string()).optional(),
  contactEmail: z.string().email().optional(),
  chatId: z.string().optional().optional(),
  skills: z.array(z.string()).optional(),
  industry: z.string().optional(),
  position: z.string().optional(),
  employer: z.string().optional(),
  location: z.string().optional(),
  published: z.boolean().optional(),
});

export type jobSchemaType = z.infer<typeof jobSchema>;
