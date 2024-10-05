import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const lineSeedSans = localFont({
  src: [
      {
          path: "./fonts/LINESeedSansTH_W_Th.woff2",
          weight: "100",
          style: "normal",
      },
      {
          path: "./fonts/LINESeedSansTH_W_Rg.woff2",
          weight: "400",
          style: "normal",
      },
      {
          path: "./fonts/LINESeedSansTH_W_Bd.woff2",
          weight: "700",
          style: "normal",
      },
      {
          path: "./fonts/LINESeedSansTH_W_XBd.woff2",
          weight: "800",
          style: "normal",
      },
      {
          path: "./fonts/LINESeedSansTH_W_He.woff2",
          weight: "900",
          style: "normal",
      },
  ]
});

export const metadata: Metadata = {
  title: "This website is currently under development.",
  description: "A website is currently under development where you can contact the service provider through non-website channels.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${lineSeedSans.className} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
