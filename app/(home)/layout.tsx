import React, { ReactNode } from "react";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
