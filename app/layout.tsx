import type { Metadata } from "next";
import { Montserrat, Asap } from "next/font/google";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

import "./globals.css";
import ChatWood from "@/chat/chat";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const asap = Asap({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-asap",
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <title>Hello World</title>
        <ChatWood />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={`${montserrat.variable} ${asap.variable} `}>
        <Header />
        {children}
        <Footer />
        <a href={"tel:(804) 852-8030"} className={"fixed bottom-24 right-8 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#9BCC11] "}>
          <i className="fa-solid fa-phone fa-shake text-white"></i>
        </a>
      </body>
    </html>
  );
}
