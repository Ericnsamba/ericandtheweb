import { useState } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import Footer from "./Footer";
import NavBar from "./Navigation/Navbar";

const Layout = ({ children }) => {
  return (
    <ThemeProvider
      forcedTheme={children.theme || undefined}
      attribute="className"
    >
      <NavBar />
      <div className="bg-red-300 flex flex-auto">
        <div className="flex-auto">{children}</div>
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
