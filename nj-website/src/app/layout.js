import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import ScrollNavigator from "@/Components/ScrollNavigator";
import PageTransition from "@/Components/PageTransition";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ninja Junction",
  description: "Ninja Junction is a tech community which collaborates with companies and govt. agencies for tech and research projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Navbar/>
          <ScrollNavigator>
            {/* <PageTransition> */}
              {children}
            {/* </PageTransition> */}
          </ScrollNavigator>
      </body>
    </html>
  );
}
