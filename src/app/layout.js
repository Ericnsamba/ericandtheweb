import "./globals.css";

import ClientLayout from "@/client-layout";
import { fontVariables } from "@/lib/fonts";

import { ViewTransitions } from "next-view-transitions";

export const metadata = {
  title: "Eric Manasse — Product Designer | Design Engineer",
  description: "Creative Studio MWT Website Template — ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontVariables}>
        <ViewTransitions>
          <ClientLayout>{children}</ClientLayout>
        </ViewTransitions>
      </body>
    </html>
  );
}
