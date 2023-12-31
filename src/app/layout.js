import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Void Academy",
  description:
    "At The Void Academy, we empower all learners to thrive in your Ecosystem. Explore transformative subjects and unlock limitless learning possibilities.",icons: {
      icon: '/favicon.ico',
    },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
