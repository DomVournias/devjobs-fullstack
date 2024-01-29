import React, { ReactNode } from "react";

import Footer from "@/components/footer/Footer";
import Header from "@/components/navigation/headers/Header";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    //TODO: Create a footer for the actual background like github
    <>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default layout;
