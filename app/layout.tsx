import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google"; // <-- Must be imported
import { ThemeProvider } from "./provider";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/next";
// ...
// const geistMono = localFont({...});
// ...

// THIS LINE MUST BE UNCOMMENTED
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dewiana's Portofolio",
  description: "Modern & Minimalist portfolio JS Mastery Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // 🌑 default jadi dark
          enableSystem={false} // Kalau mau ikuti theme system
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
