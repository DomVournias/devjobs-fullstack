"use client";

import React, { useState } from "react";

import { BsPersonWorkspace } from "react-icons/bs";
import { FaPersonChalkboard } from "react-icons/fa6";
import Image from "next/image";
import { useAuthStore } from "@/stores/auth";
import useStore from "@/hooks/useStore";

export default function RolePicker() {
  const signUpRole = useStore(useAuthStore, (state) => state.signUpRole);
  const setSignUpRole = useStore(useAuthStore, (state) => state.setSignUpRole);

  const handleSignUpRole = (role: string) => {
    if (setSignUpRole) {
      setSignUpRole(role);
    }
    console.log("signUpRole", signUpRole);
  };

  console.log(signUpRole);

  return (
    <div>
      <h2 className=" text-center font-normal text-3xl pb-6">
        Join as an employer or a developer
      </h2>
      <fieldset className="flex gap-6">
        <button onClick={() => handleSignUpRole("employer")}>
          <FaPersonChalkboard />
          <h4>{"I'm an employer, hiring a developer"}</h4>
        </button>

        <button onClick={() => handleSignUpRole("developer")}>
          <BsPersonWorkspace />
          <h4>{"I'm a developer, looking for a job"}</h4>
        </button>
      </fieldset>
    </div>
  );
}
