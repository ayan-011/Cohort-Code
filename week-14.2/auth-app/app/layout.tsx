import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simple Auth App",
  description: "A simple signup/signin system built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="page">{children}</div>
      </body>
    </html>
  );
}
