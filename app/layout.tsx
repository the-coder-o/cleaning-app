import { Montserrat, Asap } from "next/font/google";
import Header from "@/components/header/header";
import "./globals.css";
import ChatWood from "@/chat/chat";
import Footer from "@/components/footer/footer";
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
      <body className={`${montserrat.variable} ${asap.variable}`}>
        <Header />
        {children}
        <a href={"tel:(757) 272-9870"} className={"fixed bottom-24 right-8 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#79E86D] "}>
          <i className="fa-solid fa-phone fa-shake text-white"></i>
        </a>
      </body>
    </html>
  );
}
