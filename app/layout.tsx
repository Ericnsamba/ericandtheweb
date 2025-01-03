// "use client";
// import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Head from "@/components/Head";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";

// const inter = Inter({ subsets: ["latin"] });

const PPNeueMontreal = localFont({
  src: [
    {
      path: "./fonts/PPNeueMontreal-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PPNeueMontreal-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/PPNeueMontreal-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head />
      <body className={`${PPNeueMontreal.className} bg-black`}>
        <main className="w-full">
          <Menu />
          {children}

          <div className="hidden lg:block">
          <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
