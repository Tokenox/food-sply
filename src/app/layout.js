import "./globals.css";
import { Roboto_Condensed } from "next/font/google";

const roboto = Roboto_Condensed({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Food Sply",
  description: "Food Sply is a food delivery service.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
