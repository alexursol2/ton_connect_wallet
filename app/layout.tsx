'use client'

import "./globals.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>TON Connect Demo</title>
      </head>
      <body>
        <TonConnectUIProvider manifestUrl="https://crimson-near-mink-284.mypinata.cloud/ipfs/bafkreigude6lnt6yugdxor7iboqslqku6jyf5aydnxpro4mt5f65ijb254">
          {children}
        </TonConnectUIProvider>
      </body>
    </html>
  );
}