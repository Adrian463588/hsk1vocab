import type { Metadata } from "next";
import { Noto_Serif_SC, Outfit } from "next/font/google";
import "./globals.css";
import { VocabularyProvider } from "@/context/VocabularyContext";
import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/atoms/ScrollProgress";
import BackToTop from "@/components/atoms/BackToTop";

const notoSerifSC = Noto_Serif_SC({
  variable: "--font-noto-serif-sc",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HSK 1 Vocabulary Master",
  description: "Master HSK 1 Chinese vocabulary with interactive flashcards and study tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${notoSerifSC.variable} ${outfit.variable} antialiased`}
        suppressHydrationWarning
      >
        <VocabularyProvider>
          <Navigation />
          <ScrollProgress />
          {children}
          <BackToTop />
        </VocabularyProvider>
      </body>
    </html>
  );
}
