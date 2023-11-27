"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import React from "react";

export default function LoginButton() {
  return (
    <div>
      <Button asChild>
        <Link href="/sign-in">Login</Link>
      </Button>
    </div>
  );
}
