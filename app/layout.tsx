import { Metadata } from "next";

import React, { ReactNode } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { NavBar } from "./components/NavBar";
import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";
import { ScrollToTop } from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Lucas Bordignon",
  description: "Designer with focus on beautiful experiences.",
  openGraph: {
    title: "Lucas Bordignon",
    description: "Designer with focus on beautiful experiences.",
    url: "https://www.bordignon.co/",
    siteName: "Lucas Bordignon",
    images: [
      {
        url: "https://www.bordignon.co/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Bordignon",
    description: "Designer with focus on beautiful experiences.",
    images: ["https://www.bordignon.co/og-image.jpg"],
  },
};

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
      <body className="flex flex-col max-w-[544px] min-h-dvh m-auto text-base text-primary bg-background overflow-x-hidden sm:px-5">
        <Header />
        <NavBar />
        <ScrollToTop />
        <main>
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
