import type { Metadata } from "next";
import "./globals.css";
import { jost } from "@/assets/fonts";
import Header from "@/components/Header";

export const metadata: Metadata = {
   title: "Home",
   description: "Byttex test task",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={`antialiased ${jost.className}`}
         >
            <Header />
            {children}
         </body>
      </html>
   );
}
