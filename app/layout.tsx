import React from "react";
import Topbar from "./components/Topbar";

import "./globals.css";

export const metadata = {
  title: "Volvo",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className="bodyOverwrite">
        <main>
          <Topbar />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
