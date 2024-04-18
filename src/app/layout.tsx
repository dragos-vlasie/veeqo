import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Veeqo",
  description: "Interview task",
  openGraph: {
    title: "Veeqo task",
    description: "Social media description",
    images: [
      {
        url: "/assets/featured-image-1.png",
        width: 800,
        height: 600,
        alt: "Featured Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
