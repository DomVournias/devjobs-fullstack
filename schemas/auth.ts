import { z } from "zod";

//?::: Sign up schema
const signUpBaseSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  username: z
    .string()
    .min(1, "Username is required")
    .min(1, "Username is too short"),
  confirmPassword: z.string().min(1, "Password confirmation is required"),
  role: z.string(),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have at least 8 characters"),
});

export type signUpBaseSchemaType = z.infer<typeof signUpBaseSchema>;

//?::: Developer Sign Up Schema
export const signUpDeveloperSchema = signUpBaseSchema
  .extend({
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().min(1, "Last Name is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords don't match",
  });

export type signUpDeveloperSchemaType = z.infer<typeof signUpDeveloperSchema>;

//?::: Company Sign Up Schema
export const signUpCompanySchema = signUpBaseSchema
  .extend({
    name: z.string().min(1, "Company Name is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords don't match",
  });

export type signUpCompanySchemaType = z.infer<typeof signUpCompanySchema>;

//?::: Union type for sign up data
export type signUpData =
  | signUpDeveloperSchemaType
  | signUpCompanySchemaType
  | signUpBaseSchemaType;

//?::: Sign in schema
export const signInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have at least 8 characters"),
});

export type signInSchemaType = z.infer<typeof signInSchema>;
