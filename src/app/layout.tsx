import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import DefaultSearchDialog from "../components/search";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://docs.vleer.app");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <Script
          src="https://rybbit.pandadev.net/api/script.js"
          data-site-id="688967913b1a"
          defer
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          theme={{ forcedTheme: "dark" }}
          search={{ SearchDialog: DefaultSearchDialog }}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
