import React, { ReactNode } from "react";

import { Button } from "../ui/button";
import { FaLinkedinIn } from "react-icons/fa";

export default function LinkedInButton({ children }: { children: ReactNode }) {
  const handleLinkedInSignIn = () => {
    console.log("LinkedIn Sign in");
  };
  return (
    <Button onClick={handleLinkedInSignIn} className="w-full">
      <FaLinkedinIn />
      <span className="ml-3">{children}</span>
    </Button>
  );
}
