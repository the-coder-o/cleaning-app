import { Montserrat, Asap } from "next/font/google";
import Header from "@/components/header/header";
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
      </head>
      <body className={`${montserrat.variable} ${asap.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
