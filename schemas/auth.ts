import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z.string().min(1, "Email is required").email("Invalid email"),
    confirmPassword: z.string().min(1, "Password confirmation is required"),
    role: z.string(),
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().min(1, "Last Name is required"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must have at least 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords don't match",
  });

export type signUpSchemaType = z.infer<typeof signUpSchema>;

export const signInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have at least 8 characters"),
});

export type signInSchemaType = z.infer<typeof signInSchema>;
