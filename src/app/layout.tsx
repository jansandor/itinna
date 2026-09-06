import type { Metadata } from "next";
import { DM_Sans, Lora, Manrope } from "next/font/google";
import "./globals.css";
import { ScrollbarActivity } from "@/components";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Itinna | Discover places worth the trip",
  description:
    "A platform for travelers and creators to share their experiences and guides.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${dmSans.variable} ${lora.variable}`}
      >
        <ScrollbarActivity />
        {children}
      </body>
    </html>
  );
}
