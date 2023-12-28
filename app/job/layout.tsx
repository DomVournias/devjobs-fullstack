import React, { ReactNode } from "react";

import Footer from "@/components/footer/Footer";
import Header from "@/components/navigation/headers/Header";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default layout;
