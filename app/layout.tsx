import React, { ReactNode } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { NavBar } from "./components/NavBar";
import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";
import { ScrollToTop } from "./components/ScrollToTop";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta name="pinterest" content="nopin" />
        <title>Lucas Bordignon</title>
        <link rel="icon" href="/assets/images/profile.png" type="image/png" />
      </head>
      <body className="flex flex-col max-w-[544px] min-h-screen m-auto text-base text-primary bg-background overflow-x-hidden sm:px-5">
        <ThemeProvider>
          <Header />
          <NavBar />
          <ScrollToTop />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
