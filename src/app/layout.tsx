import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import BeyondNav from "@/components/beyond/BeyondNav";
import BeyondFooter from "@/components/beyond/BeyondFooter";
import ScrollProvider from "@/components/beyond/ScrollProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Beyond — AI-Native Agency & Technology Partner",
  description:
    "Beyond delivers frontline AI products at accelerated speeds. We exist to disrupt legacy consultancies and traditional SaaS with AI-native solutions.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Beyond — AI-Native Agency & Technology Partner",
    description:
      "Beyond delivers frontline AI products at accelerated speeds. We exist to disrupt legacy consultancies and traditional SaaS with AI-native solutions.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ScrollProvider>
          <BeyondNav />
          <main className="bg-beyond-surface text-beyond-on-surface min-h-screen">
            {children}
          </main>
          <BeyondFooter />
        </ScrollProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
