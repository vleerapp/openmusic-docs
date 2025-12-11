import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import DefaultSearchDialog from "../components/search";

const inter = Inter({
  subsets: ["latin"],
});

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
