import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Etsy Competitor Price Tracker",
  description: "Track Etsy competitor pricing automatically and get optimal pricing strategies for your shop."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="30b06c08-0dd3-4329-92bb-ddd176fd1292"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
