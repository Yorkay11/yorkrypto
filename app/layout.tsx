import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/smallComponents/Navbar";
import { ThemeProvider } from "@/components/smallComponents/themeProvider";
import SearchBar from "@/components/smallComponents/SearchBar";
import CryptoBanner from "@/components/smallComponents/CryptoBanner";



// const satoshiSans = localFont({
//   src: "./fonts/Satoshi-Variable.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const satoshiMono = localFont({
//   src: "./fonts/Satoshi-Regular.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const satoshiLight = localFont({
  src: "./fonts/Satoshi-Light.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "YorKrypto",
  description: "Yorkrypto for manage your ethereum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshiLight} text-gray-900 dark:text-white w-[100vw] overflow-x-hidden `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <SearchBar />
          <CryptoBanner />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
