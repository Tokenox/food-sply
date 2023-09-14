"use client";
import "./globals.css";
import { Roboto_Condensed } from "next/font/google";

const roboto = Roboto_Condensed({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

import { ThirdwebProvider } from "@thirdweb-dev/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThirdwebProvider activeChain={5} clientId="43ddfb024b02c0b460b50583f25eea3f">
        <body className={roboto.className}>{children}</body>
      </ThirdwebProvider>
    </html>
  );
}
