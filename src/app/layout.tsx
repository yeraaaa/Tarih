import "./globals.css";
import { Poppins } from "next/font/google";
import { Metadata } from "next";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Tarih",
  description: "Website about Kazakhstan History",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className={poppins.className}>
        <head />
        <body>
          <Header />
          <div>{children}</div>
        </body>
      </html>
    </>
  );
}
