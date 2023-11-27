"use server";

import { Prisma } from "@prisma/client";
import { hash } from "bcrypt";
import prisma from "@/lib/prisma";
import { signUpSchemaType } from "@/schemas/auth";

export async function SignUp(data: signUpSchemaType) {
  try {
    // check if email already exists
    const existingUserByEmail = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUserByEmail) {
      return {
        user: null,
        message: "Email is already in use by another user",
        status: 409,
      };
    }

    const { role, email, password, firstName, lastName } = data;

    const hashedPassword = await hash(password, 10);

    let username;

    const usernameByEmail = `@${email.split("@")[0]}`;

    const existingUserByUsername = await prisma.user.findUnique({
      where: { username: usernameByEmail },
    });

    if (existingUserByUsername) {
      // If the username already exists, add an incrementing number
      let counter = 1;
      while (true) {
        const incrementedUsername = `${usernameByEmail}${counter}`;
        const userWithIncrementedUsername = await prisma.user.findUnique({
          where: {
            username: incrementedUsername,
          },
        });

        if (!userWithIncrementedUsername) {
          // Found a unique incremented username
          username = incrementedUsername;
          break;
        }

        counter++;
      }
    } else {
      // If the username doesn't exist, use the original username
      username = usernameByEmail;
    }

    const newUser = await prisma.user.create({
      data: {
        email,
        role,
        firstName,
        lastName,
        username,
        password: hashedPassword,
      },
    });

    const { password: newUserPassword, ...rest } = newUser;

    return {
      user: rest,
      message: "Successful registration!",
      status: 201,
    };
  } catch (error) {
    return {
      message: "Something went wrong!",
      status: 500,
    };
  }
}
