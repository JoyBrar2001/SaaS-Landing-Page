import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "One Task at a Time",
  description: "Created using next.js, tailwind CSS, framer motion",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          "antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
