import { useState } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import CustomCursor from "./CustomCursor";
import Footer from "./Footer";
import NavBar from "./Navbar";
import SvgAnimation from "./SvgAnimation";

const Layout = ({ children }) => {
  return (
    <ThemeProvider forcedTheme={children.theme || undefined} attribute="class">
      <div className="flex flex-col lg:content lg:container mx-auto min-h-screen dark:bg-black">
        <CustomCursor style={{ zIndex:9 }}/>
        <NavBar />
        <div className={"mainbody my-20 px-8 lg:px-0"}>{children}</div>
        <Footer className="pt-0" />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
