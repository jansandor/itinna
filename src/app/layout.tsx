import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Itinna",
  description:
    "A platform for travelers and creators to share their experiences and guides.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
