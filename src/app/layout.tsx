import "../styles/main.scss";

import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import Providers from "@/components/prodiver/Prodivers";

const manrope = Manrope({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const metadata: Metadata = {
  title: "Pietra",
  description:
    "Pietra — плитка, заборы и дорожки из крошки природного камня. Стиль, надежность и долговечность для вашего ландшафтного дизайна.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Providers>{children}</Providers>
        {/*<div className="main">*/}
        {/*  <Header progressLine={true} />*/}
        {/*  <main>{children}</main>*/}
        {/*  <Footer />*/}
        {/*</div>*/}
      </body>
    </html>
  );
}
