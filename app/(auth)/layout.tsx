import React, { ReactNode } from "react";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen justify-between min-w-full bg-background">
      <Header />
      <main>
        <section className="flex flex-col max-w-xl border rounded-xl border-border px-10 py-12 m-auto">
          {children}
        </section>
      </main>
      <Footer />
    </div>
  );
}
