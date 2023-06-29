import "./globals.scss";
import { Poppins } from "next/font/google";

const font = Poppins({ subsets: ["latin"], weight: "300" });

export const metadata = {
  title: "Furniro",
  description: "E-commerce Furniture Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
