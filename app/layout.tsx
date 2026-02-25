import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Citroën — La gamme qui vous ressemble",
  description: "Découvrez la Citroën C3, C5 et C4 Aircross. Une gamme pour tous les usages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
