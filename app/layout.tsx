import { Geist, Geist_Mono, Manrope } from "next/font/google";
import localFont from "next/font/local"; // 1. Import this
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Custom-Components/Navbar";

// Google Fonts
const manropeHeading = Manrope({ subsets: ['latin'], variable: '--font-heading' });
const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });
const fontMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

// 2. Local Bangla Font
const shadhinataFont = localFont({
  src: "../public/fonts/Shadhinata2.ttf", 
  variable: "--font-shadhinata",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        shadhinataFont.variable,
        fontMono.variable,
        geist.variable,
        manropeHeading.variable
      )}
    >
      <body className="w-full mx-auto max-w-7xl font-shadhinata font-sans">
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}