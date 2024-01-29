"use client";

import React, { useEffect } from "react";

export default function ClientBody() {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return <div></div>;
}
