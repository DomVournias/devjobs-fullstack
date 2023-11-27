import React, { ReactNode } from "react";

import { Button } from "../ui/button";
import { FaGoogle } from "react-icons/fa";

export default function GoogleButton({ children }: { children: ReactNode }) {
  const handleGoogleSignIn = () => {
    console.log("Google Sign in");
  };
  return (
    <Button onClick={handleGoogleSignIn} className="w-full m-0">
      <FaGoogle />
      <span className="ml-3">{children}</span>
    </Button>
  );
}
