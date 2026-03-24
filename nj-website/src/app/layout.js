import { Inter, Merriweather, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import ScrollNavigator from "@/Components/ScrollNavigator";
import CursorTrail from "@/Components/CursorTrail";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

const oswald = Oswald({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata = {
  title: "Ninja Junction",
  description: "Ninja Junction is a tech community which collaborates with companies and govt. agencies for tech and research projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${merriweather.variable} ${oswald.variable} antialiased font-sans`}
      >
        <Toaster position="top-right" />
        <CursorTrail />
        <Navbar />
        <ScrollNavigator>
          {/* <PageTransition> */}
          {children}
          {/* </PageTransition> */}
        </ScrollNavigator>
      </body>
    </html>
  );
}
