import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const NextProgress = dynamic(() => import("@/components/shared/NextProgress"), {
  ssr: false,
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shikshya ",
  description:
    "Shikshya is an AI-powered school management system designed to streamline administrative tasks and enhance the learning experience for students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextProgress />
        {children}
      </body>
    </html>
  );
}
