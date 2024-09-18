import { Inter } from "next/font/google";
import "./globals.css";
import FooterMenu from "./components/FooterMenu";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Story teller",
  description: "THis website eill generate personalized stories for you and your kids",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={inter.className}>
      {/* Render children (main content) */}
      <main className="min-h-screen">{children}</main>

      {/* Render the FooterMenu */}
      <FooterMenu />
    </body>
  </html>
  );
}
