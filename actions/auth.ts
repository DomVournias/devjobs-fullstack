"use server";

import {
  createUserByRole,
  existsByEmailAndUsername,
  findUserByEmail,
  findUserByUsername,
} from "./roles";
import {
  signUpCompanySchemaType,
  signUpDeveloperSchemaType,
} from "@/schemas/auth";

import { hash } from "bcrypt";

export async function SignUp(
  data: signUpDeveloperSchemaType | signUpCompanySchemaType
) {
  try {
    const userRole = data.role;

    // check if email already exists
    const userExistsByEmail = await findUserByEmail("both", data.email);

    if (userExistsByEmail) {
      return {
        user: null,
        message: `Email is already in use by another ${userRole}`,
        status: 409,
      };
    }

    const userExistsByUsername = await findUserByUsername(
      userRole,
      data.username
    );

    if (userExistsByUsername) {
      return {
        user: null,
        message: `Username is already in use by another ${userRole}`,
        status: 409,
      };
    }

    // Initialize userData
    let userData;

    if (userRole === "developer") {
      const { role, email, username, password, firstName, lastName } =
        data as signUpDeveloperSchemaType;

      const hashedPassword = await hash(password, 10);

      userData = {
        email,
        role,
        firstName,
        lastName,
        username,
        password: hashedPassword,
        profileCompletion: 0,
      };
    } else if (userRole === "company") {
      const { role, email, username, password, name } =
        data as signUpCompanySchemaType;

      const hashedPassword = await hash(password, 10);

      userData = {
        email,
        role,
        username,
        password: hashedPassword,
        name,
      };
    } else {
      // Handle other roles if necessary
      return {
        message: "Invalid user role",
        status: 400,
      };
    }

    const newUser = await createUserByRole(userRole, userData);

    return newUser;
  } catch (error) {
    return {
      message: "Something went wrong!",
      status: 500,
    };
  }
}
