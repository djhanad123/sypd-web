import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppLayout } from "@/components/AppLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sypd.org"),
  title: {
    default: "SYPD · Sustainable Development & Peace Building Initiatives",
    template: "%s | SYPD Somalia",
  },
  description: "Fostering Peace, Empowering Youth, Building Resilient Communities across Southern and Central Somalia since 2004.",
  keywords: [
    "SYPD",
    "Somalia NGO",
    "Peacebuilding Somalia",
    "Humanitarian Assistance",
    "Food Security",
    "WASH Infrastructure",
    "Mogadishu",
    "Hiraan",
    "Beledweyne",
    "Baidoa",
  ],
  authors: [{ name: "SYPD Organization", url: "https://sypd.org" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sypd.org",
    siteName: "SYPD Organization",
    title: "SYPD · Sustainable Development & Peace Building Initiatives",
    description: "Fostering Peace, Empowering Youth, Building Resilient Communities across Southern and Central Somalia since 2004.",
    images: [
      {
        url: "/images/slide-youth.png",
        width: 1200,
        height: 630,
        alt: "SYPD Community Peacebuilding & Humanitarian Operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sypdorg",
    creator: "@sypdorg",
    title: "SYPD · Sustainable Development & Peace Building Initiatives",
    description: "Fostering Peace, Empowering Youth, Building Resilient Communities across Southern and Central Somalia since 2004.",
    images: ["/images/slide-youth.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              try {
                var saved = localStorage.getItem('sypd-theme');
                if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            })();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-surface text-on-surface antialiased">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
