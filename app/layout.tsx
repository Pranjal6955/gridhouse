import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gridhouse",
  description: "A minimalist, interactive 3x3 grid game,",
  icons: {
    icon: "/gridhouse.png",
    shortcut: "/gridhouse.png",
    apple: "/gridhouse.png",
  },
  openGraph: {
    images: ["/gridhouse.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
