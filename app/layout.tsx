import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
