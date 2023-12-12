import "./globals.css";
import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Toaster } from "@/components/ui/toaster";
import { constant } from "./constant";
import Whatsapp from "@/components/Whatsapp";
import { GoogleTagManager } from "@next/third-parties/google";

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
  creator: "Md Shamim Hossain",
  icons: [
    { rel: "icon", url: "/logo.png" },
    { rel: "apple-touch-icon", url: "/logo.png" },
  ],
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
};

// viewport
export const viewport: Viewport = {
  width: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090B" },
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <meta
          name="google-site-verification"
          content="7H40hIgx1qvuJZ_9n-jZ9Fvg-HPJbOeVmv7kjM4fYZc"
        /> */}
      </head>
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
          <Whatsapp />
          <Footer />
        </ThemeProvider>
      </body>
      {/* <GoogleTagManager
        gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID!}
      /> */}
    </html>
  );
}
