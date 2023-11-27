import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={"/"}>
      <span className="text-xl font-bold">DevJobs</span>
    </Link>
  );
}

export default Logo;
