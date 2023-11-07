import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Toaster } from "@/components/ui/toaster";
import { constant } from "./constant";

// font
const font = DM_Sans({
  subsets: ["latin"],
});

// constants
const { website_name, website_url, title, description } = constant;

// metadata for SEO
export const metadata: Metadata = {
  title: title,
  description: description,
  applicationName: website_name,
  authors: [{ name: "Md Shamim Hossain" }],
  abstract: description,
  alternates: { canonical: website_url },
  colorScheme: "light dark",
  creator: "Md Shamim Hossain",
  icons: [{ rel: "icon", url: website_url + "/logo.png" }],
  keywords: [
    "web developer",
    "front end developer",
    "back end developer",
    "react developer",
    "next.js developer",
    "mern stack developer",
    "javascript developer",
    "node.js developer",
    "mongodb",
    "postgress",
    "typescript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "redux",
    "docker",
    "git",
    "github",
    "sanity",
    "strapi",
    "CMS",
    "WordPress",
  ],
  metadataBase: new URL(website_url),
  openGraph: {
    type: "website",
    url: website_url,
    title: title,
    description: description,
    siteName: website_name,
    images: [
      {
        url: website_url + "/logo-full.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    site: website_url,
    creator: "MD Shamim Hossain",
    images: website_url + "/logo-full.png",
  },
  publisher: "MD Shamim Hossain",
  referrer: "origin",
  robots: { index: true, follow: true },
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className={"container px-5 md:px-10"}>{children}</main>
          <Toaster />
          {/* <Messanger /> */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
